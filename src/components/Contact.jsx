import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const SOCIAL = [
  { icon: GithubIcon, label: 'GitHub', handle: '@qarizafar12-max', href: 'https://github.com/qarizafar12-max/', color: '#fff' },
  { icon: Mail, label: 'Email', handle: 'exocde53@gmail.com', href: 'mailto:exocde53@gmail.com', color: '#00ffe7' },
  { icon: MessageSquare, label: 'Discord', handle: 'Join Server', href: 'https://discord.gg/TP2cRaRqn', color: '#5865f2' },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1200);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'rgba(6,22,38,0.8)',
    border: '1px solid rgba(0,255,231,0.15)',
    borderRadius: '10px', color: '#c8d8e8',
    fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem',
    outline: 'none', transition: 'all 0.25s ease',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" ref={ref} style={{
      padding: '120px 24px 80px',
      background: 'linear-gradient(180deg, transparent, rgba(0,255,231,0.015))',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">CONTACT</span>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800, color: '#fff', marginTop: '12px', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Let's <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Talk</span>
          </h2>
          <p style={{ color: 'var(--color-text-dim)', maxWidth: '480px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Have a project or want to collaborate? Drop a message — I respond fast.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Social links */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
            transition: 'all 0.7s ease',
            display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <h3 style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.15em', color: 'rgba(0,255,231,0.6)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Connect
            </h3>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '18px 20px', borderRadius: '12px',
                background: 'rgba(6,22,38,0.8)',
                border: '1px solid rgba(0,255,231,0.1)',
                textDecoration: 'none', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '60'; e.currentTarget.style.background = s.color + '08'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,231,0.1)'; e.currentTarget.style.background = 'rgba(6,22,38,0.8)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: s.color + '15', border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <s.icon size={18} color={s.color} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem', marginBottom: '2px' }}>{s.label}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem', color: 'rgba(200,216,232,0.45)', letterSpacing: '0.04em' }}>{s.handle}</div>
                </div>
              </a>
            ))}

            {/* Availability indicator */}
            <div style={{
              marginTop: '12px', padding: '18px 24px', borderRadius: '16px',
              background: 'rgba(204, 255, 0, 0.05)', border: '1px solid var(--color-accent-glow)',
              display: 'flex', alignItems: 'center', gap: '14px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 10px var(--color-accent-glow)', animation: 'glow-pulse 1.5s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2px', fontFamily: 'var(--font-mono)' }}>AVAILABLE NOW</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>Open to freelance & full-time</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)',
            transition: 'all 0.7s ease 0.15s',
            display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <input
              type="text" placeholder="Your name" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,255,231,0.5)'; e.target.style.boxShadow = '0 0 16px rgba(0,255,231,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(0,255,231,0.15)'; e.target.style.boxShadow = 'none'; }}
            />
            <input
              type="email" placeholder="Your email" value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,255,231,0.5)'; e.target.style.boxShadow = '0 0 16px rgba(0,255,231,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(0,255,231,0.15)'; e.target.style.boxShadow = 'none'; }}
            />
            <textarea
              rows={5} placeholder="Your message..." value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,255,231,0.5)'; e.target.style.boxShadow = '0 0 16px rgba(0,255,231,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(0,255,231,0.15)'; e.target.style.boxShadow = 'none'; }}
            />

            {/* Status */}
            {status === 'sent' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#39ff14', fontSize: '0.85rem' }}>
                <CheckCircle size={16} /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff4757', fontSize: '0.85rem' }}>
                <AlertCircle size={16} /> Something went wrong. Try again.
              </div>
            )}

            <button type="submit" disabled={status === 'sending'} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '14px 28px', borderRadius: '12px', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontFamily: "var(--font-mono)", fontSize: '0.85rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--color-bg-deep)', fontWeight: 800, border: 'none',
              background: 'linear-gradient(135deg, var(--color-primary), #00b8a9)',
              boxShadow: '0 0 24px var(--color-primary-glow)',
              opacity: status === 'sending' ? 0.7 : 1,
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
