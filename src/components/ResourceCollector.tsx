import React, { useState } from 'react';
import { Database, Link as LinkIcon, Plus } from 'lucide-react';

export default function ResourceCollector({ data, onNext }) {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({
    title: '',
    url: '',
    type: '',
    useCase: ''
  });

  const addResource = () => {
    if (newResource.title && newResource.url) {
      setResources([...resources, { ...newResource, id: Date.now() }]);
      setNewResource({ title: '', url: '', type: '', useCase: '' });
    }
  };

  const handleSubmit = () => {
    onNext({ resources });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Database className="w-8 h-8 text-indigo-600" />
        <h2 className="text-xl font-semibold">Resource Collection</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Resource Title"
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={newResource.title}
            onChange={(e) => setNewResource(prev => ({ ...prev, title: e.target.value }))}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={newResource.type}
            onChange={(e) => setNewResource(prev => ({ ...prev, type: e.target.value }))}
          >
            <option value="">Resource Type</option>
            <option value="dataset">Dataset</option>
            <option value="model">AI Model</option>
            <option value="paper">Research Paper</option>
            <option value="tool">Tool/Framework</option>
          </select>
        </div>

        <input
          type="url"
          placeholder="Resource URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={newResource.url}
          onChange={(e) => setNewResource(prev => ({ ...prev, url: e.target.value }))}
        />

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={newResource.useCase}
          onChange={(e) => setNewResource(prev => ({ ...prev, useCase: e.target.value }))}
        >
          <option value="">Related Use Case</option>
          {data.useCases.map(uc => (
            <option key={uc.id} value={uc.title}>{uc.title}</option>
          ))}
        </select>

        <button
          onClick={addResource}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus size={20} />
          <span>Add Resource</span>
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{resource.title}</h4>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                <LinkIcon size={20} />
              </a>
            </div>
            <div className="mt-2 flex items-center space-x-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                {resource.type}
              </span>
              <span className="text-sm text-gray-500">
                For: {resource.useCase}
              </span>
            </div>
          </div>
        ))}
      </div>

      {resources.length > 0 && (
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Generate Final Proposal
        </button>
      )}
    </div>
  );
}