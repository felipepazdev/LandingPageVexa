import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MousePointer2 } from 'lucide-react';

export default function CursorScheduler({ isLight }) {
  const cursorRef = useRef(null);
  const gridCellsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.fromTo(cursorRef.current, { x: 50, y: 150, opacity: 0 }, { x: 50, y: 50, opacity: 1, duration: 1, ease: 'power2.out' })
        .to(cursorRef.current, { x: 120, y: 60, duration: 0.8, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => {
          gsap.to(gridCellsRef.current[2], { backgroundColor: '#0DA3AD', color: '#FFFFFF', duration: 0.3 });
        })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 200, y: 100, duration: 0.8, ease: 'power2.inOut', delay: 0.2 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => {
          gsap.to(gridCellsRef.current[11], { backgroundColor: '#0DA3AD', color: '#FFFFFF', duration: 0.3 });
        })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 250, y: 180, opacity: 0, duration: 1, ease: 'power2.in' })
        .call(() => {
          gsap.to(gridCellsRef.current, { backgroundColor: 'transparent', color: isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(250, 248, 245, 0.4)', duration: 0.5 });
        });
        
    });
    return () => ctx.revert();
  }, [isLight]);

  return (
    <div className={`flex flex-col p-8 h-full min-h-[350px] rounded-3xl relative overflow-hidden ${isLight ? 'bg-white' : 'bg-secondary'}`}>
      <div className={`absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] ${isLight ? 'text-black/30' : 'text-textLight/50'}`}>
        Predictability Engine
      </div>
      
      <div className="flex-1 mt-12 relative w-full flex justify-center items-center">
        <div className="grid grid-cols-7 gap-1.5 w-full max-w-[280px]">
          {['S','M','T','W','T','F','S'].map((day, i) => (
            <div key={i} className={`text-center font-mono text-[10px] mb-2 ${isLight ? 'text-black/20' : 'text-textLight/40'}`}>{day}</div>
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <div 
              key={i} 
              ref={el => gridCellsRef.current[i] = el}
              className={`aspect-square border rounded-md flex items-center justify-center font-mono text-[10px] transition-colors ${isLight ? 'border-black/5 text-black/40' : 'border-white/10 text-textLight/40'}`}
            >
              {i + 10}
            </div>
          ))}
        </div>
        
        <div ref={cursorRef} className="absolute top-0 left-0 z-20 text-accent drop-shadow-md" style={{ opacity: 0 }}>
          <MousePointer2 size={24} className="fill-accent" />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className={`text-2xl font-display font-bold mb-2 ${isLight ? 'text-textDark' : 'text-textLight'}`}>Previsão Real</h3>
        <p className={`font-sans text-xs uppercase tracking-widest ${isLight ? 'text-black/40' : 'text-textMuted'}`}>Dados que movem o estúdio</p>
      </div>
    </div>
  );
}
