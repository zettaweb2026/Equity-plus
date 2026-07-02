import { AiFillBank , AiFillGold } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoLogoUsd } from "react-icons/io";
const Sechome = () => {
    return (
<div className="w-full h-[30vh] flex flex-row items-center justify-evenly">
<div className="flex flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center rounded-full text-7xl size-25 bg-indigo-900 text-white"><AiFillBank /></div>
<h1 className="text-xl font-semibold text-center">BANK NIFTY<br></br>56,780.25</h1>
</div>

<div className="flex flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center rounded-full text-6xl size-25 bg-teal-700 text-white"><GoGraph /></div>
<h1 className="text-xl font-semibold text-center">SENSEX<br></br>81,450.12</h1>
</div>

<div className="flex flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center rounded-full text-7xl size-25 bg-yellow-500 text-white"><AiFillGold /></div>
<h1 className="text-xl font-semibold text-center">GOLD<br></br>₹98,500 / 10g</h1>
</div>

<div className="flex flex-col items-center justify-center gap-4">
    <div className="flex items-center justify-center rounded-full text-7xl size-25 bg-green-600 text-white"><IoLogoUsd /></div>
<h1 className="text-xl font-semibold text-center">USD/INR<br></br>Rs. 83.45<br></br></h1>
</div>

</div>
    );
}
export default Sechome;