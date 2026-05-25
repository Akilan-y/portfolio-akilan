import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-550 ${
        isScrolled 
          ? 'py-3' 
          : 'py-6'
      }`}
    >
      <div 
        className={`mx-auto px-6 py-3 transition-all duration-550 ${
          isScrolled 
            ? 'max-w-3xl rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(99,102,241,0.1)]' 
            : 'max-w-6xl bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-display hover:opacity-85 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Akilan Y.
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm tracking-wide"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm tracking-wide"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm tracking-wide"
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-slate-300 hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 mx-4 mt-2 rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-lg shadow-xl">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium py-2 border-b border-white/5"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium py-2 border-b border-white/5"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-slate-300 hover:text-indigo-400 transition-colors font-medium py-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;