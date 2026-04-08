import * as Icons from '@/components/LucideFix';
import React from 'react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <span className="badge">Connect with Us</span>
            <h1>Get in <span className="gradient-text">Touch</span></h1>
            <p style={{ fontSize: '1.125rem' }}>Discuss your institutional needs with our assessment experts and discover how EVAL can transform your evaluation process.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {/* Contact Info */}
            <div>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { title: 'Corporate HQ', icon: <Icons.MapPin />, text: 'A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201301' },
                  { title: 'Institutional Support', icon: <Icons.Mail />, text: 'corp@virsoftech.com' },
                  { title: 'Toll Free Line', icon: <Icons.Phone />, text: '+91-1800-3010-3232' }
                ].map((item, i) => (
                  <div key={i} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '2rem' }}>
                    <div style={{ color: 'var(--primary)', background: 'var(--primary-light)', padding: '1rem', borderRadius: '1.25rem' }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ marginTop: '2rem', background: 'var(--secondary)', color: 'white', border: 'none' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Global Presence</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>Supporting institutions across India, Middle East, and Southeast Asia.</p>
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ padding: '3.5rem', borderRadius: '3rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
              <form style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '800' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '800' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '800' }}>Work Email</label>
                  <input type="email" placeholder="john@institution.edu" style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)' }} />
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '800' }}>Institutional Role</label>
                  <select style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)' }}>
                    <option>Director / Principal</option>
                    <option>Assessment Coordinator</option>
                    <option>IT Administrator</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '800' }}>Message</label>
                  <textarea rows="4" placeholder="How can we help your institution?" style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.25rem' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
