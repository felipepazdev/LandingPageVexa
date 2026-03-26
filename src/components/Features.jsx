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
    accentColor: '#3B82F6',
    glowColor: 'rgba(59,130,246,0.12)',
    borderHover: 'rgba(59,130,246,0.3)',
  },
  {
    icon: MessageCircle,
    title: 'Adeus, "Será que vem?"',
    desc: 'O sistema avisa seus clientes por WhatsApp antes do horário. Eles confirmam e você não fica perdendo tempo esperando.',
    tag: 'WhatsApp Automático',
    accentColor: '#10B981',
    glowColor: 'rgba(16,185,129,0.12)',
    borderHover: 'rgba(16,185,129,0.3)',
  },
  {
    icon: DollarSign,
    title: 'Grana Sem Complicação',
    desc: 'Comissões calculadas na hora, sem dor de cabeça no final do mês. Dinheiro entra, o sistema anota e você descansa.',
    tag: 'Finanças Simples',
    accentColor: '#8B5CF6',
    glowColor: 'rgba(139,92,246,0.12)',
    borderHover: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Shield,
    title: 'Estoque Sempre em Dia',
    desc: 'O shampoo acabou? A tinta sumiu? O sistema te avisa quando algo está terminando para você nunca ficar na mão.',
    tag: 'Sem Falta de Produtos',
    accentColor: '#F97316',
    glowColor: 'rgba(249,115,22,0.12)',
    borderHover: 'rgba(249,115,22,0.3)',
  },
  {
    icon: BarChart3,
    title: 'Painel do Dono(a)',
    desc: 'Saiba quais são os seus melhores serviços e os clientes que mais voltam — tudo fácil de ver em um só lugar.',
    tag: 'Destaques',
    accentColor: '#EC4899',
    glowColor: 'rgba(236,72,153,0.12)',
    borderHover: 'rgba(236,72,153,0.3)',
  },
  {
    icon: Zap,
    title: 'Vender é Moleza',
    desc: 'Venda serviços e produtos em um piscar de olhos. Feche o caixa sem precisar de papel ou calculadoras malucas.',
    tag: 'Rapidez no PDV',
    accentColor: '#FACC15',
    glowColor: 'rgba(250,204,21,0.12)',
    borderHover: 'rgba(250,204,21,0.3)',
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
