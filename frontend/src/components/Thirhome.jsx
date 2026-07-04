import { GoGraph } from "react-icons/go";
import { FaCalculator, FaPercentage } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Thirhome = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl bg-orange-300 p-6 text-center shadow-md">
        <div className="flex size-20 items-center justify-center rounded-full bg-white text-4xl text-orange-300 sm:size-24 sm:text-5xl">
          <GoGraph />
        </div>
        <h1 className="text-xl font-bold">
          SIP Calculator
          <br />
          <span className="text-lg font-semibold">
            Estimate long-term wealth creation through monthly investments.
          </span>
        </h1>
        <NavLink
          to="/calculators"
          className="rounded-2xl bg-orange-300 px-4 py-2 text-lg font-bold transition duration-300 hover:bg-orange-400"
        >
          View More
        </NavLink>
      </div>

      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl bg-red-200 p-6 text-center shadow-md">
        <div className="flex size-20 items-center justify-center rounded-full bg-white text-4xl text-red-300 sm:size-24 sm:text-5xl">
          <FaCalculator />
        </div>
        <h1 className="text-xl font-bold">
          EMI Calculator
          <br />
          <span className="text-lg font-semibold">
            Calculate monthly loan repayments quickly.
          </span>
        </h1>
        <NavLink
          to="/calculators"
          className="rounded-2xl bg-red-200 px-4 py-2 text-lg font-bold transition duration-300 hover:bg-red-400"
        >
          View More
        </NavLink>
      </div>

      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl bg-emerald-200 p-6 text-center shadow-md">
        <div className="flex size-20 items-center justify-center rounded-full bg-white text-4xl text-emerald-300 sm:size-24 sm:text-5xl">
          <FaPercentage />
        </div>
        <h1 className="text-xl font-bold">
          Brokerage Calculator
          <br />
          <span className="text-lg font-semibold">
            Know your exact brokerage charges before trading.
          </span>
        </h1>
        <NavLink
          to="/calculators"
          className="rounded-2xl bg-emerald-200 px-4 py-2 text-lg font-bold transition duration-300 hover:bg-emerald-400"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default Thirhome;