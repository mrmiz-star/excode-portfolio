import React from 'react';
import { Server, Cpu, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PILLARS = [
  {
    icon: Cpu,
    label: "What I Build",
    color: "var(--color-primary)",
    points: [
      "Systems that solve real-world operational problems — not tutorial projects",
      "Backend-heavy applications with full data flow: auth, storage, API, logic",
      "Low-level tools with real OS integration — DLL injection, process control, HWID",
    ],
  },
  {
    icon: Layers,
    label: "How I Think",
    color: "var(--color-secondary)",
    points: [
      "Structure first — architecture is designed before a single line is written",
      "Clean architecture over quick hacks — modular, replaceable, scalable layers",
      "Security is a foundation, not a feature — HWID auth, zero-trust design by default",
    ],
  },
  {
    icon: Server,
    label: "What's Different",
    color: "var(--color-accent)",
    points: [
      "I don't build demos — I build usable systems deployed to real users",
      "Every project is a complete loop: design → build → deploy → monitor",
      "Focus on logic and system reliability, not just UI polish",
    ],
  },
];

export default function Engineering() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="engineering" style={{ padding: '120px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">// engineering.focus</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            How I <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Engineer</span>
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '440px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            Not a tutorial developer. Not a framework copier. A systems builder.
          </p>
        </div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.label}
              className="glass-card"
              style={{
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: '24px'
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '18px',
                background: `${p.color}10`, border: `1px solid ${p.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '32px', boxShadow: `0 0 30px ${p.color}15`,
              }}>
                <p.icon size={28} color={p.color} />
              </div>

              <h3 style={{
                fontSize: '1rem', fontWeight: 700, color: p.color,
                fontFamily: "var(--font-mono)",
                letterSpacing: '0.15em', marginBottom: '24px',
                textTransform: 'uppercase',
              }}>
                {p.label}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {p.points.map((point, j) => (
                  <li key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{
                      color: p.color, fontFamily: "var(--font-mono)",
                      fontSize: '1rem', flexShrink: 0, marginTop: '2px', opacity: 0.6,
                    }}>›</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
