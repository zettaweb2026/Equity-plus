import { useState } from "react";
import { 
  TrendingUp, 
  BarChart2, 
  Sprout, 
  Zap, 
  Coins, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
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
    title: "Invest in India's Top Companies with ₹0 Delivery Charges",
    desc: "Build long-term equity wealth with zero brokerage fees. Get real-time NSE/BSE charts, deep fundamentals, and zero account maintenance charges for year 1.",
    highlights: ["Zero brokerage on equity delivery", "Instant 100% paperless KYC", "Advanced TradingView candlestick charts"],
    cta: "Explore Stocks",
    link: "/services"
  },
  fo: {
    title: "High-Speed F&O Trading Platform for Derivatives",
    desc: "Trade NIFTY, BANK NIFTY, FINNIFTY, and stock futures & options with lightning speed. Flat ₹20 per order with option chain analysis and basket orders.",
    highlights: ["Flat ₹20 per executed order", "Real-time Option Chain with Greeks", "Advanced Stop Loss & Bracket Orders"],
    cta: "Start F&O Trading",
    link: "/services"
  },
  mf: {
    title: "Direct Mutual Funds & Automated SIPs",
    desc: "Earn up to 1.5% extra returns with Direct Mutual Fund plans. Zero distributor commission with automatic SIP debit and goal tracker.",
    highlights: ["0% commission on direct funds", "Automated monthly SIP setup", "Portfolio health check & rebalancing"],
    cta: "Start SIP Investment",
    link: "/calculators"
  },
  ipo: {
    title: "Apply for Mainboard & SME IPOs using UPI",
    desc: "Never miss out on high-growth company listings. Apply for IPOs in 3 simple clicks with instant UPI pre-mandates.",
    highlights: ["Pre-apply before IPO opens", "Real-time subscription tracker", "Sovereign Gold Bond zero-fee purchase"],
    cta: "Check Open IPOs",
    link: "/services"
  },
  gold: {
    title: "Digital Gold & High-Yield Fixed Deposits",
    desc: "Diversify your wealth with 24K 99.9% pure Digital Gold starting at just ₹10 and fixed deposits with top scheduled banks.",
    highlights: ["Buy 24K gold starting at ₹10", "Bank FDs with up to 9.1% interest", "100% insured digital vault security"],
    cta: "Invest in Gold",
    link: "/services"
  },
  calc: {
    title: "Institutional-Grade Financial Calculators",
    desc: "Accurately project your SIP returns, EMI payouts, step-up investments, and systematic withdrawal schedules before committing money.",
    highlights: ["Instant visual returns graph", "Customized inflation adjuster", "100% free and accurate calculations"],
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="h-4 w-4" /> Comprehensive Wealth Platform
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Everything you need to <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Grow Your Wealth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Select a financial category to explore modern trading, investment instruments, and analytics tools.
          </p>
        </div>

        {/* Category Pill Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 scale-105"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-slate-950" : "text-emerald-400"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                    isActive ? "bg-slate-950 text-emerald-400" : "bg-slate-900 text-slate-400 border border-slate-800"
                  }`}
                >
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Feature Box */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text & Feature Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {categories.find((c) => c.id === activeCategory)?.count}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {detail.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
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
