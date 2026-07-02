import { FaPhoneAlt , FaCalculator } from "react-icons/fa";
const Herohome = () => {
    return (
       <div className="w-full h-[80vh] bg-linear-to-b from-sky-50 to-sky-100 flex flex-row items-center justify-evenly">
      <div className="h-full flex flex-col items-start justify-center gap-4 w-[50%] px-10">
       <h1 className="text-4xl font-sans font-bold">Invest Smarter. Grow Stronger</h1>
       <h1 className="text-3xl font-sans font-bold text-blue-950">Build Wealth with Equity Plus.</h1>
       <p className="text-lg text-gray-950 font-semibold">Learn the stock market with confidence, analyze investments using powerful financial calculators, stay updated with market trends, and make informed financial decisions—all in one place.</p>
        <div className="flex flex-row gap-5">
         <button className="flex text-xl font-bold items-center gap-2 bg-white hover:cursor-pointer text-black px-4 py-2 rounded-md hover:bg-black hover:text-emerald-400 transition duration-300"><FaPhoneAlt /> Contact Us</button>
         <button className="flex text-xl font-bold items-center gap-2 bg-white hover:cursor-pointer text-black px-4 py-2 rounded-md hover:bg-black hover:text-emerald-400 transition duration-300"><FaCalculator /> Financial Calculators</button>
      </div>
      </div>

     <img src="https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D" alt="hero" className="h-[80%] w-[40%] object-cover" />
       </div>
    );
}
export default Herohome;