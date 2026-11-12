import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Zap } from 'lucide-react';
import { useCurrency, CURRENCIES, CurrencyCode } from '@/lib/currency';
import { buildWhatsAppLink } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-gold/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick('#hero')} className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 blur-lg group-hover:bg-gold/50 transition-all duration-300" />
              <div className="relative w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-obsidian" fill="currentColor" />
              </div>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-white text-base sm:text-lg leading-none tracking-wider">
                MIA <span className="text-gold-gradient">VANGUARD</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] text-slate-body tracking-[0.2em] uppercase mt-0.5">
                AI Automation Agency
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-light hover:text-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency toggle */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card-light/60 border border-white/[0.06] hover:border-gold/30 transition-all text-sm text-slate-light hover:text-white"
              >
                <span className="text-gold font-semibold">{currency.symbol}</span>
                <span className="hidden sm:inline text-xs">{currency.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${currencyOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {currencyOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setCurrencyOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-2 w-36 rounded-xl bg-card border border-gold/20 shadow-2xl overflow-hidden z-50"
                    >
                      {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                        const c = CURRENCIES[code];
                        const active = currency.code === code;
                        return (
                          <button
                            key={code}
                            onClick={() => {
                              setCurrency(code);
                              setCurrencyOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                              active
                                ? 'bg-gold/15 text-gold'
                                : 'text-slate-light hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="font-semibold">{c.symbol}</span>
                              {c.label}
                            </span>
                            {active && <div className="w-1.5 h-1.5 rounded-full bg-gold" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a
              href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to book a strategy call.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold-gradient text-obsidian font-semibold text-sm hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Call
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-light hover:text-gold"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/5"
            >
              <div className="py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-slate-light hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to book a strategy call.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mx-4 mt-2 px-4 py-3 rounded-lg bg-gold-gradient text-obsidian font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Book Strategy Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
