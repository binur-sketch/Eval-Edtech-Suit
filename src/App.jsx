import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy loading pages for optimized bundle size and speed
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Clients = lazy(() => import('./pages/Clients'));
const Blog = lazy(() => import('./pages/Blogs')); // Using Blogs for insights and news
const BookDemo = lazy(() => import('./pages/BookDemo'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Products = lazy(() => import('./pages/Products'));

// Solution-Specific Pages
const OMRPage = lazy(() => import('./pages/solutions/OMRPage'));
const CBTPage = lazy(() => import('./pages/solutions/CBTPage'));
const LMSPage = lazy(() => import('./pages/solutions/LMSPage'));
const OSMPage = lazy(() => import('./pages/solutions/OSMPage'));
const AIPage = lazy(() => import('./pages/solutions/AIPage')); // New AI Proctoring
const QPMSPage = lazy(() => import('./pages/solutions/QPMSPage')); // New QPMS
const OlympiadPage = lazy(() => import('./pages/solutions/OlympiadPage'));

// Admin Pages
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

// Service-Specific Pages
const OMRPrinting = lazy(() => import('./pages/services/OMRPrinting'));
const OMRScanning = lazy(() => import('./pages/services/OMRScanning'));
const CustomSoftware = lazy(() => import('./pages/services/CustomSoftware'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid var(--primary-light)', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Entry Points */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/products" element={<Products />} />

            {/* Solution-Specific Routes */}
            <Route path="/omr" element={<OMRPage />} />
            <Route path="/osm" element={<OSMPage />} />
            <Route path="/qpms" element={<QPMSPage />} />
            <Route path="/ai-proctoring" element={<AIPage />} />
            <Route path="/cbt" element={<CBTPage />} />
            <Route path="/lms" element={<LMSPage />} />
            <Route path="/olympiad" element={<OlympiadPage />} />
            <Route path="/terms" element={<TermsOfService />} />

            {/* Service Routes */}
            <Route path="/omr-printing" element={<OMRPrinting />} />
            <Route path="/omr-scanning" element={<OMRScanning />} />
            <Route path="/custom-software" element={<CustomSoftware />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Fallbacks */}
            <Route path="/solutions/omr" element={<Navigate to="/omr" replace />} />
            <Route path="/solutions/osm" element={<Navigate to="/osm" replace />} />
            <Route path="/solutions/cbt" element={<Navigate to="/cbt" replace />} />
            <Route path="/solutions/lms" element={<Navigate to="/lms" replace />} />
            <Route path="/solutions/olympiad" element={<Navigate to="/olympiad" replace />} />
            <Route path="/solutions/qtb" element={<Navigate to="/qpms" replace />} />
            <Route path="/solutions/qpms" element={<Navigate to="/qpms" replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </HelmetProvider>
  );
}


export default App;

