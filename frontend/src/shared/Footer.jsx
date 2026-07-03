import logo from "../assets/images/logo.webp";
import { FaFacebook , FaWhatsapp , FaTelegramPlane , FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="w-full h-[40vh] border-b-2 border-gray-300 flex flex-row items-center justify-center gap-20">
              <div className="h-full flex justify-center w-[50%]">
               <p className="text-lg text-gray-950 font-semibold">Equity Plus is a modern stock market platform dedicated to helping individuals make smarter financial decisions. Whether you're a beginner exploring the world of investing or an experienced investor looking for reliable tools, Equity Plus provides easy-to-use financial calculators, market insights, and educational resources in one place. Our mission is to simplify investing through accurate information, intuitive tools, and a user-friendly experience, empowering everyone to build confidence and achieve their financial goals</p>
              </div>
            <img src={logo} alt="Logo" className="h-50 w-50 object-contain" />
               </div>
<h1 className="w-full p-5 border-b-2 text-xl font-semibold border-gray-300  text-center">Contact Us : 8335050444</h1>
<h1 className="w-full p-5 text-3xl font-bold  text-center">Social Media</h1>

<div className="w-full h-[20vh] flex flex-row items-center justify-evenly">

    <a href="https://www.facebook.com/Equity-Plus-100119508964416/" className="flex items-center justify-center rounded-full text-5xl size-20 bg-blue-900 text-white"><FaFacebook /></a>
 <a href="https://chat.whatsapp.com/Ei4WP3Xoj4U7BIsM9grpuG" className="flex items-center justify-center rounded-full text-5xl size-20 bg-green-500 text-white"><FaWhatsapp /></a>
  <a href="https://t.me/equitypluskolkata" className="flex items-center justify-center rounded-full text-5xl size-20 bg-sky-500 text-white"><FaTelegramPlane /></a>
   <a href="https://twitter.com/KolkataDa?s=08" className="flex items-center justify-center rounded-full text-5xl size-20  text-sky-600"><FaTwitter /></a>

</div>
<h1 className="w-full text-gray-800 border-t-2 text-xl font-semibold border-gray-300  text-center">Copyright © 2025 Equity Plus - All Rights Reserved.</h1>


               </div>
    );
}
export default Footer;