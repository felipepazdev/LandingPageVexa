import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TrialForm from './components/TrialForm';

function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const openTrial = () => setIsTrialOpen(true);
  const closeTrial = () => setIsTrialOpen(false);

  return (
    <div className="relative min-h-screen bg-primary">

      <Navbar onOpenTrial={openTrial} />

      <main className="flex flex-col">
        <Hero onOpenTrial={openTrial} />
        <Features />
        <Philosophy />
        <Protocol />
        <Testimonials />
        <Pricing onOpenTrial={openTrial} />
      </main>

      <Footer onOpenTrial={openTrial} />

      <TrialForm isOpen={isTrialOpen} onClose={closeTrial} />
    </div>
  );
}

export default App;
