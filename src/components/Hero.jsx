import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Terminal, Cpu, Zap, Activity, ShieldCheck, Server } from 'lucide-react';
import { identity } from '../config/identity';

const TYPED_STRINGS = [
  'Systems Engineer',
  'Automation Builder',
  'Infrastructure-Focused Developer'
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

function TelemetryPill({ label, value, icon: Icon, color = 'var(--color-primary)' }) {
  return (
    <div style={{
      padding: '12px 20px', 
      background: 'rgba(255,255,255,0.02)', 
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '8px', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      flex: '1',
      minWidth: '140px'
    }}>
      <div style={{ 
        width: '32px', height: '32px', borderRadius: '6px', 
        background: `${color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${color}20`
      }}>
         <Icon size={14} color={color} />
      </div>
      <div>
         <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
         <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>{value}</div>
      </div>
    </div>
  );
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
      particles = Array.from({length: 30}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 0.8 + 0.2,
        o: Math.random() * 0.3 + 0.05
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
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }} />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '1000px', 
        width: '100%', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Top Status Header */}
        <div className="animate-fadeInUp" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
             <span style={{ 
               padding: '4px 12px', borderRadius: '4px', background: 'rgba(0, 229, 255, 0.03)', 
               border: '1px solid rgba(0, 229, 255, 0.1)', color: 'rgba(0, 229, 255, 0.6)', 
               fontSize: '0.6rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' 
             }}>
               {identity.version}
             </span>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 10px #39ff14', animation: 'pulse-soft 2s infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>SYSTEM_OPERATIONAL</span>
             </div>
          </div>
        </div>

        {/* Main Branding: MIZ FIRST */}
        <div className="animate-fadeInUp" style={{ marginBottom: '24px', width: '100%' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 15vw, 10rem)', 
            fontWeight: 950, 
            letterSpacing: '-0.05em', 
            lineHeight: 0.8, 
            color: '#fff',
            margin: 0,
            textShadow: '0 0 40px rgba(255,255,255,0.03)',
            wordBreak: 'break-word'
          }}>
            {identity.developerName}
          </h1>
        </div>

        {/* Subtitle / Role (TYPED ANIMATION) */}
        <div className="animate-fadeInUp" style={{ marginBottom: '32px', minHeight: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <h2 style={{ 
             fontSize: 'clamp(1rem, 2.8vw, 1.4rem)', 
             fontWeight: 600, 
             color: 'var(--color-primary)', 
             letterSpacing: '0.05em',
             opacity: 0.9,
             fontFamily: 'var(--font-mono)',
             textTransform: 'uppercase'
           }}>
             {'>'} {typedText}
             <span style={{ 
               display: 'inline-block', width: '2px', height: '1.1em', background: 'var(--color-primary)', 
               marginLeft: '4px', verticalAlign: 'middle', animation: 'pulse-soft 0.8s infinite' 
             }} />
           </h2>
        </div>

        {/* Operational Description */}
        <p className="animate-fadeInUp" style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
          color: 'var(--color-text-dim)', 
          maxWidth: '640px', 
          lineHeight: 1.6, 
          marginBottom: '48px',
          fontWeight: 400
        }}>
          {identity.supportingLine}
        </p>

        {/* CTA Actions */}
        <div className="animate-fadeInUp" style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginBottom: '64px',
          width: '100%'
        }}>
           <a href="#projects" style={{
             padding: '16px 40px', borderRadius: '4px', background: 'var(--color-primary)', color: 'var(--color-bg-deep)',
             fontSize: '0.8rem', fontWeight: 900, textDecoration: 'none', fontFamily: 'var(--font-mono)',
             letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s ease'
           }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 229, 255, 0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
           >
             <Zap size={16} /> VIEW_ECOSYSTEM
           </a>
           <a href="#contact" style={{
             padding: '16px 40px', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', color: '#fff',
             fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-mono)',
             letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease'
           }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
           >
             <Terminal size={16} /> CONTACT_ROOT
           </a>
        </div>

        {/* Telemetry Widgets */}
        <div className="animate-fadeInUp" style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '800px'
        }}>
           <TelemetryPill label="Infrastructure" value="Modular" icon={Server} />
           <TelemetryPill label="Active Systems" value="18+" icon={Cpu} color="var(--color-secondary)" />
           <TelemetryPill label="Security" value="Hardened" icon={ShieldCheck} color="var(--color-accent)" />
           <TelemetryPill label="State" value="Stable" icon={Activity} color="#00aaff" />
        </div>

      </div>

      {/* Scroll Hint */}
      <a href="#projects" style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.15)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        transition: 'all 0.3s'
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.15)'}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.25em' }}>DATA_STREAM_SCROLL</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
