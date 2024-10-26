import React from 'react';
import { Link } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  url: string;
  type: string;
  useCase: string;
}

interface FinalProposalProps {
  data: {
    name: string;
    industry: string;
    useCases: Array<{
      id: number;
      title: string;
      description: string;
      impact: string;
      category: string;
    }>;
    resources: Resource[];
  };
  onNext: (data: any) => void;
}

export default function FinalProposal({ data }: FinalProposalProps) {
  const resourcesByUseCase = data.resources.reduce((acc, resource) => {
    if (!acc[resource.useCase]) {
      acc[resource.useCase] = [];
    }
    acc[resource.useCase].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Final AI Implementation Proposal</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Company: {data.name}</p>
          <p className="text-gray-600">Industry: {data.industry}</p>
        </div>
      </div>

      <div className="space-y-8">
        {data.useCases.map((useCase) => (
          <div key={useCase.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
            <p className="text-gray-600 mb-4">{useCase.description}</p>
            
            <div className="bg-indigo-50 p-4 rounded-md mb-4">
              <h4 className="font-medium mb-2">Business Impact</h4>
              <p className="text-gray-700">{useCase.impact}</p>
            </div>

            {resourcesByUseCase[useCase.title]?.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Related Resources</h4>
                <ul className="space-y-2">
                  {resourcesByUseCase[useCase.title].map((resource) => (
                    <li key={resource.id} className="flex items-center space-x-2">
                      <Link size={16} className="text-indigo-600" />
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        {resource.title}
                      </a>
                      <span className="text-sm text-gray-500">({resource.type})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}