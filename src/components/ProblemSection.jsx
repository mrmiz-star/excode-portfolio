import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProblemSection({ onOpenContact }) {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-[#05070B] via-[#080E1C] to-[#05070B] border-y border-cyan-500/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Conversion Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>BUSINESS PROBLEM SOLVING</span>
        </div>

        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          HAVE A <span className="text-gradient-cyan">BUSINESS PROBLEM?</span>
        </h2>

        {/* Subtitle emphasis */}
        <p className="text-xl sm:text-2xl font-bold text-cyan-400 max-w-2xl mx-auto">
          You don't need to know the technical solution.
        </p>

        {/* Supporting copy */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Tell me what you're trying to improve, automate, replace, or build.
          I'll help determine the right software to solve it.
        </p>

        {/* Direct conversion button */}
        <div className="pt-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 text-sm font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Tell Me Your Problem</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
