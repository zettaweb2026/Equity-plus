import { useState } from "react";
import { TrendingUp, Coins, ArrowRight, Home as HomeIcon, Briefcase, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const MiniChart = ({ color, data }) => {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible transform translate-y-2">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M0 40 ${data.map((y, i) => `L ${i * (100 / (data.length - 1))} ${40 - y}`).join(' ')} L 100 40 Z`}
        fill={`url(#grad-${color})`}
      />
      <path
        d={`M0 40 ${data.map((y, i) => `L ${i * (100 / (data.length - 1))} ${40 - y}`).join(' ')}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Thirhome = () => {
  const [activeTab, setActiveTab] = useState("Investment");

  const categories = ["Investment", "Loans", "Tax", "Retirement", "Planning"];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Dynamic Category Filtering */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === cat
              ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
              : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bento Grid Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,_auto)]">

        {/* SIP Calculator - Featured (Spans 2 columns, 2 rows) */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-500/20 md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700" />

          <div className="relative z-10 flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <TrendingUp className="h-6 w-6 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">SIP Calculator</h3>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-1">Featured</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mt-4 font-medium leading-relaxed">
                Project your wealth accumulation through disciplined monthly investments with compounding benefits.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4 mt-8 mb-8">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 shadow-inner backdrop-blur-sm">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mb-1">Monthly SIP</p>
              <p className="text-xl font-black text-white">₹5,000</p>
              <p className="text-xs text-slate-500 mt-1 font-semibold">12% p.a. • 20 Yrs</p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4 shadow-inner backdrop-blur-sm">
              <p className="text-[10px] text-emerald-400/80 uppercase font-black tracking-wider mb-1">Projected Wealth</p>
              <p className="text-2xl font-black text-emerald-400">₹49.9L</p>
              <p className="text-xs text-emerald-500/70 mt-1 font-semibold">+₹37.9L Gains</p>
            </div>
          </div>

          {/* Micro Chart */}
          <div className="relative z-10 h-20 w-full mb-6">
            <MiniChart color="#34d399" data={[2, 4, 7, 12, 18, 26, 40]} />
          </div>

          <div className="relative z-10 mt-auto">
            <NavLink to="/calculator/sip" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-2xl group-hover:scale-105">
              <span>Start Planning</span>
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>

        {/* Lumpsum Calculator */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-indigo-500/10 hover:border-indigo-500/30 flex flex-col justify-between">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Coins className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-black text-white">Lumpsum</h3>
            </div>

            <div className="space-y-1 mb-6">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Investment: ₹10L</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Expected Return</p>
              <p className="text-2xl font-black text-indigo-400">₹31.6L</p>
            </div>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/5 pt-4">
            <NavLink to="/calculator/lumpsum" className="flex items-center justify-between text-xs font-black text-slate-300 group-hover:text-indigo-400 transition-colors">
              <span>Calculate Returns</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-rose-500/10 hover:border-rose-500/30 flex flex-col justify-between">
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-rose-500/20 transition-colors" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <HomeIcon className="h-5 w-5 text-rose-400" />
              </div>
              <h3 className="text-lg font-black text-white">Home EMI</h3>
            </div>

            <div className="space-y-1 mb-6">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Loan: ₹25L</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Monthly EMI</p>
              <p className="text-2xl font-black text-rose-400">₹24,360</p>
            </div>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/5 pt-4">
            <NavLink to="/calculator/emi" className="flex items-center justify-between text-xs font-black text-slate-300 group-hover:text-rose-400 transition-colors">
              <span>Estimate EMI</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>

        {/* Retirement Calculator (Spans 2 columns on large screens) */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cyan-500/10 hover:border-cyan-500/30 lg:col-span-2 flex flex-col justify-between">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between h-full">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-black text-white">Retirement Planner</h3>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xs">
                Ensure financial independence with inflation-adjusted retirement corpus planning.
              </p>
            </div>

            <div className="bg-black/30 border border-white/5 rounded-2xl p-4 min-w-[160px]">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-wider mb-1">Target Corpus</p>
              <p className="text-3xl font-black text-cyan-400">₹4.8Cr</p>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">Years Left: 27</p>
            </div>
          </div>

          <div className="relative z-10 mt-6 border-t border-white/5 pt-4">
            <NavLink to="/calculator/retirement" className="flex items-center justify-between text-xs font-black text-slate-300 group-hover:text-cyan-400 transition-colors">
              <span>Plan Retirement</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirhome;
