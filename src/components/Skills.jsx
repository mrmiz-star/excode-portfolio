import React from 'react';
import { skillGroups } from '../data/projects';
import { Cpu, Zap, Shield } from 'lucide-react';

export default function Skills() {
  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px',
        marginBottom: '20px',
        borderBottom: '1px solid var(--color-border-dim)',
        paddingBottom: '16px'
      }}>
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
          SYSTEM: ARSENAL
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
          Core technical competencies
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {skillGroups.map((group, gi) => (
          <div key={group.label} className="glass-card" style={{ 
            padding: '24px', 
            borderRadius: '8px', 
            border: `1px solid ${group.color}15`,
            background: `linear-gradient(135deg, rgba(11, 15, 25, 0.4), ${group.color}02)`,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            
            {/* Group Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
               <div style={{ 
                 width: '32px', height: '32px', borderRadius: '6px', 
                 background: `${group.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                 border: `1px solid ${group.color}20`
               }}>
                  {gi === 0 ? <Cpu size={16} color={group.color} /> : 
                   gi === 1 ? <Zap size={16} color={group.color} /> : 
                   <Shield size={16} color={group.color} />}
               </div>
               <h3 style={{ 
                 fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fff', 
                 letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800 
               }}>
                 {group.label}
               </h3>
            </div>

            {/* Skills Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', 
              gap: '8px',
              marginTop: 'auto'
            }}>
              {group.skills.map((skill, si) => (
                <div key={si} style={{ 
                  padding: '8px 12px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid var(--color-border-dim)',
                  color: 'var(--color-text-dim)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = group.color + '30';
                  e.currentTarget.style.background = group.color + '05';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-dim)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                  e.currentTarget.style.color = 'var(--color-text-dim)';
                }}
                >
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: group.color }} />
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
