import logo from "../assets/images/logo.webp";
import { FaFacebook, FaWhatsapp, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl border border-gray-300 bg-white/80 px-4 py-8 shadow-sm sm:px-6 lg:flex-row lg:px-10">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-base font-semibold leading-7 text-gray-800 sm:text-lg">
            Equity Plus is a modern stock market platform dedicated to helping individuals make smarter financial decisions. Whether you're a beginner exploring the world of investing or an experienced investor looking for reliable tools, Equity Plus provides easy-to-use financial calculators, market insights, and educational resources in one place. Our mission is to simplify investing through accurate information, intuitive tools, and a user-friendly experience, empowering everyone to build confidence and achieve their financial goals.
          </p>
        </div>
        <img src={logo} alt="Logo" className="h-28 w-28 object-contain sm:h-36 sm:w-36 lg:h-48 lg:w-48" />
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center gap-3 border-t border-gray-300 px-4 py-5 text-center">
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
          Contact Us: 8335050444
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Social Media</h3>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:gap-6">
        <a href="https://www.facebook.com/Equity-Plus-100119508964416/" className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-3xl text-white transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16 sm:text-4xl">
          <FaFacebook />
        </a>
        <a href="https://chat.whatsapp.com/Ei4WP3Xoj4U7BIsM9grpuG" className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16 sm:text-4xl">
          <FaWhatsapp />
        </a>
        <a href="https://t.me/equitypluskolkata" className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-3xl text-white transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16 sm:text-4xl">
          <FaTelegramPlane />
        </a>
        <a href="https://twitter.com/KolkataDa?s=08" className="flex h-14 w-14 items-center justify-center rounded-full text-3xl text-sky-600 transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16 sm:text-4xl">
          <FaTwitter />
        </a>
      </div>

      <div className="border-t border-gray-300 px-4 py-4 text-center">
        <p className="text-sm font-semibold text-gray-700 sm:text-base">
          Copyright © 2025 Equity Plus - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;