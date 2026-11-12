import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, TrendingUp } from 'lucide-react';

const PORTFOLIO = [
  {
    name: 'AquaLab',
    tagline: 'Luxury Water Bottling & Distribution Website',
    description: 'Premium e-commerce platform for a luxury water brand with distribution logistics, order tracking, and brand storytelling.',
    link: 'https://www.aqualab1.co.za',
    metrics: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'Conversion', value: '+34%' },
    ],
    gradient: 'from-cyan-glow/20 to-blue-500/10',
    accent: 'cyan',
  },
  {
    name: 'Acrylic Game',
    tagline: 'Multi-Branch Hair & Beauty Studio Platform',
    description: 'Multi-location booking platform with branch management, appointment scheduling, and customer loyalty system across all studios.',
    link: null,
    metrics: [
      { label: 'Locations', value: 'Multi-branch' },
      { label: 'Bookings', value: 'Automated' },
    ],
    gradient: 'from-gold/20 to-amber-500/10',
    accent: 'gold',
  },
  {
    name: 'VUKA Transport',
    tagline: 'Luxury Logistics & Fleet Booking Portal',
    description: 'Enterprise fleet booking and logistics management portal with real-time tracking, automated dispatch, and client portal access.',
    link: null,
    metrics: [
      { label: 'Fleet Size', value: 'Scalable' },
      { label: 'Automation', value: 'End-to-end' },
    ],
    gradient: 'from-emerald-glow/20 to-teal-500/10',
    accent: 'emerald',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects That <span className="text-gold-gradient">Define Excellence</span>
          </h2>
          <p className="text-slate-body max-w-2xl mx-auto text-base sm:text-lg">
            A selection of platforms we've architected, built, and deployed for growing businesses.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl bg-card/60 border border-white/[0.06] overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
            >
              {/* Device preview area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                {/* Browser mockup */}
                <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-lg bg-obsidian/80 border border-white/10 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <div className="ml-2 flex-1 h-3 rounded bg-white/5" />
                  </div>
                  {/* Fake content */}
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-1/3 rounded bg-gold/30" />
                    <div className="h-1.5 w-full rounded bg-white/5" />
                    <div className="h-1.5 w-2/3 rounded bg-white/5" />
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <div className="h-6 rounded bg-white/5" />
                      <div className="h-6 rounded bg-white/5" />
                      <div className="h-6 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
                {/* Device icons */}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <Monitor className="w-4 h-4 text-white/40" />
                  <Smartphone className="w-4 h-4 text-white/40" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{project.tagline}</p>
                <p className="text-slate-body text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg bg-card-light/50 border border-white/5 px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-gold" />
                        <span className="text-sm font-semibold text-white">{metric.value}</span>
                      </div>
                      <p className="text-[11px] text-slate-body mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Link */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-glow animate-pulse" />
                    In Development
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
