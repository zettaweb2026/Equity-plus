import Herohome from "../components/Herohome";
import GrowwGridShowcase from "../components/GrowwGridShowcase";
import CategoryHub from "../components/CategoryHub";
import Sechome from "../components/Sechome";
import PricingSection from "../components/PricingSection";
import InteractiveCalculatorPreview from "../components/InteractiveCalculatorPreview";
import Thirhome from "../components/Thirhome";
import AppDownloadBanner from "../components/AppDownloadBanner";
import Fourhome from "../components/Fourhome";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="relative w-full bg-[#0a0e17] text-slate-300 min-h-screen pb-16 overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
        
        {/* Dynamic Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] translate-x-1/3"></div>
      </div>

      <div className="relative z-10 space-y-20 sm:space-y-28 lg:space-y-36">
      
      {/* 1. Ultra-Modern Hero Section */}
      <section className="px-3 sm:px-6 lg:px-8 pt-4">
        <Herohome />
      </section>

      {/* 2. Groww-Style Grid Showcase section ("Build wealth, SIP by SIP" + Fading Stock Grid) */}
      <section>
        <GrowwGridShowcase />
      </section>

      {/* 3. Groww-Style Category Pills & Investment Hub */}
      <section>
        <CategoryHub />
      </section>

      {/* 4. Live Market Pulse & Stock Directory */}
      <section className="px-3 sm:px-6 lg:px-8">
        <Sechome />
      </section>

      {/* 5. AngelOne-Style Transparent Pricing Matrix */}
      <section>
        <PricingSection />
      </section>

      {/* 6. Live Interactive SIP Wealth Calculator */}
      <section>
        <InteractiveCalculatorPreview />
      </section>

      {/* 7. Financial Calculators Suite Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Precision Wealth Planning
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Institutional Financial Calculators
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Access specialized math models built for Indian tax & investment standards.
          </p>
        </div>
        <Thirhome />
      </section>

      {/* 8. Mobile App Download & QR Banner */}
      <section>
        <AppDownloadBanner />
      </section>

      {/* 9. Investor Social Proof & Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Trusted Across India
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            What Modern Investors Say
          </h2>
        </div>
        <Fourhome />
      </section>

      {/* 10. Accordion FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <FAQ />
      </section>

      </div>
    </div>
  );
};

export default Home;