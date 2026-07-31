import React from 'react';
import { Globe, Monitor, Bot, Cpu, ArrowUpRight } from 'lucide-react';

export default function About() {
  const disciplines = [
    {
      title: 'Web Development',
      desc: 'High-performance web apps, dashboards & systems built to scale.',
      icon: Globe,
    },
    {
      title: 'Desktop Applications',
      desc: 'Tailored Windows software built for daily operational workflows.',
      icon: Monitor,
    },
    {
      title: 'AI / ML',
      desc: 'Practical machine learning & automated intelligent workflows.',
      icon: Bot,
    },
    {
      title: 'Automation',
      desc: 'Streamlining manual repetitive operations into automated pipelines.',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="relative z-10 py-24 bg-[#05070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              ABOUT MR MIZ
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turning Ideas Into <span className="text-gradient-cyan">Working Software.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="border-l-2 border-cyan-500/50 pl-4 py-1 italic bg-cyan-500/5 rounded-r-lg">
                "I'm MR MIZ, a software developer focused on building practical digital solutions for businesses, startups, and individuals."
              </p>
              <p>
                I work across web development, desktop applications, AI/ML, automation, and custom software. My approach centers on clear architecture, robust reliability, and direct developer communication.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-slate-400 font-mono">Custom Built Code</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="block text-2xl font-bold text-cyan-400">Fast</span>
                <span className="text-xs text-slate-400 font-mono">Turnaround & Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Disciplines Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-cyan-400/80">
                    <span>Core Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
