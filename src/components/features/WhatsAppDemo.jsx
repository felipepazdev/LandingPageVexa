import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Check, Send, User, Smartphone, MessageCircle } from 'lucide-react';

export default function WhatsAppDemo() {
  const [step, setStep] = useState(0);
  const mockupRef = useRef(null);
  
  // Mensagens da demonstração
  const messages = [
    { type: 'system', text: 'Novo agendamento realizado: Corte + Barba - 14:00', delay: 1000 },
    { type: 'sent', text: 'Olá! 👋 Notamos que você tem um horário amanhã às 14:00. Podemos confirmar?', delay: 2000 },
    { type: 'received', text: 'Oi! Pode confirmar sim, estarei aí!', delay: 3500 },
    { type: 'sent', text: 'Perfeito! ✅ Seu agendamento foi confirmado. Até amanhã!', delay: 2000 },
  ];

  useEffect(() => {
    let timeout;
    const runDemo = () => {
      setStep(0);
      let currentDelay = 0;
      
      messages.forEach((_, index) => {
        currentDelay += messages[index].delay;
        timeout = setTimeout(() => {
          setStep(index + 1);
          // Pequeno efeito de vibrar no novo passo
          gsap.fromTo('.msg-bubble-' + index, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
        }, currentDelay);
      });

      // Reiniciar após um tempo
      timeout = setTimeout(runDemo, currentDelay + 4000);
    };

    runDemo();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/18] bg-[#111] rounded-[3rem] p-3 shadow-2xl border-[8px] border-[#222]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#222] rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-12 h-1 bg-[#111] rounded-full" />
      </div>

      {/* Screen */}
      <div className="w-full h-full bg-[#f0f2f5] rounded-[2.2rem] overflow-hidden relative flex flex-col pt-8">
        
        {/* Header do WhatsApp */}
        <div className="bg-[#0DA3AD] p-4 pt-6 text-white flex items-center gap-3 shadow-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <User size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold">Vexa - Agendamentos</h4>
            <p className="text-[10px] opacity-80">Online agora</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`msg-bubble-${i} flex ${m.type === 'received' ? 'justify-start' : 'justify-end'} ${step > i ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-2xl text-xs shadow-sm ${
                m.type === 'system' ? 'bg-gray-200 text-gray-600 text-center mx-auto w-full italic' : 
                m.type === 'sent' ? 'bg-[#dcf8c6] text-gray-800 rounded-tr-none' : 
                'bg-white text-gray-800 rounded-tl-none'
              }`}>
                {m.text}
                {m.type === 'sent' && (
                  <div className="flex justify-end mt-1">
                    <Check size={10} className="text-blue-500 -mr-1" />
                    <Check size={10} className="text-blue-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white flex items-center gap-2 border-t border-gray-200">
          <div className="flex-1 bg-gray-100 h-8 rounded-full px-4 text-[10px] text-gray-400 flex items-center">
            Digite uma mensagem...
          </div>
          <div className="w-8 h-8 rounded-full bg-[#0DA3AD] flex items-center justify-center text-white">
            <Send size={14} />
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute -right-6 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <MessageCircle size={16} className="text-green-600" />
         </div>
         <div className="text-[10px]">
            <p className="font-bold">WhatsApp Oficial</p>
            <p className="text-gray-400">Entrega Instantânea</p>
         </div>
      </div>
    </div>
  );
}
