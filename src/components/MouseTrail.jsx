import React, { useEffect, useState, useRef } from "react";

export default function MouseTrail() {
  const [dots, setDots] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let id = 0;
    const handleMove = (e) => {
      const newDot = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        color: Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-secondary)'
      };
      setDots((prev) => [...prev.slice(-20), newDot]);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    
    const cleanup = () => {
      window.removeEventListener("mousemove", handleMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };

    return cleanup;
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {dots.map((dot, index) => (
        <span
          key={dot.id}
          className="trail-dot"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: dot.color,
            boxShadow: `0 0 15px ${dot.color}`,
            opacity: index / dots.length,
            transform: `scale(${index / dots.length})`,
            transition: 'all 0.1s linear'
          }}
        />
      ))}
    </div>
  );
}
