import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import Ticker from "../components/Ticker";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const serviceItems = [
    "Market Insights",
    "Investment Planning",
    "Portfolio Analysis",
    "Financial Education",
  ];
  const calculatorItems = [
    "EMI Calculator",
    "Investment Returns",
    "Tax Calculator",
    "Retirement Planner",
  ];

  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      {/* Desktop Navbar */}
      <div className="hidden px-6 py-4 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-12">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={logo} alt="Equity Plus" className="h-8 w-auto" />
            </NavLink>

            <div className="flex items-center gap-8">
              <NavLink to="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                About
              </NavLink>

              {/* Services Dropdown */}
              <div className="group relative">
                <button className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                  Services
                </button>
                <div className="invisible absolute left-0 top-full mt-2 w-48 rounded-lg border border-slate-200 bg-white py-2 shadow-lg transition group-hover:visible">
                  {serviceItems.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Calculators Dropdown */}
              <div className="group relative">
                <NavLink to="/calculators" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                  Calculators
                </NavLink>
                <div className="invisible absolute left-0 top-full mt-2 w-48 rounded-lg border border-slate-200 bg-white py-2 shadow-lg transition group-hover:visible">
                  {calculatorItems.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <NavLink to="/contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                Contact
              </NavLink>
            </div>
          </div>

          {user ? (
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/sign');
              }}
              className="hidden rounded-lg bg-white px-5 py-2 font-bold text-indigo-600 transition-all duration-300 hover:bg-black hover:text-white md:block"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/sign"
              className="hidden rounded-lg bg-white px-5 py-2 font-bold text-indigo-600 transition-all duration-300 hover:bg-black hover:text-white md:block"
            >
              Sign In
            </NavLink>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="hidden text-slate-900 md:hidden"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Ticker */}
      <Ticker />

      {/* Mobile Navbar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="flex h-screen flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
              <img src={logo} alt="Equity Plus" className="h-8 w-auto" />
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <IoClose size={24} />
              </button>
            </div>

            <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-sm font-medium transition hover:text-indigo-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-sm font-medium transition hover:text-indigo-400"
                >
                  About
                </NavLink>
              </li>

              {/* Mobile Services */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-center text-sm font-medium transition hover:text-indigo-400"
                >
                  Services
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 space-y-2">
                    {serviceItems.map((item) => (
                      <a key={item} href="#" className="block text-center text-sm text-slate-300 hover:text-indigo-400">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Calculators */}
              <li>
                <button
                  onClick={() => setMobileCalculatorsOpen(!mobileCalculatorsOpen)}
                  className="w-full text-center text-sm font-medium transition hover:text-indigo-400"
                >
                  Calculators
                </button>
                {mobileCalculatorsOpen && (
                  <div className="mt-2 space-y-2">
                    {calculatorItems.map((item) => (
                      <a key={item} href="#" className="block text-center text-sm text-slate-300 hover:text-indigo-400">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-sm font-medium transition hover:text-indigo-400"
                >
                  Contact
                </NavLink>
              </li>

              <li>
                {user ? (
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                      navigate('/sign');
                    }}
                    className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/sign"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
                  >
                    Sign In
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
            {user ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                  navigate('/sign');
                }}
                className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/sign"
                onClick={() => setMenuOpen(false)}
                className="flex w-72 justify-center rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-indigo-700"
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      <div className="h-[170px]"></div>
    </>
  );
};

export default Navbar;