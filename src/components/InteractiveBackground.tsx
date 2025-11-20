import React, { useState, useEffect, ReactElement } from 'react';

const InteractiveBackground = (): ReactElement => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="interactive-background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <div
        className="interactive-element"
        style={{
          position: 'absolute',
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: '100px', 
          height: '100px', 
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.5) 0%, rgba(0,255,255,0) 70%)', /* Cyan glow */
          filter: 'blur(30px)', 
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
};

export default InteractiveBackground;
