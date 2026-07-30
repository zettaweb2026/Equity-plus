import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const pricingItems = [
  {
    charge: "₹0",
    title: "Account Opening & Maintenance",
    subtitle: "We believe in starting right. Open your Demat account for free, and pay zero Annual Maintenance Charges (AMC) for the first year.",
    gradient: "from-blue-600/10 via-indigo-600/10 to-blue-500/10",
    borderColor: "border-blue-500/30",
    badge: "100% Free",
  },
  {
    charge: "₹0",
    title: "Equity Delivery Trades",
    subtitle: "Investing for the long term? We charge absolutely no brokerage when you buy and hold stocks for more than a day.",
    gradient: "from-emerald-600/10 via-teal-600/10 to-emerald-500/10",
    borderColor: "border-emerald-500/30",
    badge: "Free Delivery",
  },
  {
    charge: "₹20",
    title: "Intraday & F&O Orders",
    subtitle: "Active trader? Pay a flat ₹20 or 0.03% (whichever is lower) per executed order across Equity Intraday, Futures, and Options.",
    gradient: "from-amber-600/10 via-orange-600/10 to-amber-500/10",
    borderColor: "border-amber-500/30",
    badge: "Flat Pricing",
  },
  {
    charge: "₹0",
    title: "Direct Mutual Funds & IPOs",
    subtitle: "Invest in direct mutual funds and avoid distributor commissions. Apply for IPOs instantly using UPI, completely free of charge.",
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/10 hover:ring-emerald-500/30"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 h-48 w-48 -translate-y-1/2 translate-x-1/3 rounded-full blur-[70px] bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />

              {/* Card top */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10 shadow-sm backdrop-blur-md">
                    {item.badge}
                  </span>
                  <ShieldCheck className="h-5 w-5 text-white/20 group-hover:text-emerald-400 transition-colors duration-500" />
                </div>

                <div className="text-5xl font-black text-white tracking-tighter mb-4 group-hover:text-emerald-400 transition-colors duration-500">
                  {item.charge}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {item.subtitle}
                </p>
              </div>

              {/* Card Bottom indicator */}
              <div className="relative z-10 mt-8 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-black p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl ring-1 ring-white/5">
          {/* Banner Glows */}
          <div className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-3 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to trade with India's most transparent platform?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Open your free account in under 5 minutes with 100% digital KYC documentation.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <NavLink
              to="/sign"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm transition-all duration-300 shadow-xl shadow-white/10 hover:scale-[1.02]"
            >
              <span>Open Demat Account</span>
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;
