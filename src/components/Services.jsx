import React from 'react';
import { Globe, Monitor, Bot, Cpu, ShoppingCart, Puzzle, ArrowRight } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const serviceList = [
    {
      title: 'Web Development',
      icon: Globe,
      desc: 'Modern websites, web applications, dashboards, business portals, and e-commerce platforms.',
      examples: ['Business Websites', 'Web Applications', 'Dashboards', 'Business Portals', 'E-Commerce'],
      buttonText: 'Discuss Your Requirement',
    },
    {
      title: 'Desktop Applications',
      icon: Monitor,
      desc: 'Custom Windows software designed around your business workflow.',
      examples: ['Business Software', 'Management Systems', 'Productivity Tools', 'Internal Company Tools'],
      buttonText: 'Discuss Your Requirement',
    },
    {
      title: 'AI & Machine Learning',
      icon: Bot,
      desc: 'Practical AI and machine-learning solutions designed around real use cases.',
      examples: ['AI Tools', 'Data Processing', 'Intelligent Workflows', 'ML Applications'],
      buttonText: 'Discuss Your Requirement',
    },
    {
      title: 'Automation',
      icon: Cpu,
      desc: 'Turn repetitive manual processes into reliable automated workflows.',
      examples: ['Business Automation', 'Data Processing', 'API Integrations', 'Workflow Automation'],
      buttonText: 'Discuss Your Requirement',
    },
    {
      title: 'E-Commerce',
      icon: ShoppingCart,
      desc: 'Professional online stores and systems designed around your products, customers, and operations.',
      examples: ['Online Stores', 'Product Management', 'Order Management', 'Payment Integration'],
      buttonText: 'Discuss Your Requirement',
    },
    {
      title: 'Custom Business Software',
      icon: Puzzle,
      desc: "Have a problem that existing software doesn't solve? Tell me the problem. I'll help design a solution around your workflow.",
      examples: ['Custom Workflows', 'Tailored Systems', 'API Bridges', 'Specialized Tools'],
      buttonText: 'Start a Project',
      isCustom: true,
    },
  ];

  return (
    <section id="services" className="relative z-10 py-24 bg-[#05070B] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            WHAT I CAN BUILD
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Custom Software <span className="text-gradient-cyan">Solutions</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Don't see exactly what you need? <strong className="text-white">That's the point of custom software.</strong> Tell me what your business is trying to accomplish, what is currently slowing you down, or what process you want to improve.
          </p>
        </div>

        {/* 2x3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-card-interactive p-7 rounded-2xl flex flex-col justify-between relative group ${
                  service.isCustom ? 'border-cyan-500/40 bg-gradient-to-b from-[#081226] to-[#060A14]' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
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

                  <button
                    onClick={onOpenContact}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      service.isCustom
                        ? 'text-black bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]'
                        : 'text-cyan-300 bg-slate-900 border border-cyan-500/30 hover:bg-cyan-500/15 hover:border-cyan-400'
                    }`}
                  >
                    <span>{service.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
