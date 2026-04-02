import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, DollarSign, BarChart3, Users, Shield, Zap, ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Calendar,
    title: 'Sua Agenda no Controle',
    desc: 'Esqueça os horários embolados. Com a Vexa, os atendimentos se encaixam do jeito certo e sobra tempo para você respirar.',
    tag: 'Tudo Organizado',
    accentColor: '#0DA3AD',
    bgColor: 'rgba(13,163,173,0.06)',
    borderHover: 'rgba(13,163,173,0.25)',
    glowColor: 'rgba(13,163,173,0.08)',
  },
  {
    icon: MessageCircle,
    title: 'Lembretes Inteligentes',
    desc: 'O sistema envia notificações automáticas via WhatsApp antes de cada serviço. Reduza o nível de faltas no seu salão sem precisar mandar mensagens uma por uma.',
    tag: 'Redução de Faltas',
    accentColor: '#059669',
    bgColor: 'rgba(5,150,105,0.06)',
    borderHover: 'rgba(5,150,105,0.25)',
    glowColor: 'rgba(5,150,105,0.08)',
  },
  {
    icon: DollarSign,
    title: 'Grana Sem Complicação',
    desc: 'Comissões calculadas na hora, sem dor de cabeça no final do mês. Dinheiro entra, o sistema anota e você descansa.',
    tag: 'Finanças Simples',
    accentColor: '#7C3AED',
    bgColor: 'rgba(124,58,237,0.06)',
    borderHover: 'rgba(124,58,237,0.25)',
    glowColor: 'rgba(124,58,237,0.08)',
  },
  {
    icon: Shield,
    title: 'Estoque Sempre em Dia',
    desc: 'O shampoo acabou? A tinta sumiu? O sistema te avisa quando algo está terminando para você nunca ficar na mão.',
    tag: 'Sem Falta de Produtos',
    accentColor: '#EA580C',
    bgColor: 'rgba(234,88,12,0.06)',
    borderHover: 'rgba(234,88,12,0.25)',
    glowColor: 'rgba(234,88,12,0.08)',
  },
  {
    icon: BarChart3,
    title: 'Painel do Dono(a)',
    desc: 'Saiba quais são os seus melhores serviços e os clientes que mais voltam — tudo fácil de ver em um só lugar.',
    tag: 'Destaques',
    accentColor: '#DB2777',
    bgColor: 'rgba(219,39,119,0.06)',
    borderHover: 'rgba(219,39,119,0.25)',
    glowColor: 'rgba(219,39,119,0.08)',
  },
  {
    icon: Zap,
    title: 'Vender é Moleza',
    desc: 'Venda serviços e produtos em um piscar de olhos. Feche o caixa sem precisar de papel ou calculadoras malucas.',
    tag: 'Rapidez no PDV',
    accentColor: '#D97706',
    bgColor: 'rgba(217,119,6,0.06)',
    borderHover: 'rgba(217,119,6,0.25)',
    glowColor: 'rgba(217,119,6,0.08)',
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
    <section id="features" ref={sectionRef} className="relative w-full py-32 px-4 md:px-8 bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/[0.04] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="feat-header text-center mb-20">
          <div className="inline-flex items-center section-label mb-7">
            <Zap size={11} className="mr-2 text-accent" />
            Funcionalidades
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
            Tudo que Você Precisa <br />
            <span className="text-gradient">em Um Só Lugar</span>
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Abandone os sistemas genéricos e fragmentados. A Vexa integra todas as operações do seu salão em uma plataforma de precisão.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="feat-card feature-card rounded-2xl p-7 cursor-pointer group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = f.borderHover;
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 0 40px ${f.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: f.bgColor, border: `1px solid ${f.accentColor}20` }}
                >
                  <Icon size={20} style={{ color: f.accentColor }} />
                </div>

                {/* Tag */}
                <span
                  className="text-[9px] font-mono tracking-[0.3em] uppercase mb-3 block font-medium"
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
        <div className="mt-14 glass-panel rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
              <MessageCircle size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-textLight font-semibold text-sm">Ainda tem dúvidas?</p>
              <p className="text-textMuted text-xs mt-0.5">Nosso time responde em menos de 5 minutos via WhatsApp</p>
            </div>
          </div>
          <button className="btn-ghost px-6 py-2.5 rounded-xl font-sans text-sm flex items-center gap-2 flex-shrink-0">
            Falar com um especialista <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
