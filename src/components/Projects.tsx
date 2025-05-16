import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent design work spanning brand identity, packaging, and digital media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="text-white px-4 py-2 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.category}</p>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closeModal}>
          <div 
            className="bg-white dark:bg-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={projectsData[selectedProject].image} 
                alt={projectsData[selectedProject].title}
                className="w-full aspect-video object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {projectsData[selectedProject].title}
                  </h3>
                  <p className="text-pink-600 dark:text-pink-400">
                    {projectsData[selectedProject].category}
                  </p>
                </div>
                {projectsData[selectedProject].link && (
                  <a 
                    href={projectsData[selectedProject].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <span>Visit Project</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {projectsData[selectedProject].description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectsData[selectedProject].tools?.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {projectsData[selectedProject].additionalImages && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Additional Images
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {projectsData[selectedProject].additionalImages.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${projectsData[selectedProject].title} - ${idx + 1}`}
                        className="rounded-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;