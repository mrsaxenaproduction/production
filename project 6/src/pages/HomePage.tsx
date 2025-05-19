import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'DeveloperSHUBH - Creative Web Solutions';
  }, []);
  
  return (
    <>
      <Hero />
      <AboutMe />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;