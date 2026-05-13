import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Terminal, Zap, Code, Bot, Globe, Database } from 'lucide-react';

const FOCUS_ITEMS = [
  { icon: Bot, label: 'Building automation tools', desc: 'Streamlining repetitive tasks and workflows.' },
  { icon: Terminal, label: 'Developing Discord systems', desc: 'Creating community management and security bots.' },
  { icon: Globe, label: 'Creating web applications', desc: 'Building responsive, fast, and modern frontends.' },
  { icon: Zap, label: 'Exploring AI-assisted development', desc: 'Integrating LLMs into daily engineering tasks.' },
  { icon: Code, label: 'Improving system design skills', desc: 'Learning scalable architecture patterns.' },
];

export default function ActiveDev() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="focus" style={{ padding: '120px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">FOCUS</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            What I'm <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Working</span> On
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
             Actively building and learning every day
           </span>
        </div>

      </div>
    </section>
  );
}
