import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gold animate-glow-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-glow/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-emerald-glow/5 blur-[120px]" />
      </div>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/40"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + i * 14}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/60 border border-gold/20 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs sm:text-sm text-slate-light tracking-wide">The Future of Industry. Grounded in Excellence.</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Scale Faster with
          <br />
          <span className="text-gold-gradient">Autonomous AI Workflows</span>
          <br />
          <span className="text-white/90">& Modern Web Architecture.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg text-slate-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We architect AI automation systems and high-performance web platforms that
          eliminate manual work, capture every lead, and compound your growth — 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to get started with your AI automation services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gold-gradient text-obsidian font-semibold text-base hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Get Started on WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 text-white font-medium text-base hover:border-gold/50 hover:bg-card/50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '24/7', label: 'AI Lead Capture' },
            { value: '70%', label: 'Avg. Time Saved' },
            { value: '3x', label: 'Faster Deployments' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-body mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
    </section>
  );
}
