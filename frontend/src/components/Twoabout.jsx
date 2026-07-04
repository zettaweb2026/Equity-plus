import { FaPhoneAlt, FaCalculator } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Twoabout = () => {
    return (
        <div className="w-full overflow-x-hidden">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <h1 className="rounded-2xl border border-slate-400 bg-white p-5 shadow-sm text-center text-lg font-semibold sm:text-xl">Easy-to-understand market insights</h1>
            <h1 className="rounded-2xl border border-slate-400 bg-white p-5 shadow-sm text-center text-lg font-semibold sm:text-xl">Powerful financial calculators</h1>
            <h1 className="rounded-2xl border border-slate-400 bg-white p-5 shadow-sm text-center text-lg font-semibold sm:text-xl">Beginner-friendly learning resources</h1>
            <h1 className="rounded-2xl border border-slate-400 bg-white p-5 shadow-sm text-center text-lg font-semibold sm:text-xl">Reliable and accurate information</h1>
        </div>
        <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-2xl font-bold  sm:text-2xl lg:text-3xl">
           Why Choose Us
        </h1>
         <div className="w-full text-center lg:text-left">
          <p className="text-center font-semibold leading-7 text-gray-800 sm:text-lg">
            Our team is comprised of people with different kinds of finance experience, but we all have this in common--a commitment to ethics and integrity. We’re all fully licensed and credentialed. And you can count on unbiased recommendations and impartial guidance.
          </p>
        </div>
      </section>
        <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-2xl font-bold  sm:text-2xl lg:text-3xl">
           Our vision
        </h1>
         <div className="w-full text-center lg:text-left">
          <p className="text-center font-semibold leading-7 text-gray-800 sm:text-lg">
            We envision a future where every individual has the confidence and knowledge to make smarter financial decisions. Equity Plus aims to become a trusted companion for every investor.
          </p>
        </div>
      </section>
        <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-2xl font-bold  sm:text-2xl lg:text-3xl">
          Start Your Investment Journey Today
        </h1>
          <p className="text-center font-semibold leading-7 text-gray-800 sm:text-lg">
           Explore our financial tools, learn about the stock market, and take the first step toward achieving your financial goals.
          </p>
          
      <div className="flex flex-col mt-2 items-center gap-4 md:flex-row md:justify-center md:gap-6">
  <NavLink
    to="/contact"
    className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-base font-bold text-black transition duration-300 hover:cursor-pointer hover:bg-black hover:text-emerald-400 sm:text-lg"
  >
    <FaPhoneAlt />
    Contact Us
  </NavLink>

  <NavLink
    to="/calculators"
    className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-base font-bold text-black transition duration-300 hover:cursor-pointer hover:bg-black hover:text-emerald-400 sm:text-lg"
  >
    <FaCalculator />
    Financial Calculators
  </NavLink>
</div>
       
      </section>
        </div>
    );
};

export default Twoabout;