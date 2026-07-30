import { TrendingUp, Percent, Coins, ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Thirhome = () => {
  const cards = [
    {
      id: "sip",
      title: "SIP Wealth Calculator",
      desc: "Estimate long-term compounding wealth through monthly systematic investments.",
      badge: "Most Popular",
      icon: TrendingUp,
      gradient: "from-blue-600/10 via-indigo-600/10 to-blue-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      id: "emi",
      title: "Loan EMI Calculator",
      desc: "Calculate exact monthly loan repayments, total interest payable, and amortization.",
      badge: "Instant Loan Math",
      icon: Percent,
      gradient: "from-rose-600/10 via-red-600/10 to-rose-500/10",
      borderColor: "border-rose-500/30",
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      id: "lumpsum",
      title: "Lumpsum Calculator",
      desc: "Project one-time investment maturity values over long-term holding periods.",
      badge: "One-Time Growth",
      icon: Coins,
      gradient: "from-emerald-600/10 via-teal-600/10 to-emerald-500/10",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            className={`group relative flex flex-col justify-between rounded-3xl border ${card.borderColor} bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-400/50`}
          >
            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {card.badge}
                </span>
                <div className={`p-3 rounded-2xl border ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>
            </div>

            {/* Action button */}
            <div>
              <NavLink
                to={`/calculator/${card.id}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white font-extrabold text-sm bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md group-hover:shadow-lg"
              >
                <span>Calculate Returns</span>
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Thirhome;