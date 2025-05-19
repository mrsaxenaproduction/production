import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-100 dark:bg-dark-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">DeveloperSHUBH</h3>
            <p className="text-dark-600 dark:text-dark-400 mb-4">
              Your creative partner for web development, digital marketing, and brand consultation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/developershubh00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/developershubh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/lifeofsaxena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Packages</Link></li>
              <li><Link to="/works" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Our Works</Link></li>
              <li><Link to="/contact" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-dark-600 dark:text-dark-400">
              <p>Email: Developershubh00@gmail.com</p>
              <p>WhatsApp: +918851410021</p>
              <a 
                href="https://wa.me/918851410021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-200 dark:border-dark-800 text-center text-dark-500 dark:text-dark-400 text-sm">
          <p className="flex items-center justify-center">
            Developed with <Heart className="h-4 w-4 text-error-500 mx-1" /> by SHUBH
          </p>
          <p className="mt-2">© 2025 DeveloperSHUBH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;