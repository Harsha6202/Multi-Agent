import React, { useState } from 'react';
import { BookOpen, Plus, X } from 'lucide-react';

export default function UseCaseGenerator({ data, onNext }) {
  const [useCases, setUseCases] = useState([]);
  const [newUseCase, setNewUseCase] = useState({
    title: '',
    description: '',
    impact: '',
    category: ''
  });

  const addUseCase = () => {
    if (newUseCase.title && newUseCase.description) {
      setUseCases([...useCases, { ...newUseCase, id: Date.now() }]);
      setNewUseCase({ title: '', description: '', impact: '', category: '' });
    }
  };

  const removeUseCase = (id) => {
    setUseCases(useCases.filter(uc => uc.id !== id));
  };

  const handleSubmit = () => {
    onNext({ useCases });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <BookOpen className="w-8 h-8 text-indigo-600" />
        <h2 className="text-xl font-semibold">Use Case Generator</h2>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium mb-4">Company Context</h3>
        <p className="text-gray-600">Industry: {data.industry}</p>
        <p className="text-gray-600">Company: {data.name}</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Use Case Title"
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={newUseCase.title}
            onChange={(e) => setNewUseCase(prev => ({ ...prev, title: e.target.value }))}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={newUseCase.category}
            onChange={(e) => setNewUseCase(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="">Select Category</option>
            <option value="operations">Operations</option>
            <option value="customer">Customer Experience</option>
            <option value="automation">Automation</option>
            <option value="analytics">Analytics</option>
          </select>
        </div>

        <textarea
          placeholder="Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          rows={3}
          value={newUseCase.description}
          onChange={(e) => setNewUseCase(prev => ({ ...prev, description: e.target.value }))}
        />

        <input
          type="text"
          placeholder="Business Impact"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={newUseCase.impact}
          onChange={(e) => setNewUseCase(prev => ({ ...prev, impact: e.target.value }))}
        />

        <button
          onClick={addUseCase}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus size={20} />
          <span>Add Use Case</span>
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {useCases.map(useCase => (
          <div key={useCase.id} className="bg-white border border-gray-200 rounded-lg p-4 relative">
            <button
              onClick={() => removeUseCase(useCase.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h4 className="font-medium text-lg">{useCase.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{useCase.description}</p>
            <div className="mt-2 flex items-center space-x-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                {useCase.category}
              </span>
              <span className="text-sm text-gray-500">Impact: {useCase.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {useCases.length > 0 && (
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Continue to Resource Collection
        </button>
      )}
    </div>
  );
}