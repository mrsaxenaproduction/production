import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Palette, MessageSquare } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-dark-50 dark:bg-dark-950 dark:starry-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-6xl font-bold preloader-text">DeveloperSHUBH</h1>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl md:text-2xl font-medium h-12 flex items-center"
      >
        <TypeAnimation
          sequence={[
            'Your Creative Partner...loading',
            1000,
            'Your Brand Consultant...loading',
            1000,
            'Your Social Media Manager...loading',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-dark-800 dark:text-dark-200"
        />
      </motion.div>
      
      <motion.div 
        className="flex items-center justify-center mt-8 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
        >
          <Code2 className="h-8 w-8 text-primary-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
        >
          <Palette className="h-8 w-8 text-secondary-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
        >
          <MessageSquare className="h-8 w-8 text-accent-500" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-full bg-dark-200 dark:bg-dark-800 h-1 max-w-md mx-auto rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;