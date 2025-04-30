import React, { useState, useEffect, useRef } from 'react';
import { Eye, Code, Play } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Framer-portfolio",
    description: " Created a photography portfolio in framer as i love photography.",
    image: "https://github.com/user-attachments/assets/d9570c0d-5dc1-4ae1-a04c-eb75e3a3901d",
    category: "Motion Design",
    tags: ["Framer"],
    link: "https://akilan-portfolio.framer.website"
  },
  {
    id: 2,
    title: "Chandrayaan 3",
    description: "A video to celebrate success of Chandrayaan 3 and to welcome sir P.Veeramuthuvel(Project Director).",
    image: "https://github.com/user-attachments/assets/92347475-29b1-4efd-a285-2d69ecf271a2",
    category: "Video",
    tags: ["Adobe Premiere Pro", "Capcut"],
    link: "https://drive.google.com/file/d/1q6uiwlqp8YgMUu71ivJO5G5ZTro1hCgj/view?usp=sharing"
  },
  {
    id: 3,
    title: "KK boutique",
    description: "Designed posters for kk boutique shop",
    image: "https://github.com/user-attachments/assets/b65a26aa-d5ea-47eb-b23b-e340b3aef95e",
    category: "Social Media",
    tags: ["Canva", "Picsart"],
    link: "pictures-projects/Boutique.png"
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  useEffect(() => {
    const filtered = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    setAnimateCards(false);
    setTimeout(() => {
      setFilteredProjects(filtered);
      setAnimateCards(true);
    }, 300);
  }, [activeFilter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
         <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              animate={animateCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;