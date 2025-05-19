import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 z-20">
          <img src="/logo.svg" alt="DeveloperSHUBH" className="h-8 w-8" />
          <span className="font-heading font-bold text-xl">
            Developer<span className="text-accent-500">SHUBH</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/services" active={location.pathname === '/services'}>Services</NavLink>
          <NavLink to="/works" active={location.pathname === '/works'}>Our Works</NavLink>
          <NavLink to="/packages" active={location.pathname === '/packages'}>Packages</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-dark-700" />
            )}
          </motion.button>
          
          <motion.button 
            onClick={toggleMenu}
            className="p-2 md:hidden rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors z-20"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-lg rounded-b-2xl overflow-hidden border-t border-dark-200 dark:border-dark-700 md:hidden"
            >
              <nav className="flex flex-col py-4">
                <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
                <MobileNavLink to="/services" active={location.pathname === '/services'}>Services</MobileNavLink>
                <MobileNavLink to="/works" active={location.pathname === '/works'}>Our Works</MobileNavLink>
                <MobileNavLink to="/packages" active={location.pathname === '/packages'}>Packages</MobileNavLink>
                <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`relative text-sm font-medium transition-colors ${
        active 
          ? 'text-primary-600 dark:text-primary-400' 
          : 'text-dark-700 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-100'
      }`}
    >
      {children}
      {active && (
        <motion.div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
          layoutId="navIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, children, active }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`block px-6 py-3 transition-colors ${
        active 
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
          : 'hover:bg-dark-100 dark:hover:bg-dark-800'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;