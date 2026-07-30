import { Star, ShieldCheck, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Active Equity Investor",
    city: "Mumbai, MH",
    quote: "Equity Plus simplified stock analysis and SIP calculation for me. The instant calculators helped me plan my monthly investments accurately with zero hassle.",
    rating: 5,
    verified: "Verified Investor",
    avatarBg: "from-blue-500 to-indigo-600",
    initials: "RS",
  },
  {
    name: "Sneha Gupta",
    role: "Mutual Fund & F&O Trader",
    city: "Bengaluru, KA",
    quote: "The interface is blazingly fast and modern! From real-time NSE market ticker feeds to zero delivery brokerage, it completely outperforms legacy platforms.",
    rating: 5,
    verified: "Verified Investor",
    avatarBg: "from-emerald-500 to-teal-600",
    initials: "SG",
  },
  {
    name: "Aman Verma",
    role: "Long-term Wealth Builder",
    city: "Delhi, NCR",
    quote: "I use Equity Plus daily to monitor indices and calculate future compounding returns. The transparent pricing and zero hidden fees give me total peace of mind.",
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
          className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40"
        >
          <div>
            {/* Rating Stars & Quote Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-slate-800 group-hover:text-emerald-500/20 transition-colors" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-8">
              "{t.quote}"
            </p>
          </div>

          {/* User Profile Footer */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-black text-base shadow-md`}>
              {t.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base">{t.name}</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="h-3 w-3" /> {t.verified}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-semibold">{t.role} • {t.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fourhome;