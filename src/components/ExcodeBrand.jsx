import React, { useState } from 'react';
import { Building2, ArrowRight, Check, Sparkles, X, ShieldCheck } from 'lucide-react';

export default function ExcodeBrand({ onOpenContact }) {
  const [modalOpen, setModalOpen] = useState(false);

  const capabilities = [
    'Web Applications',
    'Desktop Software',
    'Business Systems',
    'AI/ML Solutions',
    'Automation Systems',
    'E-Commerce Platforms',
    'Custom Software',
  ];

  return (
    <section id="excode" className="relative z-10 py-28 bg-[#05070B] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#0A1224] via-[#070D1A] to-[#050811] border border-cyan-500/25 shadow-2xl overflow-hidden group">
          
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                BUILT UNDER EXCODE CORPORATION
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                EXCODE Corporation <span className="text-gradient-cyan">— Technology & Software Solutions</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                <strong className="text-white">EXCODE Corporation</strong> is the technology brand behind my software development work. Our focus is building practical digital solutions for businesses, startups, and individuals.
              </p>

              {/* What We Build Pills */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
                  We Build:
                </span>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs font-semibold text-cyan-300 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Positioning Quote */}
              <div className="p-4 rounded-xl bg-cyan-500/10 border-l-4 border-cyan-400 text-white font-semibold text-sm sm:text-base italic">
                "Technology built around your needs—not the other way around."
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Explore EXCODE Corporation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Brand Matrix Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-6 bg-slate-950/60">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-extrabold text-xl font-mono">
                      EX
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-white block">
                        EXCODE Corporation
                      </span>
                      <span className="text-[11px] font-mono text-cyan-400">
                        Technology Ecosystem
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 font-bold">
                    ACTIVE BRAND
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300 font-medium">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 font-mono">Founder & Lead Dev:</span>
                    <span className="font-bold text-white">MR MIZ</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 font-mono">Flagship Software:</span>
                    <span className="font-bold text-cyan-300">PyGet X</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 font-mono">Delivery Model:</span>
                    <span className="font-bold text-white">Custom Engineering</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed italic text-center border-t border-slate-800/80 pt-4">
                  All custom software products and solutions are engineered under EXCODE Corporation quality standards.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* EXCODE Brand Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-100 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5 text-cyan-400" />
            </button>

            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-extrabold text-white">EXCODE Corporation Overview</h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              EXCODE Corporation is the technology brand behind my software development work, creating practical software for web, Windows desktop, automation, and AI/ML.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold">Brand Principles</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <strong>Custom Architecture:</strong> Software designed around your business needs.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <strong>Direct Developer Contact:</strong> Speak directly with the developer building your code.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <strong>Long-Term Maintenance:</strong> Ongoing support, bug fixes, and updates after launch.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setModalOpen(false);
                  onOpenContact();
                }}
                className="px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              >
                Start a Project with EXCODE →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
