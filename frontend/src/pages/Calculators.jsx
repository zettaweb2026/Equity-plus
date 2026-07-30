import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Percent, 
  Coins, 
  ArrowDownCircle, 
  ChevronsUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

const calculatorsList = [
  {
    id: "sip",
    name: "SIP Calculator",
    description: "Calculate the wealth generated and maturity value of your Systematic Investment Plan.",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    badge: "Wealth Growth",
  },
  {
    id: "lumpsum",
    name: "Lumpsum Calculator",
    description: "Calculate the final return of a one-time investment over a specific time period.",
    icon: Coins,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
    badge: "One-time Investment",
  },
  {
    id: "step-up-sip",
    name: "Step-up SIP Calculator",
    description: "Calculate SIP returns when you increment your monthly investment amount every year.",
    icon: ChevronsUp,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    badge: "Accelerated Wealth",
  },
  {
    id: "emi",
    name: "EMI Calculator",
    description: "Estimate your monthly loan repayments, principal, and total interest payable.",
    icon: Percent,
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/20",
    badge: "Loans & Mortgages",
  },
  {
    id: "swp",
    name: "SWP Calculator",
    description: "Calculate the remaining balance and monthly withdrawal maturity of a Systematic Withdrawal Plan.",
    icon: ArrowDownCircle,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20",
    badge: "Retirement Income",
  },
];

const Calculators = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> Financial Planning Suite
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Institutional <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Financial Calculators</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Make informed wealth decisions using our precise, easy-to-use financial models built for Indian market standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculatorsList.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <div 
                key={calc.id} 
                className="group relative bg-slate-900/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between border border-slate-800 hover:border-emerald-500/40 hover:-translate-y-1 backdrop-blur-xl"
              >
                {/* Visual Accent Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${calc.color}`} />
                
                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {calc.badge}
                    </span>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${calc.color} text-white shadow-lg ${calc.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {calc.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {calc.description}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link 
                    to={`/calculator/${calc.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-slate-950 font-extrabold text-sm bg-emerald-500 hover:bg-emerald-400 transition-colors duration-300 cursor-pointer shadow-lg shadow-emerald-500/20"
                  >
                    <span>Open Calculator</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculators;