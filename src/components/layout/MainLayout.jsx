import React from 'react';
import Navbar from '../Navbar';
import SiteFooter from '../SiteFooter';

const MainLayout = ({ children }) => {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
