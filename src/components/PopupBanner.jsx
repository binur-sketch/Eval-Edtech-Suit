import React, { useState, useEffect } from 'react';
import * as Icons from '@/components/LucideFix';

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Show banner only after the image is fully downloaded
    const hasSeenBanner = sessionStorage.getItem('eventBannerShown_v5');
    
    if (!hasSeenBanner) {
      const img = new Image();
      img.src = '/assets/images/event-banner.png';
      
      img.onload = () => {
        setIsReady(true);
        setIsVisible(true);
        sessionStorage.setItem('eventBannerShown_v5', 'true');
        
        // Auto close after 30 seconds
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 30000);
      };
      
      return () => {
        img.onload = null;
      };
    }
  }, []);

  if (!isVisible || !isReady) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backdropFilter: 'blur(6px)'
    }}>
      <div style={{
        position: 'relative',
        maxWidth: '750px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        animation: 'zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            color: '#0f172a',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Icons.X size={24} style={{ strokeWidth: 2.5 }} />
        </button>

        {/* Banner Image */}
        <img
          src="/assets/images/event-banner.png"
          alt="Annual Education Summit '26 Banner"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            maxHeight: '75vh',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        />
      </div>
      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default PopupBanner;
