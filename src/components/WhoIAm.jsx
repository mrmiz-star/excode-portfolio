import React from 'react';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

export default function WhoIAm() {
  return (
    <section id="about" className="relative z-10 py-32 bg-[#030509]/90 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Scene 01 Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <span className="text-cyan-300 font-bold">SCENE 01</span> // WHO I AM
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight uppercase">
              TURNING IDEAS INTO <br />
              <span className="text-gradient-cyan">WORKING SOFTWARE.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-base sm:text-xl leading-relaxed font-normal">
              <p className="text-white font-medium text-lg sm:text-2xl border-l-2 border-cyan-400 pl-4">
                "I didn't start by trying to build a company."
              </p>
              
              <p>
                I started by wanting to understand how things work.
              </p>
              
              <p className="text-slate-400 text-sm sm:text-lg">
                One project became another. Learning became building. Building became a way to solve real problems.
              </p>

              <p className="text-cyan-300 font-medium">
                Today I build software across web, desktop, AI/ML and automation.
              </p>
            </div>

            {/* Quick Stat Anchors */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">01</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Developer</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400">100%</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Custom Architecture</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">Global</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Client Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Logo Visual Scene */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              
              {/* Outer Spatial Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-violet-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

              <div className="relative glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 text-center space-y-6 shadow-2xl">
                
                {/* Large Logo Graphic */}
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 p-[2.5px] shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img
                    src="/images/logo.png"
                    alt="MR MIZ Emblem"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase">
                    MR MIZ
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mt-1">
                    EXCODE CORPORATION
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>SYSTEM ARCHITECT</span>
                  <span className="text-cyan-400">ACTIVE</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
