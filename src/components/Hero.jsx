import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, Zap, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Hero({ onOpenTrial }) {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from('.hero-badge', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' })
        .from('.hero-h1', { y: 60, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.4')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.hero-stats', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.hero-screen', { y: 80, opacity: 0, duration: 1.4, ease: 'power4.out' }, '-=0.9');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-white"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Very soft cyan glow */}
        <div className="glow-orb absolute top-[-20%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-accent/[0.06]" />
        <div className="glow-orb absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-accent/[0.03]" />
        <div className="glow-orb absolute top-[25%] right-[2%] w-[400px] h-[400px] bg-accentGlow/[0.03]" />
        {/* Fade to secondary at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-secondary to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[68rem] mx-auto w-full">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 section-label mb-8">
          <Zap size={11} className="text-accent" />
          <span>Plataforma de Gestão para Salões &amp; Barbearias</span>
        </div>

        {/* H1 */}
        <h1 className="hero-h1 font-display font-bold leading-[1.05] tracking-tight mb-7 w-full">
          <span className="block text-5xl md:text-7xl lg:text-[6rem] text-textLight">
            Chega de Stress
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[6rem] text-gradient mt-2">
            na Sua Agenda
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-11 font-light leading-relaxed">
          A plataforma completa para você gerenciar sua agenda, equipe e financeiro em um só lugar. Tenha o controle total do seu negócio com lembretes inteligentes que chegam direto no celular dos seus clientes.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenTrial}
            className="btn-primary px-9 py-4 rounded-xl font-semibold text-base flex items-center gap-2.5 group"
          >
            Começar Grátis — 7 dias
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="btn-ghost px-7 py-4 rounded-xl font-sans text-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Play size={10} fill="currentColor" className="text-accent ml-0.5" />
            </div>
            Ver Demonstração
          </button>
        </div>

        {/* Stats row */}
        <div className="hero-stats flex flex-wrap items-center justify-center gap-4 mb-20">
          {[
            { value: '10K+', label: 'Studios Ativos' },
            { value: '1M+', label: 'Agendamentos' },
            { value: '5X', label: 'Mais Produtividade' },
            { value: '500+', label: 'Cidades' },
          ].map((s) => (
            <div key={s.label} className="stat-card px-8 py-5 rounded-2xl min-w-[155px] cursor-default">
              <div className="text-3xl font-display font-bold text-textLight tracking-tight">{s.value}</div>
              <div className="text-[10px] text-textMuted mt-1.5 font-mono tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Hero Dashboard Mock ── */}
        <div className="hero-screen w-full max-w-5xl mx-auto relative">
          {/* Ambient glow */}
          <div className="absolute -inset-6 bg-accent/[0.04] rounded-3xl blur-3xl pointer-events-none" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-accent/[0.08] blur-3xl rounded-full pointer-events-none" />

          <div className="screen-mock rounded-2xl overflow-hidden relative">
            {/* Browser bar */}
            <div className="bg-gray-50 px-5 py-3.5 flex items-center gap-3 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg px-5 py-1.5 text-[11px] font-mono text-textMuted/60 max-w-xs mx-auto text-center tracking-wider border border-gray-100">
                  app.vexa.com.br/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard interior */}
            <div className="flex bg-gray-50/80">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-[200px] flex-shrink-0 border-r border-gray-100 p-4 gap-1 bg-white">
                {/* Logo in sidebar */}
                <div className="flex items-center gap-2 mb-5 px-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center">
                    <span className="text-white font-bold text-[10px] font-mono">V</span>
                  </div>
                  <span className="text-sm font-display font-bold text-textLight tracking-wide">VEXA</span>
                </div>
                {['Dashboard', 'Agenda', 'Financeiro', 'Clientes', 'Relatórios'].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-sans cursor-pointer transition-all ${
                      i === 0
                        ? 'bg-accent/8 text-accent border border-accent/15 font-medium'
                        : 'text-textMuted hover:text-textLight hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-gray-300'}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 min-h-[360px] md:min-h-[420px]">
                {/* Top row: metric cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { icon: DollarSign, label: 'Receita', val: 'R$ 24.850', change: '+18%', color: '#059669', bg: 'rgba(5,150,105,0.08)', border: 'rgba(5,150,105,0.15)' },
                    { icon: Users, label: 'Clientes', val: '184', change: '+12%', color: '#0DA3AD', bg: 'rgba(13,163,173,0.08)', border: 'rgba(13,163,173,0.15)' },
                    { icon: TrendingUp, label: 'Ticket Médio', val: 'R$ 135', change: '+5%', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.15)' },
                    { icon: Zap, label: 'Taxa Retorno', val: '89%', change: '+3%', color: '#D97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.15)' },
                  ].map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.label}
                        className="bg-white rounded-xl p-3.5 relative overflow-hidden cursor-pointer border"
                        style={{ borderColor: c.border, boxShadow: `0 2px 8px ${c.bg}` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-textDim font-mono uppercase tracking-wider">{c.label}</span>
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: c.bg }}>
                            <Icon size={11} style={{ color: c.color }} />
                          </div>
                        </div>
                        <div className="text-base font-bold text-textLight">{c.val}</div>
                        <div className="text-[10px] mt-1 font-mono" style={{ color: c.color }}>{c.change} esse mês</div>
                      </div>
                    );
                  })}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  {/* Bar chart */}
                  <div className="md:col-span-2 bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-textMuted font-mono uppercase tracking-wider">Faturamento — 30 dias</span>
                      <span className="text-[10px] text-accent font-mono font-medium">+18% ↑</span>
                    </div>
                    <div className="flex items-end gap-1 h-[70px]">
                      {[28, 45, 38, 62, 52, 78, 65, 85, 72, 90, 80, 95, 88, 76, 92].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 14
                              ? 'linear-gradient(to top, #0DA3AD, #1ACBD6)'
                              : 'linear-gradient(to top, rgba(13,163,173,0.25), rgba(26,203,214,0.12))',
                            boxShadow: i === 14 ? '0 0 8px rgba(13,163,173,0.35)' : 'none',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Top services */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="text-[10px] text-textMuted font-mono uppercase tracking-wider mb-3">Top Serviços</div>
                    {[
                      { name: 'Corte', pct: 90, color: '#0DA3AD' },
                      { name: 'Barba', pct: 72, color: '#7C3AED' },
                      { name: 'Combo', pct: 55, color: '#059669' },
                    ].map((s) => (
                      <div key={s.name} className="mb-2.5">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-textDim">{s.name}</span>
                          <span className="text-textMuted font-medium">{s.pct}%</span>
                        </div>
                        <div className="bg-gray-100 rounded-full h-1.5">
                          <div
                            className="rounded-full h-1.5"
                            style={{ width: `${s.pct}%`, background: s.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini calendar strip */}
                <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100">
                  <span className="text-[10px] text-textMuted font-mono uppercase tracking-wider flex-shrink-0">Próximos</span>
                  <div className="flex gap-2 overflow-hidden">
                    {[
                      { time: '09:00', name: 'João Lima', service: 'Corte', color: '#0DA3AD' },
                      { time: '10:30', name: 'Pedro S.', service: 'Barba', color: '#7C3AED' },
                      { time: '11:00', name: 'Carlos R.', service: 'Combo', color: '#059669' },
                    ].map((a) => (
                      <div
                        key={a.time}
                        className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 flex-shrink-0"
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: a.color }} />
                        <span className="text-[10px] text-textMuted font-mono">{a.time}</span>
                        <span className="text-[10px] text-textLight font-medium">{a.name}</span>
                        <span className="text-[10px] text-textDim hidden md:inline">{a.service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
