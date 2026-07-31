import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, MessageCircle, Wrench, Layers } from 'lucide-react';

export default function WhyWorkWithMe() {
  const pillars = [
    {
      title: 'Custom-Built',
      desc: 'Your solution is designed around your actual requirements.',
      icon: Layers,
    },
    {
      title: 'Modern & Professional',
      desc: 'Clean interfaces and modern development practices.',
      icon: Sparkles,
    },
    {
      title: 'Direct Communication',
      desc: 'You communicate directly with the developer working on your project.',
      icon: MessageCircle,
    },
    {
      title: 'Practical Solutions',
      desc: 'The goal is to solve your problem—not add unnecessary complexity.',
      icon: ShieldCheck,
    },
    {
      title: 'Flexible',
      desc: 'Suitable for individuals, businesses, startups, and growing companies.',
      icon: CheckCircle2,
    },
    {
      title: 'Ongoing Support',
      desc: 'Maintenance, updates, bug fixes, and improvements are available.',
      icon: Wrench,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#070B14]/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            THE MR MIZ DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built With <span className="text-gradient-cyan">Purpose.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Why clients and business owners choose to partner with MR MIZ over generic agencies.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card-interactive p-7 rounded-2xl border border-slate-800/80 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
                    <span className="text-cyan-400">✓</span> {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
