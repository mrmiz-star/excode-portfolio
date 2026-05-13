import React from 'react';
import { Server, Cpu, Layers, Activity, Zap, Shield, Workflow } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { systemStatus, globalMetrics } from '../config/systemStatus';

const IDENTITY_METRICS = [
  { label: "Async Infrastructure", detail: "High-concurrency logic", icon: Workflow },
  { label: "Realtime Systems", detail: "Live data orchestration", icon: Zap },
  { label: "Telemetry Architecture", detail: "System-wide monitoring", icon: Activity },
  { label: "Security Automation", detail: "Zero-trust hardening", icon: Shield },
];

export default function Engineering() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="engineering" style={{ padding: '120px 24px', position: 'relative' }}>
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">// engineering.telemetry</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800,
            color: '#fff', marginTop: '12px', marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            System <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px var(--color-primary-glow)' }}>Operational</span> Board
          </h2>
          <p style={{
            color: 'var(--color-text-dim)', maxWidth: '480px',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7,
          }}>
            Operational status of the MIZ engineering ecosystem powered through EX CODE infrastructure.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px' 
        }}>
          
          {/* Main Dashboard Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* System Status Board */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
               <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(0, 229, 255, 0.6)', letterSpacing: '0.2em', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <Activity size={16} /> SYSTEM STATUS
               </h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 {Object.values(systemStatus).map((sys, i) => (
                   <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ 
                          width: '8px', height: '8px', borderRadius: '50%', 
                          background: sys.status === 'stable' || sys.status === 'operational' ? '#39ff14' : '#00e5ff',
                          boxShadow: `0 0 10px ${sys.status === 'stable' || sys.status === 'operational' ? '#39ff14' : '#00e5ff'}80`,
                          animation: 'pulse 2s infinite'
                        }} />
                        <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>{sys.label}</span>
                     </div>
                     <span style={{ 
                       fontFamily: 'var(--font-mono)', fontSize: '0.75rem', 
                       color: sys.status === 'stable' || sys.status === 'operational' ? '#39ff14' : '#00e5ff',
                       textTransform: 'uppercase', letterSpacing: '0.1em'
                     }}>
                       {sys.status}
                     </span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Identity Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
               {IDENTITY_METRICS.map((m, i) => (
                 <div key={i} className="glass-card" style={{ padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                       <m.icon size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                       <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{m.label}</div>
                       <div style={{ color: 'var(--color-text-dim)', fontSize: '0.78rem' }}>{m.detail}</div>
                    </div>
                 </div>
               ))}
            </div>

          </div>

          {/* Sidebar Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
             <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', background: 'rgba(0, 229, 255, 0.02)', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fff', letterSpacing: '0.15em', marginBottom: '32px' }}>LIVE METRICS</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                   {globalMetrics.map((m, i) => (
                     <div key={i}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: m.color, marginBottom: '4px', letterSpacing: '-0.05em' }}>{m.value}</div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                     </div>
                   ))}
                </div>

                <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(57, 255, 20, 0.05)', border: '1px solid rgba(57, 255, 20, 0.2)', borderRadius: '12px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#39ff14', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                      <Zap size={14} /> ACTIVE PIPELINE
                   </div>
                   <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                      Refining telemetry systems and modular engineering infrastructure.
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
