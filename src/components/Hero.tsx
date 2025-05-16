import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-pink-950"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h5 className="text-pink-600 dark:text-pink-400 font-medium mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Hello, I'm
          </h5>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Janet Garcia
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Graphic Designer & Visual Artist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
            I create thoughtful visual identities, digital experiences, and print designs that connect emotionally with audiences. With a focus on color theory and minimalist principles, my work aims to communicate clearly while engaging deeply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" aria-label="Scroll down" className="text-gray-400 hover:text-pink-500 dark:text-gray-500 dark:hover:text-pink-400 transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
