import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-pink-600 dark:text-pink-400"
            >
              portfolio<span className="text-pink-950 dark:text-pink-200">.design</span>
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Janet Garcia. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for creative designers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
