import React, { useState, useEffect } from 'react';
import DigitalBackground from './components/DigitalBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import ProblemSection from './components/ProblemSection';
import Projects from './components/Projects';
import About from './components/About';
import HowIWork from './components/HowIWork';
import ExcodeBrand from './components/ExcodeBrand';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);

      // Scroll handling
      if (hash.startsWith('#terms') || hash.startsWith('#privacy')) {
        document.title = hash.startsWith('#terms')
          ? 'Terms of Use - MR MIZ / EXCODE Corporation'
          : 'Privacy Policy - MR MIZ / EXCODE Corporation';
      } else {
        document.title = 'MR MIZ | Senior Full-Stack Developer & Lead Software Engineer | EXCODE Corporation';
        // If navigating to a home section like #services or #projects
        if (hash && hash !== '#home' && !hash.startsWith('#terms') && !hash.startsWith('#privacy')) {
          const targetId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isTermsPage = currentHash.startsWith('#terms') || currentHash.startsWith('#/terms') || currentHash === '#terms-of-use' || currentHash === '#terms-of-service';
  const isPrivacyPage = currentHash.startsWith('#privacy') || currentHash.startsWith('#/privacy') || currentHash === '#privacy-policy';

  const scrollToContact = () => {
    if (isTermsPage || isPrivacyPage) {
      window.location.hash = '#contact';
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isTermsPage) {
    return <TermsOfUsePage />;
  }

  if (isPrivacyPage) {
    return <PrivacyPolicyPage />;
  }

  return (
    <div className="relative min-h-screen bg-[#05070B] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Living Animated Canvas Background */}
      <DigitalBackground />

      {/* Main Page Layout - Exact Sequence per task.txt */}
      <div className="relative z-10">
        {/* 1. Navbar */}
        <Header onOpenContact={scrollToContact} />
        
        <main>
          {/* 2. Hero — biggest upgrade (with PyGet X card on right) */}
          <Hero onOpenContact={scrollToContact} />

          {/* 3. Trust strip (TECHNOLOGY I WORK WITH) */}
          <TrustStrip />

          {/* 4. Services (WHAT I CAN BUILD - Clean 2x3 Grid with SVG icons) */}
          <Services onOpenContact={scrollToContact} />

          {/* 5. "Tell me your problem" conversion section */}
          <ProblemSection onOpenContact={scrollToContact} />

          {/* 6. PyGet X featured case study & More Projects */}
          <Projects onOpenContact={scrollToContact} />

          {/* 7. About MR MIZ (Turning Ideas Into Working Software) */}
          <About onOpenContact={scrollToContact} />

          {/* 8. Process (OUR PROCESS - Horizontal timeline on desktop) */}
          <HowIWork onOpenContact={scrollToContact} />

          {/* 9. Built Under EXCODE Corporation */}
          <ExcodeBrand onOpenContact={scrollToContact} />

          {/* 10. "Why MR MIZ" / The MR MIZ Difference */}
          <WhyWorkWithMe />

          {/* 11. Frequently Asked Questions (7 Q&As) */}
          <FaqSection onOpenContact={scrollToContact} />

          {/* 12. Contact — Have a business problem? Let's Build the Solution */}
          <Contact />
        </main>

        {/* 13. Footer */}
        <Footer />

        {/* Floating Quick WhatsApp for Mobile Conversion */}
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

