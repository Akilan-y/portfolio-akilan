import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only use custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const updateCursorPosition = (e: MouseEvent) => {
        requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      };
      
      const handleMouseEnter = () => {
        setIsVisible(true);
      };
      
      const handleMouseLeave = () => {
        setIsVisible(false);
      };
      
      const handleLinkHoverStart = () => {
        setIsHovering(true);
      };
      
      const handleLinkHoverEnd = () => {
        setIsHovering(false);
      };
      
      window.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      
      // Add event listeners to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleLinkHoverStart);
        el.addEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleLinkHoverStart);
          el.removeEventListener('mouseleave', handleLinkHoverEnd);
        });
      };
    }
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
        isHovering ? 'w-12 h-12 bg-white transition-all duration-150 ease-out' : 'w-5 h-5 bg-white transition-all duration-100 ease-out'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'width, height, transform'
      }}
    ></div>
  );
};

export default Cursor;