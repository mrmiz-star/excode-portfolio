import React from 'react';
import { MessageSquare, Compass, Code, Rocket, ArrowRight } from 'lucide-react';

export default function HowIWork({ onOpenContact }) {
  const steps = [
    {
      step: '01',
      title: 'Tell Me Your Problem',
      desc: "Share your idea, requirements, or business problem. You don't need complicated technical specifications. Explain what you're trying to accomplish.",
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Understand & Plan',
      desc: "We discuss the requirements, features, technology, timeline, and budget. You'll know what we're building before development begins.",
      icon: Compass,
    },
    {
      step: '03',
      title: 'Build',
      desc: "Development begins with regular communication and progress updates. You'll be able to review milestones and provide feedback throughout development.",
      icon: Code,
    },
    {
      step: '04',
      title: 'Test & Launch',
      desc: 'The software is tested, delivered, and prepared for real-world use. Deployment, documentation, and post-launch support can be included depending on the project.',
      icon: Rocket,
    },
  ];

  return (
    <section className="relative z-10 py-28 bg-[#070B14]/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Problem to <span className="text-gradient-cyan">Working Software.</span>
          </h2>
        </div>

        {/* Desktop Horizontal Process Flow / Mobile Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={item.step}
                className="glass-card-interactive p-7 rounded-2xl flex flex-col justify-between relative group border border-slate-800/80 hover:border-cyan-500/40 bg-slate-900/50"
              >
                {/* Connecting arrow for desktop horizontal flow */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-mono text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Start Step 01 — Tell Me Your Problem</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
