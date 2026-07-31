import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const trustItems = [
    'Web Development',
    'Desktop Apps',
    'AI/ML',
    'Automation',
  ];

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Small badge label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-8 text-xs font-mono font-medium text-cyan-300 shadow-lg shadow-cyan-500/5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>MR MIZ • SOFTWARE DEVELOPER</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          I Build Digital Solutions That{' '}
          <span className="text-gradient-cyan">Move Businesses Forward.</span>
        </h1>

        {/* Subtitle / Positioning Quote */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Custom websites, desktop applications, AI/ML solutions, automation, and software built around your goals.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 rounded-full backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            View My Work
          </a>
        </div>

        {/* Small trust line */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-400">
          {trustItems.map((item, idx) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{item}</span>
              </div>
              {idx < trustItems.length - 1 && (
                <span className="hidden sm:inline text-slate-700">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
