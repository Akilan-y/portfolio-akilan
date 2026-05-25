import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "AuraLens Showcase",
    description: "An immersive digital photography archive built in Framer featuring scroll-linked parallax animations, fluid interactions, and dynamic media grid systems.",
    image: "framer-portfolio.png",
    category: "UI & UX Design",
    tags: ["Framer", "Interaction", "Visual Design"],
    link: "https://akilan-portfolio.framer.website"
  },
  {
    id: 2,
    title: "Chandrayaan-3 Tribute",
    description: "A commemorative cinematic video production honoring ISRO's historic lunar triumph, designed for Project Director P. Veeramuthuvel. Integrates custom editing techniques and advanced post-production visual effects.",
    image: "chandrayaan.png",
    category: "Cinematic Editing",
    tags: ["Premiere Pro", "Post Production", "Sound Design"],
    link: "https://drive.google.com/file/d/1q6uiwlqp8YgMUu71ivJO5G5ZTro1hCgj/view?usp=sharing"
  },
  {
    id: 3,
    title: "KK Boutique Brand Identity",
    description: "A complete digital brand identity design featuring high-converting promotional assets, social media campaigns, and bespoke print material layouts.",
    image: "boutique-show.png",
    category: "Brand & Graphic",
    tags: ["Canva Pro", "PicsArt", "Visual Branding"],
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
    const timer = setTimeout(() => {
      setFilteredProjects(filtered);
      setAnimateCards(true);
    }, 200);
    return () => clearTimeout(timer);
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
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-white">
          Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Creations</span>
        </h2>
        
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                  : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10 hover:border-white/10'
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