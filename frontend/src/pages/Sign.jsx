import { useState } from "react";
import { Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl lg:flex-row">
        
        {/* Left Column */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/60 p-8 text-white lg:w-1/2 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-6">
              <Sparkles className="h-4 w-4" /> Equity Plus Portal
            </span>
            
            <h2 className="text-3xl font-black text-white leading-tight">
              {isLogin ? "Welcome Back to Equity Plus" : "Open Your Free Demat Account"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 font-medium">
              {isLogin
                ? "Log in to track your stocks, manage SIP calculators, and access live market analytics."
                : "Join 500,000+ Indian investors trading with zero delivery brokerage and 100% digital KYC."}
            </p>

            <div className="mt-8 space-y-3">
              {[
                "₹0 Brokerage on Equity Delivery",
                "Sub-10ms Order Execution Speed",
                "256-bit SEBI Compliant Security",
                "Instant Digital KYC Setup",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 font-semibold">
            Trusted by traders across 200+ Indian cities.
          </div>
        </div>

        {/* Right Form Column */}
        <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-md">
            
            <div className="mb-8 flex justify-center border-b border-slate-800 pb-4">
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 w-full">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 rounded-lg text-xs font-extrabold transition ${
                    isLogin ? "bg-emerald-500 text-slate-950 shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 rounded-lg text-xs font-extrabold transition ${
                    !isLogin ? "bg-emerald-500 text-slate-950 shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Register Account
                </button>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-300">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-300">Mobile / Email Address</label>
                <input
                  type="text"
                  placeholder="9876543210 or user@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-300">Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 rounded bg-slate-950 border-slate-800 text-emerald-500" />
                    Remember me
                  </label>
                  <a href="#" className="hover:text-emerald-400">Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              >
                <span>{isLogin ? "Sign In" : "Open Account in 5 Mins"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sign;