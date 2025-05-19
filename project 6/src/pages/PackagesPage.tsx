import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PackagesSection from '../components/PackagesSection';

const PackagesPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Packages - DeveloperSHUBH';
    
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
            <h1 className="mb-6">Package Pricing</h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
              Choose from my carefully crafted packages designed to provide maximum value for your investment.
              Each package can be customized to meet your specific requirements.
            </p>
          </div>
        </div>
      </motion.div>
      
      <PackagesSection />
    </>
  );
};

export default PackagesPage;