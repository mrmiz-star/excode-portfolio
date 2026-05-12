import React, { useState, useEffect } from 'react';
import MouseTrail from './components/MouseTrail';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Engineering from './components/Engineering';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import ActiveDev from './components/ActiveDev';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="animate-fadeIn">
        <MouseTrail />
        <div className="scanline-overlay" />
        <Navbar />
        <main>
          <Hero />
          <div className="divider-glow" />
          <Engineering />
          <div className="divider-glow" />
          <ProjectGrid onOpenDetails={setSelectedProject} />
          <div className="divider-glow" />
          <Skills />
          <div className="divider-glow" />
          <ActiveDev />
          <div className="divider-glow" />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Global Project Detail Modal (Outside of any transformed containers) */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}


