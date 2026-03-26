import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, RefreshCw, Database, Globe, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    icon: RefreshCw,
    label: 'Camada Operacional',
    title: 'Automação que Nunca Para',
    desc: 'Agendamentos, confirmações, lembretes e cancelamentos acontecem sozinhos — 24/7, sem nenhuma intervenção manual.',
    accent: '#3B82F6',
    tag: '/ 01',
  },
  {
    icon: Database,
    label: 'Arquitetura NestJS',
    title: 'Core Robusto',
    desc: 'Core robusto construído em Node.js com arquitetura modular, garantindo 99.9% de uptime em operações críticas.',
    accent: '#A78BFA',
    tag: '/ 02',
  },
  {
    icon: Database,
    label: 'Prisma & PostgreSQL',
    title: 'Dados de Alta Performance',
    desc: 'Camada de dados de alta performance com persistência em PostgreSQL e ORM Prisma para consultas ultra-rápidas.',
    accent: '#34D399',
    tag: '/ 03',
  },
  {
    icon: Globe,
    label: 'Conectividade Global',
    title: 'API REST Escalável',
    desc: 'API REST escalável pronta para integrações com gateways de pagamento e provedores oficiais de WhatsApp.',
    accent: '#F59E0B', // Added a new accent color for the new item
    tag: '/ 04', // Added a new tag for the new item
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
    <section id="protocol" ref={containerRef} className="relative w-full py-32 px-4 md:px-8 bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-accent/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* Left */}
          <div className="proto-left">
            <div className="inline-flex items-center section-label mb-7">
              O Protocolo Vexa
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
              Segurança em <br />
              <span className="text-gradient">Três Camadas</span>
            </h2>
            <p className="text-textMuted text-lg max-w-md font-light leading-relaxed mb-12">
              Construímos a Vexa com uma arquitetura de três camadas de proteção: Operacional, Financeira e de Dados. Sem pontos únicos de falha.
            </p>

            {/* Concentric rings visual */}
            <div className="relative w-56 h-56">
              {/* Outer ring */}
              <div
                className="spin-slow absolute top-1/2 left-1/2 rounded-full border border-dashed border-accent/15"
                style={{ width: 220, height: 220, marginLeft: -110, marginTop: -110 }}
              />
              {/* Middle ring */}
              <div
                className="spin-slow-reverse absolute top-1/2 left-1/2 rounded-full border border-accent/20"
                style={{ width: 160, height: 160, marginLeft: -80, marginTop: -80 }}
              />
              {/* Inner ring */}
              <div
                className="absolute top-1/2 left-1/2 rounded-full border border-accent/30"
                style={{ width: 100, height: 100, marginLeft: -50, marginTop: -50 }}
              />
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-blue">
                <Lock size={22} className="text-white" />
              </div>
              {/* Orbiting dots */}
              {[
                { angle: 0, color: '#3B82F6' },
                { angle: 120, color: '#A78BFA' },
                { angle: 240, color: '#34D399' },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${d.angle}deg) translateX(80px)`,
                    background: d.color,
                    boxShadow: `0 0 12px ${d.color}`,
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
                  className="protocol-item glass-card rounded-2xl p-6 border border-border/70 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${l.accent}30`;
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${l.accent}10`;
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
                      style={{ background: `${l.accent}15`, border: `1px solid ${l.accent}25` }}
                    >
                      <Icon size={17} style={{ color: l.accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono tracking-wider" style={{ color: `${l.accent}80` }}>{l.label}</span>
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
              <button className="flex items-center gap-2 text-accentLight text-xs font-mono tracking-wider hover:gap-3 transition-all duration-200">
                Ver documentação de segurança <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
