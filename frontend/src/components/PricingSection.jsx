import { Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const pricingItems = [
  {
    charge: "₹0",
    title: "Account Opening Charges",
    subtitle: "100% Free digital Demat & Trading account setup with zero hidden fees.",
    gradient: "from-blue-600/10 via-indigo-600/10 to-blue-500/10",
    borderColor: "border-blue-500/30",
    badge: "100% Free",
  },
  {
    charge: "₹0",
    title: "Equity Delivery Brokerage",
    subtitle: "Zero brokerage across all long-term stock holdings & delivery orders.",
    gradient: "from-emerald-600/10 via-teal-600/10 to-emerald-500/10",
    borderColor: "border-emerald-500/30",
    badge: "Zero Fee",
  },
  {
    charge: "₹20",
    title: "Intraday & F&O per Order",
    subtitle: "Flat ₹20 or 0.03% (whichever is lower) for Futures, Options & Intraday trades.",
    gradient: "from-amber-600/10 via-orange-600/10 to-amber-500/10",
    borderColor: "border-amber-500/30",
    badge: "Flat Price",
  },
  {
    charge: "₹0",
    title: "Direct Mutual Funds & IPOs",
    subtitle: "Zero distributor commission on all direct mutual fund schemes and IPO applications.",
    gradient: "from-purple-600/10 via-pink-600/10 to-purple-500/10",
    borderColor: "border-purple-500/30",
    badge: "Zero Commission",
  },
];

const PricingSection = () => {
  return (
    <div className="w-full bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> Transparent Pricing • No Hidden Charges
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Keep More of Your <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Hard-Earned Returns</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No surprise maintenance fees, no hidden platform surcharges. Straightforward pricing built to save you thousands every year.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl border ${item.borderColor} bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-400/50 flex flex-col justify-between`}
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                  <ShieldCheck className="h-5 w-5 text-emerald-400 opacity-60 group-hover:opacity-100 transition" />
                </div>

                <div className="text-5xl font-black text-white tracking-tight mb-4 group-hover:text-emerald-400 transition-colors">
                  {item.charge}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Card Bottom indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Ready to trade with India's most transparent platform?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Open your free account in under 5 minutes with 100% digital KYC documentation.
            </p>
          </div>
          <NavLink
            to="/sign"
            className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            <span>Open Demat Account</span>
            <ArrowRight className="h-5 w-5" />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;
