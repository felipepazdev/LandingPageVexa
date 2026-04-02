import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, RefreshCw, Database, Globe, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    icon: RefreshCw,
    label: 'Cuidado Automático',
    title: 'Trabalha Enquanto Você Dorme',
    desc: 'Esqueça aquela planilha manual. O sistema cuida de tudo sozinho: agenda, mensagens e lembretes para os seus clientes.',
    accent: '#0DA3AD',
    tag: '/ 01',
  },
  {
    icon: Database,
    label: 'Motor de Alta Velocidade',
    title: 'Rapidez Surpreendente',
    desc: 'O sistema abre em qualquer lugar, do computador ao celular, sem travamentos. Nada de ficar esperando a tela carregar.',
    accent: '#7C3AED',
    tag: '/ 02',
  },
  {
    icon: Database,
    label: 'Cofre de Segurança',
    title: 'Seus Dados Super Protegidos',
    desc: 'Guardamos tudo com carinho: seus clientes, agenda e toda a parte financeira estão no cofre digital mais seguro do mercado.',
    accent: '#059669',
    tag: '/ 03',
  },
  {
    icon: Globe,
    label: 'Conectado a Tudo',
    title: 'Integração Sem Estresse',
    desc: 'Conectamos a Vexa com o WhatsApp oficial para que as mensagens cheguem na hora, sem bloqueios e sem perda de pacotes.',
    accent: '#D97706',
    tag: '/ 04',
  },
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.proto-left', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 65%' },
        x: -50, opacity: 0, duration: 1, ease: 'power3.out',
      });
      gsap.from('.protocol-item', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 60%' },
        x: 50, opacity: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full py-32 px-4 md:px-8 bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* Left */}
          <div className="proto-left">
            <div className="inline-flex items-center section-label mb-7">
              Como a Vexa Cuida de Você
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
              Tudo Sempre <br />
              <span className="text-gradient">Sob Controle</span>
            </h2>
            <p className="text-textMuted text-lg max-w-md font-light leading-relaxed mb-12">
              Nossa tecnologia protege o que você tem de mais importante: seu tempo, seus clientes e seu dinheiro. Tudo feito para você focar no que ama.
            </p>

            {/* Concentric rings visual */}
            <div className="relative w-56 h-56">
              {/* Outer ring */}
              <div
                className="spin-slow absolute top-1/2 left-1/2 rounded-full border border-dashed border-accent/20"
                style={{ width: 220, height: 220, marginLeft: -110, marginTop: -110 }}
              />
              {/* Middle ring */}
              <div
                className="spin-slow-reverse absolute top-1/2 left-1/2 rounded-full border border-accent/25"
                style={{ width: 160, height: 160, marginLeft: -80, marginTop: -80 }}
              />
              {/* Inner ring */}
              <div
                className="absolute top-1/2 left-1/2 rounded-full border border-accent/35 bg-accent/[0.03]"
                style={{ width: 100, height: 100, marginLeft: -50, marginTop: -50 }}
              />
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-cyan">
                <Lock size={22} className="text-white" />
              </div>
              {/* Orbiting dots */}
              {[
                { angle: 0, color: '#0DA3AD' },
                { angle: 120, color: '#7C3AED' },
                { angle: 240, color: '#059669' },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${d.angle}deg) translateX(80px)`,
                    background: d.color,
                    boxShadow: `0 0 8px ${d.color}60`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Layer cards */}
          <div className="flex flex-col gap-4">
            {layers.map((l) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.label}
                  className="protocol-item glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${l.accent}25`;
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.08), 0 0 32px ${l.accent}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                    style={{ background: `linear-gradient(to bottom, ${l.accent}, transparent)` }}
                  />

                  <div className="pl-3 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${l.accent}10`, border: `1px solid ${l.accent}20` }}
                    >
                      <Icon size={17} style={{ color: l.accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono tracking-wider font-medium" style={{ color: `${l.accent}90` }}>{l.label}</span>
                        <span className="text-[10px] font-mono text-textDim">{l.tag}</span>
                      </div>
                      <h4 className="text-sm font-bold text-textLight mb-1.5">{l.title}</h4>
                      <p className="text-xs text-textMuted leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="mt-2 flex items-center justify-end">
              <button className="flex items-center gap-2 text-accent text-xs font-mono tracking-wider hover:gap-3 transition-all duration-200 font-medium">
                Ver documentação de segurança <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
