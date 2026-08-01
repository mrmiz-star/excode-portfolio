import React from 'react';
import { Layers, Sparkles, MessageCircle, Compass, Globe2, Wrench } from 'lucide-react';

export default function WhyWorkWithMe() {
  const pillars = [
    {
      title: 'Custom-Built Solutions',
      desc: 'Every project is designed around your actual requirements—not a generic template.',
      icon: Layers,
    },
    {
      title: 'Modern Technology',
      desc: 'Clean architecture, modern development practices, and performance-focused software.',
      icon: Sparkles,
    },
    {
      title: 'Direct Developer Communication',
      desc: 'You communicate directly with the developer building your solution.',
      icon: MessageCircle,
    },
    {
      title: 'Clear Process',
      desc: 'Requirements, scope, milestones, testing, delivery, and support are clearly discussed before development begins.',
      icon: Compass,
    },
    {
      title: 'Local & Worldwide',
      desc: 'Available for projects in Pakistan and international clients.',
      icon: Globe2,
    },
    {
      title: 'Ongoing Support',
      desc: 'Maintenance, updates, bug fixes, and future improvements are available after delivery.',
      icon: Wrench,
    },
  ];

  return (
    <section className="relative z-10 py-28 bg-[#070B14]/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            THE MR MIZ DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Direct. Practical. <span className="text-gradient-cyan">Custom.</span>
          </h2>
          <p className="text-slate-300 text-base font-semibold">
            Software Built Around Your Needs
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card-interactive p-7 rounded-2xl border border-slate-800/80 bg-slate-900/50 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
                    <span className="text-cyan-400 font-bold">✓</span> {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
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
