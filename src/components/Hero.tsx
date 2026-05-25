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
      textElement.style.opacity = '0';
      textElement.style.transform = 'translateY(24px)';
      subtitleElement.style.opacity = '0';
      subtitleElement.style.transform = 'translateY(20px)';
      scrollElement.style.opacity = '0';
      
      setTimeout(() => {
        textElement.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitleElement.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        subtitleElement.style.opacity = '1';
        subtitleElement.style.transform = 'translateY(0)';
      }, 700);
      
      setTimeout(() => {
        scrollElement.style.transition = 'opacity 1s ease';
        scrollElement.style.opacity = '1';
      }, 1300);
    }
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-transparent">
      {/* Decorative Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight opacity-0 leading-[1.1] font-display text-white"
        >
          Sculpting 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"> Visuals</span>
          <br className="hidden md:inline" />
          {' '}Engineering <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Emotion</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-2xl text-slate-300 mb-14 opacity-0 max-w-3xl mx-auto leading-relaxed font-sans font-light"
        >
          Video Editor & Visual Designer crafting immersive digital narratives through high-fidelity post-production, cinematic story edits, and modern branding campaigns.
        </p>
        
        <div 
          ref={scrollRef}
          className="opacity-0 cursor-pointer inline-block"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center text-slate-400 hover:text-indigo-400 transition-colors duration-300 group">
            <span className="glass-button px-5 py-3 rounded-full text-sm font-medium tracking-wider flex items-center gap-2 mb-4 hover:shadow-lg">
              Explore Work <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;