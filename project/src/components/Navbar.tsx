import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { CURRENCIES, CurrencyCode, useCurrency } from '@/lib/currency';
import { buildWhatsAppLink } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = createPortal(
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[60] bg-navy/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
          <motion.aside
            className="glass fixed bottom-0 right-0 top-0 z-[70] flex w-[min(100%,20rem)] flex-col border-l border-gold/25 bg-navy-light/90 px-6 py-6 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-sm tracking-[0.28em] text-gold">MENU</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-slate-light transition-colors duration-300 hover:text-gold"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-xl px-3 py-3 text-left text-base text-slate-light transition-all duration-300 hover:border hover:border-gold/30 hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <a
              href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to book a strategy call.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-gold-hover active:bg-gold-active"
            >
              <Phone className="h-4 w-4" />
              Book Strategy Call
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'glass border-b border-gold/15 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <button type="button" onClick={() => handleNavClick('#hero')} className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/50 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.45)]">
            <img src="/logo.png" alt="MIA Vanguard crest" className="h-full w-full scale-[1.7] object-cover" />
          </span>
          <span className="text-left">
            <span className="block font-display text-base font-bold leading-none tracking-[0.14em] text-white sm:text-lg">
              MIA <span className="text-gold">VANGUARD</span>
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-slate-body sm:text-[10px]">
              AI Automation Agency
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="group relative px-3 py-2 text-sm font-medium text-slate-light transition-colors duration-300 hover:text-gold"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-3/4" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setCurrencyOpen((open) => !open)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-navy-light/80 px-3 py-2 text-sm text-slate-light transition-all duration-300 hover:border-gold/40 hover:text-white"
              aria-expanded={currencyOpen}
              aria-haspopup="listbox"
            >
              <span className="font-semibold text-gold">{currency.symbol}</span>
              <span className="hidden text-xs sm:inline">{currency.label}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${currencyOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {currencyOpen && (
                <>
                  <button type="button" aria-label="Close currency menu" className="fixed inset-0 z-40" onClick={() => setCurrencyOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-gold/30 bg-navy-light shadow-2xl"
                    role="listbox"
                  >
                    {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                      const option = CURRENCIES[code];
                      const active = currency.code === code;
                      return (
                        <button
                          key={code}
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setCurrency(code);
                            setCurrencyOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-3 py-2.5 text-sm transition-colors duration-300 ${
                            active ? 'bg-gold/15 text-gold' : 'text-slate-light hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-semibold">{option.symbol}</span>
                            {option.label}
                          </span>
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <a
            href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to book a strategy call.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] active:bg-gold-active sm:flex"
          >
            <Phone className="h-4 w-4" />
            Book Strategy Call
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-light transition-colors duration-300 hover:text-gold lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {drawer}
    </header>
  );
}
