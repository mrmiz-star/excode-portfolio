import React, { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Filter } from 'lucide-react';

export default function ProjectGrid({ onOpenDetails }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Control Board Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '16px',
        marginBottom: '20px',
        borderBottom: '1px solid var(--color-border-dim)',
        paddingBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
            DATABASE: REGISTRY
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
            {filtered.length} systems operational
          </span>
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '6px 12px', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontFamily: "var(--font-mono)", 
                fontSize: '0.68rem',
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                border: active === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border-dim)',
                color: active === cat ? 'var(--color-bg-deep)' : 'var(--color-text-dim)',
                background: active === cat ? 'var(--color-primary)' : 'rgba(255,255,255,0.01)',
                transition: 'all 0.2s ease',
                fontWeight: 700,
              }}
              onMouseEnter={e => { 
                if (active !== cat) { 
                  e.currentTarget.style.borderColor = 'var(--color-border-bright)'; 
                  e.currentTarget.style.color = '#fff'; 
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                } 
              }}
              onMouseLeave={e => { 
                if (active !== cat) { 
                  e.currentTarget.style.borderColor = 'var(--color-border-dim)'; 
                  e.currentTarget.style.color = 'var(--color-text-dim)'; 
                  e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                } 
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
        gap: '16px',
      }}>
        {filtered.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </div>
  );
}
