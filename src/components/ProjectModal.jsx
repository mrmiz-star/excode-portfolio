import React, { useEffect } from 'react';
import { X, ExternalLink, Shield, Cpu, Zap } from 'lucide-react';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ background: 'rgba(5, 10, 15, 0.95)', zIndex: 100000 }}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()} style={{ borderColor: 'var(--color-primary)', boxShadow: '0 0 50px var(--color-primary-glow)' }}>
        
        {/* Header Action Bar */}
        <div style={{ 
          padding: '16px 24px', 
          borderBottom: '1px solid var(--color-border-dim)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border-dim)',
              color: 'var(--color-text-main)',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border-dim)'}
          >
            ← BACK TO PROJECTS
          </button>
          
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            style={{ 
              position: 'static', 
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border-dim)',
              width: '36px',
              height: '36px'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-scroll-area">
          <div className="modal-image-wrapper" style={{ height: '320px' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-main-image"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'; }}
            />
            <div className="modal-image-overlay">
              <div className="modal-category-tag" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-primary)', color: 'var(--color-bg-deep)' }}>
                {project.category}
              </div>
            </div>
          </div>

          <div className="modal-body" style={{ padding: '40px' }}>
            <div className="modal-header-info">
              <h2 className="modal-title" style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px' }}>{project.title}</h2>
              <div className="modal-tech-stack" style={{ marginBottom: '40px' }}>
                {project.tech.map(t => (
                  <span key={t} className="modal-tech-tag" style={{ borderColor: 'var(--color-border-bright)', color: 'var(--color-primary)', background: 'rgba(0, 229, 255, 0.05)' }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-grid">
              <div className="modal-main-content">
                <h3 className="modal-section-title" style={{ color: 'var(--color-primary)' }}>Project Deep-Dive</h3>
                <p className="modal-description" style={{ color: 'var(--color-text-main)', opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {project.fullDesc || project.impact}
                </p>
                
                <div className="modal-features" style={{ marginTop: '48px' }}>
                  <h3 className="modal-section-title" style={{ color: 'var(--color-primary)' }}>Technical Highlights</h3>
                  <div className="feature-list">
                    <div className="feature-item"><Shield className="feature-icon" size={20} color="var(--color-primary)" /> <span>Hardened Security Architecture</span></div>
                    <div className="feature-item"><Cpu className="feature-icon" size={20} color="var(--color-secondary)" /> <span>High-Performance System Core</span></div>
                    <div className="feature-item"><Zap className="feature-icon" size={20} color="var(--color-accent)" /> <span>Real-time Data Processing</span></div>
                  </div>
                </div>
              </div>

              <div className="modal-sidebar">
                <div className="sidebar-card" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border-dim)' }}>
                  <h4 className="sidebar-title" style={{ color: '#fff' }}>Deployment Links</h4>
                  <div className="sidebar-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="sidebar-link github" style={{ background: '#24292e' }}>
                      <GithubIcon size={18} /> Source Code
                    </a>
                    <a 
                      href={project.demo && project.demo !== '#' ? project.demo : '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="sidebar-link live"
                      style={{ background: 'var(--color-primary)', color: 'var(--color-bg-deep)' }}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="sidebar-card" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border-dim)' }}>
                  <h4 className="sidebar-title" style={{ color: '#fff' }}>Project Status</h4>
                  <div className="status-indicator">
                    <div className="status-dot" style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary-glow)' }} />
                    <span className="status-text" style={{ color: 'var(--color-text-main)' }}>{project.status === 'production' ? 'Operational' : 'Active Build'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


