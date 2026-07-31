import React, { useEffect } from 'react';
import { X, Code, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden text-slate-100 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 sm:p-2.5 rounded-full bg-slate-900/90 text-slate-400 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        </button>

        {/* Modal Header Screenshot */}
        <div className="relative w-full h-40 sm:h-64 bg-slate-950 overflow-hidden border-b border-slate-800 shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/40 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-[10px] sm:text-xs font-mono font-medium text-cyan-300 mb-1">
              {project.category || 'Featured Software'}
            </span>
            <h2 className="text-lg sm:text-3xl font-extrabold text-white tracking-tight break-words">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 flex-1 overflow-y-auto overflow-x-hidden">
          
          {/* Overview */}
          <div>
            <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
              Overview
            </h3>
            <p className="text-xs sm:text-base text-slate-200 font-medium leading-relaxed break-words">
              {project.explanation}
            </p>
          </div>

          {/* Tech Tags */}
          <div>
            <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-mono font-semibold text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          {project.features && (
            <div>
              <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                Key Capabilities & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2 max-w-full"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium leading-snug break-words">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Purpose Statement */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              Built with Engineering Purpose
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed break-words">
              Designed and engineered directly by MR MIZ under EXCODE Corporation guidelines for high performance, intuitive UX, and zero unnecessary dependencies.
            </p>
          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Need a custom solution like this?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
