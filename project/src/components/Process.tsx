import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Compass, DraftingCompass, Hammer, Rocket } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STEPS = [
  {
    icon: Compass,
    title: 'Discover',
    copy: 'We map the operation, the leaks, and the work that should never be done by hand again.',
  },
  {
    icon: DraftingCompass,
    title: 'Architect',
    copy: 'Systems, agents, and brand are designed as one stack — with a clear path from lead to revenue.',
  },
  {
    icon: Hammer,
    title: 'Build',
    copy: 'We ship the automations, the web platform, and the identity that makes the system feel inevitable.',
  },
  {
    icon: Rocket,
    title: 'Scale',
    copy: 'Measurement, retention, and iteration compound the advantage after launch day.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 55%'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const scaleY = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section id="process" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full bg-gold/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
            How We Work
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A path from brief to <span className="text-gold-gradient">compounding systems</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-body sm:text-lg">
            Four stages. One line of progress. Every engagement moves through the same disciplined sequence.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2 md:-ml-px" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-gold-hover via-gold to-gold-active md:left-1/2 md:-ml-px"
          />

          <ol className="space-y-8 md:space-y-14">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const left = index % 2 === 0;
              return (
                <li key={step.title} className="relative md:grid md:grid-cols-2 md:gap-16">
                  <div className={left ? 'md:col-start-1 md:pr-4' : 'md:col-start-2 md:pl-4'}>
                    <Reveal direction={left ? 'right' : 'left'} delay={index * 0.05}>
                      <article className="group ml-16 rounded-2xl border border-white/10 bg-navy-light/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_32px_rgba(212,175,55,0.12)] md:ml-0">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="font-display text-xs tracking-[0.28em] text-gold">0{index + 1}</span>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-body">{step.copy}</p>
                      </article>
                    </Reveal>
                  </div>
                  <span className="absolute left-6 top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-gold bg-navy shadow-[0_0_16px_rgba(212,175,55,0.8)] md:left-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
