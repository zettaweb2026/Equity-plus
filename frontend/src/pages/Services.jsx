import {
  FaChartLine,
  FaCalculator,
  FaBookOpen,
  FaChartPie,
  FaWallet,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> Next-Gen Investment Suite
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white">
            Our Products & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Institutional Services</span>
          </h1>

          <p className="mt-6 text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Equity Plus provides institutional-grade market analytics, zero delivery brokerage, automated SIP models, and financial planning calculators built for Indian standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
          Comprehensive Wealth Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40">
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-6">
              <FaChartLine size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Real-Time Market Pulse</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stay updated with live NSE/BSE indices, top gainers, losers, and stock news feeds to capture market opportunities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40">
            <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit mb-6">
              <FaCalculator size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Smart Calculators</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accurately estimate SIP compounding, loan EMIs, step-up wealth growth, and systematic withdrawal returns in seconds.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40">
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-6">
              <FaBookOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Stock Market Learning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Master fundamental evaluation, candlestick reading, derivatives, and portfolio risk management with beginner guides.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-500/40">
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit mb-6">
              <FaChartPie size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Stock Analytics Screener</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Screen listed companies by P/E ratio, market cap, dividend yield, and financial statements with interactive charts.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-rose-500/40">
            <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 w-fit mb-6">
              <FaWallet size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Automated Portfolio Setup</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Diversify investments across equity delivery, direct mutual funds, Sovereign Gold Bonds, and fixed-yield instruments.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40">
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-6">
              <FaShieldAlt size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">SEBI Compliant Infrastructure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Benefit from 256-bit bank-grade encryption, sub-10ms order execution speeds, and full regulatory transparency.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-white">
            4 Steps to Start Building Wealth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Open Account", desc: "100% digital KYC in under 5 minutes with zero account opening fee." },
              { step: "02", title: "Analyze Markets", desc: "Use real-time indices, stock screeners, and option chain analytics." },
              { step: "03", title: "Simulate Goals", desc: "Calculate SIP returns and EMI schedules with live compounding sliders." },
              { step: "04", title: "Execute & Grow", desc: "Invest with zero delivery brokerage and build your financial future." },
            ].map((s, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
                <div className="text-4xl font-black text-emerald-400 mb-3">{s.step}</div>
                <h3 className="font-extrabold text-xl mb-2 text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/50 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Start Your Investment Journey Today
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Join over 500,000 Indian investors using Equity Plus for zero-fee equity delivery, fast trading, and smart calculators.
          </p>
          <NavLink
            to="/calculators"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base transition duration-300 shadow-xl shadow-emerald-500/25"
          >
            <span>Explore All Calculators</span>
            <FaArrowRight />
          </NavLink>
        </div>
      </section>

    </div>
  );
};

export default Services;