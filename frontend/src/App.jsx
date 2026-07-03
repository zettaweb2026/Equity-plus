import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Navbar from "./shared/Navbar"
import About from "./pages/About"
import Calculators from "./pages/Calculators"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Sign from "./pages/Sign"
import Footer from "./shared/Footer"
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/calculators" element={<Calculators />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
         <Route path="/sign" element={<Sign />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
