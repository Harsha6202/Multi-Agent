import React, { useState } from 'react';
import { Search, BookOpen, Database, FileCheck, ArrowRight } from 'lucide-react';
import ResearchAgent from './components/ResearchAgent';
import UseCaseGenerator from './components/UseCaseGenerator';
import ResourceCollector from './components/ResourceCollector';
import FinalProposal from './components/FinalProposal';
import Header from './components/Header';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [companyData, setCompanyData] = useState({
    name: '',
    industry: '',
    offerings: [],
    useCases: [],
    resources: []
  });

  const steps = [
    { icon: Search, title: 'Industry Research', component: ResearchAgent },
    { icon: BookOpen, title: 'Use Case Generation', component: UseCaseGenerator },
    { icon: Database, title: 'Resource Collection', component: ResourceCollector },
    { icon: FileCheck, title: 'Final Proposal', component: FinalProposal }
  ];

  const handleNext = (data) => {
    setCompanyData(prev => ({ ...prev, ...data }));
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full 
                ${index <= activeStep ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                <step.icon size={24} />
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="mx-4 text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Active Component */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {React.createElement(steps[activeStep].component, {
            data: companyData,
            onNext: handleNext
          })}
        </div>
      </main>
    </div>
  );
}

export default App;