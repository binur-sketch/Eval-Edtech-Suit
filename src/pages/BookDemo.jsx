import * as Icons from '@/components/LucideFix';
import React from 'react';

const BookDemo = () => {
  return (
    <div style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--muted)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="badge">Institutional Pilot</span>
            <h1 style={{ fontSize: '3.5rem' }}>Experience <br /><span className="gradient-text">eVAL Suite</span></h1>
            <p style={{ margin: '2rem 0', fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>Experience firsthand why top institutions like IIT Delhi, NCERT, and Aakash trust eVAL for their most critical examinations.</p>

            <div style={{ display: 'grid', gap: '2rem', marginTop: '4rem' }}>
              {[
                { title: 'Full Access Pilot', text: 'Get 14 days of unrestricted access to our OMR and CBT platforms for your pilot batch.' },
                { title: 'Institutional Setup', text: 'Our engineers will help you map your existing evaluation workflow to eVAL.' },
                { title: 'Faculty Onboarding', text: 'Specialized training sessions included to ensure 100% adoption and clarity.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)', background: 'white', padding: '0.75rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <Icons.CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'white', padding: '3.5rem', borderRadius: '3rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Secure Your Slot</h3>
            <form style={{ display: 'grid', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Mobile No</label>
                  <input type="tel" placeholder="+91 99xx" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Work Email</label>
                <input type="email" placeholder="principal@institute.org" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company / Organisation</label>
                  <input type="text" placeholder="Institution Name" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Country</label>
                  <select style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', height: '48px' }}>
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
                <select style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', height: '48px' }}>
                  <option>Complete eVAL Suite (Recommended)</option>
                  <option>OMR Software Only</option>
                  <option>CBT & Proctoring Platform</option>
                  <option>OSM (Digital Marking)</option>
                  <option>LMS & Content Delivery</option>
                </select>
              </div>

              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Request Message</label>
                <textarea rows="3" placeholder="Tell us about your institutional needs..." style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', resize: 'none' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '0.5rem', width: '100%', fontSize: '1.125rem' }}>Confirm Demo Request →</button>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '0.5rem', lineHeight: '1.5' }}>By confirming, you agree to our <span style={{ color: 'var(--primary)', fontWeight: '700' }}>institutional trial terms</span> and privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
      <div style={{ height: '8rem' }}></div>
    </div>
  );
};

export default BookDemo;
