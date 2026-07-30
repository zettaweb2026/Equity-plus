import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 193;

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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-5 z-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-slate-950/80 text-emerald-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <Sparkles className="h-4 w-4" /> SEBI Registered Platform • 500,000+ Active Investors
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-2xl max-w-4xl">
            Grow your <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">wealth</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-200 font-semibold max-w-2xl mx-auto drop-shadow-md">
            Trade Stocks, F&amp;O derivatives, Direct Mutual Funds with zero delivery brokerage.
          </p>

          {/* CTA button */}
          <div className="pt-3">
            <NavLink
              to="/sign"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all duration-300 shadow-2xl shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>Get started</span>
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>

          <div className="pt-4 animate-bounce text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5">
            <span>Scroll down to explore 3D platform</span>
            <span className="text-emerald-400">↓</span>
          </div>
        </div>

        {/* 3. Bottom Conversion Form (Reveals on scroll end) */}
        <div
          ref={bottomWidgetRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-30"
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3.5 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 flex items-center bg-slate-900/90 rounded-xl border border-slate-800 px-3 py-2">
                <span className="text-xs font-bold text-slate-400 border-r border-slate-800 pr-2 mr-2">+91</span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent text-xs font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-all duration-300 shadow-lg shadow-emerald-500/25 shrink-0"
              >
                <span>Open Free Account</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between px-2 text-[10px] font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" /> ₹0 Delivery Brokerage
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" /> ₹0 AMC 1st Year
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" /> 100% Digital KYC
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Herohome;