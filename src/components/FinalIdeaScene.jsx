import React, { useState } from 'react';
import { ArrowRight, Globe2, Sparkles, Mail, Copy, Check, ExternalLink } from 'lucide-react';

export default function FinalIdeaScene() {
  const [copied, setCopied] = useState(false);
  const [showEmailDetails, setShowEmailDetails] = useState(false);

  const emailAddress = 'excode53@gmail.com';
  const whatsappNumber = '923080078400';
  const whatsappFormatted = '+923080078400';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      actionText: `Chat: ${whatsappFormatted} →`,
      desc: 'Instant direct messaging for quick project discussions',
      href: `https://wa.me/${whatsappNumber}?text=Hi%20MR%20MIZ%2C%20I%20have%20a%20project%20idea%20I%20would%20like%20to%20discuss.`,
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
      desc: `Send your requirements directly to ${emailAddress}`,
      href: `mailto:${emailAddress}?subject=Project%20Inquiry%20-%20MR%20MIZ`,
      svg: <Mail className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400 hover:border-cyan-400',
      badge: 'Email',
      isEmailOption: true,
    },
    {
      id: 'discord',
      title: 'Official Discord Server',
      actionText: 'Join Discord Server →',
      desc: 'Join the EXCODE official Discord server for live chat & community',
      href: 'https://discord.gg/MrXN6EsQTu',
      svg: (
        <svg className="w-6 h-6 fill-current text-indigo-400" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      color: 'from-indigo-600/20 to-purple-500/10 border-indigo-500/30 text-indigo-400 hover:border-indigo-400',
      badge: 'Discord Server',
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
              ) : opt.isNoLink ? (
                <div className="w-full py-3.5 px-4 rounded-xl text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-slate-500 flex items-center justify-between cursor-not-allowed select-none">
                  <span>{opt.actionText}</span>
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
                Direct Inbox Access
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
