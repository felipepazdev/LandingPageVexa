import React, { useEffect, useState } from 'react';

const messages = [
  "> Awaiting new appointments...",
  "> Analyzing schedule layout...",
  "> 14:00 - Haircut booked. No conflicts.",
  "> 15:30 - Beard trim booked. Optimized.",
  "> Schedule 100% sync."
];

export default function TelemetryTypewriter({ isLight }) {
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  useEffect(() => {
    if (msgIndex >= messages.length) {
      setTimeout(() => {
        setMsgIndex(0);
        setText('');
        setCharIndex(0);
      }, 5000);
      return;
    }

    const currentMsg = messages[msgIndex];
    
    if (charIndex < currentMsg.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentMsg[charIndex]);
        setCharIndex(c => c + 1);
      }, Math.random() * 50 + 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText(prev => prev + '\n');
        setMsgIndex(m => m + 1);
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className={`flex flex-col p-8 h-full min-h-[350px] rounded-3xl relative overflow-hidden ${isLight ? 'bg-white' : 'bg-secondary'}`}>
      <div className={`absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 ${isLight ? 'text-black/30' : 'text-textMuted'}`}>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#C9A84C]"></div>
        Live Feed
      </div>
      
      <div className={`flex-1 mt-12 rounded-xl p-6 font-mono text-sm whitespace-pre-line border relative overflow-hidden ${isLight ? 'bg-black/[0.02] border-black/5 text-black/80' : 'bg-primary/50 border-white/5 text-textLight/80'}`}>
        {text}
        <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className={`text-2xl font-display font-bold mb-2 ${isLight ? 'text-textDark' : 'text-textLight'}`}>Organização Fluída</h3>
        <p className={`font-sans text-xs uppercase tracking-widest ${isLight ? 'text-black/40' : 'text-textMuted'}`}>Sem conflitos de agenda</p>
      </div>
    </div>
  );
}
