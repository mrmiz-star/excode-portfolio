import React, { useRef, useState, useEffect } from 'react';
import { GitBranch, Zap, Shield, Package } from 'lucide-react';

const FOCUS = [
  { icon: Package, label: 'Modular Design', desc: 'Every project broken into independent, replaceable layers — no monolithic spaghetti.' },
  { icon: Zap, label: 'Performance First', desc: 'No bloat. Every component earns its place. Profiled under real conditions.' },
  { icon: Shield, label: 'Clean APIs', desc: 'Backend contracts designed before implementation. Typed, versioned, documented.' },
  { icon: GitBranch, label: 'Deployment Ready', desc: 'Projects structured to be runnable and reviewable — not just readable on screen.' },
];

const REFACTOR_LOG = [
  ['status',       '"Active refactor in progress"'],
  ['priority',     '"Shop Management System → enterprise-grade architecture"'],
  ['focus',        '"Modular design, clean APIs, performance optimization"'],
  ['github_rule',  '"Repos pushed only when production-clean and well-documented"'],
  ['next_target',  '"MIZ FPS Optimizer — clean build pipeline + structured README"'],
];

export default function ActiveDev() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="active-dev" ref={ref} style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">// active.development</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
          }}>
            Active <span style={{ color: '#00ffe7', textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>Refactoring</span>
          </h2>
          <p style={{
            color: 'rgba(200,216,232,0.45)', maxWidth: '540px',
            margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7,
          }}>
            Projects are being moved into production-grade architecture — not demos being polished, but real systems being hardened for deployment.
          </p>
        </div>

        {/* Focus grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {FOCUS.map((item, i) => (
            <div
              key={item.label}
              style={{
                background: 'rgba(6,22,38,0.75)',
                border: '1px solid rgba(0,255,231,0.1)',
                borderRadius: '14px', padding: '26px 22px',
                backdropFilter: 'blur(12px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <item.icon size={20} color="#00ffe7" style={{ marginBottom: '14px', opacity: 0.75 }} />
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                {item.label}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(200,216,232,0.42)', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Refactor log terminal */}
        <div style={{
          background: 'rgba(2,11,20,0.92)',
          border: '1px solid rgba(0,255,231,0.12)',
          borderRadius: '14px', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.4s',
        }}>
          {/* Terminal bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '12px 20px',
            background: 'rgba(255,255,255,0.025)',
            borderBottom: '1px solid rgba(0,255,231,0.08)',
          }}>
            {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
              <span key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, display: 'inline-block' }} />
            ))}
            <span style={{
              fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem',
              color: 'rgba(200,216,232,0.28)', marginLeft: '8px', letterSpacing: '0.1em',
            }}>
              excode@portfolio ~ cat refactor.log
            </span>
          </div>

          {/* Log content */}
          <div style={{ padding: '24px 28px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.83rem', lineHeight: 2 }}>
            {REFACTOR_LOG.map(([key, val]) => (
              <div key={key} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ color: '#00ffe7', minWidth: '130px', opacity: 0.65 }}>"{key}":</span>
                <span style={{ color: 'rgba(200,216,232,0.7)' }}>{val}</span>
              </div>
            ))}
            <div style={{ marginTop: '6px', display: 'flex', gap: '16px' }}>
              <span style={{ color: '#39ff14' }}>$</span>
              <span style={{ display: 'inline-block', width: '8px', height: '1em', background: '#00ffe7', verticalAlign: 'text-bottom', animation: 'blink-cursor 0.8s infinite' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
