import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Send, Zap } from 'lucide-react';

export default function TrialForm({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.fromTo(contentRef.current, { scale: 0.92, y: 40 }, { scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-xl px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={contentRef}
        className="w-full max-w-md glass-dark rounded-3xl border border-accent/15 p-8 md:p-10 relative shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
      >
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-3xl"></div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-textMuted hover:text-white transition-colors w-8 h-8 rounded-lg glass-card border border-border/60 flex items-center justify-center"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/15 text-accentLight text-xs font-mono tracking-wider px-3 py-1.5 rounded-full border border-accent/20 mb-4">
            <Zap size={10} /> TRIAL GRATUITO — 7 DIAS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-textLight mb-2">
            Ative seu <span className="text-gradient-cyan">Acesso Grátis</span>
          </h2>
          <p className="text-textMuted text-sm font-light">
            Preencha os dados abaixo e comece a usar imediatamente.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Trial liberado! Em breve você receberá o acesso via WhatsApp.');
            onClose();
          }}
        >
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase text-textMuted/60 tracking-widest pl-1">Seu Nome</label>
            <input
              type="text"
              placeholder="Ex: João da Barbearia"
              className="w-full glass-card border border-border/60 rounded-xl p-3.5 text-textLight font-sans text-sm focus:border-accent/40 outline-none transition-all placeholder:text-textMuted/30 bg-transparent"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase text-textMuted/60 tracking-widest pl-1">WhatsApp / Celular</label>
            <input
              type="tel"
              placeholder="(11) 99999-0000"
              className="w-full glass-card border border-border/60 rounded-xl p-3.5 text-textLight font-sans text-sm focus:border-accent/40 outline-none transition-all placeholder:text-textMuted/30 bg-transparent"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase text-textMuted/60 tracking-widest pl-1">Nome do Estúdio</label>
            <input
              type="text"
              placeholder="Ex: Vexa Studio"
              className="w-full glass-card border border-border/60 rounded-xl p-3.5 text-textLight font-sans text-sm focus:border-accent/40 outline-none transition-all placeholder:text-textMuted/30 bg-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 mt-2"
          >
            Começar Grátis Agora <Send size={16} />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-textMuted/40 font-mono tracking-wider">
          SEM CARTÃO DE CRÉDITO · CANCELE QUANDO QUISER
        </p>
      </div>
    </div>
  );
}
