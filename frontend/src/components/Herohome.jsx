import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import Ticker from "./Ticker";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

const phrases = [
  "Trade Better.",
  "Grow Faster.",
  "Plan Smarter.",
  "Powered by Equity Plus Pvt. Ltd."
];

const TypewriterHeadline = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && displayedText === targetPhrase) {
      // Pause at full phrase for 2.5 seconds (cycles every 2-3s)
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 35 : 65;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? targetPhrase.substring(0, prev.length - 1)
            : targetPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <h1 className="text-5xl sm:text-7xl lg:text-[6.2rem] font-black tracking-tighter text-white leading-[1.08] max-w-5xl">
      Invest Smarter.<br />
      <span
        className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg inline-block min-h-[1.2em] font-mono tracking-tight"
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace" }}
      >
        {displayedText}
        <span className="animate-pulse text-emerald-400 font-normal ml-1">|</span>
      </span>
    </h1>
  );
};

const Herohome = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const headerRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const bottomWidgetRef = useRef(null);

  const imagesRef = useRef([]);
  const activeFrameRef = useRef(0);

  // 1. Preload 3D JPG frames
  useEffect(() => {
    let loaded = 0;
    const images = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/frames/frame_${frameNum}.jpg`;

      const onDone = () => {
        loaded++;
        setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
        if (loaded >= Math.min(30, TOTAL_FRAMES)) {
          setImagesLoaded(true);
        }
      };

      img.onload = onDone;
      img.onerror = onDone;
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // 2. Render frame on canvas with top-anchored aspect cover
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawW, drawH, drawX, drawY;
    if (canvasRatio > imgRatio) {
      drawW = rect.width;
      drawH = rect.width / imgRatio;
      drawX = 0;
      drawY = 0; // Top anchored so video top is clear
    } else {
      drawH = rect.height;
      drawW = rect.height * imgRatio;
      drawX = (rect.width - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
    activeFrameRef.current = index;
  };

  // Render initial frame 0 when ready
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded]);

  // 3. GSAP ScrollTrigger Pinned Timeline
  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setTimeout(() => {
      renderFrame(0);

      // Initial state: Canvas is 100% visible in background from load, Header centered over canvas
      gsap.set(canvasWrapperRef.current, { opacity: 1 });
      gsap.set(headerRef.current, { opacity: 1, y: 0, scale: 1 });
      gsap.set(bottomWidgetRef.current, { opacity: 0, y: 35, pointerEvents: "none" });

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=350%",
        pin: pinRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;

          // Phase 1 (0% to 15% scroll): Foreground text clears out & drifts up
          if (headerRef.current) {
            const headerOpacity = Math.max(0, 1 - p / 0.15);
            const headerY = -p * 220;
            gsap.set(headerRef.current, {
              opacity: headerOpacity,
              y: headerY,
              pointerEvents: headerOpacity < 0.05 ? "none" : "auto",
            });
          }

          // Phase 2 (0% to 90% scroll): Video frame scrubbing progresses seamlessly
          const frameProgress = Math.min(1, Math.max(0, p / 0.90));
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(frameProgress * (TOTAL_FRAMES - 1))
          );
          if (frameIndex !== activeFrameRef.current) {
            requestAnimationFrame(() => renderFrame(frameIndex));
          }

          // Phase 3 (60% to 95% scroll): Bottom CTA phone widget glides in
          if (bottomWidgetRef.current) {
            const widgetOpacity = Math.min(1, Math.max(0, (p - 0.60) / 0.30));
            const widgetY = (1 - widgetOpacity) * 35;
            gsap.set(bottomWidgetRef.current, {
              opacity: widgetOpacity,
              y: widgetY,
              pointerEvents: widgetOpacity > 0.1 ? "auto" : "none",
            });
          }
        },
      });

      const handleResize = () => {
        renderFrame(activeFrameRef.current);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        trigger.kill();
        window.removeEventListener("resize", handleResize);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [imagesLoaded]);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      window.location.href = `/sign?mobile=${mobileNumber}`;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full bg-slate-950 text-white">
      {/* Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="relative h-screen w-full flex flex-col justify-between items-center overflow-hidden"
      >
        {/* 1. Full-Screen 3D Video Canvas (Visible right behind headline on load) */}
        <div
          ref={canvasWrapperRef}
          className="absolute inset-0 w-full h-full z-10"
        >
          {!imagesLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-40">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent mb-3" />
              <p className="text-xs font-bold text-slate-400">Loading 3D Experience... {loadProgress}%</p>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover z-10"
            style={{
              maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Dark Vignette Overlay for maximum text contrast over 3D background */}
        <div className="absolute inset-0 bg-slate-950/40 pointer-events-none z-15" />

        {/* 2. Foreground Headline Content (Overlaid on top of 3D video backdrop) */}
        <div
          ref={headerRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6 z-20"
        >
          {/* Main Headline */}
          <TypewriterHeadline />

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Trade equity, derivatives, and direct mutual funds. Built with institutional-grade technology
          </p>

          {/* CTA button */}
          <div className="pt-6">
            <NavLink
              to="/sign"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              <span>Open free demat account</span>
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>

          <div className="pt-4 animate-bounce text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5">
            <span>Scroll down to explore 3D platform</span>
            <span className="text-emerald-400">↓</span>
          </div>
        </div>

        <div
          ref={bottomWidgetRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-30"
        >
          <div className="rounded-2xl border border-white/5 bg-black/60 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
            <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 flex items-center bg-white/5 rounded-xl border border-white/10 px-4 py-3 focus-within:border-emerald-500/50 transition-colors">
                <span className="text-sm font-semibold text-slate-400 border-r border-white/10 pr-3 mr-3">+91</span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter your mobile number"
                  className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-500 focus:outline-none tracking-wide"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 shrink-0 hover:scale-[1.02]"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> ₹0 Account Opening
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> ₹0 Delivery Brokerage
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 100% Digital KYC
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Herohome;