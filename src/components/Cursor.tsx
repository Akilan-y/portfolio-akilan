import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const updateCursorPosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);
      const handleMouseDown = () => setIsClicked(true);
      const handleMouseUp = () => setIsClicked(false);
      
      const handleLinkHoverStart = () => setIsHovering(true);
      const handleLinkHoverEnd = () => setIsHovering(false);
      
      window.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Select interactive elements
      const updateHoverListeners = () => {
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive-hover');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleLinkHoverStart);
          el.removeEventListener('mouseleave', handleLinkHoverEnd);
          el.addEventListener('mouseenter', handleLinkHoverStart);
          el.addEventListener('mouseleave', handleLinkHoverEnd);
        });
      };
      
      updateHoverListeners();
      
      // Observe DOM changes to attach listeners to newly created elements
      const observer = new MutationObserver(updateHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        observer.disconnect();
        
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive-hover');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleLinkHoverStart);
          el.removeEventListener('mouseleave', handleLinkHoverEnd);
        });
      };
    }
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Outer glassy ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform ${
          isHovering 
            ? 'w-14 h-14 border-indigo-400 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
            : isClicked
            ? 'w-6 h-6 border-fuchsia-400 bg-fuchsia-500/20'
            : 'w-8 h-8 border-indigo-500/30 bg-transparent'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      {/* Inner glowing dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform ${
          isHovering 
            ? 'w-2 h-2 bg-fuchsia-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]' 
            : isClicked
            ? 'w-1 h-1 bg-cyan-400'
            : 'w-2.5 h-2.5 bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.8)]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
};

export default Cursor;