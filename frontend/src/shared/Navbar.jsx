import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500 to-teal-400 shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <img src={logo} alt="Logo" className="h-14 w-20 object-contain" />

         
          <ul className="hidden md:flex items-center gap-8 text-xl font-bold text-white">
            <li>
              <NavLink to="/" className="relative group cursor-pointer">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="relative group cursor-pointer">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className="relative group cursor-pointer">
                Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/calculators" className="relative group cursor-pointer">
                Calculators
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="relative group cursor-pointer">
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>

        
          <NavLink
            to="/sign"
            className="hidden md:block bg-white text-indigo-600 px-5 py-2 rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300"
          >
            Sign Up
          </NavLink>

        
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-4xl text-white"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

     
      <div
        className={`fixed inset-0 bg-gradient-to-br from-indigo-700 to-cyan-500 z-[100] transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-5xl text-white"
        >
          <IoClose />
        </button>

        <ul className="flex flex-col justify-center items-center h-full gap-8 text-3xl font-bold text-white">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/calculators"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
            >
              Calculators
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sign"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-72 text-center py-4 rounded-xl hover:bg-white hover:text-indigo-700 hover:scale-110 transition-all duration-300"
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