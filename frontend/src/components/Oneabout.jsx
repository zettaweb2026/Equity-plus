import { ShieldCheck } from "lucide-react";

const Oneabout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0a0f16] p-8 sm:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col justify-between">
          <div className="absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl leading-tight tracking-tight">
              Built for investors who value clarity, speed, and trust.
            </h2>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Equity Plus is a modern stock market platform created to help people learn, analyze, and make confident financial choices. We believe informed investing should feel practical, approachable, and dependable.
            </p>
          </div>
          <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-sm font-bold text-emerald-400">
            <ShieldCheck className="h-5 w-5" /> 
            <span>SEBI Registered Principles</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Bank-Grade Security</span>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col justify-center space-y-4">
          <div className="space-y-4 pt-2">
            
            <div className="group rounded-[1.5rem] border border-white/5 bg-black/40 p-5 hover:bg-white/5 transition-colors duration-300">
              <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-emerald-400 transition-colors">Simple & Transparent</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-medium">
                We turn complex stock market analytics into clear, actionable insights.
              </p>
            </div>
            
            <div className="group rounded-[1.5rem] border border-white/5 bg-black/40 p-5 hover:bg-white/5 transition-colors duration-300">
              <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-indigo-400 transition-colors">Institutional Calculators</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-medium">
                Our compounding models are designed for precise wealth planning.
              </p>
            </div>
            
            <div className="group rounded-[1.5rem] border border-white/5 bg-black/40 p-5 hover:bg-white/5 transition-colors duration-300">
              <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">Confidence at Every Stage</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-medium">
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