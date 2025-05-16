import React, { useState } from 'react';
import { processData } from '../data/processData';

const Process: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="process" className="py-20 bg-pink-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Design Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my creative journey, from initial concepts to final execution.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200 dark:border-gray-700">
          {processData.map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 border-b-2 font-medium text-sm md:text-base transition-colors duration-300 ${
                activeTab === index
                  ? 'border-pink-600 text-pink-600 dark:border-pink-400 dark:text-pink-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {processData[activeTab].title}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              {processData[activeTab].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processData[activeTab].items.map((item, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;