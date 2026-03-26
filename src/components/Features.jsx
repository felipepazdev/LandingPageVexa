import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, DollarSign, BarChart3, Users, Shield, Zap, ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Calendar,
    title: 'Agendamentos Inteligentes',
    desc: 'Sistema de agenda automático com confirmações via WhatsApp, lembretes e gestão de lista de espera.',
    tag: 'Automação',
    accentColor: '#3B82F6',
    glowColor: 'rgba(59,130,246,0.12)',
    borderHover: 'rgba(59,130,246,0.3)',
  },
  {
    icon: DollarSign,
    title: 'Gestão Financeira Full Stack',
    desc: 'Fluxo de caixa em tempo real, conciliações automáticas e relatórios de lucratividade detalhados.',
    tag: 'Finanças',
    accentColor: '#34D399',
    glowColor: 'rgba(52,211,153,0.12)',
    borderHover: 'rgba(52,211,153,0.3)',
  },
  {
    icon: BarChart3,
    title: 'Dashboards de Previsibilidade',
    desc: 'Analise tendências e tome decisões com dados em tempo real sobre a saúde do seu negócio.',
    tag: 'Analytics',
    accentColor: '#A78BFA',
    glowColor: 'rgba(167,139,250,0.12)',
    borderHover: 'rgba(167,139,250,0.3)',
  },
  {
    icon: Users,
    title: 'CRM de Clientes',
    desc: 'Histórico completo, preferências, fidelidade e programas de recompensa automáticos.',
    tag: 'Clientes',
    accentColor: '#FB923C',
    glowColor: 'rgba(251,146,60,0.12)',
    borderHover: 'rgba(251,146,60,0.3)',
  },
  {
    icon: Zap,
    title: 'Comissionamento Automático',
    desc: 'Calcule e registre comissões de profissionais automaticamente, com total transparência.',
    tag: 'Equipe',
    accentColor: '#FCD34D',
    glowColor: 'rgba(252,211,77,0.12)',
    borderHover: 'rgba(252,211,77,0.3)',
  },
  {
    icon: Shield,
    title: 'Segurança Militar',
    desc: 'Dados dos seus clientes protegidos por criptografia de ponta a ponta e backups automáticos.',
    tag: 'Segurança',
    accentColor: '#F87171',
    glowColor: 'rgba(248,113,113,0.12)',
    borderHover: 'rgba(248,113,113,0.3)',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feat-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.feat-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative w-full py-32 px-4 md:px-8 bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-accent/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="feat-header text-center mb-20">
          <div className="inline-flex items-center section-label mb-7">
            <Zap size={11} className="mr-2 text-accent" />
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
            Tudo que Você Precisa <br />
            <span className="text-gradient">em Um Só Lugar</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Abandone os sistemas genéricos e fragmentados. A Vexa integra todas as operações do seu studio em uma plataforma de precisão.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="feat-card feature-card glass-card rounded-2xl p-7 border border-border/70 cursor-pointer group"
                style={{ '--hover-border': f.borderHover }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = f.borderHover;
                  e.currentTarget.style.boxShadow = `0 24px 64px rgba(0,0,0,0.5), 0 0 50px ${f.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.accentColor}15`, border: `1px solid ${f.accentColor}25` }}
                >
                  <Icon size={20} style={{ color: f.accentColor }} />
                </div>

                {/* Tag */}
                <span
                  className="text-[9px] font-mono tracking-[0.3em] uppercase mb-3 block"
                  style={{ color: f.accentColor }}
                >
                  {f.tag}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-textLight mb-3 font-sans leading-snug">{f.title}</h3>

                {/* Desc */}
                <p className="text-sm text-textMuted leading-relaxed">{f.desc}</p>

                {/* Arrow */}
                <div
                  className="mt-5 flex items-center gap-1.5 text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: f.accentColor }}
                >
                  Saiba mais <ArrowRight size={11} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 glass-panel rounded-2xl p-6 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <MessageCircle size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-textLight font-semibold text-sm">Ainda tem dúvidas?</p>
              <p className="text-textMuted text-xs mt-0.5">Nosso time responde em menos de 5 minutos via WhatsApp</p>
            </div>
          </div>
          <button className="btn-ghost text-textMuted hover:text-textLight px-6 py-2.5 rounded-xl font-sans text-sm flex items-center gap-2 flex-shrink-0">
            Falar com um especialista <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
