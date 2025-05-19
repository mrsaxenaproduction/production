import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  onAddToCart: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
  onAddToCart
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart();
    
    // Reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <motion.div
      className="card overflow-hidden h-full flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative p-6 pb-0">
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20">
            {icon}
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider text-dark-500 dark:text-dark-400">Starting from</span>
            <div className="text-2xl font-bold text-dark-900 dark:text-white">{price}</div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">{description}</p>
      </div>
      
      <div className="p-6 flex-grow">
        <h4 className="font-medium text-sm uppercase tracking-wider text-dark-500 dark:text-dark-400 mb-3">What's Included</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-success-500">
                <Check size={14} />
              </span>
              <span className="text-sm text-dark-700 dark:text-dark-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0">
        <button
          onClick={handleAddToCart}
          className={`w-full btn ${isAdded ? 'bg-success-500 hover:bg-success-600' : 'btn-accent'} flex items-center justify-center`}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check size={16} className="mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </>
          )}
        </button>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default ServiceCard;