import React from 'react';
import { ArrowRight, Sparkles, Code2, ExternalLink } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Conversion Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 backdrop-blur-md text-xs font-mono font-medium text-cyan-300 shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>SOFTWARE DEVELOPER & FOUNDER</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              I Build Custom Software That{' '}
              <span className="text-gradient-cyan">Solves Real Business Problems.</span>
            </h1>

            {/* Detailed Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I design and develop custom websites, desktop applications, business systems, automation tools, AI/ML solutions, and software tailored to your requirements.
            </p>

            {/* Sub-badge line */}
            <div className="inline-block text-xs font-mono text-cyan-400/90 font-medium px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800">
              Founder & Lead Developer at EXCODE Corporation
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-extrabold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 rounded-full backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
              </a>
            </div>

          </div>

          {/* Right Column: PyGet X Product Preview Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#090E1A] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl space-y-4">
                
                {/* Card Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    EXCODE CORPORATION • FLAGSHIP SOFTWARE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* PyGet X Screenshot Container */}
                <a
                  href="https://mrmiz-star.github.io/PYGETX-WEB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group-hover:border-cyan-500/50 transition-colors"
                >
                  <img
                    src="/images/pyget_x.png"
                    alt="PyGet X Flagship Software"
                    className="w-full h-auto object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-transparent to-transparent opacity-60" />
                </a>

                {/* Product Title & Proof Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      PyGet X
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      Windows Desktop Software
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Modern Windows Download Manager built with a multi-threaded engine, resume support, and browser integration.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/60 items-center">
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    Python
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    PySide6
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    FFmpeg
                  </span>
                  <a
                    href="https://mrmiz-star.github.io/PYGETX-WEB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    Product Site <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
