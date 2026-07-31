import React from 'react';
import { Globe, Monitor, Bot, Cpu, ShoppingCart, Puzzle, ArrowRight } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const serviceList = [
    {
      title: 'Web Development',
      emoji: '🌐',
      icon: Globe,
      desc: 'Modern websites, web applications, dashboards, business systems, and e-commerce platforms.',
      examples: ['Business Websites', 'Dashboards', 'E-Commerce', 'Web Apps'],
    },
    {
      title: 'Desktop Applications',
      emoji: '💻',
      icon: Monitor,
      desc: 'Custom Windows software designed around your workflow and business requirements.',
      examples: ['Business Software', 'Productivity Tools', 'Management Systems'],
    },
    {
      title: 'AI & Machine Learning',
      emoji: '🤖',
      icon: Bot,
      desc: 'Practical AI-powered applications and machine-learning solutions designed to solve real problems.',
      examples: ['AI Tools', 'Data Processing', 'Intelligent Automation', 'ML Applications'],
    },
    {
      title: 'Automation',
      emoji: '⚙️',
      icon: Cpu,
      desc: 'Reduce repetitive work by turning manual processes into automated workflows.',
      examples: ['Business Automation', 'Data Processing', 'API Automation', 'Workflow Tools'],
    },
    {
      title: 'E-Commerce',
      emoji: '🛒',
      icon: ShoppingCart,
      desc: 'Professional online stores designed to help businesses sell products and manage orders efficiently.',
      examples: ['Online Stores', 'Product Management', 'Orders', 'Payments'],
    },
    {
      title: 'Custom Software',
      emoji: '🧩',
      icon: Puzzle,
      desc: "Don't see exactly what you need? Tell me the problem and I'll help design a solution around it.",
      examples: ['Custom Architecture', 'Tailored Workflows', 'API Integrations'],
      isCustom: true,
    },
  ];

  return (
    <section id="services" className="relative z-10 py-24 bg-[#070B14]/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            SERVICES & CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I Can <span className="text-gradient-cyan">Build</span>
          </h2>
          <p className="text-slate-400 text-base">
            From intuitive client-facing web portals to high-performance desktop apps and AI automations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-card-interactive p-7 rounded-2xl flex flex-col justify-between relative group ${
                  service.isCustom ? 'border-cyan-500/40 bg-gradient-to-b from-[#091325] to-[#0B172E]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl">{service.emoji}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-800/80 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Examples:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.examples.map((ex) => (
                        <span
                          key={ex}
                          className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] text-cyan-300/90 font-medium"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {service.isCustom ? (
                    <button
                      onClick={onOpenContact}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Discuss Your Idea
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenContact}
                      className="w-full flex items-center justify-between py-2 text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Request this service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
