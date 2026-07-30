import { useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const InteractiveCalculatorPreview = () => {
  const [monthlyInvest, setMonthlyInvest] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [timeHorizon, setTimeHorizon] = useState(10);

  // Calculations for SIP
  const i = returnRate / 12 / 100;
  const n = timeHorizon * 12;
  const totalInvestment = monthlyInvest * n;
  
  // Future Value formula for SIP: P * [((1 + i)^n - 1) / i] * (1 + i)
  const futureValue = Math.round(monthlyInvest * (((Math.pow(1 + i, n) - 1) / i) * (1 + i)));
  const estimatedReturns = Math.max(0, futureValue - totalInvestment);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const investedPercent = Math.round((totalInvestment / futureValue) * 100);
  const returnPercent = 100 - investedPercent;

  return (
    <div className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See how your money grows with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Compounding</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Use this simple tool to see how investing a small amount every month can build massive wealth over time.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0a0f16] p-8 sm:p-12 shadow-2xl ring-1 ring-white/5">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sliders Controls Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Slider 1: Monthly Investment */}
              <div className="group">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">Monthly Investment</label>
                  <span className="text-xl font-black text-emerald-400 tracking-tight bg-emerald-500/10 px-4 py-1.5 rounded-xl border border-emerald-500/20 shadow-inner">
                    {formatCurrency(monthlyInvest)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvest}
                  onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800/80 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:bg-slate-700 transition-colors"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-wider">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Slider 2: Expected Return Rate */}
              <div className="group">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">Expected Return Rate (p.a.)</label>
                  <span className="text-xl font-black text-emerald-400 tracking-tight bg-emerald-500/10 px-4 py-1.5 rounded-xl border border-emerald-500/20 shadow-inner">
                    {returnRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800/80 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:bg-slate-700 transition-colors"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-wider">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Slider 3: Time Horizon */}
              <div className="group">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">Time Horizon</label>
                  <span className="text-xl font-black text-emerald-400 tracking-tight bg-emerald-500/10 px-4 py-1.5 rounded-xl border border-emerald-500/20 shadow-inner">
                    {timeHorizon} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800/80 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:bg-slate-700 transition-colors"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-wider">
                  <span>1 Yr</span>
                  <span>30 Yrs</span>
                </div>
              </div>

            </div>

            {/* Visual Breakdown Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.04] to-transparent rounded-[2rem] border border-white/5 p-8 sm:p-10 space-y-8 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Maturity Breakdown</span>
                
                {/* Total Future Value Display */}
                <div className="mt-2">
                  <div className="text-sm font-semibold text-slate-400">Total Expected Wealth</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1 tracking-tight">
                    {formatCurrency(futureValue)}
                  </div>
                </div>

                {/* Progress Bar Visual */}
                <div className="mt-6">
                  <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${investedPercent}%` }}
                      className="bg-indigo-500 h-full transition-all duration-300"
                      title={`Invested: ${investedPercent}%`}
                    />
                    <div
                      style={{ width: `${returnPercent}%` }}
                      className="bg-emerald-400 h-full transition-all duration-300"
                      title={`Returns: ${returnPercent}%`}
                    />
                  </div>
                </div>

                {/* Stats Breakdown Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.6)]" />
                      Total Invested
                    </div>
                    <div className="text-xl font-black text-white">
                      {formatCurrency(totalInvestment)}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 shadow-inner">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      Est. Returns
                    </div>
                    <div className="text-xl font-black text-emerald-400">
                      +{formatCurrency(estimatedReturns)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <NavLink
                  to="/calculators"
                  className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Explore all calculators</span>
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveCalculatorPreview;
