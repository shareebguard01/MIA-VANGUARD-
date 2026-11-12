import { Zap, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_PHONE_DISPLAY, buildWhatsAppLink } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-obsidian">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-obsidian" fill="currentColor" />
              </div>
              <div>
                <span className="block font-display font-bold text-white text-lg leading-none tracking-wider">
                  MIA <span className="text-gold-gradient">VANGUARD</span>
                </span>
                <span className="block text-[10px] text-slate-body tracking-[0.2em] uppercase mt-0.5">
                  AI Automation Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-body leading-relaxed max-w-sm mb-5">
              The Future of Industry. Grounded in Excellence. We architect AI automation
              systems and modern web platforms that scale your business 24/7.
            </p>
            <a
              href={buildWhatsAppLink("Hi MIA Vanguard! I'd like to learn more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold-gradient text-obsidian font-semibold text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Book Strategy Call
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={buildWhatsAppLink('Hello MIA Vanguard!')} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-slate-body hover:text-gold transition-colors">
                  <MessageCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-start gap-2 text-sm text-slate-body hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="break-all">{BUSINESS_EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-slate-body">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  {BUSINESS_ADDRESS}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-body text-center sm:text-left">
            Copyright 2026 MIA Vanguard. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-slate-body hover:text-gold transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
