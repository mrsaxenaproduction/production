import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Services - DeveloperSHUBH';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-24 pb-8 bg-dark-50 dark:bg-dark-900"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">My Services</h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
              I offer a comprehensive range of services to help you establish a strong online presence, 
              reach your target audience, and achieve your business goals.
            </p>
          </div>
        </div>
      </motion.div>
      
      <ServicesSection />
    </>
  );
};

export default ServicesPage;