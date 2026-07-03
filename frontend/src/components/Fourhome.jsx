import { FaStar } from "react-icons/fa";
const Fourhome = () => {
  return (
    <div className="w-full h-[20vh] flex flex-row items-center justify-evenly">
     <div className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<div className="flex flex-row gap-2 items-center text-yellow-400"><FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} /></div>
        <h1 className="text-xl">"Equity Plus simplified investing for me. The calculators helped me plan my SIP investments accurately."</h1>
        <h1 className="text-lg font-bold">— Rahul Sharma</h1>
      </div>
        <div className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<div className="flex flex-row gap-2 items-center text-yellow-400"><FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} /></div>
        <h1 className="text-xl">"The educational resources are beginner-friendly and easy to understand."</h1>
        <h1 className="text-lg font-bold">— Sneha Gupta</h1>
      </div>
        <div className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<div className="flex flex-row gap-2 items-center text-yellow-400"><FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} /></div>
        <h1 className="text-xl">"I use Equity Plus every day to track the market and estimate investment returns."</h1>
        <h1 className="text-lg font-bold">— Aman Verma</h1>
      </div>
    </div>
    );
}
export default Fourhome;