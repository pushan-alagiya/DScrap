import {useEffect} from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavB from "./components/Navbar/NavB";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "./components/AboutSection/AboutSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import Testimonial from "./components/TestimonialsSection/Testimonial";
import PricingSection from "./components/PricingSection/PricingSection";
import FAQ from "./components/FAQSection/FAQ";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/FooterSection/Footer";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import Home from "./pages/HomePage/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrapPage from "./pages/ScrapPage/ScrapPage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <NavB/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/signin' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/scrape" element={<ScrapPage/>} />
        </Routes>
        <Footer/>
        
      </Router>
    </>
  );
}

export default App;
