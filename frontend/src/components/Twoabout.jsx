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
              className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 backdrop-blur-xl"
            >
              <div className={`mx-auto mb-4 h-12 w-12 rounded-2xl border ${item.color} flex items-center justify-center`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-medium">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Vision */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl sm:p-10 backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Why Choose Equity Plus
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              A professional partner for your next financial step.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              Our team brings together diverse expertise in quantitative finance and technology. We are committed to ethical guidance, zero hidden charges, and transparent investment tools.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              We envision a future where every Indian investor has access to institutional-grade stock market intelligence and wealth compounding tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/60 p-8 text-center shadow-2xl sm:p-10">
        <h2 className="text-2xl font-black text-white sm:text-3xl">
          Start your investment journey today.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
          Explore financial tools, learn about stock markets, and take your first confident step towards financial independence.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NavLink
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-extrabold text-white transition duration-300 hover:bg-slate-700"
          >
            <FaPhoneAlt />
            Contact Us
          </NavLink>

          <NavLink
            to="/calculators"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-extrabold text-slate-950 transition duration-300 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
          >
            <FaCalculator />
            Financial Calculators
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Twoabout;