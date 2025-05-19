import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Linkedin } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  imageSrc?: string;
}

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const testimonials: Testimonial[] = [
    {
      name: "Nativida Tiv Barlow",
      location: "USA",
      quote: "What sets Shubh apart is his tirelessness in tackling challenges. He approaches each project with an unwavering determination, never shying away from complex problems. His problem-solving skills are truly exceptional, often coming up with innovative solutions that contribute to the overall success of our projects."
    },
    {
      name: "Arshad Aman",
      location: "Bhubaneshwar",
      quote: "One of the qualities that I admire most about Shubh is his unparalleled work ethic. He approaches every task with an incredible amount of diligence and determination, consistently going the extra mile to deliver exceptional results. His strong work ethic is not only motivating but also contagious, creating a positive and productive work environment."
    },
    {
      name: "Raihan Khan",
      location: "Indore",
      quote: "Shubh's proficiency as a developer is truly remarkable. His mastery of React and Express.js is evident in the quality of his code and the efficiency of the solutions he produces. His attention to coding standards, best practices, and optimization reflects his commitment to delivering top-notch results."
    }
  ];
  
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
    <section id="testimonials" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Testimonials</h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            What my coding partners and clients say about me
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="card p-8 h-full flex flex-col relative">
                <div className="text-primary-500 dark:text-primary-400 opacity-20 absolute top-4 right-4">
                  <Quote size={40} />
                </div>
                
                <div className="flex-grow mb-6">
                  <p className="text-dark-600 dark:text-dark-400 relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-dark-500 dark:text-dark-500">({testimonial.location})</p>
                  </div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
            More Recommendations Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;