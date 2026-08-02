import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   FAQ Data
───────────────────────────────────────────────────────── */
const FAQS = [
  {
    question: 'How quickly can I issue virtual cards?',
    answer: 'Instantly. Once your account is funded, you can generate new active virtual cards via our dashboard or API in under 0.1 seconds. They are immediately ready for use online or via Apple/Google Pay.'
  },
  {
    question: 'Do you support international vendors and currencies?',
    answer: 'Yes, our virtual cards can be used globally anywhere major credit cards are accepted. We automatically handle FX conversion at competitive rates so you can easily pay international contractors, agencies, or software vendors.'
  },
  {
    question: 'How does the automated budget enforcement work?',
    answer: 'You can set hard limits on a per-card basis (daily, weekly, monthly, or all-time). If a charge exceeds the limit, it is automatically declined at the network level—preventing overspend and eliminating the need for manual receipt chasing.'
  },
  {
    question: 'Is my data and money secure?',
    answer: 'Absolutely. We use bank-level 256-bit encryption for all data in transit and at rest. Our infrastructure is SOC2 ready, and funds are held in safeguarded accounts with our partner tier-1 banks. We maintain strict compliance with global KYC/KYB regulations.'
  },
  {
    question: 'How do I integrate this with our accounting software?',
    answer: 'We provide native integrations for platforms like QuickBooks, Xero, and NetSuite. For custom ERPs, you can use our REST API and webhooks to sync transaction data and receipts in real-time, completely automating your ledger reconciliation.'
  }
];

/* ─────────────────────────────────────────────────────────
   FAQ Component
───────────────────────────────────────────────────────── */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 lg:py-32 border-t border-white/5 relative bg-[#0a0204]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">FAQ</span>
          </div>
          <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Common <span className="text-red-500">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border transition-colors duration-300 ${isOpen ? 'border-red-500/30 bg-red-950/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 outline-none"
                >
                  <span className={`font-inter text-sm sm:text-base font-semibold tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? 'border-red-500/50 bg-red-500/20 text-red-400 rotate-180' : 'border-white/10 bg-white/5 text-zinc-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 pt-2 font-inter text-sm text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
