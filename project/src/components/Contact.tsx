import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Phone, Zap, ArrowUpRight } from 'lucide-react';
import { BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_PHONE_DISPLAY, buildWhatsAppLink } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gold opacity-30" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Your <span className="text-gold-gradient">AI Advantage</span>
          </h2>
          <p className="text-slate-body max-w-2xl mx-auto text-base sm:text-lg">
            Ready to scale? Reach out and we'll architect a system that works for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-card/80 border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-gold/40"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left: Primary CTA */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Book a Strategy Call</h3>
                <p className="text-sm text-slate-body leading-relaxed mb-6">
                  Jump straight to WhatsApp and let's discuss how AI automation can transform your operations.
                  We respond within 24 hours.
                </p>
              </div>

              <a
                href={buildWhatsAppLink("Hi MIA Vanguard, I'd like to book a strategy call to discuss AI automation for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gold-gradient text-obsidian font-semibold text-base hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
                <span className="text-xs text-slate-body">Currently accepting new projects</span>
              </div>
            </div>

            {/* Right: Contact details */}
            <div className="p-8 sm:p-10 space-y-5">
              <h3 className="text-xl font-bold text-white mb-1">Contact Details</h3>

              <a href={buildWhatsAppLink('Hello MIA Vanguard!')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-body">Phone / WhatsApp</p>
                  <p className="text-sm font-medium text-white group-hover:text-gold transition-colors">{BUSINESS_PHONE_DISPLAY}</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-body">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-gold transition-colors truncate">{BUSINESS_EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-body">Office Address</p>
                  <p className="text-sm font-medium text-white leading-snug">{BUSINESS_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
