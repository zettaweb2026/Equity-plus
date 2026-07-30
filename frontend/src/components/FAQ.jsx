import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Is opening an account on Equity Plus 100% free?",
      answer:
        "Yes! Opening a Demat & Trading account on Equity Plus is 100% free with zero account maintenance charges (AMC) for the first year and zero hidden platform surcharges.",
    },
    {
      question: "What are the brokerage charges for Equity Delivery and F&O?",
      answer:
        "We offer flat ₹0 brokerage on all Equity Delivery investments. For Intraday and Futures & Options (F&O) trades, we charge a flat ₹20 per executed order.",
    },
    {
      question: "Can beginners use Equity Plus to learn investing?",
      answer:
        "Absolutely. Equity Plus provides beginner-friendly market guides, interactive SIP/EMI calculators, and stock screening tools designed for both novice and experienced traders.",
    },
    {
      question: "How accurate are the financial calculators on Equity Plus?",
      answer:
        "Our financial calculators (SIP, Lumpsum, Step-Up SIP, EMI, SWP) use standard Indian financial compounding formulas and provide real-time visual maturity breakdowns.",
    },
    {
      question: "Is Equity Plus SEBI registered and secure?",
      answer:
        "Yes, Equity Plus complies with SEBI regulations and utilizes 256-bit bank-grade encryption protocols to safeguard user data and transactions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Everything you need to know about trading, calculations, and security on Equity Plus.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500/40 bg-slate-900 shadow-xl"
                    : "border-slate-800 bg-slate-950/80 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-white"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-2 rounded-xl border shrink-0 transition-colors ${
                    isOpen ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;