import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';
import { buildWhatsAppLink } from '@/lib/constants';

const STATS = [
  { value: 70, suffix: '%', label: 'Avg. Time Saved' },
  { value: 24, suffix: '/7', label: 'AI Lead Capture' },
  { value: 3, suffix: 'x', label: 'Faster Deployments' },
];

function SplitWord({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <span className={className} aria-hidden="true">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay + index * 0.045, ease: 'easeOut' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/15 blur-[130px] animate-glow-pulse" />
        <div className="absolute -left-16 top-1/3 h-[340px] w-[340px] rounded-full bg-gold/10 blur-[110px] animate-float" />
        <div className="absolute bottom-10 right-0 h-[380px] w-[380px] rounded-full bg-navy-light blur-[90px] animate-float" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-20 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-navy-light/70 px-4 py-1.5 backdrop-blur-md"
        >
          <img src="/logo.png" alt="" className="h-6 w-6 rounded-full object-cover" />
          <span className="text-xs tracking-wide text-slate-light sm:text-sm">AI Automation & Digital Agency</span>
        </motion.div>

        <h1 aria-label="MIA VANGUARD" className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
          <span className="sr-only">MIA VANGUARD</span>
          <SplitWord text="MIA" className="block text-white" delay={0.15} />
          <SplitWord text="VANGUARD" className="mt-1 block text-gold" delay={0.32} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 font-display text-sm uppercase tracking-[0.22em] text-gold sm:text-base"
        >
          The Future of Industry. Grounded in Excellence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-body sm:text-lg"
        >
          We architect autonomous AI workflows and modern web platforms that capture every lead,
          remove manual work, and compound growth around the clock.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            fullWidth
            href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to get started with your AI automation services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold px-7 py-4 text-base font-semibold text-navy transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] active:bg-gold-active"
          >
            <MessageCircle className="h-5 w-5" />
            Get Started on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            fullWidth
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:border-gold/50 hover:bg-navy-light/70"
          >
            Explore Portfolio
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="glass mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-gold/20 rounded-2xl border border-gold/20 px-2 py-5 sm:px-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-2xl font-bold text-white sm:text-4xl"
              />
              <p className="mt-1 text-[11px] text-slate-body sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
