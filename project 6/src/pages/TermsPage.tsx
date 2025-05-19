import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions - DeveloperSHUBH';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All plans are valid for 30-45 days from the start date.</li>
              <li>6-month warranty on code, deployment, and technical assistance.</li>
              <li>Digital marketing services have a recurring fee of ₹25K per month after the initial period.</li>
              <li>Custom service requests are welcome and will be quoted separately.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% advance payment required to initiate the project.</li>
              <li>Remaining payment due upon project completion.</li>
              <li>Monthly services are billed at the beginning of each month.</li>
              <li>All prices are in Indian Rupees (INR).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery & Support</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project timelines will be agreed upon at the start of the project.</li>
              <li>Regular updates and progress reports will be provided.</li>
              <li>Post-delivery support included for 6 months.</li>
              <li>24/7 emergency support available for critical issues.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client retains all rights to their content and data.</li>
              <li>Source code ownership transfers upon final payment.</li>
              <li>DeveloperSHUBH retains the right to showcase the work in portfolio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>For any queries or concerns, please contact:</p>
            <ul className="list-none pl-6 space-y-2 mt-2">
              <li>Email: Developershubh00@gmail.com</li>
              <li>WhatsApp: +918851410021</li>
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPage;