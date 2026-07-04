import { FaStar } from "react-icons/fa";

const Fourhome = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="flex min-h-[220px] flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-2 text-yellow-400">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
        <h1 className="text-lg sm:text-xl">
          "Equity Plus simplified investing for me. The calculators helped me plan my SIP investments accurately."
        </h1>
        <h1 className="text-base font-bold sm:text-lg">— Rahul Sharma</h1>
      </div>

      <div className="flex min-h-[220px] flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-2 text-yellow-400">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
        <h1 className="text-lg sm:text-xl">
          "The educational resources are beginner-friendly and easy to understand."
        </h1>
        <h1 className="text-base font-bold sm:text-lg">— Sneha Gupta</h1>
      </div>

      <div className="flex min-h-[220px] flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-2 text-yellow-400">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
        <h1 className="text-lg sm:text-xl">
          "I use Equity Plus every day to track the market and estimate investment returns."
        </h1>
        <h1 className="text-base font-bold sm:text-lg">— Aman Verma</h1>
      </div>
    </div>
  );
};

export default Fourhome;