import React from 'react';
import { Terminal } from 'lucide-react';
import { identity } from '../config/identity';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border-dim)',
      padding: '28px 24px',
      background: 'var(--color-bg-deep)',
    }}>
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '5px',
            background: 'rgba(0, 229, 255, 0.04)',
            border: '1px solid rgba(0, 229, 255, 0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Terminal size={13} color="var(--color-primary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem', color: 'var(--color-primary)',
              letterSpacing: '0.05em', lineHeight: 1.1
            }}>
              {identity.developerName}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>
              {identity.brandName}
            </span>
          </div>
        </div>

        {/* Status */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'var(--color-primary)',
            display: 'inline-block'
          }} />
          EX CODE ENGINEERING DASHBOARD · v3.0.0
        </div>

        {/* Copyright */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem', color: 'rgba(255,255,255,0.15)',
          letterSpacing: '0.06em',
        }}>
          © {year} {identity.brandName}
        </div>
      </div>
    </footer>
  );
}
