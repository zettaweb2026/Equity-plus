import { useEffect, useState } from "react";
import {
  Search,
  Sparkles,
  Calculator,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  BarChart3,
  PieChart,
  Zap,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Coins,
  Percent,
  Landmark,
  Building,
  Wallet,
  Scale
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/new_logo.png";
import SearchModal from "../components/SearchModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null); // 'services' | 'calculators' | null
  const [isScrolled, setIsScrolled] = useState(false);

  // Active Category state in Services Mega Menu
  const [activeServiceCategory, setActiveServiceCategory] = useState("investment");

  // Mini Interactive SIP Calculator state in Calculators Mega Menu
  const [sipMonthly, setSipMonthly] = useState(25000);
  const [sipReturn, setSipReturn] = useState(15);
  const [sipYears, setSipYears] = useState(10);

  // Sticky navbar background transition on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Calculate live preview metrics for Mini SIP Calculator in Mega Menu
  const totalMonths = sipYears * 12;
  const monthlyRate = sipReturn / 12 / 100;
  const investedAmount = sipMonthly * totalMonths;
  const projectedValue =
    monthlyRate > 0
      ? Math.round(
          sipMonthly *
            (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
        )
      : investedAmount;
  const estReturns = Math.max(0, projectedValue - investedAmount);

  const formatLakhs = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} L`;
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const serviceCategories = [
    { id: "investment", label: "Investment Services", desc: "Equities, Mutual Funds & F&O" },
    { id: "intelligence", label: "Market Intelligence", desc: "Live feeds & NSE heatmaps" },
    { id: "planning", label: "Financial Planning", desc: "Wealth allocation & advisory" },
    { id: "learning", label: "Learning Center", desc: "Beginner & pro stock guides" },
    { id: "research", label: "Research & Analytics", desc: "Valuation & fundamental models" },
  ];

  const featuredServices = [
    {
      icon: TrendingUp,
      title: "Market Insights",
      desc: "Live NSE/BSE index feeds, market depth & real-time corporate announcements.",
      link: "/services",
      badge: "Live",
      color: "emerald",
    },
    {
      icon: BarChart3,
      title: "Stock & Derivatives Analysis",
      desc: "Advanced TradingView integration with 100+ technical indicators & option chains.",
      link: "/services",
      badge: "Pro",
      color: "blue",
    },
    {
      icon: PieChart,
      title: "Portfolio Rebalancing",
      desc: "Automated risk analysis, sector allocation, and tax-loss harvesting recommendations.",
      link: "/services",
      color: "emerald",
    },
    {
      icon: Zap,
      title: "Institutional Execution",
      desc: "Direct market access (DMA) with sub-10ms latency order routing technology.",
      link: "/services",
      badge: "Ultra Fast",
      color: "blue",
    },
    {
      icon: ShieldCheck,
      title: "Wealth Advisory",
      desc: "Tailored portfolio construction managed by SEBI-registered research analysts.",
      link: "/services",
      color: "emerald",
    },
    {
      icon: BookOpen,
      title: "Equity Academy",
      desc: "Comprehensive modules covering fundamental analysis, technicals & risk management.",
      link: "/services",
      color: "blue",
    },
  ];

  const calculatorCategories = [
    {
      category: "Investment",
      icon: Coins,
      items: [
        { id: "sip", label: "SIP Calculator", desc: "Systematic investment compounding", link: "/calculator/sip" },
        { id: "step-up-sip", label: "Step-Up SIP", desc: "Annual increment wealth multiplier", link: "/calculator/step-up-sip" },
        { id: "lumpsum", label: "Lumpsum", desc: "One-time investment growth projection", link: "/calculator/lumpsum" },
      ],
    },
    {
      category: "Loans & Mortgages",
      icon: Landmark,
      items: [
        { id: "emi", label: "EMI Calculator", desc: "Loan monthly repayment & interest break-down", link: "/calculator/emi" },
        { id: "home-loan", label: "Home Loan EMI", desc: "Mortgage tenure & tax benefit estimation", link: "/calculator/emi" },
      ],
    },
    {
      category: "Tax & Salary",
      icon: Scale,
      items: [
        { id: "tax", label: "Income Tax Calculator", desc: "Old vs New tax regime comparison", link: "/calculator/tax" },
      ],
    },
    {
      category: "Planning & Income",
      icon: Wallet,
      items: [
        { id: "retirement", label: "Retirement Planning", desc: "Inflation-adjusted retirement corpus", link: "/calculator/retirement" },
        { id: "swp", label: "SWP Calculator", desc: "Systematic Withdrawal Plan cash flow", link: "/calculator/swp" },
      ],
    },
    {
      category: "Fixed Income",
      icon: Building,
      items: [
        { id: "fd", label: "FD Calculator", desc: "Fixed deposit quarterly compounding", link: "/calculator/fd" },
        { id: "rd", label: "RD Calculator", desc: "Recurring deposit tenure growth", link: "/calculator/rd" },
      ],
    },
  ];

  const navLinkClass =
    "desktop-nav-link group relative inline-flex cursor-pointer items-center py-2 text-sm lg:text-base font-bold tracking-tight text-slate-200 transition-colors duration-300 hover:text-white";

  return (
    <>
      {/* Dim Overlay when any Mega Menu is Active */}
      {activeMega && (
        <div
          className="fixed inset-0 z-40 bg-black/65 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setActiveMega(null)}
        />
      )}

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090B12]/75 backdrop-blur-xl border-b border-white/15 shadow-2xl shadow-black/90 py-2.5"
            : "bg-[#090B12] border-b border-white/10 py-4 shadow-xl"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* Extreme Left: Brand Logo & Quick Search */}
          <div className="flex items-center gap-4 lg:gap-6 flex-1 justify-start min-w-0">
            <NavLink
              to="/"
              onClick={() => setActiveMega(null)}
              className="flex items-center gap-3 group shrink-0"
              aria-label="Equity Plus home"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-1 shadow-inner backdrop-blur-md transition duration-300 group-hover:bg-emerald-500/20 group-hover:scale-105 overflow-hidden">
                <img
                  src={logo}
                  alt="Equity Plus"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-base font-black tracking-tight text-white leading-none">
                  EQUITY <span className="text-emerald-400">PLUS</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                  Financial Platforms
                </span>
              </div>
            </NavLink>

            {/* Quick Search Input Trigger */}
            <button
              onClick={() => {
                setActiveMega(null);
                setSearchOpen(true);
              }}
              className="hidden md:flex items-center gap-3 w-48 lg:w-64 xl:w-72 px-4 py-2 rounded-full border border-white/10 bg-slate-900/80 text-slate-400 text-xs font-semibold hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300 shadow-inner group shrink-0"
            >
              <Search className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" />
              <span className="flex-1 text-left truncate">Search stocks, SIP, EMI...</span>
              <kbd className="hidden lg:inline-block text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Center Aligned Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 justify-center shrink-0 px-4">
            <NavLink
              to="/"
              onMouseEnter={() => setActiveMega(null)}
              className={navLinkClass}
            >
              Home
              <span className="desktop-nav-underline"></span>
            </NavLink>

            <NavLink
              to="/about"
              onMouseEnter={() => setActiveMega(null)}
              className={navLinkClass}
            >
              About
              <span className="desktop-nav-underline"></span>
            </NavLink>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMega("services")}
            >
              <button
                type="button"
                onClick={() => setActiveMega(activeMega === "services" ? null : "services")}
                className={`flex items-center gap-1.5 py-2 text-sm lg:text-base font-bold tracking-tight transition-colors duration-300 ${
                  activeMega === "services" ? "text-emerald-400" : "text-slate-200 hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeMega === "services" ? "rotate-180 text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* Calculators Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMega("calculators")}
            >
              <button
                type="button"
                onClick={() => setActiveMega(activeMega === "calculators" ? null : "calculators")}
                className={`flex items-center gap-1.5 py-2 text-sm lg:text-base font-bold tracking-tight transition-colors duration-300 ${
                  activeMega === "calculators" ? "text-emerald-400" : "text-slate-200 hover:text-white"
                }`}
              >
                <span>Calculators</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeMega === "calculators" ? "rotate-180 text-emerald-400" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            <NavLink
              to="/contact"
              onMouseEnter={() => setActiveMega(null)}
              className={navLinkClass}
            >
              Contact
              <span className="desktop-nav-underline"></span>
            </NavLink>
          </nav>

          {/* Extreme Right: Login & Open Account Action CTAs */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <NavLink
              to="/sign"
              onMouseEnter={() => setActiveMega(null)}
              className="hidden sm:inline-flex items-center text-xs sm:text-sm font-bold text-slate-300 hover:text-white px-2.5 py-2 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign"
              onMouseEnter={() => setActiveMega(null)}
              className="rounded-full bg-emerald-500 hover:bg-emerald-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Open Free Account
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white md:hidden hover:border-slate-700 transition"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* ========================================== */}
        {/* DESKTOP MEGA MENU 1: SERVICES MEGA MENU   */}
        {/* ========================================== */}
        {activeMega === "services" && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-6xl mt-2 px-4 z-50 pointer-events-auto animate-fadeIn hidden md:block"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="bg-[#090B12]/98 border border-white/10 rounded-2xl shadow-2xl shadow-black/90 backdrop-blur-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-12 gap-6">
                
                {/* Column 1: Categories Sidebar */}
                <div className="col-span-3 border-r border-white/10 pr-4 space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" /> Capabilities
                  </div>
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setActiveServiceCategory(cat.id)}
                      onClick={() => setActiveServiceCategory(cat.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex flex-col ${
                        activeServiceCategory === cat.id
                          ? "bg-emerald-500/10 border-l-4 border-emerald-500 text-white pl-3"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-xs font-bold">{cat.label}</span>
                      <span className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">
                        {cat.desc}
                      </span>
                    </button>
                  ))}

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <NavLink
                      to="/services"
                      onClick={() => setActiveMega(null)}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </NavLink>
                  </div>
                </div>

                {/* Column 2: Featured Services Grid */}
                <div className="col-span-6 space-y-3 px-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Featured Products & Solutions
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Institutional Grade
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {featuredServices.map((svc) => {
                      const IconComp = svc.icon;
                      return (
                        <NavLink
                          key={svc.title}
                          to={svc.link}
                          onClick={() => setActiveMega(null)}
                          className="group p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/40 hover:bg-white/5 hover:border-l-4 hover:border-l-emerald-500 transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition">
                                <IconComp className="h-4 w-4" />
                              </div>
                              {svc.badge && (
                                <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                  {svc.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition">
                              {svc.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 font-medium leading-snug mt-1 line-clamp-2">
                              {svc.desc}
                            </p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Live Institutional Analytics Card */}
                <div className="col-span-3 bg-slate-900/80 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        Live Analytics
                      </span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <h4 className="text-sm font-black text-white">Execution Engine</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      Powered by high-frequency order routing with sub-10ms direct market connectivity.
                    </p>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-white/5">
                        <span className="text-slate-400 text-[11px]">Volatility (VIX)</span>
                        <span className="font-bold text-emerald-400">13.4 (-1.2%)</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950/60 p-2 rounded border border-white/5">
                        <span className="text-slate-400 text-[11px]">Sub-10ms Latency</span>
                        <span className="font-bold text-blue-400">99.98% Active</span>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to="/services"
                    onClick={() => setActiveMega(null)}
                    className="mt-4 w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs text-center transition shadow-lg shadow-emerald-500/20"
                  >
                    View All Services →
                  </NavLink>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* DESKTOP MEGA MENU 2: CALCULATORS MEGA MENU */}
        {/* ========================================== */}
        {activeMega === "calculators" && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-6xl mt-2 px-4 z-50 pointer-events-auto animate-fadeIn hidden md:block"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="bg-[#090B12]/98 border border-white/10 rounded-2xl shadow-2xl shadow-black/90 backdrop-blur-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-12 gap-6">
                
                {/* Column 1 & 2: Categorized Calculators (8 Columns) */}
                <div className="col-span-8 grid grid-cols-2 gap-5 border-r border-white/10 pr-6">
                  {calculatorCategories.map((group) => {
                    const CategoryIcon = group.icon;
                    return (
                      <div key={group.category} className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-400 pb-1 border-b border-white/5">
                          <CategoryIcon className="h-3.5 w-3.5" />
                          <span>{group.category}</span>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <NavLink
                              key={item.id}
                              to={item.link}
                              onClick={() => setActiveMega(null)}
                              className="group p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 flex flex-col transition"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition">
                                  {item.label}
                                </span>
                                <ChevronRight className="h-3 w-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                              </div>
                              <span className="text-[10px] text-slate-400 font-medium truncate">
                                {item.desc}
                              </span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Column 3: Interactive Mini SIP Wealth Preview Widget (4 Columns) */}
                <div className="col-span-4 bg-slate-900/90 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                        <Calculator className="h-3 w-3" /> Live Simulator
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">SIP Wealth</span>
                    </div>

                    <h4 className="text-xs font-bold text-white mb-3">Quick SIP Calculator</h4>

                    {/* Controls */}
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between font-bold text-[11px] mb-1">
                          <span className="text-slate-400">Monthly Investment</span>
                          <span className="text-white">₹{sipMonthly.toLocaleString("en-IN")}</span>
                        </div>
                        <input
                          type="range"
                          min={1000}
                          max={100000}
                          step={1000}
                          value={sipMonthly}
                          onChange={(e) => setSipMonthly(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-[11px] mb-1">
                          <span className="text-slate-400">Expected Return (p.a)</span>
                          <span className="text-white">{sipReturn}%</span>
                        </div>
                        <input
                          type="range"
                          min={5}
                          max={25}
                          step={0.5}
                          value={sipReturn}
                          onChange={(e) => setSipReturn(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-[11px] mb-1">
                          <span className="text-slate-400">Time Horizon</span>
                          <span className="text-white">{sipYears} Years</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={30}
                          value={sipYears}
                          onChange={(e) => setSipYears(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                        />
                      </div>
                    </div>

                    {/* Results Box */}
                    <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-emerald-500/20 text-center space-y-1">
                      <div className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">
                        Projected Future Wealth
                      </div>
                      <div className="text-xl font-black text-emerald-400 tracking-tight">
                        {formatLakhs(projectedValue)}
                      </div>
                      <div className="flex justify-center gap-3 text-[10px] text-slate-400 font-semibold pt-1">
                        <span>Inv: {formatLakhs(investedAmount)}</span>
                        <span className="text-emerald-300">Est. Return: {formatLakhs(estReturns)}</span>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to="/calculators"
                    onClick={() => setActiveMega(null)}
                    className="mt-4 w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs text-center transition shadow-lg shadow-emerald-500/20"
                  >
                    Open Calculator Hub →
                  </NavLink>
                </div>

              </div>
            </div>
          </div>
        )}

      </header>

      {/* ========================================== */}
      {/* MOBILE EXPANDABLE ACCORDION DRAWER MENU    */}
      {/* ========================================== */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl transition-transform duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        {/* Header inside mobile drawer */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-1 overflow-hidden shadow-inner">
              <img src={logo} alt="Equity Plus" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-black tracking-tight text-white">
              EQUITY <span className="text-emerald-400">PLUS</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable links inside mobile drawer */}
        <div className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Quick Search Button in mobile drawer */}
          <button
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4 text-emerald-400" />
              <span>Search stocks, SIP, EMI...</span>
            </span>
            <kbd className="text-[10px] font-mono font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
              Ctrl K
            </kbd>
          </button>

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

          {/* Accordion 1: Services */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
            >
              <span>Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180 text-emerald-400" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 space-y-2 pl-3">
                {featuredServices.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="block p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-emerald-400"
                  >
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 2: Calculators */}
          <div>
            <button
              type="button"
              onClick={() => setMobileCalculatorsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 font-bold text-white"
            >
              <span>Calculators</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileCalculatorsOpen ? "rotate-180 text-emerald-400" : ""}`} />
            </button>
            {mobileCalculatorsOpen && (
              <div className="mt-2 space-y-3 pl-3">
                {calculatorCategories.map((cat) => (
                  <div key={cat.category} className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
                      {cat.category}
                    </div>
                    {cat.items.map((calc) => (
                      <NavLink
                        key={calc.id}
                        to={calc.link}
                        onClick={() => setMenuOpen(false)}
                        className="block p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-semibold text-slate-200"
                      >
                        {calc.label}
                      </NavLink>
                    ))}
                  </div>
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
