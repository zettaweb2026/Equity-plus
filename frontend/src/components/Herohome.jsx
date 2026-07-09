import { useEffect, useState } from "react";
import { FaPhoneAlt, FaCalculator } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    alt: "Financial market dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
    alt: "Investor reviewing charts",
  },
  {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    alt: "Business planning with analytics",
  },
];

const Herohome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-2 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-3 py-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] sm:mx-3 sm:px-6 sm:py-8 lg:mx-4 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
        <div className="w-full max-w-2xl text-center lg:text-left">
          <p className="mb-4 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Smart investing starts here
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Invest Smarter.
            <span className="block text-emerald-600">Grow Stronger.</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-slate-700 sm:text-3xl lg:text-4xl">
            Build Wealth with Equity Plus.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl lg:mx-0">
            Learn the stock market with confidence, analyze investments with powerful calculators, and make informed financial decisions in one trusted place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <NavLink
              to="/contact"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-900 transition duration-300 hover:bg-slate-900 hover:text-emerald-400"
            >
              <FaPhoneAlt /> Contact Us
            </NavLink>
            <NavLink
              to="/calculators"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-base font-semibold text-white transition duration-300 hover:bg-emerald-700"
            >
              <FaCalculator /> Financial Calculators
            </NavLink>
          </div>
        </div>

        <div className="w-full max-w-[520px]">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="relative h-[300px] overflow-hidden rounded-[22px] sm:h-[360px] lg:h-[420px]">
              {slides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    index === currentIndex ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-105"
                  }`}
                />
              ))}

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herohome;