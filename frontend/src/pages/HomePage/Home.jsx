import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import DetailsSection from "../../components/DetailsSection/DetailsSection";
import Testimonial from "../../components/TestimonialsSection/Testimonial";
import PricingSection from "../../components/PricingSection/PricingSection";
import FAQ from "../../components/FAQSection/FAQ";
import Contact from "../../components/ContactSection/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DetailsSection />
      <Testimonial />
      <PricingSection />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
