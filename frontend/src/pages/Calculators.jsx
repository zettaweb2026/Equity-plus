import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Percent, 
  Coins, 
  ArrowDownCircle, 
  ChevronsUp 
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
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-full">
            Financial Planning Tools
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate your <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">Financial Goals</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Make informed decisions using our precise, easy-to-use financial calculators built for Indian standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculatorsList.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <div 
                key={calc.id} 
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between border border-slate-100 hover:-translate-y-1"
              >
                {/* Visual Accent Bar */}
                <div className={`h-2 bg-gradient-to-r ${calc.color}`} />
                
                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {calc.badge}
                    </span>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${calc.color} text-white shadow-lg ${calc.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {calc.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {calc.description}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <Link 
                    to={`/calculator/${calc.id}`}
                    className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-white font-medium bg-slate-900 hover:bg-indigo-600 transition-colors duration-300 cursor-pointer shadow-md group-hover:shadow-lg"
                  >
                    Open Calculator
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