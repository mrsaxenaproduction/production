import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden dark:starry-bg">
      {/* Background shapes */}
      <div className="shape-blob w-[40%] h-[40%] top-[20%] left-[5%]"></div>
      <div className="shape-blob-secondary w-[35%] h-[35%] bottom-[10%] right-[10%]"></div>
      <div className="shape-blob-accent w-[30%] h-[30%] top-[10%] right-[20%]"></div>
      
      <div className="container-custom text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 font-bold tracking-tight">
            <span className="block">Hey 👋, I'm</span>
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
              DeveloperSHUBH
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-[40px] md:h-[48px] lg:h-[60px]"
        >
          <TypeAnimation
            sequence={[
              'MERN Full-Stack Developer',
              1000,
              'React Native Developer',
              1000,
              'Digital Marketing Expert',
              1000,
              'Brand Consultant',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-dark-700 dark:text-dark-300"
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link to="/services" className="btn btn-primary">Explore Services</Link>
          <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Link = ({ to, children, className = '' }: LinkProps) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default Hero;