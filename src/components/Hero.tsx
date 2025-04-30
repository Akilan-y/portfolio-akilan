import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    const subtitleElement = subtitleRef.current;
    const scrollElement = scrollRef.current;
    
    if (textElement && subtitleElement && scrollElement) {
      // Animate the elements
      textElement.style.opacity = '0';
      subtitleElement.style.opacity = '0';
      scrollElement.style.opacity = '0';
      
      setTimeout(() => {
        textElement.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitleElement.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        subtitleElement.style.opacity = '1';
        subtitleElement.style.transform = 'translateY(0)';
      }, 800);
      
      setTimeout(() => {
        scrollElement.style.transition = 'opacity 1.2s ease';
        scrollElement.style.opacity = '1';
      }, 1500);
    }
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-7xl font-bold mb-6 transform translate-y-8 opacity-0 text-gray-900 dark:text-white"
          style={{ fontVariationSettings: '"wght" 700, "opsz" 32' }}
        >
          Creating motion that 
          <span className="text-blue-600 dark:text-blue-400"> moves people</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 transform translate-y-8 opacity-0 max-w-2xl mx-auto"
        >
          Motion Designer crafting engaging digital experiences through animation, interaction, and visual storytelling
        </p>
        
        <div 
          ref={scrollRef}
          className="opacity-0 mt-16 cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <p className="mb-2 text-sm">View my work</p>
            <ArrowDown className="animate-bounce" size={24} />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </section>
  );
};

export default Hero;