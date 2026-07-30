import { ShieldCheck, Target, Award } from "lucide-react";

const Oneabout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl backdrop-blur-xl sm:p-10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Built for investors who value clarity, speed, and trust.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Equity Plus is a modern stock market platform created to help people learn, analyze, and make confident financial choices. We believe informed investing should feel practical, approachable, and dependable.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-400">
            <ShieldCheck className="h-4 w-4" /> SEBI Registered Principles & Bank-Grade Security
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl sm:p-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Our Approach
          </span>
          <div className="space-y-3 pt-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <h3 className="font-bold text-white text-base">Simple & Transparent</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                We turn complex stock market analytics into clear, actionable insights.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <h3 className="font-bold text-white text-base">Institutional Calculators</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Our compounding models are designed for precise wealth planning.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <h3 className="font-bold text-white text-base">Confidence at Every Stage</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Whether starting out or managing large capital, our platform supports your goals.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Oneabout;