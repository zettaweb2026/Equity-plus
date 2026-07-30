import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Equity Investor",
    city: "Mumbai, MH",
    quote: "I moved all my SIPs to Equity Plus last year. The interface is incredibly clean, and the 0% commission on direct mutual funds saves me thousands.",
    rating: 5,
    verified: "Verified Investor",
    avatarBg: "from-blue-500 to-indigo-600",
    initials: "RS",
  },
  {
    name: "Sneha Gupta",
    role: "F&O Trader",
    city: "Bengaluru, KA",
    quote: "As someone who trades NIFTY daily, speed is everything. Order execution here is instant, and paying just a flat ₹20 per trade is a huge relief.",
    rating: 5,
    verified: "Verified Investor",
    avatarBg: "from-emerald-500 to-teal-600",
    initials: "SG",
  },
  {
    name: "Aman Verma",
    role: "Long-term Wealth Builder",
    city: "Delhi, NCR",
    quote: "The interactive compounding calculators finally helped me plan my retirement corpus. It's rare to find an app that is both powerful and this easy to use.",
    rating: 5,
    verified: "Verified Investor",
    avatarBg: "from-purple-500 to-pink-600",
    initials: "AV",
  },
];

const Fourhome = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/10 hover:ring-emerald-500/30"
        >
          {/* Ambient Background Gradient */}
          <div className={`absolute -top-16 -left-16 h-40 w-40 rounded-full blur-[70px] bg-gradient-to-br ${t.avatarBg} opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

          <div className="relative z-10">
            {/* Rating Stars & Quote Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1.5 text-amber-400/90">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400/90 drop-shadow-sm" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-white/10 group-hover:text-emerald-400/30 transition-colors duration-500" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-8 group-hover:text-white transition-colors duration-300">
              "{t.quote}"
            </p>
          </div>

          {/* User Profile Footer */}
          <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-white/5">
            <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-black text-base shadow-lg shadow-white/5`}>
              {t.initials}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="font-bold text-white text-base tracking-tight">{t.name}</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {t.verified}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-medium">{t.role} • {t.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fourhome;