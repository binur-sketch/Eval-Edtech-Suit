import * as Icons from '@/components/LucideFix';
import React, { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import FormStatus from '@/components/common/FormStatus';
import SEO from '@/components/common/SEO';
import Reveal from '@/components/common/Reveal';
import SectionHeader from '@/components/common/SectionHeader';
import SuccessModal from '@/components/common/SuccessModal';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const { status, message, submitForm } = useFormSubmit({
    successMessage: "Thank you for contacting us! Our team will get back to you shortly.",
    onSuccess: () => setShowSuccess(true)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (/^[0-9+\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData, 'General Inquiry');
  };

  return (
    <div className="contact-page" style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO
        title="Contact Us | eVAL Edtech"
        description="Get in touch with the eVAL team for any questions, support, or partnership opportunities."
      />

      {/* Hero Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '0', background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>

        <div className="container">
          <Reveal width="100%">
            <SectionHeader
              badge="Get In Touch"
              title={<>How can we <span className="gradient-text">help you?</span></>}
              text="Whether you're looking for technical support, have a sales inquiry, or just want to say hello, we're here to help."
            />

          </Reveal>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--muted)', paddingTop: '2rem' }}>

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

            {/* Contact Info */}
            <Reveal direction="right">
              <div>
                <h3>Our <span className="gradient-text">Contact Information</span></h3>
                <p style={{ marginBottom: '2.5rem' }}>Our team is available across multiple channels to ensure you get the support you need.</p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '12px' }}>
                      <Icons.MapPin size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Global HQ</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201309</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', borderRadius: '12px' }}>
                      <Icons.Mail size={24} />
                    </div>

                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>corp@virsoftech.com</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '12px' }}>
                      <Icons.Phone size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Call Support</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>
                        +91 9319275051, +91 9871258989, +91 9312339803
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--muted)', borderRadius: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Interested in a Demo?</h4>
                  <p style={{ fontSize: '0.9375rem' }}>If you're looking for a personalized walkthrough of our platform, we recommend booking a demo slot.</p>
                  <a href="/book-demo" className="btn btn-primary" style={{ width: '100%' }}>Book a Demo Instead</a>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="left">
              <div className="card" style={{ padding: '3rem', borderRadius: '2.5rem' }}>
                <h3 style={{ marginBottom: '2rem' }}>Send us a <span className="gradient-text">Message</span></h3>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Full Name</label>
                    <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Email Address</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Phone Number</label>
                      <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 99xx" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Subject</label>
                    <input name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="How can we help?" />
                  </div>

                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: '700' }}>Message</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" placeholder="Your message here..." style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', background: '#f8fafc', resize: 'none' }}></textarea>
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                    {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                  </button>

                  <FormStatus status={status} message={message} />
                </form>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
};

export default Contact;
