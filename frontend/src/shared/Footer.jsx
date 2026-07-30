import logo from "../assets/images/logo.webp";
import { FaFacebook, FaWhatsapp, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { ShieldCheck, Lock, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-900 pb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-1.5">
                <img src={logo} alt="Equity Plus" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                EQUITY<span className="text-emerald-400">PLUS</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-medium">
              Equity Plus is India’s next-gen stock market platform empowering investors with zero delivery brokerage, real-time market pulse, institutional financial calculators, and smart educational tools.
            </p>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-300 pt-2">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="h-4 w-4" /> SEBI Registered
              </span>
              <span className="flex items-center gap-1 text-indigo-400">
                <Lock className="h-4 w-4" /> 256-bit Encryption
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300">
              Navigation & Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-semibold">
              <li><NavLink to="/" className="hover:text-emerald-400 transition">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-emerald-400 transition">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-emerald-400 transition">Services & Tools</NavLink></li>
              <li><NavLink to="/calculators" className="hover:text-emerald-400 transition">All Calculators</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-emerald-400 transition">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Calculators Shortcuts */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300">
              Calculators
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-semibold">
              <li><NavLink to="/calculator/sip" className="hover:text-emerald-400 transition">SIP Calculator</NavLink></li>
              <li><NavLink to="/calculator/lumpsum" className="hover:text-emerald-400 transition">Lumpsum Calculator</NavLink></li>
              <li><NavLink to="/calculator/step-up-sip" className="hover:text-emerald-400 transition">Step-up SIP</NavLink></li>
              <li><NavLink to="/calculator/emi" className="hover:text-emerald-400 transition">EMI Calculator</NavLink></li>
              <li><NavLink to="/calculator/swp" className="hover:text-emerald-400 transition">SWP Calculator</NavLink></li>
            </ul>
          </div>

          {/* Support & Social */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300">
              Support Line
            </h4>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              <PhoneCall className="h-4 w-4 shrink-0" />
              <span>8335050444</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/Equity-Plus-100119508964416/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://chat.whatsapp.com/Ei4WP3Xoj4U7BIsM9grpuG"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/equitypluskolkata"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://twitter.com/KolkataDa?s=08"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="space-y-4 text-center text-xs text-slate-400 font-medium">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong className="text-slate-400">SEBI Regulatory Disclaimer:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Equity Plus does not guarantee fixed returns or act as a portfolio manager without explicit agreements.
          </p>
          <p className="text-slate-400 pt-2 border-t border-slate-900">
            Copyright © {new Date().getFullYear()} Equity Plus. All Rights Reserved. Built with precision for modern Indian investors.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;