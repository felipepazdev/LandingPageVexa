import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-center pt-4 px-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl px-5 md:px-7 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 backdrop-blur-xl'
            : 'border border-transparent bg-white/60 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-cyan-sm">
            <span className="text-white font-bold text-sm font-mono">V</span>
          </div>
          <span className="text-base font-display font-bold tracking-widest text-textLight">
            VEXA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 text-sm font-sans text-textMuted">
          {[
            { label: 'Funcionalidades', href: '#features' },
            { label: 'Como Funciona', href: '#steps' },
            { label: 'Segurança', href: '#protocol' },
            { label: 'Preços', href: '#pricing' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-textLight transition-colors duration-300 relative group/link font-medium"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover/link:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex text-sm font-medium text-textMuted hover:text-textLight transition-colors">
            Entrar
          </button>
          <button
            onClick={onOpenTrial}
            className="hidden md:flex btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm items-center gap-2"
          >
            Começar Grátis
          </button>
          <button
            className="md:hidden text-textMuted hover:text-textLight transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

    {/* Mobile Menu */}
    {mobileOpen && (
      <div className="absolute top-[68px] left-4 right-4 bg-white rounded-2xl p-6 flex flex-col gap-5 md:hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
        {['Funcionalidades', 'Como Funciona', 'Segurança', 'Preços'].map((item, i) => (
          <a
            key={item}
            href={['#features', '#steps', '#protocol', '#pricing'][i]}
            className="text-textMuted hover:text-textLight transition-colors text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            {item}
          </a>
        ))}
        <button
          onClick={() => { onOpenTrial(); setMobileOpen(false); }}
          className="btn-primary w-full py-3 rounded-xl font-semibold text-sm"
        >
          Começar Grátis
        </button>
      </div>
    )}
  </nav>
  );
}
