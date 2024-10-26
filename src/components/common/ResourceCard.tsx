import React from 'react';
import { Link } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  url: string;
  type: string;
  useCase: string;
  onRemove?: () => void;
}

export default function ResourceCard({ title, url, type, useCase, onRemove }: ResourceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center space-x-2">
          {onRemove && (
            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-red-500"
            >
              <span className="sr-only">Remove</span>
              ×
            </button>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            <Link size={20} />
          </a>
        </div>
      </div>
      <div className="mt-2 flex items-center space-x-4">
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
          {type}
        </span>
        <span className="text-sm text-gray-500">
          For: {useCase}
        </span>
      </div>
    </div>
  );
}