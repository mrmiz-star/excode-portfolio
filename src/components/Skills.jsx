import React from 'react';
import { skillGroups } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" style={{ padding: '120px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">// engineering.domains</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Technical <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Arsenal</span>
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '440px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            Categorized by engineering domains and system capabilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="glass-card" style={{ 
              padding: '48px 40px', borderRadius: '24px', 
              border: `1px solid ${group.color}20`,
              background: `linear-gradient(135deg, rgba(3, 8, 15, 0.9), ${group.color}05)`
            }}>
              
              {/* Group Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                 <div style={{ 
                   width: '42px', height: '42px', borderRadius: '10px', 
                   background: `${group.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                   border: `1px solid ${group.color}30`
                 }}>
                    {gi === 0 ? <Shield size={20} color={group.color} /> : <Cpu size={20} color={group.color} />}
                 </div>
                 <h3 style={{ 
                   fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: group.color, 
                   letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 800 
                 }}>
                   {group.label}
                 </h3>
              </div>

              {/* Engineering Domains */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                 {group.domains && group.domains.map((domain, di) => (
                   <div key={di} style={{ 
                     padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)',
                     border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'
                   }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = group.color + '40'; e.currentTarget.style.background = group.color + '05'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                   >
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                         <Terminal size={14} color={group.color} /> {domain.name}
                      </div>
                      <div style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                         {domain.details}
                      </div>
                   </div>
                 ))}
              </div>

              {/* Core Technologies (Skill Bars) */}
              <div>
                 <h4 style={{ 
                   fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', 
                   letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase'
                 }}>
                   CORE STACK TELEMETRY
                 </h4>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    {group.skills.map((skill, si) => (
                      <div key={si}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>{skill.name}</span>
                            <span style={{ fontSize: '0.75rem', color: group.color, fontFamily: 'var(--font-mono)' }}>{skill.level}%</span>
                         </div>
                         <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{ 
                              height: '100%', background: group.color, width: isVisible ? `${skill.level}%` : '0%',
                              transition: `width 1.5s cubic-bezier(0.23, 1, 0.32, 1) ${si * 0.1}s`,
                              boxShadow: `0 0 10px ${group.color}80`
                            }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
