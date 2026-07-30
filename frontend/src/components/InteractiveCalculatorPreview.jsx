import { useState } from "react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
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
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-extrabold uppercase tracking-widest">
            <Calculator className="h-4 w-4" /> Live Interactive Wealth Simulator
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See how your money grows with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Power of Compounding</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Drag the sliders below to calculate your estimated wealth returns for long-term Systematic Investment Plans (SIP).
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Monthly Investment */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-300">Monthly Investment Amount</label>
                  <span className="text-lg font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                  <span>₹500</span>
                  <span>₹50,000</span>
                  <span>₹1,000,000</span>
                </div>
              </div>

              {/* Slider 2: Expected Return Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-300">Expected Annual Return Rate (p.a.)</label>
                  <span className="text-lg font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                  <span>5%</span>
                  <span>15%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Slider 3: Time Horizon */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-300">Investment Time Horizon</label>
                  <span className="text-lg font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                  <span>1 Yr</span>
                  <span>15 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

            </div>

            {/* Visual Breakdown Column */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
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
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      Total Invested
                    </div>
                    <div className="text-lg font-black text-white mt-1">
                      {formatCurrency(totalInvestment)}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      Estimated Growth
                    </div>
                    <div className="text-lg font-black text-emerald-400 mt-1">
                      +{formatCurrency(estimatedReturns)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <NavLink
                  to="/calculators"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/25"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Access All 5+ Calculators</span>
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
