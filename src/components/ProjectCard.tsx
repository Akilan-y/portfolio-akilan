import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  animate: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, animate }) => {
  const delay = index * 0.1;
  
  return (
    <div 
      className={`group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'all'
      }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600/80 text-white rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href = {project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline transition-all flex items-center gap-1"
          >
            View Project<ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;