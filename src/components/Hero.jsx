import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Terminal, Zap } from 'lucide-react';
import { identity } from '../config/identity';

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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({length: 40}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 0.8 + 0.2,
        o: Math.random() * 0.2 + 0.05
      }));
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00e5ff';
      particles.forEach(p => {
        p.y -= p.s * 0.3;
        if (p.y < 0) p.y = canvas.height;
        ctx.globalAlpha = p.o;
        ctx.fillRect(p.x, p.y, 1, 1);
      });
      animId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="home" style={{
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--color-bg-deep)', 
      overflow: 'hidden',
      padding: '40px 20px'
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.25, pointerEvents: 'none' }} />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '1100px', 
        width: '100%', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Main Branding: MIZ */}
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 16vw, 10rem)', 
            fontWeight: 950, 
            letterSpacing: '-0.06em', 
            lineHeight: 0.85, 
            color: 'var(--color-primary)',
            margin: 0,
            textShadow: '0 0 30px var(--color-primary-glow)',
            wordBreak: 'break-word',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            {identity.developerName}
          </h1>
        </div>

        {/* Subtitle / Role (TYPED ANIMATION) */}
        <div style={{ marginBottom: '24px', minHeight: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <h2 style={{ 
             fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', 
             fontWeight: 700, 
             color: '#fff', 
             letterSpacing: '0.05em',
             opacity: 0.9,
             fontFamily: 'var(--font-sans)',
             textTransform: 'uppercase'
           }}>
             {typedText}
             <span style={{ 
               display: 'inline-block', width: '3px', height: '1.1em', background: 'var(--color-primary)', 
               marginLeft: '6px', verticalAlign: 'middle', animation: 'pulse-glow 0.8s infinite' 
             }} />
           </h2>
        </div>

        {/* Supporting Line: Simple & Human */}
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
          color: 'var(--color-text-dim)', 
          maxWidth: '540px', 
          lineHeight: 1.6, 
          marginBottom: '48px',
          fontWeight: 400
        }}>
          Building projects in web, systems, AI tools, and automation.
        </p>

        {/* CTA Actions */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          width: '100%'
        }}>
           <a href="#projects" style={{
             padding: '18px 48px', borderRadius: '4px', background: 'var(--color-primary)', color: 'var(--color-bg-deep)',
             fontSize: '0.9rem', fontWeight: 900, textDecoration: 'none', fontFamily: 'var(--font-mono)',
             letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s ease'
           }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 229, 255, 0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
           >
             VIEW PROJECTS
           </a>
           <a href="#contact" style={{
             padding: '18px 48px', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', color: '#fff',
             fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-mono)',
             letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease'
           }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
           >
             GET IN TOUCH
           </a>
        </div>

      </div>

      {/* Scroll Hint */}
      <a href="#projects" style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.15)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        transition: 'all 0.3s'
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.15)'}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.3em' }}>SCROLL</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
