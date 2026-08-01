import React from 'react';
import { ArrowRight, Sparkles, User, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenContact }) {
  return (
    <section id="about" className="relative z-10 py-28 bg-[#05070B] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            ABOUT MR MIZ
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Turning Ideas Into <span className="text-gradient-cyan">Working Software.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#091122] to-[#060A14] text-center space-y-6 shadow-2xl">
              
              {/* Profile Avatar Frame */}
              <div className="relative w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 via-cyan-300 to-blue-600 p-[3px] shadow-2xl shadow-cyan-500/30">
                <img
                  src="/images/logo.png"
                  alt="Muhammad Ibrahim Zafar (MR MIZ)"
                  className="w-full h-full object-cover rounded-full bg-slate-950"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  MR MIZ
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mt-1">
                  Muhammad Ibrahim Zafar
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Founder & Lead Software Developer at EXCODE Corporation
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-left text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-cyan-300 font-bold">Python • Web • Windows Apps</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400">Focus:</span>
                  <span className="text-white font-bold">Client Problem Solving</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Four-Step Approach */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm <strong className="text-white font-semibold">Muhammad Ibrahim Zafar (MR MIZ)</strong>, a software developer and the founder of <strong className="text-cyan-300 font-semibold">EXCODE Corporation</strong>.
              </p>

              <p>
                I build practical digital solutions for businesses, startups, and individuals—from websites and business systems to Windows applications, automation tools, and AI-powered software.
              </p>
            </div>

            {/* Approach Process Box */}
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold block">
                My Approach:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-white font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700">Understand the problem</span>
                <span className="text-cyan-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700">Design the solution</span>
                <span className="text-cyan-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700">Build it properly</span>
                <span className="text-cyan-400">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700">Deliver and support it</span>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              I work directly with clients throughout the development process, keeping communication clear and making sure the final software actually solves the problem it was built for.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Work Directly With MR MIZ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
