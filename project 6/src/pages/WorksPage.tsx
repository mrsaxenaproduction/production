import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const works = [
  {
    title: "DotDevz",
    url: "dotdevz.com",
    description: "Modern web development solutions",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
  },
  {
    title: "QuickRPE Sync",
    url: "sync.quickrpe.com",
    description: "Performance tracking platform",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
  },
  {
    title: "QuickRPE",
    url: "quickrpe.com",
    description: "Fitness technology solution",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
  },
  {
    title: "Kooperate",
    url: "kooperate.quickrpe.com",
    description: "Business collaboration platform",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
  },
  {
    title: "Tech Savvy Academy",
    url: "techsavvyacademy.in",
    description: "Educational technology platform",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    title: "Global Hydraulic Solution",
    url: "globalhydraulicsolution.com",
    description: "Industrial solutions platform",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
  },
  {
    title: "Koomerce",
    url: "koomerce.quickrpe.com",
    description: "E-commerce platform",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
  },
  {
    title: "Desi Pitara",
    url: "desipitara.vercel.app",
    description: "Food delivery platform",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
  },
  {
    title: "YumThum",
    url: "yumthum.vercel.app",
    description: "Restaurant platform",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
  },
  {
    title: "Exotica",
    url: "exotica.quickrpe.com",
    description: "Luxury lifestyle platform",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
  }
];

const WorksPage = () => {
  useEffect(() => {
    document.title = 'Our Works - DeveloperSHUBH';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Works</h1>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and digital solutions that have helped businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a
                href={`https://${work.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 flex items-center">
                      {work.title}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-dark-200">{work.description}</p>
                    <p className="text-primary-400 text-sm mt-2">{work.url}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorksPage;