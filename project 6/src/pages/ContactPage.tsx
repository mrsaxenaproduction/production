import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Contact - DeveloperSHUBH';
    
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
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
              I'm just a message away!
            </p>
          </div>
        </div>
      </motion.div>
      
      <ContactSection />
    </>
  );
};

export default ContactPage;