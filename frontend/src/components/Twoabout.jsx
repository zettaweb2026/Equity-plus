import { FaPhoneAlt, FaCalculator } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TrendingUp, Calculator, BookOpen, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Market Insights",
    description: "Clear, practical updates that make financial information easier to interpret.",
    icon: TrendingUp,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Financial Calculators",
    description: "Powerful tools that help you estimate goals, returns, and financial planning steps.",
    icon: Calculator,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Learning Resources",
    description: "Beginner-friendly guidance designed to build confidence as you grow.",
    icon: BookOpen,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "Reliable Platform",
    description: "Thoughtful, accurate content you can use as a dependable reference point.",
    icon: ShieldCheck,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

const Twoabout = () => {
  return (
    <div className="w-full overflow-x-hidden space-y-10">
      
      {/* 4 Cards Grid */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/10 hover:ring-emerald-500/30 backdrop-blur-xl"
            >
              <div className={`mx-auto mb-5 h-14 w-14 rounded-2xl border ${item.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-medium">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Vision */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0a0f16] p-8 sm:p-12 shadow-2xl ring-1 ring-white/5">
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl leading-tight tracking-tight">
              A professional partner for your next financial step.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 font-medium">
              Our team brings together diverse expertise in quantitative finance and technology. We are committed to ethical guidance, zero hidden charges, and transparent investment tools.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-black/40 p-8 shadow-inner hover:bg-white/5 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white tracking-tight">Our Vision</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-medium">
              We envision a future where every Indian investor has access to institutional-grade stock market intelligence and wealth compounding tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-10 text-center shadow-2xl sm:p-16 ring-1 ring-white/5">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tighter">
            Start your investment journey today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-400 font-medium">
            Explore financial tools, learn about stock markets, and take your first confident step towards financial independence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <FaPhoneAlt />
              Contact Us
            </NavLink>

            <NavLink
              to="/calculators"
              className="flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <FaCalculator />
              Financial Calculators
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Twoabout;