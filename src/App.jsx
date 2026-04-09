import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy loading pages for optimized bundle size and speed
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Clients = lazy(() => import('./pages/Clients'));
const Resources = lazy(() => import('./pages/Resources'));
const BookDemo = lazy(() => import('./pages/BookDemo'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const OMRPage = lazy(() => import('./pages/solutions/OMRPage'));
const CBTPage = lazy(() => import('./pages/solutions/CBTPage'));
const LMSPage = lazy(() => import('./pages/solutions/LMSPage'));
const QTBPage = lazy(() => import('./pages/solutions/QTBPage'));
const OSMPage = lazy(() => import('./pages/solutions/OSMPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid var(--primary-light)', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Entry Points */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Solution-Specific Routes */}
          <Route path="/omr" element={<OMRPage />} />
          <Route path="/cbt" element={<CBTPage />} />
          <Route path="/lms" element={<LMSPage />} />
          <Route path="/qtb" element={<QTBPage />} />
          <Route path="/osm" element={<OSMPage />} />
          
          {/* Legacy/Redirect paths for continuity */}
          <Route path="/solutions/omr" element={<OMRPage />} />
          <Route path="/solutions/cbt" element={<CBTPage />} />
          <Route path="/solutions/lms" element={<LMSPage />} />
          <Route path="/solutions/qtb" element={<QTBPage />} />
          <Route path="/solutions/osm" element={<OSMPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
