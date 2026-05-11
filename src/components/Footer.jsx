import React from 'react';
import { Terminal, Heart } from 'lucide-react';
import { identity } from '../config/identity';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,255,231,0.08)',
      padding: '40px 24px',
      background: 'rgba(2,11,20,0.8)',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '7px',
            background: 'rgba(0,255,231,0.08)', border: '1px solid rgba(0,255,231,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Terminal size={14} color="#00ffe7" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.9rem', color: '#00ffe7',
              textShadow: '0 0 10px rgba(0,255,231,0.4)',
              letterSpacing: '0.05em',
              lineHeight: 1.1
            }}>
              {identity.developerName}
            </span>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.6rem', color: 'rgba(200,216,232,0.4)',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>
              Under {identity.brandName}
            </span>
          </div>
        </div>

        {/* Made with */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.72rem', color: 'rgba(200,216,232,0.3)',
          letterSpacing: '0.06em',
        }}>
          Built with <Heart size={12} color="#ff4757" style={{ margin: '0 2px' }} fill="#ff4757" /> using React + Vite + Tailwind
        </div>

        {/* Copyright */}
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.72rem', color: 'rgba(200,216,232,0.25)',
          letterSpacing: '0.06em',
        }}>
          © {year} {identity.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
