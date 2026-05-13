import * as Icons from '@/components/LucideFix';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import FormStatus from '@/components/common/FormStatus';
import SEO from '@/components/common/SEO';
import SuccessModal from '@/components/common/SuccessModal';
import { countries } from '@/lib/countryData';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    country: 'India',
    solutions: ['Complete eVAL Suite'],
    message: ''
  });

  const products = [
    'Complete eVAL Suite',
    'OMR Software',
    'On Screen Marking (OSM)',
    'Question Paper Management (QPMS)',
    'AI Proctoring',
    'CBT Platform',
    'LMS Portal'
  ];

  const [showSuccess, setShowSuccess] = useState(false);

  const { status, message, submitForm } = useFormSubmit({
    successMessage: "Your demo request has been received! Our Team will contact you within 24 hours.",
    onSuccess: () => setShowSuccess(true)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'country') {
      const selectedCountry = countries.find(c => c.name === value);
      if (selectedCountry) {
        setFormData({
          ...formData,
          country: value,
          phone: selectedCountry.dial_code + ' '
        });
      } else {
        setFormData({ ...formData, country: value });
      }
    } else if (name === 'phone') {
      if (/^[0-9+\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (product) => {
    const currentSolutions = [...formData.solutions];
    if (currentSolutions.includes(product)) {
      setFormData({
        ...formData,
        solutions: currentSolutions.filter(s => s !== product)
      });
    } else {
      setFormData({
        ...formData,
        solutions: [...currentSolutions, product]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.solutions.length === 0) {
      alert("Please select at least one product for the demo.");
      return;
    }
    submitForm(formData, 'Demo Request');
  };

  return (
    <div className="demo-page" style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO
        title="Schedule a Personalized Demo | eVAL Edtech"
        description="Experience the power of eVAL's AI-driven evaluation ecosystem. Schedule a live demo with our experts today."
      />

      {/* Decorative Background Elements */}
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <section className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Institutional Access</span>
            <h1 className="page-title">Experience the <span className="gradient-text">eVAL Suite</span></h1>
            <p className="page-subtitle">Fill out the form below and our solution expert will guide you through a 30-minute personalized walkthrough.</p>
          </div>

          <div className="form-container">
            <div className="form-card">
              <form onSubmit={handleSubmit} className="demo-form">
                <div className="form-row">
                  <div className="input-group">
                    <label>Full Name</label>
                    <div className="input-with-icon">
                      <Icons.User size={18} className="input-icon" />
                      <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="e.g. Dr. Sameer" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Contact Number</label>
                    <div className="input-with-icon">
                      <Icons.Phone size={18} className="input-icon" />
                      <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 99xx" />
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label>Professional Email</label>
                  <div className="input-with-icon">
                    <Icons.Mail size={18} className="input-icon" style={{ color: '#EA4335' }} />
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="principal@institute.org" />
                  </div>

                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Organization</label>
                    <div className="input-with-icon">
                      <Icons.Building size={18} className="input-icon" />
                      <input name="organization" type="text" required value={formData.organization} onChange={handleChange} placeholder="University/School" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Country</label>
                    <select name="country" required value={formData.country} onChange={handleChange}>
                      <option value="">Please Select</option>
                      {[...countries].sort((a, b) => a.name.localeCompare(b.name)).map(c => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Products for Demo <span style={{ fontWeight: 'normal', color: 'var(--muted-foreground)' }}>(Select multiple)</span></label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    background: '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '1.25rem',
                    border: '1px solid var(--border)'
                  }}>
                    {products.map((product) => (
                      <label key={product} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: formData.solutions.includes(product) ? '700' : '500',
                        color: formData.solutions.includes(product) ? 'var(--primary)' : 'var(--foreground)'
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.solutions.includes(product)}
                          onChange={() => handleCheckboxChange(product)}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        {product}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="input-group">
                  <label>Tell us about your requirements</label>
                  <textarea name="message" required value={formData.message} onChange={handleChange} rows="3" placeholder="Number of students, specific challenges, etc..."></textarea>
                </div>

                <button type="submit" disabled={status === 'loading'} className="btn btn-primary submit-btn">
                  {status === 'loading' ? 'Scheduling Demo...' : 'Confirm Demo Request'}
                  <Icons.ArrowRight size={20} />
                </button>

                <FormStatus status={status} message={message} />

                <p className="form-privacy">
                  By clicking, you agree to our <Link to="/privacy-policy">Privacy Policy</Link> and trial terms.
                </p>
              </form>
            </div>


          </div>
        </div>
      </section>

      <style>{`
        .demo-page {
          overflow-x: hidden;
          position: relative;
        }

        .bg-decoration {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          z-index: 0;
        }

        .blob-1 {
          top: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: var(--primary);
        }

        .blob-2 {
          bottom: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: #2563eb;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 1rem;
          color: var(--secondary);
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--muted-foreground);
          max-width: 600px;
          margin: 0 auto;
        }

        .form-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .form-card {
          background: white;
          padding: 3.5rem;
          border-radius: 3rem;
          box-shadow: 0 40px 100px rgba(0,0,0,0.08);
          border: 1px solid var(--border);
          position: relative;
          z-index: 2;
        }

        .demo-form {
          display: grid;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .input-group label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--foreground);
          margin-left: 0.25rem;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--muted-foreground);
        }

        .input-with-icon input {
          padding-left: 3rem !important;
        }

        .input-group input, 
        .input-group select, 
        .input-group textarea {
          width: 100%;
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          background: #f8fafc;
          font-size: 0.9375rem;
          transition: var(--transition);
        }

        .input-group input:focus, 
        .input-group select:focus, 
        .input-group textarea:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px var(--primary-light);
          outline: none;
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.25rem;
          border-radius: 1rem;
          font-size: 1.125rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(14, 165, 164, 0.2);
        }

        .form-privacy {
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted-foreground);
          margin-top: 1rem;
        }

        .form-privacy a {
          color: var(--primary);
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }

        .trust-strip {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 2rem;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(10px);
        }

        .trust-strip p {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .trust-logos {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .trust-logos span {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--secondary);
          opacity: 0.5;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .form-card {
            padding: 2rem 1.5rem;
            border-radius: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
};

export default BookDemo;
