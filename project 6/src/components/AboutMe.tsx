import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, Award, BookOpen } from 'lucide-react';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
  
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="mb-4">Why Choose Me</h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              As a passionate MERN full-stack developer and AI/ML enthusiast, I thrive on crafting cutting-edge solutions 
              that blend innovation with seamless user experiences.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard 
              icon={<Code className="h-6 w-6 text-primary-500" />}
              title="Technical Expertise"
              description="Proficient in modern web technologies like React, Node.js, Express, and MongoDB. Skilled in creating responsive, accessible, and performant web applications."
            />
            
            <SkillCard 
              icon={<Briefcase className="h-6 w-6 text-secondary-500" />}
              title="Professional Experience"
              description="Worked with diverse clients from startups to established businesses, delivering high-quality solutions that meet business objectives and exceed expectations."
            />
            
            <SkillCard 
              icon={<Award className="h-6 w-6 text-accent-500" />}
              title="Quality Assurance"
              description="Committed to clean code, comprehensive testing, and thorough documentation. Every project undergoes rigorous quality checks before delivery."
            />
            
            <SkillCard 
              icon={<BookOpen className="h-6 w-6 text-success-500" />}
              title="Continuous Learning"
              description="Constantly exploring new technologies and industry best practices to deliver cutting-edge solutions that keep your business ahead of the competition."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="card p-6 hover:translate-y-[-5px] transition-all">
      <div className="flex items-start">
        <div className="mr-4 p-3 rounded-full bg-dark-100 dark:bg-dark-800">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-dark-600 dark:text-dark-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;