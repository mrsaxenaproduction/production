import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import MobileNav from './components/MobileNav';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen flex flex-col"
          >
            <ScrollProgress />
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/terms" element={<TermsPage />} />
              </Routes>
            </main>
            <Footer />
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;