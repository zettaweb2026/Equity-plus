import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  TrendingUp, Percent, Coins, ArrowDownCircle, ChevronsUp,
  Search, ShieldCheck, Activity, BarChart3,
  Landmark, ArrowRight, CheckCircle2, ChevronRight, Briefcase
} from "lucide-react";

const categories = [
  {
    name: "Investment",
    calculators: [
      { id: "sip", name: "SIP Calculator", desc: "Systematic Investment Plan", info: "Returns up to 12%", icon: TrendingUp, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
      { id: "step-up-sip", name: "Step-Up SIP", desc: "Increasing monthly SIPs", info: "Beat Inflation", icon: ChevronsUp, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
      { id: "lumpsum", name: "Lumpsum", desc: "One-time investment", info: "Long-term Wealth", icon: Coins, color: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20" },
      { id: "mutual-fund", name: "Mutual Fund", desc: "Evaluate mutual fund returns", info: "Smart Growth", icon: BarChart3, color: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20" },
    ]
  },
  {
    name: "Fixed Income",
    calculators: [
      { id: "fd", name: "FD Calculator", desc: "Fixed Deposit Returns", info: "Safe Returns", icon: Landmark, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
      { id: "rd", name: "RD Calculator", desc: "Recurring Deposit Math", info: "Guaranteed", icon: ShieldCheck, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
      { id: "ppf", name: "PPF Calculator", desc: "Public Provident Fund", info: "Tax Free", icon: Briefcase, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
    ]
  },
  {
    name: "Loans",
    calculators: [
      { id: "emi", name: "EMI Calculator", desc: "Monthly loan repayment", info: "Instant Math", icon: Percent, color: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20" },
      { id: "home-loan", name: "Home Loan", desc: "Property finance planning", info: "Amortization", icon: Landmark, color: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20" },
    ]
  },
  {
    name: "Retirement",
    calculators: [
      { id: "swp", name: "SWP Calculator", desc: "Systematic Withdrawals", info: "Steady Income", icon: ArrowDownCircle, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
      { id: "pension", name: "Pension Planner", desc: "Post-retirement corpus", info: "Golden Years", icon: Briefcase, color: "text-[#00D084] bg-[#00D084]/10 border-[#00D084]/20" },
    ]
  }
];

const MiniChart = () => (
  <svg viewBox="0 0 100 40" className="w-full h-12 overflow-visible">
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00D084" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00D084" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 40 L 0 35 L 20 30 L 40 28 L 60 20 L 80 10 L 100 5 L 100 40 Z" fill="url(#chartGrad)" />
    <path d="M0 35 L 20 30 L 40 28 L 60 20 L 80 10 L 100 5" fill="none" stroke="#00D084" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Calculators = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.map(cat => ({
    ...cat,
    calculators: cat.calculators.filter(calc => calc.name.toLowerCase().includes(searchTerm.toLowerCase()) || calc.desc.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(cat => cat.calculators.length > 0);

  return (
    <div className="relative min-h-screen bg-[#090B12] text-white pb-24 overflow-x-hidden font-sans selection:bg-[#3B82F6]/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Financial Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdiM0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>
        {/* Soft Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3B82F6]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* 1. Minimal Hero */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Financial Calculators</h1>
            <div className="flex items-end h-8 gap-0.5">
              <div className="w-1.5 bg-[#00D084] h-3 animate-[pulse_1s_ease-in-out_infinite]" />
              <div className="w-1.5 bg-[#00D084] h-5 animate-[pulse_1.2s_ease-in-out_infinite]" />
              <div className="w-1.5 bg-[#00D084] h-8 animate-[pulse_0.8s_ease-in-out_infinite]" />
            </div>
          </div>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl font-medium">
            Professional financial planning tools for smarter investment decisions.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12">
          {["25+ Financial Calculators", "Used by Thousands of Investors", "SEBI-Compliant Formulae", "Instant Results"].map(stat => (
            <div key={stat} className="flex items-center gap-2 text-xs font-bold text-[#6B7280]">
              <CheckCircle2 className="h-4 w-4 text-[#00D084]" />
              {stat}
            </div>
          ))}
        </div>

        {/* 2. Premium Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative group">
          <div className="absolute inset-0 bg-[#3B82F6]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center bg-[#111827] border border-white/10 rounded-full px-6 py-4 shadow-xl transition-all duration-300 group-hover:border-[#3B82F6]/50">
            <Search className="h-5 w-5 text-[#6B7280]" />
            <input 
              type="text" 
              placeholder="Search calculators instantly..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white px-4 placeholder:text-[#6B7280] font-medium"
            />
            <div className="hidden sm:flex items-center gap-1 border border-white/10 bg-white/5 rounded px-2 py-1 text-[10px] text-[#6B7280] font-mono font-bold">
              <span>⌘</span><span>K</span>
            </div>
          </div>
        </div>

        {/* Grid Layout for Featured & Quick Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          
          {/* Featured SIP Calculator */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-[#111827] to-[#090B12] rounded-[1.5rem] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#00D084]/40 hover:shadow-[#00D084]/10">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#00D084]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#00D084]/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 text-[#00D084] text-[10px] font-black uppercase tracking-wider mb-4 shadow-inner">
                  <TrendingUp className="h-3 w-3" /> Featured
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight mb-2">SIP Calculator</h2>
                <p className="text-[#9CA3AF] text-sm font-medium">Model your wealth creation journey.</p>
              </div>
              <div className="w-full sm:w-48">
                <MiniChart />
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Monthly</p>
                <p className="text-xl font-black text-white">₹5,000</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Return</p>
                <p className="text-xl font-black text-white">12%</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Duration</p>
                <p className="text-xl font-black text-white">20 Yrs</p>
              </div>
              <div className="bg-[#00D084]/10 border border-[#00D084]/20 rounded-xl p-4 backdrop-blur-sm shadow-inner">
                <p className="text-[10px] font-bold text-[#00D084] uppercase tracking-wider mb-1">Projected</p>
                <p className="text-xl font-black text-[#00D084]">₹49.8L</p>
              </div>
            </div>

            <div className="relative z-10">
              <Link to="/calculator/sip" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#090B12] rounded-lg font-black text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 group-hover:scale-[1.02]">
                Open Calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Preview Widget */}
          <div className="lg:col-span-4 bg-[#111827] rounded-[1.5rem] border border-white/5 p-6 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="p-2 bg-[#3B82F6]/10 rounded-lg border border-[#3B82F6]/20">
                <Activity className="h-4 w-4 text-[#3B82F6]" />
              </div>
              <h3 className="text-base font-bold text-white">Quick Test</h3>
            </div>
            
            <div className="relative z-10 space-y-5 flex-1">
              <div>
                <div className="flex justify-between text-xs font-bold text-[#9CA3AF] mb-2">
                  <span>Investment</span>
                  <span className="text-white">₹10,000</span>
                </div>
                <div className="h-1.5 w-full bg-[#090B12] rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-[#3B82F6] w-1/3 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-[#9CA3AF] mb-2">
                  <span>Years</span>
                  <span className="text-white">15</span>
                </div>
                <div className="h-1.5 w-full bg-[#090B12] rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-[#3B82F6] w-1/2 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-[#9CA3AF] mb-2">
                  <span>Return Rate</span>
                  <span className="text-white">12%</span>
                </div>
                <div className="h-1.5 w-full bg-[#090B12] rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-[#3B82F6] w-2/5 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-6 pt-5 border-t border-white/5">
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Instant Result</p>
              <p className="text-3xl font-black text-white tracking-tight">₹50.4L</p>
            </div>
          </div>
        </div>

        {/* Categories & Compact Cards */}
        <div className="space-y-16">
          {filteredCategories.map(category => (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">{category.name}</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.calculators.map(calc => {
                  const Icon = calc.icon;
                  return (
                    <Link 
                      key={calc.id} 
                      to={`/calculator/${calc.id}`}
                      className="group block bg-[#111827] rounded-2xl border border-white/5 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2937]/50 hover:border-[#3B82F6]/30 hover:shadow-[#3B82F6]/5"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 rounded-xl border ${calc.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-[#6B7280] bg-white/5 px-2 py-1 rounded flex items-center gap-1">
                          <Activity className="h-3 w-3" /> &lt; 1 sec
                        </span>
                      </div>
                      
                      <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#3B82F6] transition-colors">{calc.name}</h4>
                      <p className="text-xs text-[#9CA3AF] font-medium mb-5 line-clamp-1">{calc.desc}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-xs font-bold text-white bg-white/5 px-2.5 py-1 rounded-md">
                          {calc.info}
                        </span>
                        <div className="flex items-center text-[10px] font-bold text-[#6B7280] uppercase tracking-wider group-hover:text-[#3B82F6] transition-colors">
                          Open <ChevronRight className="h-3 w-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-20 border border-white/5 rounded-2xl bg-[#111827]">
              <Search className="h-8 w-8 text-[#6B7280] mx-auto mb-3" />
              <p className="text-[#9CA3AF] font-medium">No calculators found matching your search.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Calculators;
