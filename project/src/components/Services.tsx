import { motion } from 'framer-motion';
import { Bot, CalendarClock, Code2, Megaphone, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'AI Automation & Custom CRMs',
    description:
      'Workflow architecture that connects your tools into one intelligent system. Airtable, Make.com, and custom pipelines that run your operations while you sleep.',
    features: ['Airtable + Make.com integration', 'Custom CRM dashboards', 'Automated data pipelines', 'Lead routing & enrichment'],
    accent: 'gold',
  },
  {
    icon: CalendarClock,
    title: 'Automated Appointment Setting & AI Agents',
    description:
      '24/7 AI voice and chat agents that qualify leads, answer questions, and book appointments directly into your calendar — no human intervention required.',
    features: ['AI Voice agents', 'AI Chat agents', '24/7 lead qualification', 'Auto-booking calendar sync'],
    accent: 'cyan',
  },
  {
    icon: Code2,
    title: 'Modern Web Architecture',
    description:
      'Ultra-fast React & Tailwind web applications engineered for performance, SEO, and conversion. Built to scale with your business, not hold it back.',
    features: ['React + Tailwind platforms', 'Sub-second load times', 'SEO-optimized architecture', 'Mobile-first responsive design'],
    accent: 'emerald',
  },
  {
    icon: Megaphone,
    title: 'Social Media Strategy & Digital Branding',
    description:
      'Graphics remastering, brand kits, and content systems that give your business a premium, consistent identity across every touchpoint.',
    features: ['Brand kit development', 'Graphics remastering', 'Content calendar systems', 'Cross-platform consistency'],
    accent: 'gold',
  },
];

const accentMap: Record<string, { glow: string; text: string; border: string; bg: string }> = {
  gold: { glow: 'group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]', text: 'text-gold', border: 'group-hover:border-gold/40', bg: 'bg-gold/10' },
  cyan: { glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]', text: 'text-cyan-glow', border: 'group-hover:border-cyan-glow/40', bg: 'bg-cyan-glow/10' },
  emerald: { glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]', text: 'text-emerald-glow', border: 'group-hover:border-emerald-glow/40', bg: 'bg-emerald-glow/10' },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Full-Stack <span className="text-gold-gradient">Digital Infrastructure</span>
          </h2>
          <p className="text-slate-body max-w-2xl mx-auto text-base sm:text-lg">
            Four pillars of service that work together to automate, convert, and scale your business.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const accent = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-card/60 border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:bg-card/90 ${accent.glow} ${accent.border}`}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-body group-hover:text-gold transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-light">
                      <div className={`w-1.5 h-1.5 rounded-full ${accent.text.replace('text-', 'bg-')}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
