import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { DollarSign, TrendingUp, Wallet } from 'lucide-react';

const cardsData = [
  { id: 1, title: 'Cash Flow', value: '+R$ 4.250', icon: DollarSign, color: 'text-green-600' },
  { id: 2, title: 'Expenses', value: '-R$ 1.100', icon: Wallet, color: 'text-red-500' },
  { id: 3, title: 'Net Profit', value: '+R$ 3.150', icon: TrendingUp, color: 'text-accent' },
];

export default function DiagnosticShuffler({ isLight }) {
  const [cards, setCards] = useState(cardsData);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center p-8 h-full min-h-[350px] rounded-3xl relative overflow-hidden ${isLight ? 'bg-white' : 'bg-secondary'}`}>
      <div className={`absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] ${isLight ? 'text-black/30' : 'text-textLight/50'}`}>
        Financial Engine
      </div>
      
      <div ref={containerRef} className="relative w-full max-w-sm h-48 mt-8">
        {cards.map((card, index) => {
          const yOffset = index * 15;
          const scale = 1 - index * 0.05;
          const opacity = 1 - index * 0.2;
          const zIndex = 30 - index;

          return (
            <div 
              key={card.id}
              className={`absolute top-0 left-0 w-full border rounded-2xl p-6 shadow-xl flex items-center justify-between ${isLight ? 'bg-white border-black/5' : 'bg-tertiary/90 border-white/5'}`}
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${isLight ? 'bg-black/5' : 'bg-primary'} ${card.color}`}>
                  <card.icon size={24} />
                </div>
                <div>
                  <div className={`text-xs font-sans ${isLight ? 'text-black/50' : 'text-textLight/60'}`}>{card.title}</div>
                  <div className={`text-xl font-mono font-bold ${card.color}`}>{card.value}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center z-10">
        <h3 className={`text-2xl font-display font-bold mb-2 ${isLight ? 'text-textDark' : 'text-textLight'}`}>Controle Total</h3>
        <p className={`font-sans text-xs uppercase tracking-widest ${isLight ? 'text-black/40' : 'text-textMuted'}`}>Financeiro impecável</p>
      </div>
    </div>
  );
}
