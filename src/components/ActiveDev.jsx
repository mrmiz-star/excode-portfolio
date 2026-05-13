import React, { useRef, useState, useEffect } from 'react';
import { Terminal, GitBranch, Shield, Package, ChevronRight } from 'lucide-react';

const DEPLOYMENT_FOCUS = [
  { icon: Package, label: 'Modular Layering', desc: 'Isolating core logic from interface layers for maximum system reliability.' },
  { icon: Shield, label: 'Zero-Trust Auth', desc: 'Implementing HWID and multi-factor validation across all production backends.' },
  { icon: GitBranch, label: 'Versioned APIs', desc: 'Enforcing strict REST documentation and endpoint versioning for scalability.' },
];

const BUILD_LOG = [
  { phase: 'ARCHITECT', task: 'Normalizing project schemas for V3 Portfolio Data Engine', status: 'COMPLETED' },
  { phase: 'ENGINEER', task: 'Implementing global telemetry monitoring in core infrastructure', status: 'ACTIVE' },
  { phase: 'OPTIMIZE', task: 'Reducing render latency in high-density project modals', status: 'PENDING' },
  { phase: 'SECURITY', task: 'Hardening licensing backend with encrypted HWID validation', status: 'OPERATIONAL' },
];

export default function ActiveDev() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: '120px 24px', background: 'rgba(0, 229, 255, 0.01)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">// platform.development</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Active <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Building</span> Pipeline
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '540px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            Currently hardening production systems and normalizing architectural patterns across the EXCODE ecosystem.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px', 
          alignItems: 'start' 
        }}>
          
          {/* Focus Columns */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {DEPLOYMENT_FOCUS.map((item, i) => (
               <div key={i} className="glass-card" style={{ 
                 padding: '30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
                 opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-20px)',
                 transition: `all 0.6s ease ${i * 0.1}s`
               }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                     <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <item.icon size={16} color="var(--color-primary)" />
                     </div>
                     <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{item.label}</h3>
                  </div>
                  <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Real-time Build Log */}
          <div className="glass-card" style={{ 
            padding: 'var(--card-padding, 32px)', borderRadius: '24px', border: '1px solid rgba(0, 229, 255, 0.1)',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease'
          }}>
             <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(0, 229, 255, 0.6)', letterSpacing: '0.2em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal size={14} /> ACTIVE_BUILD_LOG
             </h3>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {BUILD_LOG.map((log, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                     <div style={{ 
                       fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-primary)', 
                       padding: '4px 8px', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '4px', height: 'fit-content',
                       minWidth: '70px', textAlign: 'center', letterSpacing: '0.05em'
                     }}>
                        {log.phase}
                     </div>
                     <div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                           {log.task} <ChevronRight size={12} color="rgba(255,255,255,0.2)" />
                        </div>
                        <div style={{ 
                          fontFamily: 'var(--font-mono)', fontSize: '0.65rem', 
                          color: log.status === 'COMPLETED' || log.status === 'OPERATIONAL' ? '#39ff14' : '#00e5ff',
                          opacity: 0.8
                        }}>
                           STATUS: {log.status}
                        </div>
                     </div>
                  </div>
                ))}
             </div>

             <div style={{ 
               marginTop: '40px', padding: '16px', background: 'rgba(255,255,255,0.02)', 
               borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)',
               display: 'flex', alignItems: 'center', gap: '12px'
             }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 10px #39ff14' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                   SYSTEM READY: WAITING FOR INSTRUCTION_
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
