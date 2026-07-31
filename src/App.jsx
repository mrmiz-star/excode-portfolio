import React from 'react';
import DigitalBackground from './components/DigitalBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import HowIWork from './components/HowIWork';
import ExcodeBrand from './components/ExcodeBrand';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070B] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Living Animated Canvas Background */}
      <DigitalBackground />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Header onOpenContact={scrollToContact} />
        
        <main>
          {/* Section 2: Hero */}
          <Hero onOpenContact={scrollToContact} />

          {/* Section 3: Quick Trust Strip */}
          <TrustStrip />

          {/* Section 4: About MR MIZ */}
          <About />

          {/* Section 5: Services */}
          <Services onOpenContact={scrollToContact} />

          {/* Section 6: Featured Projects */}
          <Projects onOpenContact={scrollToContact} />

          {/* Section 7: How I Work */}
          <HowIWork onOpenContact={scrollToContact} />

          {/* Section 8: EXCODE Corporation */}
          <ExcodeBrand onOpenContact={scrollToContact} />

          {/* Section 9: Why Work With Me */}
          <WhyWorkWithMe />

          {/* Section 10: Homepage FAQ */}
          <FaqSection onOpenContact={scrollToContact} />

          {/* Section 11 & 12: Contact Section */}
          <Contact />
        </main>

        {/* Section 13: Footer */}
        <Footer />
      </div>
    </div>
  );
}
