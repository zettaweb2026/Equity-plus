import Oneabout from "../components/Oneabout";
import Twoabout from "../components/Twoabout";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> About Equity Plus
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            A Refined Platform for <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Confident Investing</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            We build transparent, institutional-grade tools to empower individual investors across India.
          </p>
        </div>
        <Oneabout />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Twoabout />
      </section>
    </div>
  );
};

export default About;