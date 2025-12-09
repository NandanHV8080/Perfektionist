// src/pages/Home/index.jsx
import React from 'react';
import HeroSection from './Hero-Section/Hero-Section.jsx'; //First Page
import ModernTrap from './Modern-Trap/Modern-Trap.jsx'; //Second Page
import Comparison from './Comparison/Comparison.jsx'; //Third Page
import Services from './Services/Services.jsx'; //Fourth Page
import BeforeAfter from './BeforeAfter/BeforeAfter.jsx' //Fifth Page
import BlogSection from './Blog-Section/Blog-Section.jsx' //Sixth Page
import Testimonials from './Testimonials/Testimonials.jsx' //Seventh Page
import FAQ from "./FAQ/FAQ.jsx";


const Home = () => {
  return (
    <>
      <HeroSection />
      <ModernTrap />
      <Comparison />
      <Services />
      <BeforeAfter />
      <BlogSection />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
