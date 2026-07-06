import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);

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

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-indigo-500 to-teal-400 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <img src={logo} alt="Logo" className="h-14 w-20 object-contain" />

          <ul className="hidden items-center gap-8 text-lg font-bold text-white md:flex lg:text-xl">
            <li>
              <NavLink to="/" className="group relative cursor-pointer">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="group relative cursor-pointer">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/services" className="group relative cursor-pointer">
                Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <ul className="invisible absolute left-0 top-full z-50 mt-3 w-72 space-y-1 rounded-3xl bg-white/95 px-3 py-3 text-left text-slate-800 shadow-2xl backdrop-blur-xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {serviceItems.map((item) => (
                  <li key={item}>
                    <NavLink
                      to="/services"
                      className="block rounded-2xl px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group relative">
              <NavLink to="/calculators" className="group relative cursor-pointer">
                Calculators
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <ul className="invisible absolute left-0 top-full z-50 mt-3 w-72 space-y-1 rounded-3xl bg-white/95 px-3 py-3 text-left text-slate-800 shadow-2xl backdrop-blur-xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {calculatorItems.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={`/calculator/${item.id}`}
                      className="block rounded-2xl px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>


            <li>
              <NavLink to="/contact" className="group relative cursor-pointer">
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/sign"
            className="hidden rounded-lg bg-white px-5 py-2 font-bold text-indigo-600 transition-all duration-300 hover:bg-black hover:text-white md:block"
          >
            Sign Up
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full p-2 text-3xl text-white transition hover:bg-white/20 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

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

      <div className="h-24"></div>
    </>
  );
};

export default Navbar;