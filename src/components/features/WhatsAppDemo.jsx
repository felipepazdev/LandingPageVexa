import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Check, Send, User, MessageCircle, CheckCircle } from 'lucide-react';

export default function WhatsAppDemo() {
  const [step, setStep] = useState(0);
  
  const messages = [
    { type: 'system', text: 'Novo agendamento: Corte + Barba - 14:00', delay: 1000 },
    { type: 'sent', text: 'Olá! 👋 Notamos que você tem um horário amanhã às 14:00. Podemos confirmar?', delay: 2000 },
    { type: 'received', text: 'Oi! Pode confirmar sim, estarei aí!', delay: 3500 },
    { type: 'sent', text: 'Perfeito! ✅ Seu agendamento foi confirmado. Até amanhã!', delay: 2000 },
  ];

  useEffect(() => {
    let timeout;
    let isMounted = true;

    const runDemo = () => {
      if (!isMounted) return;
      setStep(0);
      let currentDelay = 0;
      
      messages.forEach((_, index) => {
        currentDelay += messages[index].delay;
        timeout = setTimeout(() => {
          if (isMounted) {
            setStep(index + 1);
            gsap.fromTo(`.msg-bubble-${index}`, 
              { y: 15, opacity: 0, scale: 0.9 }, 
              { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
          }
        }, currentDelay);
      });

      timeout = setTimeout(() => {
        if (isMounted) runDemo();
      }, currentDelay + 4000);
    };

    runDemo();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] mx-auto py-10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Modern Phone UI (Just the screen art) */}
      <div className="relative z-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 aspect-[9/17] flex flex-col">
        
        {/* iOS Style Status Bar */}
        <div className="h-10 w-full flex items-center justify-between px-8 pt-4">
           <span className="text-[10px] font-bold">9:41</span>
           <div className="flex gap-1.5 items-center">
              <div className="w-4 h-2.5 border border-black/20 rounded-[2px] relative">
                 <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-black rounded-[1px]" />
              </div>
           </div>
        </div>

        {/* Header do WhatsApp */}
        <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-50 pt-2">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <User size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-gray-900">Vexa - Atendimento</h4>
            <div className="flex items-center gap-1">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
               <span className="text-[10px] text-gray-400 font-medium tracking-wide">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-gray-50/50">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`msg-bubble-${i} flex ${m.type === 'received' ? 'justify-start' : 'justify-end'} ${step > i ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className={`relative px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                m.type === 'system' ? 'bg-gray-200/50 text-gray-500 text-[11px] text-center mx-auto px-6 py-1 rounded-full italic shadow-none' : 
                m.type === 'sent' ? 'bg-accent text-white rounded-tr-none' : 
                'bg-white text-gray-700 rounded-tl-none border border-gray-100'
              }`}>
                {m.text}
                {m.type === 'sent' && (
                  <div className="flex justify-end gap-1 mt-1 opacity-70">
                    <Check size={12} strokeWidth={3} className="-mr-1.5" />
                    <Check size={12} strokeWidth={3} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Input Art */}
        <div className="p-4 bg-white border-t border-gray-50 flex items-center gap-3">
          <div className="flex-1 bg-gray-100 h-10 rounded-2xl px-4 text-[11px] text-gray-400 flex items-center font-medium">
            Sua resposta aqui...
          </div>
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
            <Send size={16} />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-6 w-full flex justify-center items-end pb-2">
           <div className="w-32 h-1.5 bg-black/5 rounded-full" />
        </div>
      </div>

      {/* Labels Flutuantes Modernos */}
      <div className="absolute -right-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 z-20">
         <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <CheckCircle size={20} className="text-green-600" />
         </div>
         <div>
            <p className="text-[11px] font-bold text-gray-800">Agendamento</p>
            <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Confirmado</p>
         </div>
      </div>

      <div className="absolute -left-8 bottom-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 z-20">
         <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <MessageCircle size={20} className="text-accent" />
         </div>
         <div>
            <p className="text-[11px] font-bold text-gray-800">WhatsApp</p>
            <p className="text-[10px] text-accent font-bold uppercase tracking-widest">Enviado</p>
         </div>
      </div>
    </div>
  );
}
