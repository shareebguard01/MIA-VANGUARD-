import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { useCurrency, CURRENCIES, CurrencyCode } from '@/lib/currency';
import { buildWhatsAppLink } from '@/lib/constants';

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceZar: number;
  period: string;
  features: string[];
  featured: boolean;
  popular?: boolean;
}

const TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Web Package',
    tagline: 'Get online fast with a premium single-page presence.',
    priceZar: 3500,
    period: 'once',
    features: [
      'Modern 1-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'WhatsApp integration',
      'Fast deployment',
    ],
    featured: false,
  },
  {
    id: 'growth',
    name: 'Growth & CRM Automation',
    tagline: 'Scale with a multi-page platform and automated workflows.',
    priceZar: 8500,
    period: 'once',
    features: [
      'Multi-page web app',
      'Custom CRM integration',
      'Automated appointment workflow',
      'Advanced SEO & analytics',
      'Priority support',
    ],
    featured: true,
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise AI Infrastructure',
    tagline: 'Full-stack AI automation and complete digital brand suite.',
    priceZar: 20000,
    period: 'once',
    features: [
      'Custom AI Chat/Voice agents',
      'End-to-end automation',
      'Full digital brand suite',
      'Multi-system integration',
      'Dedicated strategy sessions',
    ],
    featured: false,
  },
];

const RETAINER = {
  name: 'Monthly Maintenance Retainer',
  priceZar: 1500,
  period: 'month',
  features: ['Ongoing updates & maintenance', 'Security monitoring', 'Content updates', 'Performance optimization'],
};

export default function Pricing() {
  const { currency, setCurrency, format } = useCurrency();
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transparent <span className="text-gold-gradient">Investment Tiers</span>
          </h2>
          <p className="text-slate-body max-w-2xl mx-auto text-base sm:text-lg">
            Choose the package that fits your stage. All prices adjust to your currency.
          </p>
        </motion.div>

        {/* Currency toggle above pricing */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-card/60 border border-white/[0.06]">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                const c = CURRENCIES[code];
                const active = currency.code === code;
                return (
                  <button
                    key={code}
                    onClick={() => setCurrency(code)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      active ? 'text-obsidian' : 'text-slate-light hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="currency-pill"
                        className="absolute inset-0 rounded-lg bg-gold-gradient"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                      )}
                    <span className="relative flex items-center gap-1.5">
                      <span className="font-semibold">{c.symbol}</span>
                      <span className="hidden sm:inline text-xs">{c.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500 ${
                tier.featured
                  ? 'bg-gradient-to-b from-gold/10 to-card/80 border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.08)] lg:scale-[1.03] lg:-mt-4 lg:mb-4'
                  : 'bg-card/60 border border-white/[0.06] hover:border-gold/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-gradient text-obsidian text-xs font-bold">
                    <Star className="w-3 h-3" fill="currentColor" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-body leading-relaxed">{tier.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-slate-body">From</span>
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white tabular-nums">
                    {format(tier.priceZar)}
                  </span>
                  <span className="text-sm text-slate-body">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-light">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-gold" strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(`Hi MIA Vanguard! I'm interested in the ${tier.name} (${format(tier.priceZar)}). Please send me more details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gold-gradient text-obsidian hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:scale-[1.01]'
                    : 'border border-gold/30 text-gold hover:bg-gold/10'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Retainer card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 relative rounded-2xl bg-card/60 border border-white/[0.06] hover:border-gold/50 transition-all duration-300 p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-glow/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-emerald-glow" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{RETAINER.name}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2">
                  {RETAINER.features.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-slate-light">
                      <Check className="w-3 h-3 text-emerald-glow" strokeWidth={3} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-right">
                <span className="text-xs text-slate-body block">From</span>
                <span className="text-2xl font-display font-bold text-white tabular-nums">
                  {format(RETAINER.priceZar)}
                </span>
                <span className="text-sm text-slate-body">/{RETAINER.period}</span>
              </div>
              <a
                href={buildWhatsAppLink(`Hi MIA Vanguard! I'm interested in the Monthly Maintenance Retainer (${format(RETAINER.priceZar)}/month).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-glow/30 text-emerald-glow hover:bg-emerald-glow/10 font-semibold text-sm transition-all"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Custom quote CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-body text-sm mb-4">Need a custom combination of services?</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-quote-estimator'))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold/30 text-gold hover:bg-gold/10 font-semibold text-sm transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Build a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
