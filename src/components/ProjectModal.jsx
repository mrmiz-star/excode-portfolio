import React, { useEffect, lazy, Suspense } from 'react';
import { X, ExternalLink, Shield, Cpu, Zap, Activity, Database, Lock, Terminal, Workflow, AlertTriangle, CheckCircle2, Play, Eye, Video } from 'lucide-react';

// Lazy load the architecture graph for performance
const ArchitectureGraph = lazy(() => import('./architecture/ArchitectureGraph'));

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

  const metrics = project.metrics || {};
  const timeline = project.timeline || {};

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ background: 'rgba(2, 6, 12, 0.98)', zIndex: 100000 }}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()} style={{ 
        maxWidth: '1100px',
        borderColor: 'rgba(0, 229, 255, 0.2)', 
        boxShadow: '0 0 80px rgba(0, 229, 255, 0.05)',
        background: '#03080f'
      }}>
        
        {/* Header Action Bar */}
        <div style={{ 
          padding: '12px 24px', 
          borderBottom: '1px solid rgba(0, 229, 255, 0.1)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(0, 229, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(0, 229, 255, 0.5)', letterSpacing: '0.1em' }}>
              SYSTEM://{project.slug?.toUpperCase()}
            </span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            style={{ 
              position: 'static', 
              background: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-area">
          {/* SECTION 1: Clean Image Layer */}
          <div className="modal-image-wrapper" style={{ height: '340px', position: 'relative', overflow: 'hidden' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-main-image"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'; }}
            />
            {/* Status Badges only */}
            <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', gap: '12px' }}>
               <span style={{ 
                 background: 'rgba(3, 8, 15, 0.8)',
                 backdropFilter: 'blur(10px)',
                 border: `1px solid ${project.status === 'production' ? '#39ff14' : '#00e5ff'}40`,
                 color: project.status === 'production' ? '#39ff14' : '#00e5ff',
                 padding: '6px 12px', fontSize: '0.6rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase',
                 display: 'flex', alignItems: 'center', gap: '8px'
               }}>
                 <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.status === 'production' ? '#39ff14' : '#00e5ff' }} />
                 {project.status === 'production' ? 'PROD_STABLE' : 'DEV_ACTIVE'}
               </span>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #03080f)' }} />
          </div>

          <div className="modal-body" style={{ padding: '0 40px 40px' }}>
            
            {/* Deep-Dive Header */}
            <div style={{ marginBottom: '48px', marginTop: '-20px', position: 'relative', zIndex: 10 }}>
               <div style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '12px' }}>
                  {project.category.toUpperCase()} // ENGINEERING_SPEC
               </div>
               <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.03em' }}>
                  {project.title}
               </h2>
               <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
                  {project.impact}
               </p>
               
               <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <div key={t} style={{ 
                      padding: '4px 14px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em'
                    }}>
                      {t.toUpperCase()}
                    </div>
                  ))}
               </div>
            </div>

            <div className="modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px' }}>
              
              <div className="modal-main-content">
                {/* SECTION 3: Architecture Graph (Main Feature) */}
                <div style={{ marginBottom: '60px' }}>
                  <h3 style={{ color: 'rgba(0, 229, 255, 0.8)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Workflow size={14} /> ARCHITECTURE_VISUALIZATION
                  </h3>
                  <div className="glass-card" style={{ 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    background: 'rgba(0, 0, 0, 0.2)'
                  }}>
                    <Suspense fallback={
                      <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                        INITIALIZING_GRAPH_SYSTEM...
                      </div>
                    }>
                      <ArchitectureGraph projectSlug={project.slug} />
                    </Suspense>
                  </div>
                </div>

                {/* SECTION 4: Engineering Notes */}
                {project.engineeringNotes && (
                  <div style={{ marginBottom: '60px' }}>
                    <h3 style={{ color: 'rgba(0, 229, 255, 0.8)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Terminal size={14} /> ENGINEERING NOTES
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {project.engineeringNotes.map((note, i) => (
                        <li key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', gap: '12px' }}>
                          <span style={{ color: 'var(--color-primary)', opacity: 0.5 }}>•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* SECTION 5: Challenges & Solutions */}
                {project.challenges && (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '30px' 
                  }}>
                    <div>
                      <h3 style={{ color: '#ff4757', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AlertTriangle size={14} /> CHALLENGES
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {project.challenges.map((c, i) => (
                          <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ color: '#39ff14', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={14} /> SOLUTIONS
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {project.solutions.map((s, i) => (
                          <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* SECTION 2: System Metrics Panel */}
                <div style={{ 
                  background: 'rgba(0, 229, 255, 0.03)', 
                  border: '1px solid rgba(0, 229, 255, 0.1)', 
                  borderRadius: '12px',
                  padding: '24px'
                }}>
                  <h4 style={{ 
                    fontFamily: 'var(--font-mono)', color: '#fff', fontSize: '0.7rem', 
                    letterSpacing: '0.15em', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px'
                  }}>
                    <Activity size={14} color="var(--color-primary)" /> SYSTEM METRICS
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                      { label: 'Modules', value: metrics.modules, icon: Cpu },
                      { label: 'Database', value: metrics.database, icon: Database },
                      { label: 'Architecture', value: metrics.architecture, icon: Workflow },
                      { label: 'Authentication', value: metrics.auth, icon: Lock },
                      { label: 'Telemetry', value: metrics.telemetry || 'Enabled', icon: Zap }
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <m.icon size={12} /> {m.label}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#fff', fontFamily: 'var(--font-mono)' }}>{m.value || 'N/A'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links Section: DEMO, TUTORIAL, SOURCE */}
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  borderRadius: '12px',
                  padding: '24px'
                }}>
                   <div style={{ marginBottom: '24px' }}>
                     <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>TIMELINE</div>
                     <div style={{ fontSize: '0.85rem', color: '#fff' }}>{timeline.started} — {timeline.updated}</div>
                   </div>
                   
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {/* VIDEO DEMO BUTTON */}
                      <a href={project.videoDemo || "#"} target="_blank" rel="noopener noreferrer" style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                        padding: '14px', borderRadius: '8px', background: 'var(--color-primary)', color: 'var(--color-bg-deep)',
                        textDecoration: 'none', fontSize: '0.8rem', fontWeight: 800, transition: 'all 0.3s ease',
                        boxShadow: '0 0 20px var(--color-primary-glow)'
                      }}>
                        <Video size={16} /> WATCH DEMO VIDEO
                      </a>

                      {/* LIVE DEPLOYMENT BUTTON */}
                      {project.demo && project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                          padding: '14px', borderRadius: '8px', background: 'rgba(0, 229, 255, 0.05)', color: 'var(--color-primary)',
                          textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, transition: 'all 0.3s ease',
                          border: '1px solid rgba(0, 229, 255, 0.2)'
                        }}>
                          <Eye size={16} /> LIVE DEPLOYMENT
                        </a>
                      )}

                      {/* TUTORIAL BUTTON */}
                      <a href={project.tutorial || "#"} target="_blank" rel="noopener noreferrer" style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                        padding: '14px', borderRadius: '8px', background: 'rgba(191, 0, 255, 0.1)', color: '#bf00ff',
                        textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, transition: 'all 0.3s ease',
                        border: '1px solid rgba(191, 0, 255, 0.2)'
                      }}>
                        <Play size={16} /> WATCH TUTORIAL
                      </a>

                      {/* SOURCE BUTTON */}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                        padding: '14px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', color: '#fff',
                        textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <GithubIcon size={16} /> VIEW SOURCE
                      </a>
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
