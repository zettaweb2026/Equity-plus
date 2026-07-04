import { FaPhoneAlt, FaCalculator } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Herohome = () => {
  return (
    <div className="flex min-h-[80vh] flex-col-reverse items-center justify-center gap-8 rounded-3xl bg-gradient-to-b from-sky-50 to-sky-100 px-4 py-8 sm:px-6 lg:flex-row lg:justify-evenly lg:px-8 lg:py-0">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:w-[50%] lg:items-start lg:px-6 lg:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Invest Smarter. Grow Stronger
        </h1>
        <h1 className="text-2xl font-bold text-blue-950 sm:text-3xl lg:text-4xl">
          Build Wealth with Equity Plus.
        </h1>
        <p className="max-w-2xl text-base font-semibold text-gray-950 sm:text-lg">
          Learn the stock market with confidence, analyze investments using powerful financial calculators, stay updated with market trends, and make informed financial decisions—all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <NavLink
            to="/contact"
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-base font-bold text-black transition duration-300 hover:cursor-pointer hover:bg-black hover:text-emerald-400 sm:text-lg"
          >
            <FaPhoneAlt /> Contact Us
          </NavLink>
          <NavLink
            to="/calculators"
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-base font-bold text-black transition duration-300 hover:cursor-pointer hover:bg-black hover:text-emerald-400 sm:text-lg"
          >
            <FaCalculator /> Financial Calculators
          </NavLink>
        </div>
      </div>

      <img
        src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
        alt="hero"
        className="h-64 w-full max-w-[420px] rounded-2xl object-cover shadow-xl sm:h-80 lg:h-[80%] lg:w-[40%]"
      />
    </div>
  );
};

export default Herohome;