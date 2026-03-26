import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Users, TrendingUp, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    icon: Monitor,
    title: 'Configure sua Conta',
    desc: 'Importe seus dados, configure sua equipe e personalize os serviços em menos de 10 minutos. Sem instalação, sem técnico.',
    color: '#3B82F6',
    bullets: ['Import automático de dados', 'Setup guiado passo a passo', 'Personalização sem código'],
  },
  {
    num: '02',
    icon: Users,
    title: 'Ative os Agendamentos',
    desc: 'Link de agendamento online pronto. Seus clientes agendam 24h, você recebe notificações automáticas no WhatsApp.',
    color: '#A78BFA',
    bullets: ['Link público personalizável', 'Confirmações automáticas', 'Gestão de lista de espera'],
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Escale com Dados',
    desc: 'Use os dashboards de previsibilidade para tomar decisões inteligentes e aumentar a receita do seu studio.',
    color: '#34D399',
    bullets: ['Dashboards em tempo real', 'Previsão de receita', 'Alertas financeiros inteligentes'],
  },
];

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.step-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        y: 50, opacity: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.step-trust', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 40%' },
        y: 24, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="relative w-full py-32 px-4 md:px-8 bg-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent/[0.04] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-purple-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center section-label mb-7">
            Simples assim
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
            Construa um Studio de <br />
            <span className="text-gradient">Sucesso em 3 Passos</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto font-light leading-relaxed">
            Do onboarding ao crescimento — a Vexa foi desenhada para ser simples de operar e poderosa para escalar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-[2.75rem] left-[calc(33.33%+20px)] right-[calc(33.33%+20px)] h-[1px]"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(167,139,250,0.3), rgba(52,211,153,0.3))' }}
          />

          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="step-card glass-card rounded-2xl p-8 border border-border/70 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                style={{ '--step-color': s.color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.color}30`;
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${s.color}0D`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${s.color}80, transparent)` }} />

                {/* Number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                  >
                    <Icon size={19} style={{ color: s.color }} />
                  </div>
                  <span className="text-xs font-mono tracking-widest" style={{ color: `${s.color}50` }}>
                    {s.num}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-textLight mb-3">{s.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed mb-5">{s.desc}</p>

                {/* Bullet list */}
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-xs text-textMuted">
                      <CheckCircle size={13} style={{ color: s.color, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="step-trust mt-16 glass-panel rounded-2xl p-6 border border-border/50 flex flex-col md:flex-row items-center gap-6">
          <div className="flex -space-x-3">
            {['#3B82F6', '#A78BFA', '#34D399', '#FB923C'].map((c, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-xs font-bold text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${c}, ${c}99)` }}
              >
                {['S', 'M', 'B', 'R'][i]}
              </div>
            ))}
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-textLight font-semibold text-sm">+1.000 studios já cresceram com a Vexa este mês</p>
            <p className="text-textMuted text-xs mt-1">A plataforma que os profissionais de beleza mais recomendam no Brasil</p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
            <span className="text-textMuted text-sm ml-2">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
