import React, { useState } from 'react';
import { Terminal, Info, ChevronRight, Activity } from 'lucide-react';

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
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        border: hovered ? '1px solid rgba(0, 229, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
        background: hovered ? 'rgba(0, 229, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered ? '0 10px 40px rgba(0, 229, 255, 0.05)' : 'none'
      }}
    >
      {/* Top Layer: Image & Overlay */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ 
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            opacity: 0.8
          }}
        />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to bottom, transparent 20%, #03080f)' 
        }} />
        
        {/* Status Badge */}
        <div style={{ 
          position: 'absolute', top: '16px', left: '16px',
          background: 'rgba(3, 8, 15, 0.8)', padding: '4px 10px',
          borderRadius: '4px', border: '1px solid rgba(0, 229, 255, 0.2)',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
           <div style={{ 
             width: '6px', height: '6px', borderRadius: '50%', 
             background: project.status === 'production' ? '#39ff14' : '#00e5ff',
             boxShadow: `0 0 8px ${project.status === 'production' ? '#39ff14' : '#00e5ff'}`
           }} />
           <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#fff', letterSpacing: '0.05em' }}>
             {project.status === 'production' ? 'PROD' : 'DEV'}
           </span>
        </div>
      </div>

      {/* Center: Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ 
          color: '#fff', fontSize: '1.25rem', fontWeight: 800, 
          letterSpacing: '-0.02em', marginBottom: '4px' 
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', 
          lineHeight: 1.6, minHeight: '42px'
        }}>
          {project.summary || project.impact}
        </p>

        {/* Telemetry Strip */}
        <div style={{ 
          display: 'flex', gap: '8px', flexWrap: 'wrap', 
          marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '16px' 
        }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{ 
              color: 'rgba(0, 229, 255, 0.6)', fontFamily: 'var(--font-mono)', 
              fontSize: '0.65rem', letterSpacing: '0.05em' 
            }}>
              {t.toUpperCase()} •
            </span>
          ))}
          <span style={{ 
            color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', marginLeft: 'auto' 
          }}>
            V{project.id}.0
          </span>
        </div>

        {/* Bottom Layer: Metadata */}
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          marginTop: '12px', background: 'rgba(255,255,255,0.02)', 
          padding: '12px 16px', borderRadius: '8px'
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={12} color="rgba(0, 229, 255, 0.5)" />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                COMPLETION: <span style={{ color: '#fff' }}>{project.completion}%</span>
              </span>
           </div>
           
           <div style={{ 
             display: 'flex', alignItems: 'center', gap: '4px',
             color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 700,
             opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-10px)',
             transition: 'all 0.3s ease'
           }}>
             SPECS <ChevronRight size={14} />
           </div>
        </div>
      </div>
      
      {/* Subtle Scanline Hover Effect */}
      {hovered && <div className="scanline-overlay" style={{ opacity: 0.1, pointerEvents: 'none' }} />}
    </div>
  );
}
