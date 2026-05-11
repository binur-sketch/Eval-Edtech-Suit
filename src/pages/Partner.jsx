import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/common/SectionHeader';
import SuccessModal from '@/components/common/SuccessModal';
import { useState } from 'react';

import { countries } from '@/lib/countryData';

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState('');

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    const country = countries.find(c => c.name === countryName);
    if (country) {
      setPhone(country.dial_code + ' ');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/corp@virsoftech.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
        setPhone('');
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const checklistItems = [
    'Apply to become a partner',
    'Fill out the application form',
    'Choose the best cooperation model for you',
    'Complete our free Partner Training Program',
    'Find your first business opportunity and sign a deal',
    'Grow your business further with eVAL'
  ];

  return (
    <div className="partner-page" style={{ paddingTop: 'var(--nav-height)', background: 'white' }}>
      <SEO
        title="Become a Partner | eVAL Global Partnership Program"
        description="Join our partner network today. Grow your business by delivering world-class examination solutions with eVAL."
      />

      {/* Hero Section */}
      <section style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <Reveal>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>
                  Become a Partner
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
                  Join our partner network today
                </p>
              </Reveal>
            </div>
            <div style={{ position: 'relative' }}>
              <Reveal direction="left">
                <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                  <img
                    src="/assets/images/partner_handshake.png"
                    alt="Become a partner"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                {/* Decorative shapes */}
                <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', background: '#10b981', borderRadius: '8px', zIndex: -1, transform: 'rotate(15deg)' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', right: '-15px', width: '30px', height: '30px', background: '#fb923c', borderRadius: '50%', zIndex: -1 }}></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem'
          }}>

            {/* Left Column: Checklist & Portal Info */}
            <div>
              <Reveal>
                <div style={{
                  background: '#f0f7ff',
                  borderRadius: '0 3rem 3rem 0',
                  padding: '4rem 3rem',
                  marginLeft: '-2rem',
                  position: 'relative'
                }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'grid', gap: '1.5rem' }}>
                    {checklistItems.map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontSize: '1rem', fontWeight: 600, color: '#334155' }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          background: '#dbeafe',
                          color: '#3b82f6',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icons.Check size={16} strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>


                </div>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div>
              <Reveal delay={0.2}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Business email*</label>
                    <input
                      type="email"
                      name="email"
                      required
                      style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>First name*</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Last name*</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Company*</label>
                      <input
                        type="text"
                        name="company"
                        required
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Job title*</label>
                      <input
                        type="text"
                        name="job_title"
                        required
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 99999 99999"
                        required
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Country*</label>
                      <select
                        name="country"
                        required
                        onChange={handleCountryChange}
                        style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', padding: '0.75rem 0', fontSize: '1rem', outline: 'none', background: 'transparent' }}
                      >
                        <option value="">Please Select</option>
                        {[...countries].sort((a, b) => a.name.localeCompare(b.name)).map(country => (
                          <option key={country.code} value={country.name}>{country.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '1rem' }}>
                    <input type="checkbox" required style={{ marginTop: '0.3rem' }} />
                    <p style={{ fontSize: '0.8125rem', lineHeight: '1.5', color: '#64748b', margin: 0 }}>
                      I have read and agree to the <a href="/privacy" style={{ color: '#3b82f6', textDecoration: 'none' }}>Privacy Policy</a>. I agree to receive license key information from Vir Softech as well as periodic emails about product updates and exclusive offers.*
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      padding: '1rem 3rem',
                      width: 'fit-content',
                      borderRadius: '0.5rem',
                      background: '#3b82f6',
                      border: 'none',
                      marginTop: '2rem'
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
};

export default Partner;
