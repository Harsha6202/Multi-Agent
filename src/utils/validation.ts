interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateCompanyInfo = (data: {
  name: string;
  industry: string;
  description: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = 'Company name is required';
  }

  if (!data.industry) {
    errors.industry = 'Please select an industry';
  }

  if (!data.description.trim()) {
    errors.description = 'Company description is required';
  } else if (data.description.length < 50) {
    errors.description = 'Description should be at least 50 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateUseCase = (data: {
  title: string;
  description: string;
  impact: string;
  category: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!data.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!data.category) {
    errors.category = 'Please select a category';
  }

  if (!data.impact.trim()) {
    errors.impact = 'Business impact is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateResource = (data: {
  title: string;
  url: string;
  type: string;
  useCase: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!data.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!data.url.trim()) {
    errors.url = 'URL is required';
  } else {
    try {
      new URL(data.url);
    } catch {
      errors.url = 'Please enter a valid URL';
    }
  }

  if (!data.type) {
    errors.type = 'Please select a resource type';
  }

  if (!data.useCase) {
    errors.useCase = 'Please select a related use case';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};