import React from 'react';
import { MessageSquare, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';

export default function HowIWork({ onOpenContact }) {
  const steps = [
    {
      step: '01',
      title: 'Tell Me Your Idea',
      desc: 'Share your idea, requirements, or business problem.',
      icon: MessageSquare,
      detail: 'No complicated specs needed. A quick summary is enough to start.',
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We discuss features, technology, timeline, and budget.',
      icon: Compass,
      detail: 'Clear roadmap and fixed expectations before writing any code.',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Development begins with regular communication and progress.',
      icon: Code,
      detail: 'Direct access to updates and milestone demonstrations.',
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'Your solution is tested, delivered, and ready to use.',
      icon: Rocket,
      detail: 'Full deployment, documentation, and ongoing support.',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#070B14]/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            TRANSPARENT PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Idea to <span className="text-gradient-cyan">Product.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Here is exactly what happens when you work with MR MIZ—simple, clear, and direct.
          </p>
        </div>

        {/* 4 Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            Ready to Start Step 01? Contact MR MIZ →
          </button>
        </div>

      </div>
    </section>
  );
}
