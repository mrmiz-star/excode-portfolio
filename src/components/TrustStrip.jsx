import React from 'react';
import { ShieldCheck, Cpu, MessageSquare, Globe2 } from 'lucide-react';

export default function TrustStrip() {
  const trustPoints = [
    { title: 'Custom Solutions', icon: ShieldCheck, desc: 'Built for your goals' },
    { title: 'Modern Technology', icon: Cpu, desc: 'High performance code' },
    { title: 'Direct Communication', icon: MessageSquare, desc: 'Talk straight with developer' },
    { title: 'Local & International', icon: Globe2, desc: 'Global client experience' },
  ];

  return (
    <section className="relative z-10 py-6 border-y border-cyan-500/10 bg-[#080D1A]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="pt-3 md:pt-0 md:px-6 flex items-center justify-center sm:justify-start gap-3.5 group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 hidden sm:block">
                    {item.desc}
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
