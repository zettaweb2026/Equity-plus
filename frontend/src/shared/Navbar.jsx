import { useEffect, useState } from "react";
import { Search, Sparkles, Calculator, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/new_logo.png";
import Ticker from "../components/Ticker";
import SearchModal from "../components/SearchModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [navHidden, setNavHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hide navbar on scroll down, show on scroll up/at top
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      if (currentY < 10) {
        setNavHidden(false);
      } else if (currentY > lastY && !activeMega) {
        setNavHidden(true);   // scrolling down → hide (unless mega menu is open)
      } else if (currentY < lastY) {
        setNavHidden(false);  // scrolling up  → show
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeMega]);

  const serviceItems = [
    { title: "Market Insights", desc: "Live index feeds & NSE news" },
    { title: "Financial Calculators", desc: "SIP, Lumpsum, EMI & SWP" },
    { title: "Learn Investing", desc: "Beginner modules & stock guides" },
    { title: "Stock Analysis", desc: "Financial charts & valuation" },
    { title: "Portfolio Planning", desc: "Asset allocation & rebalancing" },
    { title: "Secure Platform", desc: "256-bit bank-grade encryption" },
  ];

  const calculatorItems = [
    { id: "sip", label: "SIP Calculator", desc: "Systematic Investment Plan" },
    { id: "lumpsum", label: "Lumpsum Calculator", desc: "One-time returns" },
    { id: "step-up-sip", label: "Step-up SIP Calculator", desc: "Incremental SIP wealth" },
    { id: "emi", label: "EMI Calculator", desc: "Loan monthly repayment" },
    { id: "swp", label: "SWP Calculator", desc: "Systematic Withdrawal Plan" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass =
    "desktop-nav-link group relative inline-flex cursor-pointer items-center py-2 text-sm lg:text-base font-bold tracking-tight text-slate-200 transition-colors duration-300 hover:text-white";

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-800/60 bg-slate-950/40 backdrop-blur-md shadow-2xl"
            : "border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl"
        }`}
      >
        
        {/* Ticker always stays visible */}
        <Ticker />

        {/* Nav rows — collapse height when scrolling down, restores on scroll up */}
        <div
          style={{
            transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            maxHeight: navHidden ? "0px" : "600px",
            overflow: "hidden",
            opacity: navHidden ? 0 : 1,
            pointerEvents: navHidden ? "none" : "auto",
          }}
        >

        {/* Main Desktop Navbar */}
        <nav
          className={`desktop-expanding-nav hidden w-full text-white transition-all duration-300 md:block ${
            activeMega ? "is-mega-open" : ""
          }`}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
            
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Equity Plus home"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-1 shadow-inner backdrop-blur-md transition duration-300 group-hover:bg-emerald-500/20 group-hover:scale-105 overflow-hidden">
                <img
                  src={logo}
                  alt="Equity Plus"
                  className="h-full w-full object-cover"
                />
              </div>
            </NavLink>

            {/* Quick Search Input Trigger (Groww Style) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-3 w-64 lg:w-80 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/90 text-slate-400 text-xs font-semibold hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 shadow-inner group"
            >
              <Search className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" />
              <span className="flex-1 text-left truncate">Search Groww-style stocks, SIP, EMI...</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Nav Links */}
            <ul className="flex items-center gap-10 lg:gap-14">
              <li onMouseEnter={() => setActiveMega(null)}>
                <NavLink to="/" className={navLinkClass}>
                  Home
                  <span className="desktop-nav-underline"></span>
                </NavLink>
              </li>

              <li onMouseEnter={() => setActiveMega(null)}>
                <NavLink to="/about" className={navLinkClass}>
                  About
                  <span className="desktop-nav-underline"></span>
                </NavLink>
              </li>

              <li
                className={`services-menu ${activeMega === "services" ? "is-active-mega" : ""}`}
                onMouseEnter={() => setActiveMega("services")}
                onFocus={() => setActiveMega("services")}
              >
                <NavLink to="/services" className={navLinkClass}>
                  Services
                  <span className="desktop-nav-underline"></span>
                </NavLink>
              </li>

              <li
                className={`calculators-menu ${activeMega === "calculators" ? "is-active-mega" : ""}`}
                onMouseEnter={() => setActiveMega("calculators")}
                onFocus={() => setActiveMega("calculators")}
              >
                <NavLink to="/calculators" className={navLinkClass}>
                  Calculators
                  <span className="desktop-nav-underline"></span>
                </NavLink>
              </li>

              <li onMouseEnter={() => setActiveMega(null)}>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                  <span className="desktop-nav-underline"></span>
                </NavLink>
              </li>
            </ul>

            {/* Action CTAs */}
            <div className="flex items-center gap-3">
              <NavLink
                to="/sign"
                onMouseEnter={() => setActiveMega(null)}
                className="hidden lg:inline-flex items-center text-xs font-bold text-slate-300 hover:text-white px-3 py-2 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/sign"
                onMouseEnter={() => setActiveMega(null)}
                className="rounded-full bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Open Free Demat Account
              </NavLink>
            </div>

          </div>

          {/* Mega Shell Dropdown */}
          <div className="mega-shell bg-slate-950/98 border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-6 pb-7 lg:px-8">
              <div className="mega-stage">
                
                {/* Services Panel */}
                <div className={`mega-panel services-panel ${activeMega === "services" ? "is-active" : ""}`}>
                  <div className="mega-panel-header border-r border-slate-800 pr-6">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Equity Plus Products
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">Smart suite for modern investors.</p>
                  </div>
                  <div className="mega-link-grid">
                    {serviceItems.map((item) => (
                      <NavLink
                        key={item.title}
                        to="/services"
                        className="mega-link bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-emerald-500/40 p-3 rounded-2xl flex flex-col justify-center"
                      >
                        <span className="font-bold text-white text-sm">{item.title}</span>
                        <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Calculators Panel */}
                <div className={`mega-panel calculators-panel ${activeMega === "calculators" ? "is-active" : ""}`}>
                  <div className="mega-panel-header border-r border-slate-800 pr-6">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                      <Calculator className="h-3.5 w-3.5" /> Financial Calculators
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">Project SIPs, EMIs & Wealth goals.</p>
                  </div>
                  <div className="mega-link-grid">
                    {calculatorItems.map((item) => (
                      <NavLink
                        key={item.id}
                        to={`/calculator/${item.id}`}
                        className="mega-link bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-indigo-500/40 p-3 rounded-2xl flex flex-col justify-center"
                      >
                        <span className="font-bold text-white text-sm">{item.label}</span>
                        <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Bar */}
        <nav className="w-full bg-slate-950 px-4 py-3 md:hidden flex items-center justify-between border-b border-slate-800">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-1 overflow-hidden shadow-inner">
              <img src={logo} alt="Equity Plus" className="h-full w-full object-cover" />
            </div>
          </NavLink>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl transition-transform duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-1 overflow-hidden shadow-inner">
              <img src={logo} alt="Equity Plus" className="h-full w-full object-cover" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
          >
            About
          </NavLink>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
            >
              <span>Services</span>
              <span>{mobileServicesOpen ? "−" : "+"}</span>
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {serviceItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="block p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-sm font-semibold text-slate-200"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setMobileCalculatorsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
            >
              <span>Calculators</span>
              <span>{mobileCalculatorsOpen ? "−" : "+"}</span>
            </button>
            {mobileCalculatorsOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {calculatorItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/calculator/${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-sm font-semibold text-slate-200"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/sign"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3.5 px-4 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-center text-base shadow-lg shadow-emerald-500/20"
          >
            Open Free Demat Account
          </NavLink>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
