import React, { useEffect, useRef } from 'react';
import { Award, FileCode, PenTool, Zap } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-800 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Akilan Y, A passionate motion designer with compelling visual narratives through animation and interaction. My approach combines technical precision with creative storytelling to create memorable digital experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              With a background in both traditional design principles and motion techniques, I bring a unique perspective to each project.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Artificial Intelligence and Data Science, KIT-Coimbatore.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3+ years experience in editing.
                  Applications used: Canva, Picsart, Adobe photoshop, Kinemaster,
                  Powerdirector, Capcut,
                  Adobe premiere pro,Davinci(beginner),Lottie</p>
              </div>
            </div>
          </div>
          
          <div ref={skillsRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">My Skills</span>
            </h2>
            
            <div className="space-y-8">
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Motion Design</h3>
                    <p className="text-gray-600 dark:text-gray-300">Expert in creating fluid animations and motion graphics for various platforms and purposes.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Premiere pro</span>
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Lottie</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <FileCode size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">UI Animation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Skilled in creating engaging UI animations that enhance user experience and product functionality.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Framer</span>
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">CSS/GSAP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Visual Storytelling</h3>
                    <p className="text-gray-600 dark:text-gray-300">Experienced in crafting compelling visual narratives that communicate complex ideas effectively.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Storyboarding</span>
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Explainer Videos</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skill-item opacity-0 transform translate-y-4 transition-all duration-500 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">3D Animation</h3>
                    <p className="text-gray-600 dark:text-gray-300">3D animations and visualizations that bring concepts to life.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">Blender</span>
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