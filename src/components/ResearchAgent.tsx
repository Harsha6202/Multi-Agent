import React, { useState } from 'react';
import { Search } from 'lucide-react';
import IndustrySelect from './common/IndustrySelect';
import { validateCompanyInfo } from '../utils/validation';

export default function ResearchAgent({ onNext }) {
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    industry: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCompanyInfo(companyInfo);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    onNext(companyInfo);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Search className="w-8 h-8 text-indigo-600" />
        <h2 className="text-xl font-semibold">Industry Research</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 
              ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            value={companyInfo.name}
            onChange={(e) => setCompanyInfo(prev => ({ ...prev, name: e.target.value }))}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <IndustrySelect
            value={companyInfo.industry}
            onChange={(value) => setCompanyInfo(prev => ({ ...prev, industry: value }))}
            className={errors.industry ? 'border-red-500' : ''}
          />
          {errors.industry && (
            <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Description
          </label>
          <textarea
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 
              ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            rows={4}
            value={companyInfo.description}
            onChange={(e) => setCompanyInfo(prev => ({ ...prev, description: e.target.value }))}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Generate Research
        </button>
      </form>
    </div>
  );
}