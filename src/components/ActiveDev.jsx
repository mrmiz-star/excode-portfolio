import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Terminal, Zap, Code, Bot, Globe, Database } from 'lucide-react';

const FOCUS_ITEMS = [
  { icon: Bot, label: 'Automation Tools', desc: 'Building smart bots and automated workflows to streamline Discord and system tasks.' },
  { icon: Globe, label: 'Web Applications', desc: 'Developing responsive, high-performance web platforms using React and modern toolkits.' },
  { icon: Database, label: 'Backend Systems', desc: 'Engineering robust server-side logic and database schemas for scalable data management.' },
  { icon: Code, label: 'Experimental Coding', desc: 'Exploring AI-assisted development and native C++ systems engineering.' },
];

export default function ActiveDev() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="focus" style={{ padding: '120px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">// current.focus</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            What I'm <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Building</span> Now
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '500px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            Focused on automation, realtime workflows, and experimental engineering projects.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px'
        }}>
          {FOCUS_ITEMS.map((item, i) => (
            <div key={i} className="glass-card" style={{ 
              padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', flexDirection: 'column', gap: '16px'
            }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '8px', 
                background: 'rgba(0, 229, 255, 0.05)', display: 'flex', 
                alignItems: 'center', justifyContent: 'center' 
              }}>
                <item.icon size={20} color="var(--color-primary)" />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>{item.label}</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '64px', 
          padding: '24px', 
          background: 'rgba(0, 229, 255, 0.02)', 
          borderRadius: '8px', 
          border: '1px solid rgba(0, 229, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'center'
        }}>
           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 10px #39ff14' }} />
           <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
             ALWAYS_LEARNING // CONSTANT_ITERATION
           </span>
        </div>

      </div>
    </section>
  );
}
