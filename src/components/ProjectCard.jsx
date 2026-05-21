import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [hovered, setHovered] = useState(false);

  // Status mapping to strictly use Cyan and Purple
  const statusColor = project.status === 'production' ? 'var(--color-primary)' : 'var(--color-secondary)';

  return (
    <div
      onClick={() => onOpenDetails(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card"
      style={{
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        height: '100%',
        borderRadius: '6px',
        overflow: 'hidden',
        border: hovered ? '1px solid var(--color-primary)' : '1px solid var(--color-border-dim)',
        background: hovered ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.005)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          style={{ 
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            opacity: 0.65
          }}
        />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to bottom, transparent 50%, var(--color-bg-deep))' 
        }} />
        
        {/* Status Badge */}
        <div style={{ 
          position: 'absolute', top: '16px', left: '16px',
          background: 'rgba(3, 7, 18, 0.85)', padding: '4px 8px',
          borderRadius: '4px', border: '1px solid var(--color-border-bright)',
          display: 'flex', alignItems: 'center', gap: '8px',
          backdropFilter: 'blur(6px)'
        }}>
           <div style={{ 
             width: '6px', height: '6px', borderRadius: '50%', 
             background: statusColor,
             boxShadow: `0 0 6px ${statusColor}`
           }} />
           <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#fff', letterSpacing: '0.08em', fontWeight: 600 }}>
             {project.status === 'production' ? 'PRODUCTION' : 'DEVELOPMENT'}
           </span>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          color: '#fff', fontSize: '1.15rem', fontWeight: 800, 
          letterSpacing: '-0.02em', marginBottom: '8px' 
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          color: 'var(--color-text-dim)', fontSize: '0.85rem', 
          lineHeight: 1.5, marginBottom: '20px', flex: 1
        }}>
          {project.impact}
        </p>

        {/* Tech Stack Pills */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--color-border-dim)', 
          paddingTop: '16px',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', flex: 1 }}>
            {project.tech.slice(0, 3).map(t => (
              <span key={t} style={{ 
                padding: '3px 8px', borderRadius: '3px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--color-border-dim)',
                color: 'var(--color-text-dim)',
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.55rem', letterSpacing: '0.02em' 
              }}>
                {t.toUpperCase()}
              </span>
            ))}
          </div>
          
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '4px',
            color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 800,
            whiteSpace: 'nowrap',
            opacity: hovered ? 1 : 0.6,
            transition: 'opacity 0.2s'
          }}>
            SYSTEMS <ChevronRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
