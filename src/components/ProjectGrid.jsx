import React, { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Filter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectGrid() {
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
          // projects.exe
        </span>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          color: '#fff', marginTop: '12px', marginBottom: '16px',
        }}>
          What I've <span style={{ color: '#00ffe7', textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>Shipped</span>
        </h2>
        <p style={{
          color: 'rgba(200,216,232,0.5)', maxWidth: '480px', margin: '0 auto 40px',
          fontSize: '1rem', lineHeight: 1.7,
        }}>
          Real projects. Real code. Deployed and battle-tested.
        </p>

        {/* Category filters */}
        <div style={{
          display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginRight: '4px', color: 'rgba(0,255,231,0.4)',
          }}>
            <Filter size={14} />
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '7px 18px', borderRadius: '20px', cursor: 'pointer',
                fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                border: active === cat ? '1px solid #00ffe7' : '1px solid rgba(0,255,231,0.2)',
                color: active === cat ? '#020b14' : 'rgba(200,216,232,0.6)',
                background: active === cat ? '#00ffe7' : 'rgba(0,255,231,0.04)',
                boxShadow: active === cat ? '0 0 16px rgba(0,255,231,0.35)' : 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { if (active !== cat) { e.currentTarget.style.borderColor = 'rgba(0,255,231,0.5)'; e.currentTarget.style.color = '#00ffe7'; } }}
              onMouseLeave={e => { if (active !== cat) { e.currentTarget.style.borderColor = 'rgba(0,255,231,0.2)'; e.currentTarget.style.color = 'rgba(200,216,232,0.6)'; } }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '24px',
      }}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
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
