import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingDown, TrendingUp, Calculator, Sparkles } from 'lucide-react';
import { useCurrency } from '@/lib/currency';
import { buildWhatsAppLink } from '@/lib/constants';

export default function RoiCalculator() {
  const { currency, format } = useCurrency();
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCostZar, setHourlyCostZar] = useState(250);

  // Calculate savings — assume AI automates 70% of manual hours
  const automationRate = 0.7;
  const hoursSavedWeekly = hoursPerWeek * automationRate;
  const hoursSavedMonthly = hoursSavedWeekly * 4.33;
  const moneySavedMonthlyZar = hoursSavedMonthly * hourlyCostZar;

  const moneySavedDisplay = useMemo(() => format(moneySavedMonthlyZar), [moneySavedMonthlyZar, currency, format]);
  const hourlyCostDisplay = useMemo(() => format(hourlyCostZar), [hourlyCostZar, currency, format]);

  const hoursPercent = (hoursPerWeek / 80) * 100;
  const costPercent = Math.min((hourlyCostZar / 1000) * 100, 100);

  const whatsappMsg = `Hi MIA Vanguard! I used your ROI Calculator and here's what I found:

• Manual hours/week: ${hoursPerWeek}h
• Hourly labor cost: ${hourlyCostDisplay}
• Estimated monthly hours saved with AI: ${Math.round(hoursSavedMonthly)}h
• Estimated monthly money saved: ${moneySavedDisplay}

I'd like to discuss how your AI automations can deliver these savings for my business.`;

  return (
    <section id="roi" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-glow/5 blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-glow/10 border border-emerald-glow/20 text-emerald-glow text-xs font-medium tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Tool
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI ROI & <span className="text-gold-gradient">Time-Savings Calculator</span>
          </h2>
          <p className="text-slate-body max-w-2xl mx-auto text-base sm:text-lg">
            See exactly how much time and money MIA Vanguard AI automations can reclaim for your business.
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-card/80 border border-white/[0.08] backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative grid lg:grid-cols-2 gap-8 p-6 sm:p-10">
            {/* Inputs */}
            <div className="space-y-8">
              {/* Hours slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-light">
                    <Clock className="w-4 h-4 text-gold" />
                    Hours Spent on Manual Operations Weekly
                  </label>
                  <span className="text-lg font-display font-bold text-white tabular-nums">
                    {hoursPerWeek}h
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="80"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  style={{ '--val': `${hoursPercent}%` } as React.CSSProperties}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-body mt-2">
                  <span>1h</span>
                  <span>80h</span>
                </div>
              </div>

              {/* Hourly cost slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-light">
                    <DollarSign className="w-4 h-4 text-gold" />
                    Average Hourly Labor Cost
                  </label>
                  <span className="text-lg font-display font-bold text-white tabular-nums">
                    {hourlyCostDisplay}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={hourlyCostZar}
                  onChange={(e) => setHourlyCostZar(Number(e.target.value))}
                  style={{ '--val': `${costPercent}%` } as React.CSSProperties}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-body mt-2">
                  <span>{currency.symbol}50</span>
                  <span>{currency.symbol}1,000+</span>
                </div>
              </div>

              <p className="text-xs text-slate-body leading-relaxed">
                Calculations assume AI automation eliminates ~70% of manual operational hours.
                Estimates are illustrative; actual savings vary by workflow complexity.
              </p>
            </div>

            {/* Outputs */}
            <div className="space-y-4">
              {/* Money saved */}
              <motion.div
                key={moneySavedDisplay}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl bg-gradient-to-br from-gold/15 to-card-light/40 border border-gold/20 p-6 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-50" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-sm text-slate-light font-medium">Monthly Money Saved</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gold-gradient tabular-nums">
                    {moneySavedDisplay}
                  </div>
                  <p className="text-xs text-slate-body mt-2">per month with MIA Vanguard AI Automations</p>
                </div>
              </motion.div>

              {/* Hours reclaimed */}
              <motion.div
                key={hoursSavedMonthly}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl bg-gradient-to-br from-emerald-glow/10 to-card-light/40 border border-emerald-glow/20 p-6 overflow-hidden"
              >
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-glow/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-glow" />
                    </div>
                    <span className="text-sm text-slate-light font-medium">Hours Reclaimed Monthly</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-emerald-glow tabular-nums">
                    {Math.round(hoursSavedMonthly)}h
                  </div>
                  <p className="text-xs text-slate-body mt-2">redirected to growth, strategy, and revenue</p>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <a
                href={buildWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gold-gradient text-obsidian font-semibold text-sm hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4" />
                Send My Results to WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
