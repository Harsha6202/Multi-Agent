import React from 'react';
import { X } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  description: string;
  category: string;
  impact: string;
  onRemove?: () => void;
}

export default function UseCaseCard({ title, description, category, impact, onRemove }: UseCaseCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 relative">
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
        >
          <X size={20} />
        </button>
      )}
      <h4 className="font-medium text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-2 flex items-center space-x-4">
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
          {category}
        </span>
        <span className="text-sm text-gray-500">Impact: {impact}</span>
      </div>
    </div>
  );
}