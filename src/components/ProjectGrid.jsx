import React, { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Filter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectGrid({ onOpenDetails }) {
  const [active, setActive] = useState('All');
  const [ref, isVisible] = useScrollReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{
      padding: '120px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
    }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
      {/* Header */}
      <div style={{ marginBottom: '64px', textAlign: 'center' }}>
        <span className="section-label" style={{ opacity: 0.7 }}>
          PROJECTS
        </span>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800,
          color: '#fff', marginTop: '12px', marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          What I've <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Shipped</span>
        </h2>
        <p style={{
          color: 'var(--color-text-dim)', maxWidth: '480px', margin: '0 auto 48px',
          fontSize: '1.05rem', lineHeight: 1.7,
        }}>
          Real projects. Real code. Deployed and battle-tested.
        </p>

        {/* Category filters */}
        <div style={{
          display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginRight: '6px', color: 'var(--color-primary)', opacity: 0.5
          }}>
            <Filter size={16} />
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px', borderRadius: '12px', cursor: 'pointer',
                fontFamily: "var(--font-mono)", fontSize: '0.75rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                border: active === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border-dim)',
                color: active === cat ? 'var(--color-bg-deep)' : 'var(--color-text-dim)',
                background: active === cat ? 'var(--color-primary)' : 'var(--color-bg-card)',
                boxShadow: active === cat ? '0 0 20px var(--color-primary-glow)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                fontWeight: active === cat ? 700 : 500,
              }}
              onMouseEnter={e => { if (active !== cat) { e.currentTarget.style.borderColor = 'var(--color-border-bright)'; e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'rgba(0, 229, 255, 0.08)'; } }}
              onMouseLeave={e => { if (active !== cat) { e.currentTarget.style.borderColor = 'var(--color-border-dim)'; e.currentTarget.style.color = 'var(--color-text-dim)'; e.currentTarget.style.background = 'var(--color-bg-card)'; } }}
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
        gap: '24px',
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

      {/* Count */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <span style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem',
          color: 'rgba(0,255,231,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''} loaded
        </span>
      </div>
      </div>
    </section>
  );
}


