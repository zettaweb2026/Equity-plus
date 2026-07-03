import { GoGraph } from "react-icons/go";
import { FaCalculator , FaPercentage } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Thirhome = () => {
    return (
     <div className="w-full h-[40vh] flex flex-row items-center justify-evenly">
        <div className="p-5 w-70 rounded-2xl bg-orange-300 flex flex-col items-center justify-center gap-4 mt-10">
        <div className="flex items-center justify-center rounded-full text-7xl size-25 text-orange-300 bg-white"><GoGraph /></div>
<h1 className="text-xl font-bold text-center">SIP Calculator<br></br><span className="font-semibold text-lg">Estimate long-term wealth creation through monthly investments.</span></h1>
<NavLink to="/calculators" className="bg-orange-300 text-xl font-bold px-4 py-2 rounded-2xl hover:bg-orange-400 transition duration-300">View More</NavLink>
</div>
 <div className="p-5 w-70 rounded-2xl bg-red-200 flex flex-col items-center justify-center gap-8 mt-10">
        <div className="flex items-center justify-center rounded-full text-7xl size-25 text-red-300 bg-white"><FaCalculator /></div>
<h1 className="text-xl font-bold text-center">EMI Calculator<br></br><span className="font-semibold text-lg">Calculate monthly loan repayments quickly.</span></h1>
<NavLink to="/calculators" className="bg-red-200 text-xl font-bold px-4 py-2 rounded-2xl hover:bg-red-400 transition duration-300">View More</NavLink>
</div>
 <div className="p-5 w-70 rounded-2xl bg-emerald-200 flex flex-col items-center justify-center gap-8 mt-10">
        <div className="flex items-center justify-center rounded-full text-7xl size-25 text-emerald-300 bg-white"><FaPercentage /></div>
<h1 className="text-xl font-bold text-center">Brokerage Calculator<br></br><span className="font-semibold text-lg">Know your exact brokerage charges before trading.</span></h1>
<NavLink to="/calculators" className="bg-emerald-200 text-xl font-bold px-4 py-2 rounded-2xl hover:bg-emerald-400 transition duration-300">View More</NavLink>
</div>
        </div>
    
    );
}
export default Thirhome;