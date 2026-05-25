import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Akilan Y | Portfolio";
    
    // Add smooth scrolling to HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-[#030014] text-slate-100 relative overflow-x-hidden">
      {/* Premium Background Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-500/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-[45%] left-[25%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <Cursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;