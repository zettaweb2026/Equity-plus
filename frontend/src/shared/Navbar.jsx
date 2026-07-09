import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import Ticker from "../components/Ticker";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);

  const serviceItems = [
    "Market Insights",
    "Financial Calculators",
    "Learn Investing",
    "Stock Analysis",
    "Portfolio Planning",
    "Secure Platform",
  ];

  const calculatorItems = [
    { id: "sip", label: "SIP Calculator" },
    { id: "lumpsum", label: "Lumpsum Calculator" },
    { id: "step-up-sip", label: "Step-up SIP Calculator" },
    { id: "emi", label: "EMI Calculator" },
    { id: "swp", label: "SWP Calculator" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass =
    "desktop-nav-link group relative inline-flex cursor-pointer items-center py-2 text-base font-bold tracking-tight text-white/90 transition-colors duration-300 hover:text-white lg:text-lg";

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <nav
          className={`desktop-expanding-nav hidden w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 text-white shadow-[0_18px_55px_-30px_rgba(15,23,42,0.85)] md:block ${activeMega ? "is-mega-open" : ""}`}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <NavLink
              to="/"
              className="flex h-16 w-28 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 shadow-inner shadow-white/10 backdrop-blur-md transition duration-300 hover:bg-white/15"
              aria-label="Equity Plus home"
            >
              <img
                src={logo}
                alt="Equity Plus"
                className="h-12 w-full object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
              />
            </NavLink>

            <ul className="flex items-center gap-6 lg:gap-9">
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

            <NavLink
              to="/sign"
              onMouseEnter={() => setActiveMega(null)}
              className="rounded-full border border-white/30 bg-white px-5 py-2.5 text-sm font-extrabold text-indigo-700 shadow-lg shadow-indigo-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white lg:text-base"
            >
              Sign Up
            </NavLink>
          </div>

          <div className="mega-shell">
            <div className="mx-auto max-w-7xl px-6 pb-7 lg:px-8">
              <div className="mega-stage">
                <div className={`mega-panel services-panel ${activeMega === "services" ? "is-active" : ""}`}>
                  <div className="mega-panel-header">
                    <p className="mega-eyebrow">Equity Plus services</p>
                    <p className="mega-title">Tools and guidance for smarter decisions.</p>
                  </div>
                  <div className="mega-link-grid">
                    {serviceItems.map((item) => (
                      <NavLink key={item} to="/services" className="mega-link">
                        <span>{item}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className={`mega-panel calculators-panel ${activeMega === "calculators" ? "is-active" : ""}`}>
                  <div className="mega-panel-header">
                    <p className="mega-eyebrow">Financial calculators</p>
                    <p className="mega-title">Plan SIPs, EMIs, SWPs, and long-term goals.</p>
                  </div>
                  <div className="mega-link-grid">
                    {calculatorItems.map((item) => (
                      <NavLink
                        key={item.id}
                        to={`/calculator/${item.id}`}
                        className="mega-link"
                      >
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav className="w-full bg-gradient-to-r from-indigo-500 to-teal-400 shadow-lg md:hidden">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex h-16 w-28 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 shadow-inner shadow-white/10 backdrop-blur-md"
              aria-label="Equity Plus home"
            >
              <img
                src={logo}
                alt="Equity Plus"
                className="h-12 w-full object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
              />
            </NavLink>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-full p-2 text-3xl text-white transition hover:bg-white/20"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </nav>

        <Ticker />
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-gradient-to-br from-indigo-700 to-cyan-500 transition-transform duration-500 md:hidden ${menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"
          }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-5xl text-white"
          aria-label="Close menu"
        >
          <IoClose />
        </button>

        <ul className="flex h-full flex-col items-center justify-center gap-6 text-2xl font-bold text-white sm:text-3xl">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
            >
              About
            </NavLink>
          </li>

          <li className="w-full">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left text-white transition-all duration-300 hover:bg-white/20"
            >
              <span>Services</span>
              <span>{mobileServicesOpen ? "−" : "+"}</span>
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 space-y-2 px-4">
                {serviceItems.map((item) => (
                  <NavLink
                    key={item}
                    to="/services"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block rounded-xl bg-white px-4 py-3 text-center font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-100"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <li className="w-full">
            <button
              type="button"
              onClick={() => setMobileCalculatorsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left text-white transition-all duration-300 hover:bg-white/20"
            >
              <span>Calculators</span>
              <span>{mobileCalculatorsOpen ? "−" : "+"}</span>
            </button>
            {mobileCalculatorsOpen && (
              <div className="mt-3 space-y-2 px-4">
                {calculatorItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/calculator/${item.id}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileCalculatorsOpen(false);
                    }}
                    className="block rounded-xl bg-white px-4 py-3 text-center font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-100"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sign"
              onClick={() => setMenuOpen(false)}
              className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
