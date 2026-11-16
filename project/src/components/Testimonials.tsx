import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';

const TESTIMONIALS = [
  {
    quote:
      'The appointment agent books while the team is on site. Follow-up that used to slip now happens before the lead goes cold.',
    role: 'Managing Director',
    company: 'Logistics group, Gauteng',
    outcome: 'Lead response moved from hours to minutes',
  },
  {
    quote:
      'The site and the CRM finally talk to each other. Quotes go out the same day, and the brand looks like the work we actually do.',
    role: 'Founder',
    company: 'Professional services firm',
    outcome: 'Manual admin cut from the weekly calendar',
  },
  {
    quote:
      'We stopped stitching tools together ourselves. One system handles enquiries, content, and the pipeline we report on.',
    role: 'Head of Growth',
    company: 'Retail brand',
    outcome: 'One pipeline instead of four disconnected tools',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[360px] w-[360px] rounded-full bg-gold/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
            Client Success
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Systems that earn their <span className="text-gold-gradient">place in the business</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-body sm:text-lg">
            Operators who needed the work to run without a larger team.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <article className="glass group flex h-full flex-col rounded-2xl border border-gold/20 p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_36px_rgba(212,175,55,0.14)] sm:p-8">
                <div className="mb-5 flex gap-1" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-slate-light">“{item.quote}”</blockquote>
                <div className="mt-6 border-t border-gold/15 pt-5">
                  <p className="font-display text-sm font-semibold text-white">{item.role}</p>
                  <p className="mt-1 text-xs text-slate-body">{item.company}</p>
                  <p className="mt-3 text-sm text-gold">{item.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
