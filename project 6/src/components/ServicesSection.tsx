import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import { 
  Globe, 
  Share2, 
  Users, 
  Code2, 
  Smartphone, 
  Briefcase,
  ShoppingBag
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [cartItems, setCartItems] = useState<string[]>([]);
  
  const addToCart = (serviceName: string) => {
    setCartItems(prev => [...prev, serviceName]);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  
  const services = [
    {
      title: "Digital Marketing",
      price: "₹35K",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Management",
        "Email Campaigns",
        "Analytics & Reporting"
      ],
      icon: <Globe className="h-6 w-6 text-primary-500" />
    },
    {
      title: "Social Media Management",
      price: "₹15K",
      description: "Strategic social media management to build your brand and engage with your audience.",
      features: [
        "Profile Setup & Optimization",
        "Content Creation",
        "Community Management",
        "Performance Tracking",
        "Growth Strategies"
      ],
      icon: <Share2 className="h-6 w-6 text-secondary-500" />
    },
    {
      title: "Influencer Marketing",
      price: "₹5K",
      description: "Connect with relevant influencers to expand your reach and build credibility.",
      features: [
        "Influencer Research",
        "Outreach & Negotiations",
        "Campaign Management",
        "Performance Metrics",
        "ROI Analysis"
      ],
      icon: <Users className="h-6 w-6 text-accent-500" />
    },
    {
      title: "Website Development",
      price: "₹15K",
      description: "Custom website development focusing on performance, user experience, and conversion.",
      features: [
        "Responsive Design",
        "SEO Friendly",
        "Fast Loading",
        "CMS Integration",
        "Analytics Setup"
      ],
      icon: <Code2 className="h-6 w-6 text-success-500" />
    },
    {
      title: "Application Development",
      price: "₹45K",
      description: "Native and cross-platform mobile applications to extend your digital presence.",
      features: [
        "UI/UX Design",
        "Cross-Platform Development",
        "API Integration",
        "Performance Optimization",
        "App Store Submission"
      ],
      icon: <Smartphone className="h-6 w-6 text-warning-500" />
    },
    {
      title: "Brand Consultation",
      price: "Free",
      description: "Strategic brand consulting to help define and establish your unique brand identity.",
      features: [
        "Brand Strategy",
        "Identity Development",
        "Messaging Framework",
        "Competitive Analysis",
        "Brand Guidelines"
      ],
      icon: <Briefcase className="h-6 w-6 text-error-500" />
    }
  ];
  
  return (
    <section id="services" className="section bg-dark-100 dark:bg-dark-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="shape-blob w-[50%] h-[50%] opacity-5 top-[-10%] left-[-10%]"></div>
        <div className="shape-blob-secondary w-[40%] h-[40%] opacity-5 bottom-[-10%] right-[-5%]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">My Services</h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, from web development to marketing and branding.
          </p>
        </div>
        
        {cartItems.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-dark-50 dark:bg-dark-800 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-accent-500 mr-2" />
                <span className="font-medium">Cart ({cartItems.length} items)</span>
              </div>
              <button 
                className="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                onClick={() => setCartItems([])}
              >
                Clear Cart
              </button>
            </div>
          </motion.div>
        )}
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                price={service.price}
                description={service.description}
                features={service.features}
                icon={service.icon}
                onAddToCart={() => addToCart(service.title)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;