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

            <div style={{ marginTop: '5rem', padding: '3rem', background: 'white', borderRadius: '3rem', border: '1px solid var(--border)', position: 'relative' }}>
              <Icons.Quote size={48} style={{ color: 'var(--primary)', opacity: '0.1', position: 'absolute', top: '2rem', left: '2rem' }} />
              <p style={{ fontStyle: 'italic', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>"The demonstration convinced us immediately. eVAL's ability to handle OMR on plain paper without specialized hardware is its biggest innovation."</p>
              <div style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--foreground)' }}>Director of Admissions, NCERT</div>
            </div>
          </div>

          <div className="card" style={{ background: 'var(--card)', padding: '4rem', borderRadius: '4rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '3rem', textAlign: 'center' }}>Secure Your Slot</h3>
            <form style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--foreground)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Work Email</label>
                <input type="email" placeholder="principal@institute.org" style={{ width: '100%', padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--foreground)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Focus Solution</label>
                <select style={{ width: '100%', padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '1rem' }}>
                  <option>Complete eVAL Suite (Recommended)</option>
                  <option>OMR Software Only</option>
                  <option>CBT & Proctoring Platform</option>
                  <option>OSM (Digital Marking)</option>
                  <option>LMS & Content Delivery</option>
                </select>
              </div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--foreground)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Exam Volume</label>
                <select style={{ width: '100%', padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '1rem' }}>
                  <option>Under 1,000 students</option>
                  <option>1,000 - 10,000 students</option>
                  <option>10,000 - 100,000 students</option>
                  <option>National/State Board (100k+)</option>
                </select>
              </div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--foreground)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Preferred Date</label>
                <input type="date" style={{ width: '100%', padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '1rem' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '1.5rem', marginTop: '1rem', width: '100%', fontSize: '1.125rem' }}>Confirm Demo Request →</button>
              <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginTop: '1rem', lineHeight: '1.5' }}>By confirming, you agree to our <span style={{ color: 'var(--primary)', fontWeight: '700' }}>institutional trial terms</span> and privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
      <div style={{ height: '8rem' }}></div>
    </div>
  );
};

export default BookDemo;
