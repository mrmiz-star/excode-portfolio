import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Lazy-load ProjectModal — not needed until user clicks a card
const ProjectModal = lazy(() => import('./components/ProjectModal'));

// ── System Status Bar constants ──
const BUILD_TIME = '0.94s';
const BUNDLE_SIZE = '340kb';
const REACT_VER = 'React 19';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="animate-fadeIn">
        <div className="operational-bg" />
        <div className="scanline-overlay" />

        <Navbar />

        {/* ── System Status Bar ── */}
        <div className="system-status-bar" style={{ top: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--color-primary)',
                boxShadow: '0 0 6px var(--color-primary)',
                display: 'inline-block'
              }} />
              <span style={{ color: 'var(--color-primary)' }}>System Online</span>
            </span>
            <span style={{ color: 'var(--color-border-bright)' }}>|</span>
            <span>⚡ Build: {BUILD_TIME}</span>
            <span style={{ color: 'var(--color-border-bright)' }}>|</span>
            <span>📦 Bundle: {BUNDLE_SIZE}</span>
            <span style={{ color: 'var(--color-border-bright)' }}>|</span>
            <span>🚀 {REACT_VER}</span>
          </div>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>
            EX CODE ENGINEERING DASHBOARD
          </span>
        </div>

        {/* ── Dashboard Main Frame ── */}
        <main style={{ padding: '24px', paddingTop: '148px', maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }} id="home">
            
            {/* On large screens: two column layout */}
            <style>{`
              @media (min-width: 1100px) {
                .dashboard-main-grid {
                  display: grid !important;
                  grid-template-columns: 1fr 320px;
                  gap: 24px;
                  align-items: start;
                }
              }
            `}</style>

            <div className="dashboard-main-grid">
              {/* ── LEFT MAIN PANEL ── */}
              <div>
                {/* Overview / Hero */}
                <section id="home-overview">
                  <Hero />
                </section>

                {/* Projects */}
                <section id="projects" style={{ marginBottom: '32px' }}>
                  <ProjectGrid onOpenDetails={handleOpenProject} />
                </section>

                {/* Skills Matrix */}
                <section id="skills">
                  <Skills />
                </section>
              </div>

              {/* ── RIGHT SIDEBAR ── */}
              <Sidebar />
            </div>

          </div>
        </main>

        <Footer />
      </div>

      {/* ── Global Modal (Lazy Loaded) ── */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseProject}
          />
        </Suspense>
      )}
    </>
  );
}
