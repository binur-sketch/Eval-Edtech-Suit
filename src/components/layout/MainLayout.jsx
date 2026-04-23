import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../Navbar';
import SiteFooter from '../SiteFooter';

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
        {children}
      </main>
      {!isAdmin && <SiteFooter />}
    </div>
  );
};

export default MainLayout;
