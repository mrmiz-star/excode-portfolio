import React from 'react';
import { Cpu } from 'lucide-react';

export default function TrustStrip() {
  const techStack = [
    'PYTHON',
    'PYSIDE6',
    'FLASK',
    'DJANGO',
    'AI / ML',
    'AUTOMATION',
    'SQLITE',
    'FFmpeg',
  ];

  return (
    <section className="relative z-10 py-8 border-y border-cyan-500/15 bg-[#070B14]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label Header */}
          <div className="flex items-center gap-2.5 shrink-0 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>TECHNOLOGY I WORK WITH</span>
          </div>

          {/* Grid / Flex of Clean Technology Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-slate-200 hover:text-cyan-300 transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
