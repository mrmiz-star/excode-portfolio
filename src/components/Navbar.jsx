import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Zap } from 'lucide-react';
import { identity } from '../config/identity';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(2,11,20,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,231,0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <nav style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(0,255,231,0.2), rgba(0,255,231,0.05))',
            border: '1px solid rgba(0,255,231,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(0,255,231,0.2)',
          }}>
            <Terminal size={16} color="#00ffe7" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#00ffe7',
              textShadow: '0 0 12px rgba(0,255,231,0.5)',
              letterSpacing: '0.05em',
              lineHeight: 1.1
            }}>
              {identity.developerName}
            </span>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.65rem',
              color: 'rgba(200,216,232,0.5)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {identity.subText}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href.replace('#', ''))}
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === link.href.replace('#', '') ? '#00ffe7' : 'rgba(200,216,232,0.65)',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
                background: active === link.href.replace('#', '') ? 'rgba(0,255,231,0.08)' : 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#00ffe7';
                e.currentTarget.style.background = 'rgba(0,255,231,0.06)';
              }}
              onMouseLeave={e => {
                if (active !== link.href.replace('#', '')) {
                  e.currentTarget.style.color = 'rgba(200,216,232,0.65)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-neon-solid"
            style={{
              marginLeft: '12px',
              padding: '8px 20px',
              borderRadius: '7px',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#020b14',
              fontWeight: 700,
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #00ffe7, #00b8a9)',
              boxShadow: '0 0 20px rgba(0,255,231,0.35)',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0,255,231,0.55)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,231,0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Zap size={13} /> Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'rgba(0,255,231,0.08)',
            border: '1px solid rgba(0,255,231,0.2)',
            borderRadius: '8px',
            padding: '8px',
            cursor: 'pointer',
            color: '#00ffe7',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(2,11,20,0.97)',
          borderTop: '1px solid rgba(0,255,231,0.1)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(200,216,232,0.75)',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                borderLeft: '2px solid transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#00ffe7';
                e.currentTarget.style.borderLeftColor = '#00ffe7';
                e.currentTarget.style.background = 'rgba(0,255,231,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(200,216,232,0.75)';
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
