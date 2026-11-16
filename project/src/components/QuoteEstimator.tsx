import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Code2, Database, Bot, Megaphone, ArrowRight, ArrowLeft, Sparkles, FileText } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/constants';

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  icon: typeof Code2;
  basePrice: number; // ZAR
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'web', name: 'Web Development', description: 'Modern React/Tailwind web application', icon: Code2, basePrice: 3500 },
  { id: 'crm', name: 'CRM Setup', description: 'Custom CRM integration & dashboards', icon: Database, basePrice: 5000 },
  { id: 'ai', name: 'AI Voice/Chat Agents', description: '24/7 AI lead qualification & booking', icon: Bot, basePrice: 12000 },
  { id: 'social', name: 'Social Media', description: 'Branding, graphics, content systems', icon: Megaphone, basePrice: 3000 },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function QuoteEstimator({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [details, setDetails] = useState({ businessName: '', timeline: 'Standard (2-4 weeks)' });

  const toggleService = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedServices = SERVICE_OPTIONS.filter((s) => selected.has(s.id));
  const estimatedTotal = selectedServices.reduce((sum, s) => sum + s.basePrice, 0);
  const projectScope =
    selectedServices.length <= 1
      ? 'Starter'
      : selectedServices.length <= 2
        ? 'Growth'
        : 'Enterprise';

  const buildMessage = () => {
    const serviceList = selectedServices.map((s) => `• ${s.name} — from R${s.basePrice.toLocaleString()}`).join('\n');
    return `Hi MIA Vanguard! I'd like a project quote.

Business: ${details.businessName || 'N/A'}
Timeline: ${details.timeline}
Project Scope: ${projectScope}

Selected Services:
${serviceList}

Estimated Investment: R${estimatedTotal.toLocaleString()}

Please send me a detailed proposal.`;
  };

  const reset = () => {
    setStep(0);
    setSelected(new Set());
    setDetails({ businessName: '', timeline: 'Standard (2-4 weeks)' });
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-md" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-gold/20 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-white/5 bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Quote Estimator</h3>
                  <p className="text-[11px] text-slate-body">Step {step + 1} of 3</p>
                </div>
              </div>
              <button onClick={handleClose} className="p-1.5 text-slate-body hover:text-white rounded-lg hover:bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-card-light">
              <motion.div
                className="h-full bg-gold-gradient"
                animate={{ width: `${((step + 1) / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-5 sm:p-6">
              {/* Step 0: Select services */}
              {step === 0 && (
                <div>
                  <p className="text-sm text-slate-light mb-4">Select the services you need:</p>
                  <div className="space-y-2.5">
                    {SERVICE_OPTIONS.map((service) => {
                      const Icon = service.icon;
                      const isSelected = selected.has(service.id);
                      return (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-gold/10 border-gold/40'
                              : 'bg-card-light/40 border-white/5 hover:border-gold/40'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-gold/20' : 'bg-white/5'}`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-gold' : 'text-slate-body'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white">{service.name}</p>
                            <p className="text-xs text-slate-body truncate">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-body">from</p>
                            <p className="text-sm font-semibold text-gold">R{service.basePrice.toLocaleString()}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${isSelected ? 'bg-gold border-gold' : 'border-white/20'}`}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-obsidian" strokeWidth={3} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 1: Details */}
              {step === 1 && (
                <div className="space-y-5">
                  <p className="text-sm text-slate-light">Tell us a bit about your project:</p>
                  <div>
                    <label className="block text-xs text-slate-body mb-2">Business Name</label>
                    <input
                      type="text"
                      value={details.businessName}
                      onChange={(e) => setDetails({ ...details, businessName: e.target.value })}
                      placeholder="Your business name"
                      className="w-full px-4 py-3 rounded-xl bg-card-light/50 border border-white/10 text-sm text-white placeholder:text-slate-body focus:border-gold/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-body mb-2">Project Timeline</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Urgent (1-2 weeks)', 'Standard (2-4 weeks)', 'Flexible (1+ months)'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setDetails({ ...details, timeline: t })}
                          className={`px-2 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                            details.timeline === t
                              ? 'bg-gold/15 border-gold/40 text-gold'
                              : 'bg-card-light/40 border-white/5 text-slate-light hover:border-gold/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Summary */}
              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-light">Here's your project summary:</p>
                  <div className="rounded-xl bg-card-light/40 border border-white/5 p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-body">Business</span>
                      <span className="text-white font-medium">{details.businessName || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-body">Timeline</span>
                      <span className="text-white font-medium">{details.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-body">Scope</span>
                      <span className="text-gold font-semibold">{projectScope}</span>
                    </div>
                    <div className="border-t border-white/5 pt-3 space-y-1.5">
                      {selectedServices.map((s) => (
                        <div key={s.id} className="flex justify-between text-sm">
                          <span className="text-slate-light">{s.name}</span>
                          <span className="text-slate-light">R{s.basePrice.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/5 pt-3 flex justify-between items-center">
                      <span className="text-sm font-medium text-white">Estimated Investment</span>
                      <span className="text-xl font-display font-bold text-gold-gradient">R{estimatedTotal.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-body">Final pricing confirmed after a strategy call. Click below to send this summary directly to our WhatsApp.</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-sm text-slate-light hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 2 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={step === 0 && selected.size === 0}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-obsidian font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={buildWhatsAppLink(buildMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-obsidian font-semibold text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    Send to WhatsApp
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
