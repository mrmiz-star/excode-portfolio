import React, { useState } from 'react';
import { Building2, ArrowRight, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function ExcodeScene({ onOpenContact }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="excode" className="relative z-10 py-36 bg-[#050811] overflow-hidden border-t border-slate-900/80">
      
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Slowly Emerging Brand Mark Visual */}
        <div className="inline-block mb-8 relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 p-[2px] shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-all duration-500">
            <div className="w-full h-full bg-[#050811] rounded-[22px] flex items-center justify-center text-cyan-400 font-extrabold text-3xl tracking-tighter">
              EX
            </div>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-widest mt-4">
            TECHNOLOGY BRAND ECOSYSTEM
          </span>
        </div>

        {/* Scene Headline */}
        <div className="space-y-4 mb-8 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white uppercase">
            EXCODE
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-gradient-cyan">
            Turning ideas into digital products.
          </h3>
        </div>

        <p className="max-w-xl mx-auto text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
          <strong className="text-white">EXCODE Corporation</strong> is the central software brand where custom websites, desktop tools, AI applications, and business automation are engineered.
        </p>

        {/* Capabilities Tagline Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-3 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-12 shadow-lg">
          <span>Software</span>
          <span className="text-slate-600">•</span>
          <span>AI & ML</span>
          <span className="text-slate-600">•</span>
          <span>Automation</span>
          <span className="text-slate-600">•</span>
          <span>Digital Solutions</span>
        </div>

        {/* CTA */}
        <div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-extrabold tracking-widest uppercase text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-2xl shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            Explore EXCODE
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Brand Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-100">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5 text-cyan-400" />
            </button>

            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-extrabold text-white">About EXCODE Corporation</h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              EXCODE Corporation serves as the technology brand identity under which MR MIZ delivers custom software platforms, native desktop utilities, and AI automation for clients globally.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-cyan-400">Core Brand Principles</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <strong>Direct Engineering Access:</strong> You work straight with MR MIZ—no sales account managers.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <strong>Zero Bloat Code:</strong> Built purely for high performance and daily business utility.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <strong>Long-Term Maintenance:</strong> Bug fixes, upgrades, and hosting support included.
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
