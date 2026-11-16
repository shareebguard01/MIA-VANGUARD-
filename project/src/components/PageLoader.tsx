import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PageLoaderProps {
  children: ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setLoading(false), reduce ? 250 : 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            role="status"
            aria-live="polite"
            aria-label="Loading MIA Vanguard"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-52 w-52 rounded-full bg-gold/30 blur-3xl animate-glow-pulse" />
              <img
                src="/logo.png"
                alt="MIA Vanguard"
                className="relative h-44 w-44 rounded-full object-cover shadow-[0_0_70px_rgba(212,175,55,0.55)]"
              />
            </div>
            <p className="mt-8 font-display text-sm tracking-[0.42em] text-gold">MIA VANGUARD</p>
            <div className="mt-6 h-px w-48 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-active via-gold to-gold-hover"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.45, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
