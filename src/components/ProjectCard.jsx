import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onOpenDetails(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animate-fadeInUp glass-card"
      style={{
        animationDelay: `${index * 0.1}s`,
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        border: hovered ? '1px solid rgba(0, 229, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
        background: hovered ? 'rgba(0, 229, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
        transform: hovered ? 'translateY(-8px)' : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0, 229, 255, 0.08)' : 'none'
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ 
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            opacity: 0.8
          }}
        />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to bottom, transparent 40%, #03080f)' 
        }} />
        
        {/* Status Badge */}
        <div style={{ 
          position: 'absolute', top: '20px', left: '20px',
          background: 'rgba(3, 8, 15, 0.8)', padding: '6px 12px',
          borderRadius: '4px', border: '1px solid rgba(0, 229, 255, 0.2)',
          display: 'flex', alignItems: 'center', gap: '10px',
          backdropFilter: 'blur(8px)'
        }}>
           <div style={{ 
             width: '8px', height: '8px', borderRadius: '50%', 
             background: project.status === 'production' ? '#39ff14' : '#00e5ff',
             boxShadow: `0 0 10px ${project.status === 'production' ? '#39ff14' : '#00e5ff'}`
           }} />
           <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#fff', letterSpacing: '0.1em', fontWeight: 600 }}>
             {project.status === 'production' ? 'PRODUCTION' : 'DEVELOPMENT'}
           </span>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          color: '#fff', fontSize: '1.4rem', fontWeight: 800, 
          letterSpacing: '-0.02em', marginBottom: '12px' 
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', 
          lineHeight: 1.6, marginBottom: '24px', flex: 1
        }}>
          {project.impact}
        </p>

        {/* Tech Stack Pills & Details Button */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: '1px solid rgba(255,255,255,0.06)', 
          paddingTop: '24px',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
            {project.tech.slice(0, 3).map(t => (
              <span key={t} style={{ 
                padding: '4px 10px', borderRadius: '4px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.6rem', letterSpacing: '0.05em' 
              }}>
                {t.toUpperCase()}
              </span>
            ))}
          </div>
          
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '6px',
            color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 800,
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            marginBottom: '4px',
            opacity: hovered ? 1 : 0.6
          }}>
            DETAILS <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
