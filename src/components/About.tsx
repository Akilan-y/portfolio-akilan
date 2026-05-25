import React, { useEffect, useRef } from 'react';
import { Award, FileCode, PenTool, Zap, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section?.classList.remove('opacity-0');
          section?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = skills?.querySelectorAll('.skill-item');
          items?.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove('opacity-0');
              item.classList.add('animate-skill-in');
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (section) sectionObserver.observe(section);
    if (skills) skillsObserver.observe(skills);
    
    return () => {
      if (section) sectionObserver.unobserve(section);
      if (skills) skillsObserver.unobserve(skills);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-transparent opacity-0 transition-all duration-1000 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio & Education Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
              Behind the <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Creative</span>
            </h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed font-light text-lg">
              I'm Akilan Y, a forward-thinking Video Editor and Visual Designer specializing in turning complex ideas into high-fidelity cinematic narratives. By blending technical precision, editing fluidity, and raw creative passion, I engineer digital experiences that captivate.
            </p>
            
            <p className="text-slate-400 mb-12 leading-relaxed font-light text-base">
              Having completed my B.Tech in Artificial Intelligence and Data Science from KIT-Coimbatore, I actively merge the boundaries of logic and art, deploying modern technology to craft advanced visual designs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3 text-indigo-400">
                  <Award size={20} />
                  <h3 className="text-lg font-bold text-white font-display">Education</h3>
                </div>
                <p className="text-slate-300 text-sm font-medium">B.Tech in Artificial Intelligence & Data Science</p>
                <p className="text-slate-400 text-xs mt-1">KIT-Coimbatore</p>
              </div>
              
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3 text-indigo-400">
                  <Sparkles size={20} />
                  <h3 className="text-lg font-bold text-white font-display">Experience</h3>
                </div>
                <p className="text-slate-300 text-sm font-medium">Creative Editor (3+ Years)</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Premiere Pro, DaVinci Resolve, Canva Pro, PicsArt Studio.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills Column */}
          <div ref={skillsRef}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
              Dynamic <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            
            <div className="space-y-6">
              {/* Skill Item 1 */}
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <PenTool size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">Video Editing & Post-Production</h3>
                    <p className="text-slate-300 text-sm font-light">Expert in narrative pacing, color grading, sound design, and post-production workflows for dynamic content releases.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">Premiere Pro</span>
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">DaVinci Resolve</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skill Item 2 */}
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                    <FileCode size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">Interactive UI & UX Design</h3>
                    <p className="text-slate-300 text-sm font-light">Designing engaging user journeys, wireframes, interaction curves, and responsive high-fidelity web experiences.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">Framer Web</span>
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">CSS Custom Animations</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skill Item 3 */}
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">Visual Branding</h3>
                    <p className="text-slate-300 text-sm font-light">Designing cohesive brand guidelines, viral social media visuals, and print layouts that capture conversions.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">Brand Strategy</span>
                      <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-400 rounded-md">Graphic Layouts</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;