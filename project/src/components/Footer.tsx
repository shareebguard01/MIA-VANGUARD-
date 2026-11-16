import { useState, type FormEvent } from 'react';
import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, buildWhatsAppLink } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Results', href: '#testimonials' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  {
    label: 'WhatsApp',
    href: buildWhatsAppLink('Hello MIA Vanguard!'),
    icon: MessageCircle,
  },
  {
    label: 'Email',
    href: `mailto:${BUSINESS_EMAIL}`,
    icon: Mail,
  },
  {
    label: 'Call',
    href: 'tel:+27835546348',
    icon: Phone,
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState('');

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid email address.');
      setJoined(false);
      return;
    }
    setError('');
    setJoined(true);
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('MIA Vanguard briefing list')}&body=${encodeURIComponent(`Please add ${trimmed} to the MIA Vanguard briefing list.`)}`;
  };

  return (
    <footer className="relative border-t border-gold/15 bg-navy">
      <div className="absolute left-1/2 top-0 h-px w-[28rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
              <div>
                <span className="block font-display text-lg font-bold leading-none tracking-[0.14em] text-white">
                  MIA <span className="text-gold">VANGUARD</span>
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-slate-body">
                  AI Automation Agency
                </span>
              </div>
            </div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-body">
              The Future of Industry. Grounded in Excellence. AI automation, modern web architecture, and digital branding for ambitious businesses.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-white">Quick links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-body transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={buildWhatsAppLink('Hello MIA Vanguard!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-slate-body transition-colors duration-300 hover:text-gold"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-start gap-2 text-sm text-slate-body transition-colors duration-300 hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span className="break-all">{BUSINESS_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-body">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                {BUSINESS_ADDRESS}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Briefing list</h4>
            <p className="mb-4 text-sm leading-relaxed text-slate-body">
              Occasional notes on automation, web systems, and how operators are scaling.
            </p>
            <form onSubmit={onSubmit} className="space-y-3">
              <label htmlFor="briefing-email" className="sr-only">
                Email address
              </label>
              <input
                id="briefing-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-sm text-white transition-colors duration-300 placeholder:text-slate-body focus:border-gold/50 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-gold-hover active:bg-gold-active"
              >
                Join the list
              </button>
              {error && <p className="text-xs text-gold-hover">{error}</p>}
              {joined && <p className="text-xs text-gold">Your mail app will send the request to MIA Vanguard.</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-center text-xs text-slate-body sm:text-left">© 2026 MIA Vanguard. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-slate-body transition-colors duration-300 hover:text-gold"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
