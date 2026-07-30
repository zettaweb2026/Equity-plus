import { useEffect, useState } from "react";
import logo from "../assets/images/new_logo.png";

const loadingMessages = [
  "Initializing Market Engine...",
  "Connecting to Live Market Data...",
  "Preparing Investment Dashboard...",
  "Loading Financial Calculators...",
  "Optimizing Trading Experience...",
  "Launching Equity Plus...",
];

const Preloader = ({ loadProgress = 0, isReady = false, onComplete }) => {
  const [displayedPercent, setDisplayedPercent] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [textFade, setTextFade] = useState(true);

  // Derived state: done when progress hits 100%
  const isDone = displayedPercent >= 100;

  // Check if returning visitor (cached session)
  const isCachedSession = typeof window !== "undefined" && sessionStorage.getItem("equity_plus_visited");

  // Lock body scroll while loader is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Smoothly increment displayed percentage towards target loadProgress or target 100%
  useEffect(() => {
    let animationFrame;

    const animateProgress = () => {
      setDisplayedPercent((prev) => {
        let target = isReady ? 100 : Math.max(loadProgress, prev);
        if (isCachedSession) {
          target = Math.max(target, 100);
        }

        if (prev < target) {
          const step = isCachedSession ? 5 : Math.max(1, Math.ceil((target - prev) / 5));
          const next = Math.min(target, prev + step);
          return next;
        }
        return prev;
      });

      animationFrame = requestAnimationFrame(animateProgress);
    };

    animationFrame = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [loadProgress, isReady, isCachedSession]);

  // Cycle through dynamic loading text every 700ms
  useEffect(() => {
    if (displayedPercent >= 100) return;

    const interval = setInterval(() => {
      setTextFade(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
        setTextFade(true);
      }, 150);
    }, 750);

    return () => clearInterval(interval);
  }, [displayedPercent]);

  // Step 1: When 100% is reached, wait 300ms before starting exit transition
  useEffect(() => {
    if (displayedPercent < 100) return;

    if (typeof window !== "undefined") {
      sessionStorage.setItem("equity_plus_visited", "true");
    }

    const timer1 = setTimeout(() => {
      setIsExiting(true);
    }, 300);

    return () => clearTimeout(timer1);
  }, [displayedPercent]);

  // Step 2: During exit transition (800ms), let CSS animation complete, then call onComplete
  useEffect(() => {
    if (!isExiting) return;

    const timer2 = setTimeout(() => {
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 800);

    return () => clearTimeout(timer2);
  }, [isExiting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#090B12] text-white flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting
          ? "-translate-y-full opacity-0 blur-md pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* 1. Ambient Background Glow & Dynamic Financial Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Blue & Emerald Ambient Radial Blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse duration-[4000ms]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse duration-[3000ms]" />

        {/* Financial Grid Pattern with slow movement */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle SVG Stock Line & Candlestick Background Outlines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1000 400"
        >
          <path
            d="M 0 280 Q 200 180, 400 240 T 800 140 T 1000 100"
            fill="none"
            stroke="url(#stockGradient)"
            strokeWidth="3"
            strokeDasharray="10 5"
            className="animate-[dash_30s_linear_infinite]"
          />
          <defs>
            <linearGradient id="stockGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Ambient Market Particles */}
        <div className="absolute inset-0">
          <span className="absolute top-1/3 left-1/5 h-1.5 w-1.5 rounded-full bg-emerald-400/40 animate-ping duration-[3000ms]" />
          <span className="absolute top-2/3 right-1/4 h-2 w-2 rounded-full bg-blue-400/30 animate-pulse duration-[2500ms]" />
          <span className="absolute top-1/2 left-3/4 h-1 w-1 rounded-full bg-teal-300/40 animate-ping duration-[4000ms]" />
        </div>

        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Top Header Tag */}
      <div className="relative z-10 w-full flex items-center justify-between opacity-60">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Terminal OS v2.4</span>
        </div>
        <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          NSE / BSE LIVE FEED
        </div>
      </div>

      {/* 2. Center Brand Reveal & Logo Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto space-y-6">
        {/* Glowing Disc & Logo */}
        <div className="relative flex items-center justify-center group">
          {/* Subtle Outer Glow Disc */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 blur-2xl ${
              isDone
                ? "bg-emerald-400/40 scale-125"
                : "bg-gradient-to-r from-blue-500/20 to-emerald-500/20 scale-100 animate-pulse"
            }`}
          />

          {/* Logo Frame */}
          <div
            className={`relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 p-2.5 shadow-2xl backdrop-blur-xl transition-transform duration-700 ease-out ${
              isDone ? "scale-105 border-emerald-400 shadow-emerald-500/30" : "scale-100"
            }`}
          >
            <img
              src={logo}
              alt="Equity Plus"
              className="h-full w-full object-cover transition-transform duration-500"
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-white leading-none uppercase">
            EQUITY <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">PLUS</span>
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-slate-400 uppercase">
            Professional Investment Platform
          </p>
        </div>
      </div>

      {/* 3. Dynamic Message & Progress Bar (Bottom Center) */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center space-y-4">
        {/* Dynamic Loading Message */}
        <div className="h-5 flex items-center justify-center">
          <span
            className={`text-xs font-mono font-medium tracking-wide text-slate-300 transition-opacity duration-300 ${
              textFade ? "opacity-100" : "opacity-0"
            }`}
          >
            {isDone ? "Welcome to Equity Plus" : loadingMessages[messageIndex]}
          </span>
        </div>

        {/* Premium Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-900/90 border border-white/10 overflow-hidden relative shadow-inner">
          {/* Animated Light Pulse traveling across line */}
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-300 ease-out relative shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            style={{ width: `${displayedPercent}%` }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Percentage Counter */}
        <div className="w-full flex items-center justify-between text-xs font-mono font-semibold px-0.5">
          <span className="text-slate-400 tracking-wider">
            {isDone ? "Initialization Complete" : "Loading Assets"}
          </span>
          <span className="text-emerald-400 font-extrabold tracking-tight">
            {displayedPercent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
