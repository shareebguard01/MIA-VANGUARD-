import { useEffect, useState } from 'react';
import { CurrencyProvider } from '@/lib/currency';
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import RoiCalculator from '@/components/RoiCalculator';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteEstimator from '@/components/QuoteEstimator';
import PageLoader from '@/components/PageLoader';
import CustomCursor from '@/components/CustomCursor';

function StructuredData() {
  useEffect(() => {
    const origin = window.location.origin;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'MIA Vanguard',
      description:
        'MIA Vanguard is an AI automation and digital agency. The Future of Industry. Grounded in Excellence.',
      slogan: 'The Future of Industry. Grounded in Excellence.',
      url: origin,
      image: `${origin}/og-image.png`,
      logo: `${origin}/logo.png`,
      email: BUSINESS_EMAIL,
      telephone: BUSINESS_PHONE_DISPLAY,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '298 De Deur Estates, De Deur',
        addressLocality: 'Johannesburg',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
      areaServed: {
        '@type': 'Country',
        name: 'South Africa',
      },
      knowsAbout: ['AI Automation', 'Web Architecture', 'Digital Branding', 'Custom CRM'],
    };

    const existing = document.getElementById('mia-vanguard-schema');
    existing?.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'mia-vanguard-schema';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handler = () => setQuoteOpen(true);
    window.addEventListener('open-quote-estimator', handler);
    return () => window.removeEventListener('open-quote-estimator', handler);
  }, []);

  return (
    <PageLoader>
      <StructuredData />
      <CustomCursor />
      <CurrencyProvider>
        <div className="min-h-screen overflow-x-hidden bg-navy text-slate-light">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
            <RoiCalculator />
            <Pricing />
            <Contact />
          </main>
          <Footer />
          <QuoteEstimator open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        </div>
      </CurrencyProvider>
    </PageLoader>
  );
}

export default App;
