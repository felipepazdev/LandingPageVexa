import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, RefreshCw, Database, Globe, ShieldCheck, Zap, Wifi, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    icon: RefreshCw,
    label: 'Automação',
    title: 'Trabalha Enquanto Você Dorme',
    desc: 'Seus lembretes e agendamentos funcionam sozinhos, sem que você precise mexer em nada.',
    accent: '#0DA3AD',
  },
  {
    icon: Zap,
    label: 'Velocidade',
    title: 'Rapidez Surpreendente',
    desc: 'O sistema é leve e abre instantaneamente no seu celular ou computador, sem travamentos.',
    accent: '#7C3AED',
  },
  {
    icon: ShieldCheck,
    label: 'Segurança Máxima',
    title: 'Seus Dados Super Protegidos',
    desc: 'Guardamos suas informações com o mesmo nível de segurança dos grandes bancos mundiais.',
    accent: '#059669',
    highlight: true,
  },
  {
    icon: Wifi,
    label: 'Conexão',
    title: 'WhatsApp Sempre Ativo',
    desc: 'Mensagens enviadas via conexão oficial, garantindo que cheguem na hora certa para o cliente.',
    accent: '#D97706',
  },
];

const trustBadges = [
  { label: 'Site 100% Seguro', icon: Lock, color: '#0DA3AD' },
  { label: 'Privacidade Total', icon: ShieldCheck, color: '#059669' },
  { label: 'Sistema ultra veloz', icon: Zap, color: '#7C3AED' },
  { label: 'Backup Automático', icon: Database, color: '#D97706' },
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.proto-header', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.proto-badge', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.2,
      });
      gsap.from('.protocol-item', {
        scrollTrigger: { trigger: '.protocol-item', start: 'top 75%' },
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.proto-visual', {
        scrollTrigger: { trigger: '.proto-visual', start: 'top 75%' },
        scale: 0.92, opacity: 0, duration: 1, ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full py-32 px-4 md:px-8 bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="proto-header text-center mb-16">
          <div className="inline-flex items-center section-label mb-7">
            Sua tranquilidade é nossa prioridade
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-textLight mb-5 leading-tight tracking-tight">
            Tudo Sempre <span className="text-gradient">Sob Controle</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto font-light leading-relaxed">
            Nossa tecnologia protege o que você tem de mais importante: seu tempo, seus clientes e seu dinheiro.
          </p>
        </div>

        {/* ── Humanized Trust badges ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {trustBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="proto-badge flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-card"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${b.color}12` }}
                >
                  <Icon size={12} style={{ color: b.color }} />
                </div>
                <span className="text-xs font-semibold text-textLight tracking-wide">{b.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Cards */}
          <div className="flex flex-col gap-4">
            {layers.map((l) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.label}
                  className={`protocol-item glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group cursor-default ${l.highlight ? 'bg-white shadow-card-hover border-accent/20 ring-1 ring-accent/5 scale-[1.02]' : ''}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${l.accent}30`;
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.08), 0 0 32px ${l.accent}12`;
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = l.highlight ? 'rgba(13, 163, 173, 0.2)' : '';
                    e.currentTarget.style.boxShadow = l.highlight ? '' : '';
                    e.currentTarget.style.transform = l.highlight ? 'scale(1.02)' : '';
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl"
                    style={{ background: `linear-gradient(to bottom, ${l.accent}, ${l.accent}60)` }}
                  />

                  <div className="pl-4 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                      style={{ background: `${l.accent}15`, border: `1px solid ${l.accent}30` }}
                    >
                      <Icon size={18} style={{ color: l.accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[9px] font-mono tracking-[0.3em] uppercase font-bold block"
                          style={{ color: `${l.accent}` }}
                        >
                          {l.label}
                        </span>
                        {l.highlight && (
                          <div className="flex items-center gap-1 bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={8} className="text-accent" />
                            <span className="text-[7px] text-accent font-bold uppercase tracking-tighter">Prioridade</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-textLight mb-1.5 leading-snug">{l.title}</h4>
                      <p className="text-xs text-textMuted leading-relaxed font-normal">{l.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visual */}
          <div className="proto-visual relative flex items-center justify-center lg:pl-8">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-accent/[0.04] rounded-3xl blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-sm">
              {/* Central lock card */}
              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-card-lg p-10 flex flex-col items-center text-center overflow-hidden">
                {/* Top decorative stripe */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

                {/* Concentric rings */}
                <div className="relative w-44 h-44 flex items-center justify-center mb-8">
                  {/* Outer ring */}
                  <div
                    className="spin-slow absolute rounded-full border border-dashed"
                    style={{ width: 176, height: 176, borderColor: 'rgba(13,163,173,0.2)' }}
                  />
                  {/* Middle ring */}
                  <div
                    className="spin-slow-reverse absolute rounded-full border"
                    style={{ width: 132, height: 132, borderColor: 'rgba(13,163,173,0.3)' }}
                  />
                  {/* Inner halo */}
                  <div
                    className="absolute rounded-full border bg-accent/[0.05]"
                    style={{ width: 90, height: 90, borderColor: 'rgba(13,163,173,0.4)' }}
                  />
                  {/* Center circle */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-cyan z-10">
                    <Lock size={24} className="text-white" />
                  </div>

                  {/* Orbiting dots */}
                  {[
                    { angle: 10, color: '#0DA3AD' },
                    { angle: 130, color: '#7C3AED' },
                    { angle: 250, color: '#059669' },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${d.angle}deg) translateX(70px)`,
                        background: d.color,
                        boxShadow: `0 0 10px ${d.color}90`,
                      }}
                    />
                  ))}
                </div>

                {/* Humanized Stats */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { label: 'Proteção', value: 'Total', color: '#0DA3AD' },
                    { label: 'Sistema', value: 'Sempre Ativo', color: '#059669' },
                    { label: 'Suas Cópias', value: 'Garantidas', color: '#7C3AED' },
                    { label: 'Nosso Time', value: 'Ao seu lado', color: '#D97706' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-left"
                    >
                      <div className="text-[9px] font-mono text-textDim uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="text-sm font-bold leading-tight" style={{ color: s.color }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom tag */}
                <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-textDim justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
                  Sistemas funcionando agora
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
