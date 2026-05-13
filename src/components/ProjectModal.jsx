import React, { useEffect } from 'react';
import { X, Globe, Info, Target, Layout, Image as ImageIcon } from 'lucide-react';

function GithubIcon({ size = 18 }) {
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
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 100000 }}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()} style={{ 
        maxWidth: '1000px',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        background: '#040a14'
      }}>
        
        {/* Header Action Bar */}
        <div style={{ 
          padding: '16px 24px', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.01)'
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.1em' }}>
            PROJECT_DETAILS // {project.title.toUpperCase()}
          </span>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            style={{ 
              background: 'transparent', border: 'none', color: 'rgba(255, 255, 255, 0.3)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-area">
          {/* Hero Banner */}
          <div className="modal-image-wrapper" style={{ height: '350px', position: 'relative' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #040a14)' }} />
          </div>

          <div className="modal-body" style={{ padding: '0 40px 60px' }}>
            
            <div style={{ marginBottom: '48px', marginTop: '-32px', position: 'relative' }}>
               <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.03em' }}>
                  {project.title}
               </h2>
               <p style={{ color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  {project.impact}
               </p>
            </div>

            <div className="modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
              
              <div className="modal-main-content">
                {/* SECTION: Description */}
                <div style={{ marginBottom: '48px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'rgba(255,255,255,0.3)' }}>
                      <Info size={16} /> <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>WHAT_I_BUILT</span>
                   </div>
                   <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                     {project.fullDesc || project.impact}
                   </p>
                </div>

                {/* SECTION: Goals/Why */}
                <div style={{ marginBottom: '48px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'rgba(255,255,255,0.3)' }}>
                      <Target size={16} /> <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>WHY_I_BUILT_IT</span>
                   </div>
                   <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                     Developed to solve specific technical challenges and explore new architectural patterns in {project.category.toLowerCase()} engineering.
                   </p>
                </div>

                {/* SECTION: Previews */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'rgba(255,255,255,0.3)' }}>
                      <ImageIcon size={16} /> <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>PROJECT_PREVIEWS</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                       {project.screenshots.map((s, i) => (
                         <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <img src={s} alt="Preview" style={{ width: '100%', opacity: 0.8 }} />
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-sidebar">
                {/* Tech Used */}
                <div style={{ marginBottom: '40px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'rgba(255,255,255,0.3)' }}>
                      <Layout size={16} /> <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>TECH_USED</span>
                   </div>
                   <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {project.tech.map(t => (
                        <span key={t} style={{ 
                          padding: '6px 12px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#fff', fontSize: '0.75rem', fontWeight: 600
                        }}>{t}</span>
                      ))}
                   </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700 }}>
                        <GithubIcon size={18} /> VIEW ON GITHUB
                     </a>
                   )}
                   {project.demo && project.demo !== '#' && (
                     <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', borderRadius: '6px', background: 'var(--color-primary)', color: 'var(--color-bg-deep)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800 }}>
                        <Globe size={18} /> LIVE PREVIEW
                     </a>
                   )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
