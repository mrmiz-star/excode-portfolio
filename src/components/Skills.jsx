import React from 'react';
import { skillGroups } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

function SkillBar({ name, level, color, visible, index }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.82rem', color: '#c8d8e8', letterSpacing: '0.03em',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.75rem', color, opacity: 0.75,
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '5px', borderRadius: '3px',
        background: 'rgba(255,255,255,0.05)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: '3px',
          background: `linear-gradient(90deg, ${color}bb, ${color})`,
          boxShadow: `0 0 10px ${color}40`,
          width: visible ? `${level}%` : '0%',
          transition: `width 1.1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" style={{ padding: '100px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">// skills.matrix</span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
          }}>
            Tech <span style={{ color: '#00ffe7', textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>Arsenal</span>
          </h2>
          <p style={{
            color: 'rgba(200,216,232,0.45)', maxWidth: '380px',
            margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7,
          }}>
            Sharpened on real projects. Every bar represents shipped code.
          </p>
        </div>

        {/* Grouped skill columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}>
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              style={{
                background: 'rgba(6,22,38,0.7)',
                border: `1px solid ${group.color}18`,
                borderRadius: '16px',
                padding: '32px 28px',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Group label */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '28px', paddingBottom: '16px',
                borderBottom: `1px solid ${group.color}20`,
              }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: group.color, boxShadow: `0 0 10px ${group.color}`,
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.78rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: group.color, fontWeight: 600,
                }}>
                  {group.label}
                </span>
              </div>

              {/* Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    visible={isVisible}
                    index={si}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
