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
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-center pt-5 px-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl px-6 md:px-8 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-[0_8px_40px_rgba(0,0,0,0.5)] border-accent/10'
            : 'border border-transparent bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accentGlow flex items-center justify-center shadow-glow-blue-sm">
            <span className="text-white font-bold text-sm font-mono">V</span>
          </div>
          <span className="text-base font-display font-bold tracking-widest text-textLight">
            VEXA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-sans text-textMuted">
          {[
            { label: 'O que Fazemos', href: '#features' },
            { label: 'Como Cuidamos', href: '#protocol' },
            { label: 'Passo a Passo', href: '#steps' },
            { label: 'Preços', href: '#pricing' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-textLight transition-colors duration-300 relative group/link"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent group-hover/link:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="hidden md:flex btn-primary text-white px-5 py-2.5 rounded-xl font-sans font-semibold text-sm items-center gap-2"
          >
            Começar Grátis
          </button>
          <button
            className="md:hidden text-textMuted hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

    {/* Mobile Menu */}
    {mobileOpen && (
      <div className="absolute top-[72px] left-4 right-4 glass-dark rounded-2xl p-6 flex flex-col gap-5 md:hidden border border-accent/12 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {['O que Fazemos', 'Como Cuidamos', 'Passo a Passo', 'Preços'].map((item, i) => (
          <a
            key={item}
            href={['#features', '#protocol', '#steps', '#pricing'][i]}
              className="text-textMuted hover:text-textLight transition-colors text-sm font-sans"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => { onOpenTrial(); setMobileOpen(false); }}
            className="btn-primary w-full text-white py-3 rounded-xl font-semibold text-sm"
          >
            Começar Grátis
          </button>
        </div>
      )}
    </nav>
  );
}
