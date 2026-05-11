import React from 'react';
import { Server, Cpu, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PILLARS = [
  {
    icon: Cpu,
    label: "What I Build",
    color: "#00ffe7",
    points: [
      "Systems that solve real-world operational problems — not tutorial projects",
      "Backend-heavy applications with full data flow: auth, storage, API, logic",
      "Low-level tools with real OS integration — DLL injection, process control, HWID",
    ],
  },
  {
    icon: Layers,
    label: "How I Think",
    color: "#bf00ff",
    points: [
      "Structure first — architecture is designed before a single line is written",
      "Clean architecture over quick hacks — modular, replaceable, scalable layers",
      "Security is a foundation, not a feature — HWID auth, zero-trust design by default",
    ],
  },
  {
    icon: Server,
    label: "What's Different",
    color: "#39ff14",
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
    <section id="engineering" style={{ padding: '100px 24px' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">// engineering.focus</span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
          }}>
            How I <span style={{ color: '#00ffe7', textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>Engineer</span>
          </h2>
          <p style={{
            color: 'rgba(200,216,232,0.45)', maxWidth: '440px',
            margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7,
          }}>
            Not a tutorial developer. Not a framework copier. A systems builder.
          </p>
        </div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.label}
              className="glass-card"
              style={{
                padding: '36px 32px',
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: `${p.color}12`, border: `1px solid ${p.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px', boxShadow: `0 0 24px ${p.color}15`,
              }}>
                <p.icon size={24} color={p.color} />
              </div>

              <h3 style={{
                fontSize: '0.9rem', fontWeight: 700, color: p.color,
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.1em', marginBottom: '20px',
                textTransform: 'uppercase',
              }}>
                {p.label}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {p.points.map((point, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{
                      color: p.color, fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '0.85rem', flexShrink: 0, marginTop: '1px', opacity: 0.55,
                    }}>›</span>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(200,216,232,0.62)', lineHeight: 1.65 }}>
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
