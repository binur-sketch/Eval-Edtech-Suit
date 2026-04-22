import * as Icons from '@/components/LucideFix';
import React from 'react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <span className="badge">Connect with Us</span>
            <h1>Get in <span className="gradient-text">Touch</span></h1>
            <p style={{ fontSize: '1.125rem' }}>Discuss your institutional needs with our assessment experts and discover how eVAL can transform your evaluation process.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem' }}>
            {/* Contact Info */}
            <div>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { title: 'Corporate HQ', icon: <Icons.MapPin />, text: 'A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201301' },
                  { title: 'Institutional Support', icon: <Icons.Mail />, text: 'corp@virsoftech.com' },
                  { title: 'Call / Whatsapp', icon: <Icons.Phone />, text: '+91 9319275051' }
                ].map((item, i) => (
                  <div key={i} className="card hover-lift" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'white' }}>
                    <div style={{ color: 'var(--primary)', background: 'var(--primary-light)', width: '56px', height: '56px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.875rem', marginBottom: 0, color: 'var(--muted-foreground)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ marginTop: '2rem', background: 'var(--secondary)', color: 'white', border: 'none' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Global Presence</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>Supporting institutions across India, Middle East, and Southeast Asia.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '3.5rem', borderRadius: '2rem', background: 'white' }}>
              <h3 style={{ marginBottom: '2rem' }}>Request a <span className="gradient-text">Personalized Demo</span></h3>
              <form style={{ display: 'grid', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'grid', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Mobile No</label>
                    <input type="tel" placeholder="+91 99xx" style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Work Email</label>
                  <input type="email" placeholder="john@institution.edu" style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'grid', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company / Organisation</label>
                    <input type="text" placeholder="Institution Name" style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                  </div>
                  <div style={{ display: 'grid', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Country</label>
                    <select style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', height: '48px' }}>
                      <option>India</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Singapore</option>
                      <option>Saudi Arabia</option>
                      <option>Oman</option>
                      <option>Qatar</option>
                      <option>Kuwait</option>
                      <option>Bangladesh</option>
                      <option>Nepal</option>
                      <option>Sri Lanka</option>
                      <option>Bhutan</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Focus Solution</label>
                  <select style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', height: '48px' }}>
                    <option>Complete eVAL Suite (Recommended)</option>
                    <option>OMR Software (Scanning/Designing)</option>
                    <option>CBT & Proctoring Platform</option>
                    <option>OSM (On-Screen Marking)</option>
                    <option>QPMS (Question Paper Management)</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Request Message</label>
                  <textarea rows="3" placeholder="How can we help your institution?" style={{ padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', resize: 'none', fontFamily: 'inherit', fontSize: '0.9375rem' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', padding: '1.25rem' }}>Send Demo Request →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
