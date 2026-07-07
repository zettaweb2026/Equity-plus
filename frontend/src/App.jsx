import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Navbar from "./shared/Navbar"
import About from "./pages/About"
import Calculators from "./pages/Calculators"
import CalculatorPage from "./pages/CalculatorPage"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Sign from "./pages/Sign"
import Footer from "./shared/Footer"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"
import UserDashboard from "./pages/UserDashboard"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/calculator/:type" element={<CalculatorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/admin-dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/user-dashboard" element={<ProtectedRoute allowedRole="user"><UserDashboard /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
