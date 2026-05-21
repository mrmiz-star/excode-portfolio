import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { identity } from '../config/identity';

const navLinks = [
  { label: 'OVERVIEW', href: '#home-overview' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 7, 18, 0.97)' : 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-border-dim)',
      }}
    >
      <nav style={{
        maxWidth: '1440px', margin: '0 auto',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Brand */}
        <a href="#home-overview" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '5px',
            background: 'rgba(0, 229, 255, 0.04)',
            border: '1px solid rgba(0, 229, 255, 0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <Terminal size={13} color="var(--color-primary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 900, color: '#fff',
              letterSpacing: '0.02em', lineHeight: 1
            }}>
              MIZ
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px'
            }}>
              EX CODE · DASHBOARD
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                padding: '7px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.35)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ width: '1px', height: '14px', background: 'var(--color-border-dim)', margin: '0 8px' }} />

          {/* GitHub CTA */}
          <a
            href="https://github.com/qarizafar12-max"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 18px',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-bg-deep)',
              fontWeight: 800,
              textDecoration: 'none',
              background: 'var(--color-primary)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            GITHUB
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--color-border-dim)',
            borderRadius: '5px',
            padding: '7px',
            cursor: 'pointer',
            color: 'var(--color-primary)',
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(3, 7, 18, 0.98)',
          borderTop: '1px solid var(--color-border-dim)',
          padding: '16px',
          display: 'flex', flexDirection: 'column', gap: '2px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                padding: '14px 16px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'rgba(0,229,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
