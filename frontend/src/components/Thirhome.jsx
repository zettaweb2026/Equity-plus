import { TrendingUp, Percent, Coins, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Thirhome = () => {
  const cards = [
    {
      id: "sip",
      title: "SIP Wealth Calculator",
      desc: "See how investing just ₹500/month can turn into a massive corpus over 10, 20, or 30 years.",
      badge: "Most Popular",
      icon: TrendingUp,
      gradient: "from-blue-600/10 via-indigo-600/10 to-blue-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      id: "emi",
      title: "Loan EMI Calculator",
      desc: "Planning a home or car loan? Calculate your exact monthly repayments and total interest instantly.",
      badge: "Instant Loan Math",
      icon: Percent,
      gradient: "from-rose-600/10 via-red-600/10 to-rose-500/10",
      borderColor: "border-rose-500/30",
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      id: "lumpsum",
      title: "Lumpsum Calculator",
      desc: "Got a bonus? See how a one-time investment today can multiply your wealth for retirement.",
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
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/10 hover:ring-emerald-500/30"
          >
            {/* Top Glow on Hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Subtle Gradient Background Blob */}
            <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full blur-[80px] bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10">
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10 shadow-sm backdrop-blur-md">
                  {card.badge}
                </span>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${card.iconBg} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
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