import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const OSMPage = () => {
  const features = [
    { title: 'Digital Annotation', desc: 'Grade handwritten physical scripts on-screen with intuitive marking tools and digital pens.', icon: <Icons.Pencil size={32} /> },
    { title: 'Real-time Stats', desc: 'Monitor every single check and mark as it happens for institutional transparency.', icon: <Icons.Activity size={32} /> },
    { title: 'Secure Archival', desc: 'Every digitally marked sheet is securely archived for verification and RTI requests.', icon: <Icons.ShieldCheck size={32} /> },
    { title: 'Collaborative Marking', desc: 'Assign specific sections of the same paper to different expert evaluators.', icon: <Icons.Users2 size={32} /> }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">Descriptive Evaluation</span>
          <h1 style={{ fontSize: '3.5rem' }}>Next-Gen <br/><span className="gradient-text">On-Screen Marking</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>Evaluate descriptive answer scripts from anywhere in the world with the speed and security of a bank-level digital vault.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
            <Link to="/book-demo" className="btn btn-primary">Request Pilot</Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white' }}>
         <div className="container" style={{ padding: '4rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6rem' }}>
            {[
              { val: '40%', label: 'Efficiency Increase' },
              { val: '0%', label: 'Totaling Grievances' },
              { val: '24/7', label: 'Evaluation Window' }
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.val}</div>
                 <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding">
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem' }}>
             {features.map((f, i) => (
               <div key={i} className="card" style={{ textAlign: 'center' }}>
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                   <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{f.icon}</div>
                 </div>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{f.title}</h3>
                 <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Workflow Visualization Mockup */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '6rem', alignItems: 'center' }}>
               <div style={{ padding: '4rem', background: 'white', borderRadius: '3rem', boxShadow: 'var(--shadow-lg)' }}>
                  <div style={{ fontWeight: '900', fontSize: '1.25rem', marginBottom: '3rem', display: 'flex', gap: '15px', alignItems: 'center' }}>
                     <div style={{ padding: '10px', background: 'var(--primary-light)', borderRadius: '10px', color: 'var(--primary)' }}><Icons.FileSearch size={24} /></div>
                     Automated Integrity Checks
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                     {[
                       { t: 'Blank Page Detection', status: 'Passed', c: 'var(--secondary)' },
                       { t: 'Roll Number Matching', status: 'Verified', c: 'var(--secondary)' },
                       { t: 'Handwriting Recognition', status: 'Processing', c: 'var(--primary)' }
                     ].map((check, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.25rem', background: 'var(--muted)', borderRadius: '1rem', alignItems: 'center' }}>
                           <span style={{ fontSize: '0.9375rem', fontWeight: '600' }}>{check.t}</span>
                           <span style={{ fontWeight: '900', color: check.c, fontSize: '0.8125rem', textTransform: 'uppercase' }}>{check.status}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <span className="badge">Quality Assurance</span>
                  <h2 style={{ marginBottom: '2rem' }}>Zero Compromise <span className="gradient-text">Assurance</span></h2>
                  <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>Eliminate manual totaling errors and post-result grievances. EVAL OSM ensures every mark is mathematically verified against the max marks and master question table.</p>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                     {[
                       { t: 'Auto-Totaling Engine', d: 'Every mark given on-screen is instantly aggregated and double-checked.' },
                       { t: 'Redaction Tools', d: 'Hide candidate identity (Anonymous Marking) to eliminate evaluator bias.' }
                     ].map((item, idx) => (
                       <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                          <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                             <Icons.CheckSquare size={28} />
                          </div>
                          <div>
                             <div style={{ fontWeight: '800', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.t}</div>
                             <div style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{item.d}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
           <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white' }}>The End of Physical Script <span className="gradient-text">Logistics</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem' }}>Stop shipping answer scripts across the country. Move scripts digitally and securely with EVAL OSM.</p>
                <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request Institutional Demo</Link>
              </div>
              <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default OSMPage;
