import React from 'react';
import { skillGroups } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Terminal, Shield, Cpu, Zap } from 'lucide-react';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" style={{ padding: '120px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">SKILLS</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Technical <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Arsenal</span>
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '500px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            A professional stack focused on performance, automation, and systems architecture.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="glass-card" style={{ 
              padding: '48px 40px', borderRadius: '12px', 
              border: `1px solid ${group.color}20`,
              background: `linear-gradient(135deg, rgba(3, 8, 15, 0.95), ${group.color}05)`,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              
              {/* Group Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                 <div style={{ 
                   width: '42px', height: '42px', borderRadius: '8px', 
                   background: `${group.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                   border: `1px solid ${group.color}30`
                 }}>
                    {gi === 0 ? <Cpu size={20} color={group.color} /> : 
                     gi === 1 ? <Zap size={20} color={group.color} /> : 
                     <Shield size={20} color={group.color} />}
                 </div>
                 <h3 style={{ 
                   fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#fff', 
                   letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 800 
                 }}>
                   {group.label}
                 </h3>
              </div>

              {/* Skills Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
                gap: '12px',
                marginTop: 'auto'
              }}>
                {group.skills.map((skill, si) => (
                  <div key={si} style={{ 
                    padding: '12px 16px',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = group.color + '40';
                    e.currentTarget.style.background = group.color + '10';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                  >
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: group.color }} />
                    {skill}
                  </div>
                ))}
              </div>

              {/* Subtle Tagline */}
              <div style={{ 
                marginTop: '32px', 
                paddingTop: '24px', 
                borderTop: '1px solid rgba(255,255,255,0.05)',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em'
              }}>
                {group.label.toUpperCase()}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
