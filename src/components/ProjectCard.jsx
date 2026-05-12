import React, { useState } from 'react';
import { PlayCircle, X, Info } from 'lucide-react';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const statusConfig = {
    production:  { color: 'var(--color-primary)', label: 'Production' },
    'in-progress': { color: '#ffd700', label: 'In Progress' },
    concept:     { color: 'var(--color-secondary)', label: 'Concept' },
  };

  const currentStatus = statusConfig[project.status] || statusConfig.production;

  const handleDemoClick = (e) => {
    if (!project.demo || project.demo === '#') {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <div
        onClick={() => onOpenDetails(project)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="animate-fadeInUp glass-card"
        style={{
          animationDelay: `${index * 0.1}s`,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          cursor: 'pointer',
          height: '100%'
        }}
      >
        {/* Project Image Section */}
        <div className="project-image-container" style={{ borderRadius: '16px' }}>
          {/* Status Badge */}
          <div className="status-badge" style={{ 
            backgroundColor: 'rgba(5, 10, 15, 0.8)', 
            border: `1px solid ${currentStatus.color}`,
            width: 'auto',
            height: 'auto',
            padding: '4px 10px',
            borderRadius: '8px',
            top: '12px',
            left: '12px'
          }}>
            <div style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: currentStatus.color, 
              boxShadow: `0 0 8px ${currentStatus.color}`,
              marginRight: '6px'
            }} />
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.6rem', 
              color: '#fff', 
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>{currentStatus.label}</span>
          </div>
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image"
          />
          <div className="project-overlay" />
          
          {/* Hover View Detail Indicator */}
          <div className={`view-detail-hint ${hovered ? 'visible' : ''}`} style={{ background: 'rgba(0, 229, 255, 0.2)' }}>
            <Info size={24} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>SYSTEM SPECS</span>
          </div>
        </div>

        {/* Project Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>
            {project.title}
          </h3>
          
          <p className="card-impact" style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {project.impact}
          </p>
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="tech-tag" style={{ borderRadius: '6px' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }} onClick={e => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
            style={{ flex: 1, justifyContent: 'center', padding: '12px', borderRadius: '10px' }}
          >
            <GithubIcon size={16} /> GitHub
          </a>
          
          <a
            href={project.demo && project.demo !== '#' ? project.demo : '#'}
            onClick={handleDemoClick}
            target={project.demo && project.demo !== '#' ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="btn-neon btn-secondary"
            style={{ flex: 1, justifyContent: 'center', padding: '12px', borderRadius: '10px' }}
          >
            <PlayCircle size={16} /> Demo
          </a>
        </div>
      </div>

      {/* Demo Coming Soon Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" style={{ borderColor: 'var(--color-primary)', boxShadow: '0 0 40px var(--color-primary-glow)' }} onClick={e => e.stopPropagation()}>
            <X 
              className="modal-close" 
              size={24} 
              onClick={() => setShowModal(false)} 
            />
            <div style={{ 
              display: 'inline-flex', 
              padding: '16px', 
              borderRadius: '50%', 
              background: 'rgba(0, 229, 255, 0.1)',
              marginBottom: '24px',
              border: '1px solid var(--color-border-dim)'
            }}>
              <Info size={40} color="var(--color-primary)" />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              🚧 Demo Coming Soon
            </h2>
            <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6, marginBottom: '32px' }}>
              This project walkthrough is currently being prepared. Check back later for the full visual breakdown.
            </p>
            <button 
              className="btn-neon-solid" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setShowModal(false)}
            >
              Acknowledged
            </button>
          </div>
        </div>
      )}
    </>
  );
}

