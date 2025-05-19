import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  FileText,
  MessageSquare
} from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
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
  
  return (
    <section id="contact" className="section bg-dark-100 dark:bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Let's talk!
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/20 mr-4">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-dark-600 dark:text-dark-400">Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-900/20 mr-4">
                    <Phone className="h-5 w-5 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p className="text-dark-600 dark:text-dark-400">+918851410021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-accent-100 dark:bg-accent-900/20 mr-4">
                    <Mail className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-dark-600 dark:text-dark-400">hello@developershubh.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-success-100 dark:bg-success-900/20 mr-4">
                    <Calendar className="h-5 w-5 text-success-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-dark-600 dark:text-dark-400">Monday - Friday, 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
                <a 
                  href="https://wa.me/918851410021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full flex items-center justify-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full flex items-center justify-center mt-4"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="input w-full"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className={`btn w-full flex items-center justify-center ${
                    formStatus === 'success' 
                      ? 'bg-success-500 hover:bg-success-600 text-white' 
                      : formStatus === 'error' 
                      ? 'bg-error-500 hover:bg-error-600 text-white' 
                      : 'btn-primary'
                  }`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : formStatus === 'success' ? (
                    'Message Sent!'
                  ) : formStatus === 'error' ? (
                    'Failed to Send'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;