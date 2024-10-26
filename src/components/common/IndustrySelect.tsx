import React from 'react';

const industries = [
  { value: 'automotive', label: 'Automotive', resources: ['McKinsey Auto Report', 'Deloitte Future of Mobility'] },
  { value: 'manufacturing', label: 'Manufacturing', resources: ['Industry 4.0 Insights', 'Smart Factory Solutions'] },
  { value: 'finance', label: 'Finance', resources: ['FinTech AI Trends', 'Banking Innovation Report'] },
  { value: 'retail', label: 'Retail', resources: ['Retail Tech Vision', 'E-commerce AI Solutions'] },
  { value: 'healthcare', label: 'Healthcare', resources: ['Digital Health Trends', 'Medical AI Applications'] },
  { value: 'technology', label: 'Technology', resources: ['Tech AI Adoption', 'Digital Transformation Guide'] }
];

interface IndustrySelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function IndustrySelect({ value, onChange, className = '' }: IndustrySelectProps) {
  return (
    <select
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select Industry</option>
      {industries.map((industry) => (
        <option key={industry.value} value={industry.value}>
          {industry.label}
        </option>
      ))}
    </select>
  );
}

export { industries };