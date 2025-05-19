import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, ChevronRight } from 'lucide-react';

const PackagesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  const packages = [
    {
      title: "Starter Package",
      price: "₹25K",
      description: "Perfect for small businesses looking to establish an online presence",
      features: [
        { name: "Responsive Website", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Social Media Setup", included: true },
        { name: "Content Strategy", included: false },
        { name: "Monthly Maintenance", included: false },
        { name: "Analytics Report", included: false },
      ],
      popular: false,
      ctaText: "Choose Starter"
    },
    {
      title: "Professional Package",
      price: "₹65K",
      description: "Ideal for growing businesses seeking comprehensive digital solutions",
      features: [
        { name: "Responsive Website", included: true },
        { name: "Advanced SEO Optimization", included: true },
        { name: "Social Media Management", included: true },
        { name: "Content Strategy", included: true },
        { name: "Monthly Maintenance", included: true },
        { name: "Analytics Report", included: false },
      ],
      popular: true,
      ctaText: "Choose Professional"
    },
    {
      title: "Firm Special Package",
      price: "₹120K",
      description: "Enterprise-level solution for established businesses with complex needs",
      features: [
        { name: "Custom Web Application", included: true },
        { name: "Full SEO Campaign", included: true },
        { name: "Social Media Management", included: true },
        { name: "Content Strategy & Creation", included: true },
        { name: "Priority Maintenance", included: true },
        { name: "Monthly Analytics Report", included: true },
      ],
      popular: false,
      ctaText: "Choose Enterprise"
    }
  ];
  
  return (
    <section id="packages" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Package Pricing</h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Choose the perfect package that suits your business needs and budget. All packages are customizable.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className={`card overflow-hidden h-full flex flex-col ${pkg.popular ? 'ring-2 ring-accent-500 dark:ring-accent-400' : ''}`}>
                {pkg.popular && (
                  <div className="bg-accent-500 text-white py-1 px-4 text-xs font-medium uppercase tracking-wider text-center">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-dark-500 dark:text-dark-400"> / one-time</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400 text-sm mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className={`mr-2 mt-1 ${feature.included ? 'text-success-500' : 'text-dark-400 dark:text-dark-600'}`}>
                          {feature.included ? <Check size={16} /> : <X size={16} />}
                        </span>
                        <span className={`text-sm ${feature.included ? 'text-dark-700 dark:text-dark-300' : 'text-dark-500 dark:text-dark-500 line-through'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full flex items-center justify-center ${pkg.popular ? 'btn btn-accent' : 'btn btn-outline'}`}>
                    {pkg.ctaText}
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-dark-600 dark:text-dark-400 mb-4">Need a custom solution? Let's discuss your specific requirements.</p>
          <a href="/contact" className="btn btn-primary">
            Contact for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;