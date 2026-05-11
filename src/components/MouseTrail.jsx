import React, { useEffect, useState } from "react";

export default function MouseTrail() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Disable on mobile devices
    if (window.innerWidth < 768) return;

    let id = 0;
    // Debounce/Throttle isn't strictly necessary since we slice to 15, 
    // but requestAnimationFrame is better for performance.
    let ticking = false;

    const handleMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newDot = {
            id: id++,
            x: e.clientX,
            y: e.clientY,
          };
          setDots((prev) => [...prev.slice(-15), newDot]); // limit to 15
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Return nothing on mobile if no dots will ever be created
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="trail-dot"
          style={{
            left: dot.x,
            top: dot.y,
          }}
        />
      ))}
    </div>
  );
}
