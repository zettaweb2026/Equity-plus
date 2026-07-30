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
    <div className="w-full bg-slate-950 text-white min-h-screen space-y-12 sm:space-y-16 lg:space-y-20 pb-16 overflow-x-hidden">
      
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
  );
};

export default Home;