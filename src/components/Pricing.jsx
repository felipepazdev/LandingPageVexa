import React from 'react';
import { Check, Zap, Shield, Star, ArrowRight } from 'lucide-react';

const allFeatures = [
  'Agendamentos Ilimitados',
  'Gestão Financeira',
  'Dashboards de Previsibilidade',
  'Checkout e Comissionamento Automático',
  'Lista de Clientes Completa',
  'Notificações via WhatsApp',
  'Relatórios de Lucratividade',
  'Suporte Prioritário 24/7',
];

export default function Pricing({ onOpenTrial }) {
  return (
    <section id="pricing" className="relative w-full py-32 px-4 md:px-8 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center section-label mb-7">
            <Star size={11} className="mr-2 text-accent" />
            Preços
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-textLight mb-6 leading-tight tracking-tight">
            Simples, Transparente <br />
            <span className="text-gradient">e Acessível</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto font-light">
            Um único plano com acesso ilimitado a todas as funcionalidades. Sem surpresas, sem letras miúdas.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-[520px] mx-auto">
          <div className="pricing-highlight rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* Badge + Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/8 text-accent text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full border border-accent/20 mb-4 font-bold">
                  <Zap size={9} /> MAIS POPULAR
                </div>
                <h3 className="text-2xl font-display font-bold text-textLight">Vexa Unlimited</h3>
                <p className="text-textMuted text-sm mt-1.5">Tudo para crescer seu salão</p>
              </div>
              <div className="md:text-right">
                <div className="text-[10px] font-mono text-textDim mb-1 tracking-widest uppercase">A partir de</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-textLight">R$</span>
                  <span className="text-6xl font-display font-bold text-textLight leading-none">99</span>
                  <span className="text-2xl font-bold text-textMuted">,90</span>
                </div>
                <div className="text-xs text-textDim font-mono mt-2 tracking-wider">/mês · cobrado mensalmente</div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider-glow mb-8" />

            {/* Features list */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {allFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-accent" />
                  </div>
                  <span className="text-sm text-textMuted">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={onOpenTrial}
              className="btn-primary w-full py-4 rounded-xl font-bold text-base tracking-wide mb-4 flex items-center justify-center gap-2.5 group"
            >
              Ativar Trial Grátis — 7 Dias
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-textDim font-mono tracking-[0.3em] uppercase">
              Sem necessidade de cartão de crédito
            </p>

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 text-[10px] text-textDim">
              <Shield size={11} className="text-accent" />
              <span>Dados protegidos · Cancele quando quiser · Suporte em português</span>
            </div>
          </div>
        </div>

        {/* Trust logos */}
        <div className="mt-20 text-center">
          <p className="text-textDim text-[10px] font-mono uppercase tracking-[0.35em] mb-8">
            Usado por Salões em todo o Brasil
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Studio Gold', 'Barbearia Elite', 'Looks Premium', 'Salão Chic', 'Top Cuts'].map((b) => (
              <div key={b} className="text-textMuted/50 font-display font-bold text-sm tracking-wider">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
