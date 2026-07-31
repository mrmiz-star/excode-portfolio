import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracking
      const sections = ['home', 'services', 'projects', 'about', 'excode', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'EXCODE', href: '#excode', id: 'excode' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="MR MIZ Portfolio Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all overflow-hidden">
              <img
                src="/images/logo.png"
                alt="MR MIZ Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                MR MIZ
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
                EXCODE CORP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B101D]/70 backdrop-blur-md border border-cyan-500/15 rounded-full px-4 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Primary Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors flex items-center justify-between"
              >
                {item.label}
                <span className="text-xs text-cyan-500/60 font-mono">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
