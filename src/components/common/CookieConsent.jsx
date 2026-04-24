import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, ShieldCheck } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          exit={{ y: 100, x: '-50%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="cookie-consent-wrapper"
        >
          <div className="cookie-consent-card">
            {/* Background Accents */}
            <div className="cookie-accent-1" />
            <div className="cookie-accent-2" />

            <div className="cookie-icon-container">
              <Cookie className="icon-md text-primary" style={{ width: '24px', height: '24px', color: 'var(--primary)' }} />
            </div>

            <div className="cookie-content">
              <h3 className="cookie-title">
                Cookie Policy
                <ShieldCheck style={{ width: '16px', height: '16px', color: 'var(--primary)' }} />
              </h3>
              <p className="cookie-description">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                <a href="/privacy-policy" className="text-primary" style={{ fontWeight: '600', marginLeft: '6px', color: 'var(--primary)', textDecoration: 'underline' }}>Learn more</a>
              </p>
            </div>

            <div className="cookie-buttons">
              <button
                onClick={handleDecline}
                className="btn btn-outline"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
              >
                <Check style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                Accept All
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="cookie-close"
              aria-label="Close"
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
