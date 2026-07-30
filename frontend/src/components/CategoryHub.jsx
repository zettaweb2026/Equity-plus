import { useState } from "react";
import { 
  TrendingUp, 
  BarChart2, 
  Sprout, 
  Zap, 
  Coins, 
  Calculator, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { NavLink } from "react-router-dom";

const categories = [
  { id: "stocks", label: "Stocks", icon: TrendingUp, count: "5000+ Listed", badge: "0% Brokerage" },
  { id: "fo", label: "Futures & Options", icon: BarChart2, count: "NIFTY & BANK NIFTY", badge: "Flat ₹20" },
  { id: "mf", label: "Mutual Funds", icon: Sprout, count: "1400+ Direct Plans", badge: "0% Commission" },
  { id: "ipo", label: "IPOs & SGB", icon: Zap, count: "Upcoming & Open", badge: "1-Click Apply" },
  { id: "gold", label: "Gold & FDs", icon: Coins, count: "99.9% Pure Digital Gold", badge: "Assured Yield" },
  { id: "calc", label: "Calculators", icon: Calculator, count: "5+ Smart Tools", badge: "Instant Calculation" },
];

const categoryDetails = {
  stocks: {
    title: "Invest in India's top companies with zero brokerage",
    desc: "Open a free demat account and buy shares of your favorite companies like Reliance, Tata Motors, and HDFC Bank. Hold them for the long term with absolutely ₹0 delivery charges.",
    highlights: ["₹0 brokerage on equity delivery", "100% paperless account opening in 5 mins", "Simple, beginner-friendly interface"],
    cta: "Explore Stocks",
    link: "/services"
  },
  fo: {
    title: "Trade Futures & Options with advanced charting",
    desc: "Get an edge in the derivatives market with real-time Option Chains, Greeks, and TradingView charts. Execute fast and pay just a flat ₹20 per executed order.",
    highlights: ["Flat ₹20 per executed order", "Real-time Option Chain with Greeks", "Advanced Stop Loss & Bracket Orders"],
    cta: "Start F&O Trading",
    link: "/services"
  },
  mf: {
    title: "Grow your wealth with Direct Mutual Funds",
    desc: "Why pay commissions? Invest in direct mutual funds and earn up to 1.5% extra returns over time. Start a monthly SIP with as little as ₹100.",
    highlights: ["0% commission, 0% hidden charges", "Start SIPs or make one-time lumpsum investments", "Track and manage all external funds in one place"],
    cta: "Start SIP Investment",
    link: "/calculators"
  },
  ipo: {
    title: "Apply for the latest IPOs in 3 simple clicks",
    desc: "Pre-apply for upcoming Initial Public Offerings (IPOs) before they even hit the market. Use your UPI ID to mandate payments instantly and track your allotment status live.",
    highlights: ["Apply 24/7 via UPI mandates", "Real-time subscription & allotment tracking", "Smart alerts for upcoming issues"],
    cta: "Check Open IPOs",
    link: "/services"
  },
  gold: {
    title: "Buy 24K pure Digital Gold securely",
    desc: "Skip the making charges and storage fees. Buy 99.9% pure 24K digital gold starting from just ₹10. Sell anytime at live market rates or get it delivered as physical coins.",
    highlights: ["Buy digital gold starting at ₹10", "Sell instantly at live market rates", "100% insured & secured in bank-grade vaults"],
    cta: "Invest in Gold",
    link: "/services"
  },
  calc: {
    title: "Plan your financial goals with smart calculators",
    desc: "Not sure how much to invest? Use our free financial tools to project your SIP returns, calculate EMI payouts, or plan your early retirement.",
    highlights: ["SIP, Lumpsum & Step-up calculators", "Custom inflation adjustments", "100% free with clear visual graphs"],
    cta: "Open Calculators Hub",
    link: "/calculators"
  }
};

const CategoryHub = () => {
  const [activeCategory, setActiveCategory] = useState("stocks");
  const detail = categoryDetails[activeCategory];

  return (
    <div className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Everything you need to <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Grow Your Wealth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Select a financial category to explore modern trading, investment instruments, and analytics tools.
          </p>
        </div>

        {/* Category Pill Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 border overflow-hidden ${
                  isActive
                    ? "bg-white/10 text-white border-white/20 shadow-[0_0_40px_-10px_rgba(52,211,153,0.15)] scale-[1.03]"
                    : "bg-[#111827] hover:bg-white/5 text-slate-400 border-white/5 hover:border-white/10"
                }`}
              >
                {isActive && <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-50 pointer-events-none" />}
                
                <Icon className={`relative z-10 h-5 w-5 transition-transform duration-300 ${isActive ? "text-emerald-400 scale-110" : "text-slate-500 group-hover:text-emerald-400/70"}`} />
                <span className="relative z-10 tracking-wide">{cat.label}</span>
                <span
                  className={`relative z-10 text-[10px] font-black uppercase px-2 py-1 rounded-md transition-colors duration-300 ${
                    isActive ? "bg-emerald-500 text-slate-950" : "bg-black/50 text-slate-500 border border-white/5"
                  }`}
                >
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Feature Box */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 shadow-2xl ring-1 ring-white/5 transition-all duration-700">
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none transition-all duration-1000" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Text & Feature Info */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-[1.15] tracking-tight drop-shadow-sm">
                {detail.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg font-medium">
                {detail.desc}
              </p>

              <div className="space-y-3 pt-2">
                {detail.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <NavLink
                  to={detail.link}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-base font-extrabold transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <span>{detail.cta}</span>
                  <ArrowRight className="h-5 w-5" />
                </NavLink>
              </div>
            </div>

            {/* Visual Interactive Preview Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">EQUITY PLUS TERMINAL</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">LIVE</span>
                </div>

                {/* Dynamic Content Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-400">NSE Benchmark</div>
                      <div className="text-base font-bold text-white">NIFTY 50 Index</div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold text-white">24,250.20</div>
                      <div className="text-xs font-bold text-emerald-400">+108.50 (+0.45%)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Order Execution Speed</div>
                      <div className="text-base font-bold text-emerald-400">Sub-10 milliseconds</div>
                    </div>
                    <div className="text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-lg">
                      ⚡ Low Latency
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Brokerage Standard</div>
                      <div className="text-base font-bold text-white">Flat ₹0 Delivery / ₹20 F&O</div>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      SEBI Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryHub;
