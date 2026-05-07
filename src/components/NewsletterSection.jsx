import React, { useState } from 'react';
import * as Icons from '@/components/LucideFix';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import FormStatus from '@/components/common/FormStatus';
import SuccessModal from '@/components/common/SuccessModal';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { status, message, submitForm, setStatus } = useFormSubmit({
    successMessage: "Awesome! You're now subscribed to our monthly insights.",
    onSuccess: () => setShowSuccess(true)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ email }, 'Newsletter Subscription');
    setEmail('');
  };

  return (
    <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ 
          background: 'white', 
          borderRadius: 'clamp(1.5rem, 3vw, 3rem)', 
          padding: 'clamp(2rem, 5vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
          boxShadow: 'none',
          border: '1px solid var(--border)'
        }} className="reveal">
          <div>
            <span className="badge">Stay Ahead</span>
            <h2>Get Expert Assessment <span className="gradient-text">Insights</span></h2>
            <p style={{ marginBottom: 0 }}>Join 2000+ educational leaders receiving our monthly briefing on evaluation trends and security protocols.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', width: '100%' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flex: '1 1 300px', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your professional email" 
                style={{ 
                  flex: '1 1 200px',
                  minWidth: 0,
                  padding: '1rem 1.5rem', 
                  borderRadius: '1rem', 
                  border: '1px solid var(--border)',
                  background: 'white',
                  fontSize: '0.9375rem'
                }} 
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn btn-primary" 
                style={{ flexShrink: 0 }}
              >
                {status === 'loading' ? 'Joining...' : 'Subscribe'}
              </button>
            </div>
            <div style={{ width: '100%' }}>
              <FormStatus status={status} message={message} />
            </div>
          </form>
        </div>
      </div>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default NewsletterSection;

