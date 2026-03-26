import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sandro Moura',
    role: 'Dono · Barber King Studio',
    city: 'São Paulo, SP',
    avatar: 'SM',
    color: '#3B82F6',
    quote: 'Em 2 semanas usando a Vexa, o movimento no meu estúdio ficou muito mais organizado. Os lembretes automáticos de WhatsApp reduziram as faltas drasticamente.',
    stars: 5,
  },
  {
    name: 'Letícia Fonseca',
    role: 'Gerente · Studio L Beauty',
    city: 'Rio de Janeiro, RJ',
    avatar: 'LF',
    color: '#A78BFA',
    quote: 'O dashboard financeiro mudou completamente como eu tomo decisões. Finalmente consigo ver onde está o lucro e onde estão as perdas em tempo real.',
    stars: 5,
  },
  {
    name: 'Rafael Carvalho',
    role: 'Proprietário · RC Barbearia Elite',
    city: 'Belo Horizonte, MG',
    avatar: 'RC',
    color: '#34D399',
    quote: 'Minha equipe adorou. O comissionamento automático acabou com conflitos internos e todos têm transparência total nos relatórios de comissão.',
    stars: 5,
  },
  {
    name: 'Bianca Torres',
    role: 'Sócia · Looks Premium',
    city: 'Curitiba, PR',
    avatar: 'BT',
    color: '#FB923C',
    quote: 'A visão de Timeline Semanal é sensacional. O sistema de Buffer Time entre atendimentos salvou nossa equipe do esgotamento. Agora temos um fluxo perfeito.',
    stars: 5,
  },
  {
    name: 'Marcos Almeida',
    role: 'Dono · MA Studio Premium',
    city: 'Brasília, DF',
    avatar: 'MA',
    color: '#FCD34D',
    quote: 'Antes eu perdia entre 3-4 horas por semana em planilhas. Agora o relatório de comissões sai em 1 clique. A Vexa pagou o investimento em 15 dias.',
    stars: 5,
  },
  {
    name: 'Cristina Vaz',
    role: 'Gerente · Chic Estética',
    city: 'Porto Alegre, RS',
    avatar: 'CV',
    color: '#F87171',
    quote: 'A função de CRM transformou meu relacionamento com os clientes. Sei exatamente quando cada um foi pela última vez e mando promoções personalizadas.',
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.test-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const half1 = testimonials.slice(0, 3);
  const half2 = testimonials.slice(3, 6);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-0 bg-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="test-header text-center mb-20">
          <div className="inline-flex items-center section-label mb-7">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
            Quem Usa, <span className="text-gradient">Recomenda</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto font-light leading-relaxed">
            Mais de 10.000 studios transformaram seus negócios com a Vexa. Veja o que eles estão dizendo.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee" ref={track1Ref} style={{ width: 'max-content' }}>
          {[...half1, ...half1].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reversed */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-4"
          ref={track2Ref}
          style={{
            width: 'max-content',
            animation: 'marquee 22s linear infinite reverse',
          }}
        >
          {[...half2, ...half2].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card rounded-2xl p-6 w-[360px] flex-shrink-0 border border-border/70 cursor-default">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(t.stars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-textMuted text-sm leading-relaxed mb-5">"{t.quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-textLight text-xs font-semibold">{t.name}</p>
          <p className="text-textDim text-[10px] font-mono mt-0.5">{t.role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-textDim text-[9px] font-mono tracking-wider">{t.city}</p>
        </div>
      </div>
    </div>
  );
}
