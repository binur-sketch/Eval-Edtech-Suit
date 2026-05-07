import React from 'react';
import * as Icons from '@/components/LucideFix';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              background: 'white',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              maxWidth: '500px',
              width: '90%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <Icons.Check size={30} strokeWidth={3} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--secondary)' }}>
              Successfully Submitted!
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Your form is submitted successfully, our team will connect you within 24 hours. Thank you for contacting India's largest selling <b>OMR software eVAL</b>, registered trademark of Vir Softech Private Limited.
            </p>

            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.875rem 2.5rem', borderRadius: '100px', fontSize: '0.9375rem' }}
            >
              Close Window
            </button>

            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--muted-foreground)',
                cursor: 'pointer'
              }}
            >
              <Icons.X size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
