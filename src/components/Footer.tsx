import React from 'react';
import { Github as GitHub, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-display mb-2">Akilan Y.</h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
              Sculpting high-impact video edits, post-production reels, and visual storytelling campaigns that command attention.
            </p>
            <p className="text-xs text-slate-500 mt-4 font-light">
              &copy; {new Date().getFullYear()} Akilan Y. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://x.com/AKILY2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/akilan_y/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-pink-500/30 hover:text-pink-400 rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/Akilan-y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-slate-300/30 hover:text-white rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/akilan-y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;