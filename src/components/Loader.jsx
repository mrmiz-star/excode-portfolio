import React, { useState, useEffect } from 'react';

const lines = [
  "> Booting EX CODE Systems...",
  "> Initializing Core Modules...",
  "> Loading Portfolio Interface...",
  "> Access Granted"
];

const Loader = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [renderedLines, setRenderedLines] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start progress bar at 1s
    const progressTimer = setTimeout(() => setShowProgress(true), 1000);
    // Start fading out at 2.5s
    const fadeTimer = setTimeout(() => setIsFading(true), 2500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timer = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 15); // Fast typing effect
        return () => clearTimeout(timer);
      } else {
        const nextLineTimer = setTimeout(() => {
          setRenderedLines([...renderedLines, lines[lineIndex]]);
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 80); // Slight pause between lines
        return () => clearTimeout(nextLineTimer);
      }
    }
  }, [lineIndex, charIndex, renderedLines]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020b14] transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="w-full max-w-2xl px-6 flex flex-col">
        {/* Top Label */}
        <div className="mb-8 text-xs tracking-[0.3em] text-[#00ffe7] opacity-50 font-mono">
          [ EX CODE SYSTEM ]
        </div>

        {/* Terminal Text */}
        <div className="font-mono text-sm md:text-base leading-relaxed mb-8 min-h-[120px]">
          {renderedLines.map((line, i) => (
            <div key={i} className={i === 3 ? "text-[#39ff14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" : "text-[#00ffe7] drop-shadow-[0_0_8px_rgba(0,255,231,0.8)]"}>
              {line}
              {i === 3 && lineIndex >= lines.length && <span className="animate-[blinkOpacity_1s_step-end_infinite] ml-1">_</span>}
            </div>
          ))}
          {lineIndex < lines.length && (
            <div className="text-[#00ffe7] drop-shadow-[0_0_8px_rgba(0,255,231,0.8)]">
              {lines[lineIndex].substring(0, charIndex)}
              <span className="animate-[blinkOpacity_1s_step-end_infinite] ml-1">_</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="h-[2px] w-full bg-[#00ffe7]/10 relative overflow-hidden">
          {showProgress && (
            <div 
              className="absolute top-0 left-0 h-full bg-[#00ffe7] shadow-[0_0_10px_#00ffe7]"
              style={{
                animation: 'fillProgress 1.5s ease-out forwards'
              }}
            />
          )}
        </div>
      </div>
      <style>{`
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes blinkOpacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
