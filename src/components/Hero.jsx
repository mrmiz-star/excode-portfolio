import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Database, Shield, Cpu } from 'lucide-react';
import { identity } from '../config/identity';
import { globalMetrics } from '../config/systemStatus';

const TYPED_STRINGS = [
  'Systems Developer',
  'Automation Builder',
  'Web & C++ Developer'
];

function useTyped(strings, speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const currentString = strings[idx % strings.length];

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setIdx((prev) => prev + 1);
      } else {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, speed / 2);
      }
    } else {
      if (text === currentString) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentString.slice(0, text.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, idx, strings, speed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTyped(TYPED_STRINGS);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    
    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      particles = Array.from({length: 25}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 0.4 + 0.1,
        o: Math.random() * 0.15 + 0.05
      }));
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00e5ff';
      particles.forEach(p => {
        p.y -= p.s * 0.2;
        if (p.y < 0) p.y = canvas.height;
        ctx.globalAlpha = p.o;
        ctx.fillRect(p.x, p.y, 1.2, 1.2);
      });
      animId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => { 
      cancelAnimationFrame(animId); 
      window.removeEventListener('resize', resize); 
    };
  }, []);

  return (
    <div className="glass-card" style={{
      position: 'relative', 
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '40px 32px',
      marginBottom: '24px',
      border: '1px solid var(--color-border-dim)'
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header telemetry tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            color: 'var(--color-primary)', 
            letterSpacing: '0.15em', 
            background: 'rgba(0, 229, 255, 0.05)',
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(0, 229, 255, 0.1)'
          }}>
            SYSTEM: OVERVIEW
          </span>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-primary)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
            OPERATOR: MIZ
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
          <div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.04em', 
              lineHeight: 1, 
              color: '#fff',
              margin: '0 0 12px 0'
            }}>
              MIZ Engineering
            </h1>

            {/* Typewriter subtitle */}
            <div style={{ minHeight: '1.2em', display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.88rem', 
                color: 'var(--color-primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 700
              }}>
                &gt; {typedText}
                <span style={{ 
                  display: 'inline-block', width: '2px', height: '1em', background: 'var(--color-primary)', 
                  marginLeft: '4px', verticalAlign: 'middle', animation: 'pulse-glow 0.8s infinite' 
                }} />
              </span>
            </div>
            
            <p style={{
              color: 'var(--color-text-dim)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginTop: '16px',
              marginRight: '0',
              marginBottom: '0'
            }}>
              Systems and toolchain development specializing in core network engines, hardware optimization heuristics, and secure automation infrastructure.
            </p>
          </div>

          {/* Core metrics readout grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '16px',
            minWidth: '260px'
          }}>
            {globalMetrics.map((m, i) => (
              <div key={i} style={{ 
                background: 'rgba(255, 255, 255, 0.01)', 
                border: '1px solid var(--color-border-dim)', 
                borderRadius: '4px',
                padding: '12px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 900, 
                  color: m.color || '#fff', 
                  lineHeight: 1, 
                  letterSpacing: '-0.02em' 
                }}>
                  {m.value}
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.58rem', 
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
