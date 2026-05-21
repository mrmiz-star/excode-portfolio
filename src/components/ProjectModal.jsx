import React, { useEffect, useState, Suspense, lazy } from 'react';
import { X, Globe, Info, Target, Layout, Image as ImageIcon, Play, Video, Workflow, Zap, BarChart2, Star, BookOpen, AlertTriangle, GitBranch } from 'lucide-react';
import { architectureGraphs } from '../data/architectureGraphs';

// Lazy-load the architecture graph — only rendered when modal is open and user expands it
const ArchitectureGraph = lazy(() => import('./architecture/ArchitectureGraph'));

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function SectionHeader({ icon, label, accent = 'var(--color-primary)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
      <span style={{ color: accent }}>{icon}</span>
      <span style={{
        fontSize: '0.65rem',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.3)',
        textTransform: 'uppercase'
      }}>
        {label}
      </span>
    </div>
  );
}

function CaseStudyBlock({ caseStudy, accent }) {
  const items = [
    { key: 'problem', label: 'Problem', icon: <AlertTriangle size={13} /> },
    { key: 'solution', label: 'Solution', icon: <Zap size={13} /> },
    { key: 'architectureDecision', label: 'Architecture Decision', icon: <GitBranch size={13} /> },
    { key: 'bottlenecks', label: 'Bottlenecks', icon: <Target size={13} /> },
    { key: 'optimization', label: 'Optimization', icon: <BarChart2 size={13} /> },
    { key: 'result', label: 'Result', icon: <Star size={13} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map(({ key, label, icon }) => (
        caseStudy[key] ? (
          <div key={key} style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.01)',
            border: '1px solid var(--color-border-dim)',
            borderLeft: `3px solid ${accent}`,
            borderRadius: '0 6px 6px 0',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: accent, letterSpacing: '0.1em',
              marginBottom: '8px', textTransform: 'uppercase'
            }}>
              {icon} {label}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>
              {caseStudy[key]}
            </p>
          </div>
        ) : null
      ))}
    </div>
  );
}

function EngineeringSignalsBlock({ signals, accent }) {
  const items = [
    { key: 'notes', label: 'Engineering Notes' },
    { key: 'challenges', label: 'Challenges' },
    { key: 'tradeoffs', label: 'Trade-offs' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
      {items.map(({ key, label }) => (
        signals[key] ? (
          <div key={key} style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.01)',
            border: '1px solid var(--color-border-dim)',
            borderRadius: '6px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: accent, letterSpacing: '0.1em',
              marginBottom: '8px', textTransform: 'uppercase'
            }}>
              ▸ {label}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
              {signals[key]}
            </p>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
      setShowGraph(false); // destroy graph on close
    };
  }, [onClose]);

  if (!project) return null;

  // Strictly map project accent to Cyan or Purple only
  const accentColor = 'var(--color-primary)'; // Cyan for all — clean system feel
  const hasArchitecture = !!(project.architecture || architectureGraphs[project.slug]);
  const hasMetrics = project.metrics && Object.keys(project.metrics).length > 0;
  const hasFeatures = project.features && project.features.length > 0;
  const hasCaseStudy = !!project.caseStudy;
  const hasSignals = !!project.engineeringSignals;

  // Telemetry tags from metrics keys
  const telemetryItems = hasMetrics
    ? Object.entries(project.metrics).map(([key, val]) => ({ label: key.replace(/([A-Z])/g, ' $1').trim(), value: val }))
    : [];

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 100000 }}>
      <div
        className="project-modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '900px', background: 'var(--color-bg-deep)' }}
      >
        {/* ── Header Bar ── */}
        <div style={{
          padding: '14px 24px',
          borderBottom: '1px solid var(--color-border-dim)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.01)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--color-primary)', letterSpacing: '0.12em',
              padding: '3px 8px', borderRadius: '3px',
              background: 'rgba(0, 229, 255, 0.05)',
              border: '1px solid rgba(0, 229, 255, 0.15)'
            }}>
              {project.category?.toUpperCase()}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
              {project.slug}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.3)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-scroll-area" style={{ padding: '0' }}>

          {/* ── Hero Banner (compact) ── */}
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.5 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(3,7,18,0.3) 0%, var(--color-bg-deep) 100%)' }} />
            {/* Accent bottom line — always Cyan */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)',
              opacity: 0.4
            }} />
          </div>

          <div style={{ padding: '0 32px 48px' }}>

            {/* ── 1. TITLE + IMPACT LINE ── */}
            <div style={{ marginTop: '-20px', marginBottom: '28px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: project.status === 'production' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  boxShadow: `0 0 8px ${project.status === 'production' ? 'var(--color-primary)' : 'var(--color-secondary)'}`
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: project.status === 'production' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>
                  {project.status}
                </span>
              </div>
              <h2 style={{
                color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 900, marginBottom: '10px', letterSpacing: '-0.03em'
              }}>
                {project.title}
              </h2>
              <p style={{
                color: 'var(--color-text-dim)', fontSize: '0.95rem',
                fontWeight: 500, lineHeight: 1.6, maxWidth: '680px'
              }}>
                {project.impact}
              </p>
            </div>

            {/* ── 2. TECH STACK BADGES ── */}
            {project.tech?.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<Layout size={13} />} label="TECH_STACK" accent="var(--color-primary)" />
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      padding: '4px 10px', borderRadius: '3px',
                      background: 'rgba(0, 229, 255, 0.04)',
                      border: '1px solid rgba(0, 229, 255, 0.15)',
                      color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── 3. TELEMETRY METRICS STRIP ── */}
            {hasMetrics && (
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '0',
                marginBottom: '28px',
                background: 'rgba(0, 229, 255, 0.02)',
                border: '1px solid rgba(0, 229, 255, 0.1)',
                borderRadius: '6px', overflow: 'hidden'
              }}>
                {telemetryItems.map(({ label, value }, i) => (
                  <div key={i} style={{
                    flex: '1 1 120px',
                    padding: '16px 20px',
                    borderRight: i < telemetryItems.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    display: 'flex', flexDirection: 'column', gap: '4px'
                  }}>
                    <span style={{
                      color: 'var(--color-primary)', fontWeight: 800,
                      fontSize: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1
                    }}>
                      {String(value)}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em'
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* ── 4. FEATURES GRID ── */}
            {hasFeatures && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<Star size={13} />} label="KEY_FEATURES" accent="var(--color-primary)" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
                  {project.features.map((f, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      padding: '10px 12px', borderRadius: '4px',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid var(--color-border-dim)'
                    }}>
                      <span style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0, fontSize: '0.7rem' }}>▸</span>
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 5. ARCHITECTURE GRAPH (LAZY LOADED, TOGGLE) ── */}
            {hasArchitecture && (
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <SectionHeader icon={<Workflow size={13} />} label="SYSTEM_ARCHITECTURE" accent="var(--color-primary)" />
                  <button
                    onClick={() => setShowGraph(v => !v)}
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                      color: showGraph ? 'var(--color-primary)' : 'rgba(255,255,255,0.4)',
                      background: showGraph ? 'rgba(0,229,255,0.06)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${showGraph ? 'rgba(0,229,255,0.2)' : 'var(--color-border-dim)'}`,
                      borderRadius: '4px', padding: '5px 12px',
                      cursor: 'pointer', transition: 'all 0.2s',
                      letterSpacing: '0.08em', textTransform: 'uppercase'
                    }}
                  >
                    {showGraph ? 'COLLAPSE' : 'LOAD GRAPH'}
                  </button>
                </div>

                {showGraph && (
                  <div style={{
                    borderRadius: '6px', overflow: 'hidden',
                    border: '1px solid var(--color-border-bright)',
                    background: 'rgba(11, 15, 25, 0.8)',
                    height: '420px', position: 'relative'
                  }}>
                    <Suspense fallback={
                      <div style={{
                        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                        color: 'var(--color-primary)', letterSpacing: '0.1em'
                      }}>
                        LOADING GRAPH...
                      </div>
                    }>
                      <ArchitectureGraph projectSlug={project.slug} />
                    </Suspense>
                  </div>
                )}
              </div>
            )}

            {/* ── 6. CASE STUDY ── */}
            {hasCaseStudy && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<BookOpen size={13} />} label="CASE_STUDY" accent="var(--color-secondary)" />
                <CaseStudyBlock caseStudy={project.caseStudy} accent="var(--color-secondary)" />
              </div>
            )}

            {/* ── 7. ENGINEERING SIGNALS ── */}
            {hasSignals && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<Zap size={13} />} label="ENGINEERING_SIGNALS" accent="var(--color-primary)" />
                <EngineeringSignalsBlock signals={project.engineeringSignals} accent="var(--color-primary)" />
              </div>
            )}

            {/* ── DESCRIPTION (FULL) ── */}
            {project.fullDesc && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<Info size={13} />} label="TECHNICAL_OVERVIEW" accent="var(--color-primary)" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  {project.fullDesc}
                </p>
              </div>
            )}

            {/* ── SCREENSHOTS ── */}
            {project.screenshots?.length > 0 && (
              <div style={{ marginBottom: '28px' }}>
                <SectionHeader icon={<ImageIcon size={13} />} label="PREVIEWS" accent="var(--color-primary)" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
                  {project.screenshots.slice(0, 3).map((s, i) => (
                    <div key={i} style={{
                      borderRadius: '4px', overflow: 'hidden',
                      border: '1px solid var(--color-border-dim)'
                    }}>
                      <img src={s} alt={`Preview ${i + 1}`} loading="lazy"
                        style={{ width: '100%', display: 'block', opacity: 0.8 }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── ACTION BUTTONS ── */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '8px', borderTop: '1px solid var(--color-border-dim)' }}>
              {project.videoDemo && (
                <a href={project.videoDemo} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '4px',
                    background: 'var(--color-primary)', color: 'var(--color-bg-deep)',
                    textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800,
                    fontFamily: 'var(--font-mono)', letterSpacing: '0.05em'
                  }}>
                  <Play size={14} /> WATCH DEMO
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)',
                    border: '1px solid var(--color-border-bright)',
                    textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700,
                    fontFamily: 'var(--font-mono)', letterSpacing: '0.05em'
                  }}>
                  <GithubIcon size={14} /> GITHUB
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.5)',
                    border: '1px solid var(--color-border-dim)',
                    textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700,
                    fontFamily: 'var(--font-mono)', letterSpacing: '0.05em'
                  }}>
                  <Globe size={14} /> LIVE
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
