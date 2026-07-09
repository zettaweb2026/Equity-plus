import Home from "./pages/Home"
import { Routes, Route , useLocation } from "react-router-dom"
import Navbar from "./shared/Navbar"
import About from "./pages/About"
import Calculators from "./pages/Calculators"
import CalculatorPage from "./pages/CalculatorPage"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Sign from "./pages/Sign"
import Footer from "./shared/Footer"
import Admin from "./dashboard/Admin"
function App() {
const location = useLocation();
  const layouthide = location.pathname === "/admin";
  return (
    <>
    {!layouthide && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/calculators" element={<Calculators />} />
         <Route path="/calculator/:type" element={<CalculatorPage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
         <Route path="/sign" element={<Sign />} />
         <Route path="/admin" element={<Admin />} />
      </Routes>
   {!layouthide && <Footer />}
    </>
  )
}

export default App
