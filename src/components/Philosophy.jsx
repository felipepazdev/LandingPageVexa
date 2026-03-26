import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, ArrowRight } from 'lucide-react';
import TelemetryTypewriter from './features/TelemetryTypewriter';
import CursorScheduler from './features/CursorScheduler';
import DiagnosticShuffler from './features/DiagnosticShuffler';
import { Calendar, MessageSquare, BarChart3, Shield, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Começar é Muito Fácil',
    desc: 'A gente te ajuda a colocar seus serviços e preços no sistema. Em poucos minutos, tudo já está pronto para o seu primeiro agendamento.',
    color: '#3B82F6',
    bullets: ['Configuração sem complicação', 'Preços e tempos do seu jeito', 'Trazemos seus clientes antigos'],
    component: TelemetryTypewriter
  },
  {
    num: '02',
    title: 'Sua Agenda no Automático',
    desc: 'Você só precisa marcar o horário. O resto a Vexa cuida para você, enviando lembretes personalizados que reduzem os esquecimentos.',
    color: '#A78BFA',
    bullets: ['Agenda visual e colorida', 'Lembretes automáticos no WhatsApp', 'Sua equipe sempre por dentro'],
    component: CursorScheduler
  },
  {
    num: '03',
    title: 'Dinheiro no Bolso, Sem Erro',
    desc: 'No final do dia, você fecha o caixa com um clique. Saber quanto cada um ganhou e o que sobrou de lucro nunca foi tão simples.',
    color: '#34D399',
    bullets: ['Controle de vendas rápido', 'Comissões feitas sozinhas', 'Lucro real na ponta do lápis'],
    component: DiagnosticShuffler
  },
];

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.step-row', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
      });
      
      gsap.from('.step-trust', {
        scrollTrigger: { trigger: '.step-trust', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="relative w-full py-40 px-4 md:px-8 bg-secondary overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center section-label mb-8">
            O Processo Vexa
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-textLight mb-8 leading-[1.1] tracking-tight">
            Seu Studio no <span className="text-gradient">Próximo Nível</span> <br />
            de Forma Acelerada
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Desenvolvemos um fluxo de implementação que garante resultados visíveis na primeira semana. 
            Simplicidade na ponta, poder nos bastidores.
          </p>
        </div>

        {/* Steps Staggered Section */}
        <div className="flex flex-col gap-32 md:gap-48">
          {steps.map((s, index) => {
            const VisualComponent = s.component;
            const isReversed = index % 2 !== 0;
            
            return (
              <div 
                key={s.num} 
                className={`step-row flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <span 
                      className="text-xs font-mono font-bold tracking-[0.4em] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                      style={{ color: s.color }}
                    >
                      PASSO {s.num}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-textLight mb-6 leading-tight">
                    {s.title}
                  </h3>
                  
                  <p className="text-textMuted text-lg mb-8 font-light leading-relaxed">
                    {s.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-textLight/80">
                        <CheckCircle size={16} style={{ color: s.color }} className="flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="flex items-center gap-2 text-sm font-mono tracking-wider group transition-all"
                    style={{ color: s.color }}
                  >
                    Explorar esta funcionalidade <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full relative">
                  <div className="absolute -inset-4 bg-accent/[0.03] rounded-[2.5rem] blur-2xl pointer-events-none" />
                  <div className="relative glass-card rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
                    <VisualComponent isLight={false} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Strip */}
        <div className="step-trust mt-40 glass-panel rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-10">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-14 h-14 rounded-full border-4 border-[#08101E] bg-tertiary flex items-center justify-center text-sm font-bold text-textLight shadow-xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                {['S', 'M', 'B', 'R'][i-1]}
              </div>
            ))}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-textLight mb-2">Pronto para transformar seu studio?</h4>
            <p className="text-textMuted font-light leading-relaxed">Junte-se a milhares de parceiros que já automatizaram 100% da sua rotina operacional com a Vexa.</p>
          </div>
          <button className="btn-primary text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 group whitespace-nowrap">
            Começar Agora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
