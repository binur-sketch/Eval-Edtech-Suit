import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { title: 'Accuracy First', desc: 'In high-stakes exams, even 99% isn\'t enough. We strive for 100% precision.', icon: <Icons.Target size={32} /> },
    { title: 'Scalable for All', desc: 'Our solutions empower small institutes and national boards with equal power.', icon: <Icons.Rocket size={32} /> },
    { title: 'Security Centric', desc: 'Protecting institutional intellectual property and student data is our priority.', icon: <Icons.ShieldCheck size={32} /> }
  ];

  const stats = [
    { label: 'Founded In', value: '2015' },
    { label: 'Exams Secured', value: '150k+' },
    { label: 'Expert Team', value: '120+' },
    { label: 'Global Offices', value: '4' }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Our Journey</span>
          <h1 style={{ fontSize: '3.5rem' }}>Digitizing <span className="gradient-text">Evaluation</span>, <br/>Empowering <span className="gradient-text">Learning</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Part of Vir Softech Pvt. Ltd., EVAL is dedicated to bridging the gap between traditional manual evaluation and modern digital requirements with 100% accuracy and institutional trust.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', padding: '4rem 0', gap: '3rem' }}>
           {stats.map((s, i) => (
             <div key={i} style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.value}</div>
               <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Why EVAL Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Innovation</span>
              <h2 style={{ marginBottom: '2rem' }}>Solving the <span className="gradient-text">"Hardware Gap"</span></h2>
              <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>We empower institutions to run national-level evaluations using ordinary photocopier paper and standard digital scanners, removing the multi-million investment usually required for professional setups.</p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { title: 'Zero Hardware Investment', desc: 'No special OMR scanners or high-cost proprietary servers needed.' },
                  { title: 'Cloud-Native Architecture', desc: 'Access your institution\'s master dashboard from anywhere in the world.' },
                  { title: 'AI-Proctoring Enabled', desc: 'Secure high-stakes examinations with advanced computer vision systems.' }
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--primary)' }}>
                        <Icons.CheckCircle2 size={24} />
                    </div>
                    <div style={{ fontWeight: '800', fontSize: '1.125rem' }}>{f.title}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '4rem' }}>
                 <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Join the Ecosystem</Link>
              </div>
            </div>
            
            <div style={{ display: 'grid', gap: '2.5rem' }}>
               {values.map((v, i) => (
                 <div key={i} className="card" style={{ padding: '3rem' }}>
                   <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                     <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{v.icon}</div>
                   </div>
                   <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{v.title}</h3>
                   <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', textAlign: 'center', lineHeight: '1.6' }}>{v.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Vision */}
      <section className="section-padding">
        <div className="container">
           <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white' }}>A Vision for <span className="gradient-text">Universal Assessment</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '2rem auto 5rem', fontSize: '1.125rem' }}>We are committed to building the world's most intelligent, unbiased, and scalable examination ecosystem for generations to come.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                   {[
                     { icon: <Icons.Star />, title: 'AI Integration', text: 'Auto-marking descriptive answers with semantic understanding.' },
                     { icon: <Icons.Users />, title: 'Community Led', text: 'Sharing educational best practices and question banks globally.' },
                     { icon: <Icons.ShieldCheck />, title: 'Blockchain Security', text: 'Tamper-proof result verification and instant legal archival.' }
                   ].map((item, i) => (
                     <div key={i} style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>{item.text}</p>
                     </div>
                   ))}
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
           <h2 style={{ fontSize: '3rem' }}>Empowering <span className="gradient-text">Vir Softech</span> Standards</h2>
           <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>Experience the most accurate and high-speed evaluation system in the industry.</p>
           <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Connect with Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
