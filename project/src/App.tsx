import { useState, useEffect } from 'react';
import { CurrencyProvider } from '@/lib/currency';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import RoiCalculator from '@/components/RoiCalculator';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteEstimator from '@/components/QuoteEstimator';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handler = () => setQuoteOpen(true);
    window.addEventListener('open-quote-estimator', handler);
    return () => window.removeEventListener('open-quote-estimator', handler);
  }, []);

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-obsidian text-slate-light overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <RoiCalculator />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <QuoteEstimator open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </CurrencyProvider>
  );
}

export default App;
