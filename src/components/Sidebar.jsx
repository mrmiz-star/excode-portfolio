import React, { useState } from 'react';
import { Activity, Terminal, Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { systemStatus } from '../config/systemStatus';

const ACTIVITY_LOGS = [
  { time: "10:14:02Z", action: "DEPLOYED", ref: "v3.0.0-evolution", task: "Dashboard layout conversion" },
  { time: "05:51:24Z", action: "OPTIMIZED", ref: "excode-pdf-tool", task: "Lazy load architecture graph nodes" },
  { time: "04:57:38Z", action: "RESOLVED", ref: "project-modal", task: "React hooks ReferenceError patch" },
  { time: "12:11:00Z", action: "UPGRADED", ref: "pyget-x", task: "AI concurrent download accelerator schema" },
  { time: "08:34:10Z", action: "HARDENED", ref: "secure-encoder-pro", task: "RSA key exchange thread decoupling" }
];

export default function Sidebar() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1000);
  };

  return (
    <aside className="dashboard-sidebar">
      
      {/* 🟢 System Status Widget */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.72rem', 
          color: 'var(--color-primary)', 
          letterSpacing: '0.15em', 
          marginBottom: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={14} /> SYSTEM STATUS
          </span>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>LIVE READOUT</span>
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.values(systemStatus).map((sys, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderBottom: '1px solid var(--color-border-dim)', 
              paddingBottom: '8px' 
            }}>
              <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>{sys.label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  width: '6px', height: '6px', borderRadius: '50%', 
                  background: sys.status === 'stable' || sys.status === 'operational' || sys.status === 'active' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  boxShadow: `0 0 8px ${sys.status === 'stable' || sys.status === 'operational' || sys.status === 'active' ? 'var(--color-primary)' : 'var(--color-secondary)'}`
                }} />
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.68rem', 
                  color: sys.status === 'stable' || sys.status === 'operational' || sys.status === 'active' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em' 
                }}>
                  {sys.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📡 Activity Feed Widget */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.72rem', 
          color: 'var(--color-primary)', 
          letterSpacing: '0.15em', 
          marginBottom: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={14} /> ACTIVITY FEED
          </span>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>UPDATES</span>
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ACTIVITY_LOGS.map((log, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.65rem', 
                  color: log.action === 'DEPLOYED' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  background: log.action === 'DEPLOYED' ? 'rgba(0, 229, 255, 0.05)' : 'rgba(191, 0, 255, 0.05)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  fontWeight: 'bold'
                }}>
                  {log.action}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)' }}>
                  {log.time}
                </span>
              </div>
              <p style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 500 }}>
                {log.task}
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-dim)' }}>
                ref: {log.ref}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 Contact Terminal Widget */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.72rem', 
          color: 'var(--color-primary)', 
          letterSpacing: '0.15em', 
          marginBottom: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={14} /> CONTACT TERMINAL
          </span>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>SECURE SHELL</span>
        </h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="operator_name"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={{
                width: '100%', 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid var(--color-border-dim)', 
                borderRadius: '4px',
                padding: '10px 12px',
                color: '#fff',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border-dim)'}
            />
          </div>
          
          <div style={{ position: 'relative' }}>
            <input 
              type="email" 
              placeholder="operator_email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={{
                width: '100%', 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid var(--color-border-dim)', 
                borderRadius: '4px',
                padding: '10px 12px',
                color: '#fff',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border-dim)'}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <textarea 
              placeholder="message_body..."
              rows={4}
              required
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{
                width: '100%', 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid var(--color-border-dim)', 
                borderRadius: '4px',
                padding: '10px 12px',
                color: '#fff',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none',
                resize: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border-dim)'}
            />
          </div>

          {status === 'sent' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <CheckCircle size={14} /> TRANSMISSION SUCCESSFUL
            </div>
          )}
          {status === 'error' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-secondary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <AlertCircle size={14} /> TRANSMISSION ERROR
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'sending'}
            style={{
              padding: '10px',
              background: 'var(--color-primary)',
              color: 'var(--color-bg-deep)',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <Send size={12} /> {status === 'sending' ? 'TRANSMITTING...' : 'SEND MSG'}
          </button>
        </form>
      </div>

    </aside>
  );
}
