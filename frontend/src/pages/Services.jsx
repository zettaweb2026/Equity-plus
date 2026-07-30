import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3, Calculator, PieChart,
  Activity, Target, Briefcase, LineChart, ChevronRight, CheckCircle2,
  ArrowRight, ChevronDown, Landmark, Globe
} from "lucide-react";

/* ─── Data ─── */
const trustStats = [
  "Real-Time Market Data", "20+ Financial Services",
  "SEBI-Aligned Calculations", "Institutional Research", "Instant Portfolio Analysis"
];

const serviceCategories = [
  {
    title: "Market Intelligence",
    desc: "Access institutional-grade market data, screening tools, and sector analytics to identify opportunities before the crowd.",
    icon: Activity,
    highlights: ["Live NSE/BSE Indices", "Advanced Stock Screeners", "Market Heatmaps", "Sector Performance"],
    color: "#00D084",
  },
  {
    title: "Investment Solutions",
    desc: "Build diversified portfolios with equity, mutual funds, ETFs, and systematic investment plans tailored to your risk profile.",
    icon: Briefcase,
    highlights: ["Equity Investing", "Direct Mutual Funds", "SIP Planning", "ETF Investing"],
    color: "#3B82F6",
  },
  {
    title: "Financial Planning",
    desc: "Precise calculators and planning tools built on Indian tax and investment standards to model your financial future.",
    icon: Calculator,
    highlights: ["SIP & Lumpsum Calculators", "EMI Planning", "Retirement Modelling", "Goal-Based Planning"],
    color: "#00D084",
  },
  {
    title: "Research & Analytics",
    desc: "Deep-dive into company fundamentals, technical charts, and portfolio risk metrics with institutional-quality research tools.",
    icon: BarChart3,
    highlights: ["Company Analysis", "Technical Charts", "Portfolio Insights", "Risk Evaluation"],
    color: "#3B82F6",
  },
];

const platformFeatures = [
  { icon: LineChart, title: "Live Market Analytics", desc: "Real-time data on indices, stocks, and derivatives." },
  { icon: BarChart3, title: "Advanced Technical Charts", desc: "Candlestick patterns, indicators, and overlays." },
  { icon: PieChart, title: "Portfolio Tracking", desc: "Monitor allocation, returns, and risk metrics." },
  { icon: Target, title: "Goal-Based Investing", desc: "Plan investments around life milestones." },
  { icon: Landmark, title: "Mutual Fund Research", desc: "Compare NAVs, expense ratios, and holdings." },
  { icon: Calculator, title: "SIP Planning", desc: "Model wealth growth with compounding calculators." },
];

const comparisonRows = [
  { feature: "Real-Time Market Data", us: true, them: true },
  { feature: "Institutional Analytics", us: true, them: "Limited" },
  { feature: "Smart Calculators (25+)", us: true, them: "Basic" },
  { feature: "Portfolio Insights", us: true, them: "Limited" },
  { feature: "Investment Planning Tools", us: true, them: "Partial" },
  { feature: "Zero Hidden Fees", us: true, them: false },
];

const journeySteps = [
  { step: "01", title: "Create Account", desc: "Digital KYC in under 5 minutes." },
  { step: "02", title: "Explore Markets", desc: "Browse live indices and stock screeners." },
  { step: "03", title: "Analyze Stocks", desc: "Deep-dive into fundamentals and charts." },
  { step: "04", title: "Plan Investments", desc: "Use calculators to model your goals." },
  { step: "05", title: "Track Portfolio", desc: "Monitor returns and rebalance smartly." },
];

const faqs = [
  { q: "How does Equity Plus work?", a: "Equity Plus provides real-time market data, financial calculators, and investment planning tools. Create an account, explore market insights, and use our calculators to make informed investment decisions." },
  { q: "Are the calculators free to use?", a: "Yes. All 25+ financial calculators including SIP, EMI, Lumpsum, Step-Up SIP, and retirement planners are completely free with no hidden charges." },
  { q: "How accurate are the market insights?", a: "Our data is sourced from NSE/BSE feeds and follows SEBI-compliant calculation standards. All financial models use industry-standard compounding formulae." },
  { q: "Can beginners use the platform?", a: "Absolutely. The platform is designed for investors of all experience levels. Our learning center, guided calculators, and intuitive interface make it easy to get started." },
  { q: "How is my portfolio data protected?", a: "We use 256-bit bank-grade encryption, secure authentication, and follow strict data privacy policies. Your financial information is never shared with third parties." },
];

const testimonials = [
  { name: "Arjun Mehta", role: "Software Engineer", rating: 5, text: "The SIP calculator alone saved me hours of spreadsheet work. Clean interface, accurate results." },
  { name: "Priya Sharma", role: "CA & Tax Consultant", rating: 5, text: "Finally a platform that gets Indian tax standards right. My clients love the retirement planner." },
  { name: "Rohan Patel", role: "Retail Investor", rating: 4, text: "Market pulse section keeps me updated without information overload. Exactly what I needed." },
];

/* ─── FAQ Accordion Item ─── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-sm font-bold text-white group-hover:text-[#3B82F6] transition-colors">{q}</span>
        <ChevronDown className={`h-4 w-4 text-[#6B7280] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

/* ─── Page ─── */
const Services = () => {
  return (
    <div className="relative min-h-screen bg-[#090B12] text-white pb-0 overflow-x-hidden font-sans selection:bg-[#3B82F6]/30">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3B82F6]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#00D084]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">

        {/* ── Hero with Video ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[10px] font-black uppercase tracking-wider mb-6">
                <Globe className="h-3 w-3" /> Institutional Investment Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Investment Solutions Built for <span className="text-[#00D084]">Modern Investors</span>
              </h1>
              <p className="mt-6 text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-lg font-medium">
                Our investment products, analytics, and planning tools are designed to help investors make smarter financial decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <NavLink to="/sign" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#090B12] rounded-lg font-black text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  Get Started <ArrowRight className="h-4 w-4" />
                </NavLink>
                <NavLink to="/calculators" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors">
                  Explore Tools
                </NavLink>
              </div>
            </div>

            {/* Video replacing dashboard preview */}
            <div className="hidden lg:block">
              <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0d1117]">
                <video
                  className="w-full h-auto object-cover rounded-2xl"
                  src="/services_hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <section className="border-y border-white/5 bg-[#111827]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustStats.map(s => (
              <div key={s} className="flex items-center gap-2 text-xs font-bold text-[#6B7280]">
                <CheckCircle2 className="h-4 w-4 text-[#00D084] shrink-0" /> {s}
              </div>
            ))}
          </div>
        </section>

        {/* ── Service Categories (alternating layout) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          {serviceCategories.map((svc, idx) => {
            const Icon = svc.icon;
            const reversed = idx % 2 !== 0;
            return (
              <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="inline-flex p-3 rounded-xl border shadow-inner mb-5" style={{ borderColor: `${svc.color}33`, backgroundColor: `${svc.color}15`, color: svc.color }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-4">{svc.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 max-w-md font-medium">{svc.desc}</p>
                  <div className="space-y-3">
                    {svc.highlights.map(h => (
                      <div key={h} className="flex items-center gap-3 text-sm font-bold text-white">
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: svc.color }} /> {h}
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-300" style={{ color: svc.color }}>
                    Learn More <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className={`${reversed ? "lg:order-1" : ""} bg-[#111827] rounded-2xl border border-white/5 p-8 shadow-xl relative overflow-hidden min-h-[220px] flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at ${reversed ? "left" : "right"}, ${svc.color}22, transparent 70%)` }} />
                  <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                    {svc.highlights.map(h => (
                      <div key={h} className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:-translate-y-0.5 transition-transform duration-300">
                        <p className="text-sm font-bold text-white">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Platform Features Grid ── */}
        <section className="bg-[#111827]/40 border-y border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Everything You Need in One Platform</h2>
              <p className="mt-3 text-[#9CA3AF] text-sm font-medium max-w-xl mx-auto">Professional tools for market analysis, portfolio tracking, and financial planning.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map(f => {
                const FIcon = f.icon;
                return (
                  <div key={f.title} className="group bg-[#090B12] rounded-2xl border border-white/5 p-6 hover:-translate-y-1 hover:border-[#3B82F6]/30 transition-all duration-300">
                    <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-xs text-[#9CA3AF] font-medium">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us (Comparison Table) ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Why Choose Equity Plus</h2>
              <p className="mt-3 text-[#9CA3AF] text-sm font-medium">See how we compare to typical investment platforms.</p>
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 bg-white/5 text-[10px] font-black uppercase tracking-wider text-[#6B7280] px-6 py-3">
                <span>Feature</span>
                <span className="text-center text-[#00D084]">Equity Plus</span>
                <span className="text-center">Typical Platforms</span>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 text-sm items-center ${i % 2 === 0 ? "bg-white/[0.02]" : ""} border-t border-white/5`}>
                  <span className="font-bold text-white">{row.feature}</span>
                  <span className="text-center">
                    {row.us === true ? <CheckCircle2 className="h-5 w-5 text-[#00D084] mx-auto" /> : <span className="text-[#6B7280]">{row.us}</span>}
                  </span>
                  <span className="text-center">
                    {row.them === true ? <CheckCircle2 className="h-5 w-5 text-[#6B7280] mx-auto" /> : row.them === false ? <span className="text-[#6B7280]">✕</span> : <span className="text-[#6B7280] text-xs font-bold">{row.them}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Investment Journey Timeline ── */}
        <section className="bg-[#111827]/40 border-y border-white/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Your Investment Journey</h2>
              <p className="mt-3 text-[#9CA3AF] text-sm font-medium">Five simple steps to start building wealth.</p>
            </div>
            <div className="hidden md:flex items-start justify-between relative">
              <div className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#00D084]/40 via-[#3B82F6]/40 to-[#00D084]/40" />
              {journeySteps.map((s) => (
                <div key={s.step} className="relative flex flex-col items-center text-center w-1/5">
                  <div className="h-14 w-14 rounded-full bg-[#111827] border-2 border-[#00D084]/40 flex items-center justify-center text-lg font-black text-[#00D084] mb-4 shadow-lg relative z-10">{s.step}</div>
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-[#9CA3AF] font-medium max-w-[140px]">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="md:hidden space-y-6">
              {journeySteps.map(s => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#111827] border-2 border-[#00D084]/40 flex items-center justify-center text-sm font-black text-[#00D084]">{s.step}</div>
                  <div><h4 className="text-sm font-bold text-white">{s.title}</h4><p className="text-xs text-[#9CA3AF] font-medium">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">What Investors Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="bg-[#111827] rounded-2xl border border-white/5 p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <div key={idx} className="w-4 h-4 rounded-sm bg-[#00D084]/20 flex items-center justify-center text-[#00D084] text-[10px] font-black">★</div>
                    ))}
                  </div>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5 font-medium">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[11px] text-[#6B7280] font-bold">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#111827]/40 border-y border-white/5 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="border-t border-white/5">
              {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00D084]/10 blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Ready to Invest Smarter?</h2>
            <p className="mt-4 text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto font-medium">
              Join thousands of investors using professional tools to make informed financial decisions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink to="/sign" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#090B12] rounded-lg font-black text-sm hover:bg-gray-100 transition-colors shadow-xl">
                Open Free Demat Account <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink to="/calculators" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors">
                Explore Market Tools
              </NavLink>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;