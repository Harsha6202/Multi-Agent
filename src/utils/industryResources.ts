interface IndustryResource {
  title: string;
  url: string;
  type: string;
}

const industryResources: Record<string, IndustryResource[]> = {
  automotive: [
    {
      title: 'McKinsey: AI in Automotive',
      url: 'https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/ai-in-automotive',
      type: 'report'
    },
    {
      title: 'Automotive Dataset',
      url: 'https://www.kaggle.com/datasets/tsiaras/automotive-dataset',
      type: 'dataset'
    }
  ],
  manufacturing: [
    {
      title: 'Industry 4.0 Dataset',
      url: 'https://www.kaggle.com/datasets/industry4/industry-40-dataset',
      type: 'dataset'
    },
    {
      title: 'Manufacturing AI Use Cases',
      url: 'https://www.deloitte.com/manufacturing/ai-use-cases',
      type: 'report'
    }
  ],
  // Add more industries and resources
};

export const getIndustryResources = (industry: string): IndustryResource[] => {
  return industryResources[industry] || [];
};

export const suggestResources = (industry: string, useCase: string): IndustryResource[] => {
  const resources = getIndustryResources(industry);
  // Add logic to filter/sort resources based on use case relevance
  return resources;
};