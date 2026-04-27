import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';
import SiteFooter from '../SiteFooter';
import CookieConsent from '../common/CookieConsent';
import BackToTop from '../common/BackToTop';
import FloatingContact from '../common/FloatingContact';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const { scrollYProgress } = useScroll();

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isAdmin && (
        <>
          <motion.div
            className="scroll-progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Navbar />
        </>
      )}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isAdmin && (
        <>
          <SiteFooter />
          <CookieConsent />
          <BackToTop />
          <FloatingContact />
        </>
      )}
    </div>
  );
};

export default MainLayout;
