import React, { useState } from 'react';
import { ArrowRight, Globe2, Sparkles, Mail, Copy, Check, ExternalLink } from 'lucide-react';

export default function FinalIdeaScene() {
  const [copied, setCopied] = useState(false);
  const [showEmailDetails, setShowEmailDetails] = useState(false);

  const emailAddress = 'mrmiz@excode.dev';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      actionText: 'Start a conversation →',
      desc: 'Instant direct messaging for quick project discussions',
      href: 'https://wa.me/?text=Hi%20MR%20MIZ%2C%20I%20have%20a%20project%20idea%20I%20would%20like%20to%20discuss.',
      svg: (
        <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400 hover:border-emerald-400',
      badge: 'WhatsApp',
    },
    {
      id: 'email',
      title: 'Email',
      actionText: 'Send project details →',
      desc: 'Send your requirements directly via mail client or copy email address',
      href: `mailto:${emailAddress}?subject=Project%20Inquiry%20-%20MR%20MIZ`,
      svg: <Mail className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400 hover:border-cyan-400',
      badge: 'Email',
      isEmailOption: true,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      actionText: 'Connect professionally →',
      desc: 'Connect directly on LinkedIn for business collaboration',
      href: 'https://linkedin.com',
      svg: (
        <svg className="w-6 h-6 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: 'from-blue-600/20 to-indigo-500/10 border-blue-500/30 text-blue-400 hover:border-blue-400',
      badge: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-36 bg-[#030509] border-t border-slate-900/80">
      
      {/* Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Headline Scene */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            FINAL SCENE // CONVERSION
          </div>

          <h2 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight uppercase">
            Maybe Your Idea <br />
            <span className="text-gradient-cyan">Is Next.</span>
          </h2>

          <div className="space-y-2 text-slate-300 text-lg sm:text-2xl font-medium">
            <p>"You have the idea."</p>
            <p className="text-cyan-300 font-bold">"I can help turn it into software."</p>
          </div>
        </div>

        {/* 3 Real Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((opt) => (
            <div
              key={opt.id}
              className="glass-card-interactive p-8 rounded-3xl border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${opt.color} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {opt.svg}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors uppercase">
                  {opt.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {opt.desc}
                </p>
              </div>

              {opt.isEmailOption ? (
                <div className="space-y-2">
                  <a
                    href={opt.href}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center justify-between"
                  >
                    <span>{opt.actionText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setShowEmailDetails(!showEmailDetails)}
                    className="w-full text-center text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors py-1 cursor-pointer"
                  >
                    {showEmailDetails ? 'Hide email details' : 'Show email address & copy option'}
                  </button>
                </div>
              ) : (
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-mono font-bold bg-slate-800/80 border border-slate-700/80 text-white hover:border-cyan-400/50 hover:text-cyan-300 transition-all flex items-center justify-between"
                >
                  <span>{opt.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Email Direct Details Drawer */}
        {showEmailDetails && (
          <div className="mb-12 glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-[#0A1325] animate-fadeIn max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Direct Email Address
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Guaranteed Response &lt; 24h
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-sm font-mono font-bold text-white tracking-wide">
                {emailAddress}
              </span>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Footer Tagline */}
        <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-center flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
          <Globe2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Local & international projects welcome.</span>
        </div>

      </div>
    </section>
  );
}
