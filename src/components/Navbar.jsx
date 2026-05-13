import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, MessageSquare } from 'lucide-react';
import { identity } from '../config/identity';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'FOCUS', href: '#focus' },
  { label: 'CONTACT', href: '#contact' },
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
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 8, 15, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <nav style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Brand: MIZ FIRST */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '6px',
            background: 'rgba(0, 229, 255, 0.05)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <Terminal size={14} color="var(--color-primary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: '1.1rem', fontWeight: 950, color: '#fff',
              letterSpacing: '0.02em', lineHeight: 1
            }}>
              MIZ
            </span>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px'
            }}>
              EX CODE SIGNATURE
            </span>
          </div>
        </a>

        {/* Navigation Grid */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href.replace('#', ''))}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: active === link.href.replace('#', '') ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.4)',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                background: active === link.href.replace('#', '') ? 'rgba(0, 229, 255, 0.05)' : 'transparent',
                fontWeight: active === link.href.replace('#', '') ? 700 : 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.03)';
              }}
              onMouseLeave={e => {
                if (active !== link.href.replace('#', '')) {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
          
          <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)', margin: '0 12px' }} />
          
          <a
            href="#contact"
            style={{
              padding: '10px 24px',
              borderRadius: '4px',
              fontFamily: "var(--font-mono)",
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-bg-deep)',
              fontWeight: 900,
              textDecoration: 'none',
              background: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <MessageSquare size={14} /> LET'S TALK
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '6px',
            padding: '8px',
            cursor: 'pointer',
            color: 'var(--color-primary)',
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(3, 8, 15, 0.98)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                padding: '16px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 950px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
