import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      className={`group relative glass-panel glass-panel-hover rounded-2xl overflow-hidden transition-all duration-700 transform ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'all'
      }}
    >
      {/* Visual Header */}
      <div className="relative overflow-hidden aspect-video border-b border-white/5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>
        
        {/* Project Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Interactive Action Button */}
        <div className="flex justify-between items-center border-t border-white/5 pt-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-fuchsia-400 font-semibold text-sm tracking-wider uppercase transition-colors group/link"
          >
            Launch Project 
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;