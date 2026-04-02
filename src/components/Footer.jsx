import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const socialIcons = [
  {
    label: 'Twitter/X',
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Footer({ onOpenTrial }) {
  return (
    <footer className="relative w-full bg-primary border-t border-border/40 overflow-hidden">
      {/* ── CTA Banner ── */}
      <div className="relative py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/[0.07] blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center section-label mb-8">
            <Zap size={11} className="mr-2 text-accent" />
            Comece Hoje
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-bold text-textLight mb-7 leading-tight tracking-tight">
            Crie e Escale Seu Salão <br />
            <span className="text-gradient">com Inteligência</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto mb-12 font-light">
            Junte-se a mais de 10.000 salões que já transformaram seus negócios com a Vexa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="btn-primary text-white px-9 py-4 rounded-xl font-bold text-base flex items-center gap-2.5 group"
            >
              Começar Grátis Agora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-ghost text-textMuted hover:text-textLight px-8 py-4 rounded-xl font-semibold text-sm transition-all">
              Falar com Vendas
            </button>
          </div>

          {/* Watermark */}
          <div
            className="mt-16 text-[7rem] md:text-[11rem] font-display font-bold text-textLight/[0.02] leading-none select-none pointer-events-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            VEXA
          </div>
        </div>
      </div>

      {/* ── Footer links ── */}
      <div className="border-t border-border/30 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-cyan-sm">
                <span className="text-white font-bold text-sm font-mono">V</span>
              </div>
              <span className="text-base font-display font-bold text-textLight tracking-widest">VEXA</span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed max-w-sm mb-7 font-light">
              O sistema de gestão definitivo para salões de beleza e barbearias. Tecnologia de precisão para negócios de alto padrão.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass-card border border-border/60 flex items-center justify-center text-textMuted hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-[10px] font-mono text-textDim uppercase tracking-[0.3em] mb-5">Plataforma</h4>
            <div className="flex flex-col gap-3.5">
              {['Features', 'O Protocolo', 'Preços', 'Segurança'].map((l) => (
                <a key={l} href="#" className="text-sm text-textMuted hover:text-textLight transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[10px] font-mono text-textDim uppercase tracking-[0.3em] mb-5">Empresa</h4>
            <div className="flex flex-col gap-3.5">
              {['Sobre Nós', 'Contato', 'Termos de Uso', 'Privacidade'].map((l) => (
                <a key={l} href="#" className="text-sm text-textMuted hover:text-textLight transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20 gap-4">
          <p className="text-[10px] font-mono text-textDim tracking-wider">
            © {new Date().getFullYear()} Vexa Technologies. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-textDim">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-ping-slow opacity-80" />
            <div className="w-2 h-2 rounded-full bg-green-400 -ml-3.5" />
            Sistema Operacional &nbsp;·&nbsp; 99.9% Uptime
          </div>
        </div>
      </div>
    </footer>
  );
}
