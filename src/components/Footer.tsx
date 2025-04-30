import React from 'react';
import { Github as GitHub, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Akilan</h3>
            <p className="text-gray-600 dark:text-gray-400">Creating motion like Ocean Waves</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://x.com/AKILY2005"
              target = "_blank"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/akilan_y/"
              target='_blank'
              className="text-gray-500 hover:text-red -600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/Akilan-y"
              target = "_blank"
              className="text-gray-500 hover:text-black-600 dark:text-gray-400 dark:hover:text-black-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/akilan-y"
              target = "_blank"
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin  size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;