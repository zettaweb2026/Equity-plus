import { AiFillBank, AiFillGold } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoLogoUsd } from "react-icons/io";

const Sechome = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex size-20 items-center justify-center rounded-full bg-indigo-900 text-4xl text-white sm:size-24 sm:text-5xl">
          <AiFillBank />
        </div>
        <h1 className="text-center text-lg font-semibold sm:text-xl">
          BANK NIFTY
          <br />
          56,780.25
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex size-20 items-center justify-center rounded-full bg-teal-700 text-4xl text-white sm:size-24 sm:text-5xl">
          <GoGraph />
        </div>
        <h1 className="text-center text-lg font-semibold sm:text-xl">
          SENSEX
          <br />
          81,450.12
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex size-20 items-center justify-center rounded-full bg-yellow-500 text-4xl text-white sm:size-24 sm:text-5xl">
          <AiFillGold />
        </div>
        <h1 className="text-center text-lg font-semibold sm:text-xl">
          GOLD
          <br />
          ₹98,500 / 10g
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex size-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white sm:size-24 sm:text-5xl">
          <IoLogoUsd />
        </div>
        <h1 className="text-center text-lg font-semibold sm:text-xl">
          USD/INR
          <br />
          Rs. 83.45
        </h1>
      </div>
    </div>
  );
};

export default Sechome;