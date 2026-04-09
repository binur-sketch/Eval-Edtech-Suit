import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const LMSPage = () => {
  const features = [
    { icon: <Icons.Layout size={32} />, title: 'Intuitive Dashboard', d: 'Custom clean UI for students and faculty focused on distraction-free learning.' },
    { icon: <Icons.Server size={32} />, title: 'High Availability', d: 'Auto-scaling infrastructure designed to handle 100k+ concurrent users smoothly.' },
    { icon: <Icons.ShieldPlus size={32} />, title: 'SCORM/AICC Support', d: 'Full compatibility with all major e-learning content standards and SCORM modules.' },
    { icon: <Icons.BarChart size={32} />, title: 'Learning Analytics', d: 'Deep insights into student progress, engagement metrics, and intervention points.' }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">Institutional Learning</span>
          <h1 style={{ fontSize: '3.5rem' }}>Enterprise <span className="gradient-text">LMS</span> built for Scale</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>A Moodle-based powerhouse that combines flexible content delivery with standard-aligned assessment for schools and large enterprises.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
            <Link to="/book-demo" className="btn btn-primary">Watch Demo</Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Request Brochure</Link>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem' }}>
             {features.map((f, i) => (
                <div key={i} className="card">
                   <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                     <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{f.icon}</div>
                   </div>
                   <h3 style={{ fontSize: '1.25rem', textAlign: 'center' }}>{f.title}</h3>
                   <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>{f.d}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Learning Section */}
      <section className="section-padding" style={{ background: 'var(--primary-light)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '6rem', alignItems: 'center' }}>
               <div style={{ padding: '4rem', background: 'var(--secondary)', borderRadius: '3rem', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--primary)', letterSpacing: '0.1em' }}>Student Experience</div>
                    <h3 style={{ color: 'white', fontSize: '2rem' }}>Native Android & iOS Applications</h3>
                  </div>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                     {[
                       'Full Offline Content Access',
                       'Instant Push-notifications for Tests',
                       'Interactive Video Player with MCQ overlays',
                       'Gamified Leaderboards & Badges'
                     ].map((point, idx) => (
                       <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1rem', fontWeight: '600' }}>
                          <Icons.CheckCircle2 size={24} style={{ color: 'var(--primary)' }} /> {point}
                       </div>
                     ))}
                  </div>
               </div>

               <div>
                  <span className="badge">Engagement</span>
                  <h2 style={{ marginBottom: '2rem' }}>Engagement is the <br/><span className="gradient-text">Core of Learning</span></h2>
                  <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>Our LMS doesn't just store files; it creates pathways for students to interactive with faculty and peers, significantly improving course completion rates.</p>
                  <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>See Mobile App Demo</Link>
               </div>
            </div>
         </div>
      </section>

      {/* Corporate Capabilities */}
      <section className="section-padding">
         <div className="container" style={{ textAlign: 'center' }}>
            <span className="badge">Infrastructure</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '5rem' }}>Built for <span className="gradient-text">Enterprise Resilience</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
               {[
                 { t: 'Multi-Tenancy', d: 'Run separate isolated environments for different departments or sister concerns.' },
                 { t: 'Single Sign-On', d: 'Integration with Azure AD, Okta, and institutional LDAP for secure login.' },
                 { t: 'API-First Strategy', d: 'Fully documented REST APIs to connect with your existing ERP or HRMS.' }
               ].map((item, idx) => (
                 <div key={idx} style={{ padding: '3.5rem', border: '1px solid var(--border)', borderRadius: '3rem', transition: 'var(--transition)' }} className="card">
                    <h4 style={{ marginBottom: '1.25rem', fontSize: '1.25rem' }}>{item.t}</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0 }}>{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container">
           <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white' }}>Fuel Your Institutional <span className="gradient-text">Growth</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem' }}>Join globally recognized universities and corporate giants using EVAL LMS for their digital transformation.</p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request Enterprise Brochure</Link>
              </div>
              <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LMSPage;
