import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const QTBPage = () => {
  const workflow = [
    { title: 'Create', desc: 'Create rich-media questions with math, science symbols, and HD images.', icon: <Icons.PenTool size={32} /> },
    { title: 'Tag', desc: 'Add intelligence with metadata like Difficulty level, Blooms taxonomy, and Subject tags.', icon: <Icons.Tags size={32} /> },
    { title: 'Review', desc: 'Automated workflow where senior faculty reviews and revises draft questions.', icon: <Icons.ClipboardList size={32} /> },
    { title: 'Approve', desc: 'Lock and approve questions into the master bank once they pass verification.', icon: <Icons.CheckCircle2 size={32} /> }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">Intellectual Property</span>
          <h1 style={{ fontSize: '3.5rem' }}>Institutional <span className="gradient-text">Item Bank</span> Hub</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>EVAL QTB provides a collaborative and secure environment to build, manage, and audit your institution's most valuable asset: its question intellectual property.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
            <Link to="/book-demo" className="btn btn-primary">Start Building Bank</Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Consult Experts</Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <span className="badge">Process Flow</span>
             <h2>Structured Content <span className="gradient-text">Workflow</span></h2>
             <p>Move from a draft idea to an approved exam-ready question with institutional oversight.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {workflow.map((w, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{w.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{w.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metadata & Search */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
               <div>
                  <span className="badge">Pedagogy</span>
                  <h2 style={{ marginBottom: '2rem' }}>Power of <span className="gradient-text">Deep Metadata</span></h2>
                  <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>Don't just store text. Every question in EVAL QTB is tagged with multi-dimensional intelligence, enabling instant test paper generation based on specific pedagogical requirements.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                     {[
                       { t: 'Blooms Taxonomy', d: 'Recall to Evaluation levels' },
                       { t: 'Difficulty Index', d: 'Automated by past results' },
                       { t: 'Topic Mapping', d: 'Granular chapter-level tags' },
                       { t: 'Curriculum Link', d: 'NCERT, CBSE, IB compliance' }
                     ].map((tag, i) => (
                        <div key={i} style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid var(--border)', transition: 'var(--transition)' }} className="card">
                           <div style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{tag.t}</div>
                           <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{tag.d}</div>
                        </div>
                     ))}
                  </div>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  <div className="card" style={{ background: 'white', padding: '3rem', borderRadius: '3rem', boxShadow: 'var(--shadow-lg)' }}>
                     <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Scientific Expression Support</h4>
                     <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>Full integration of MathType and LaTeX editors. Create complex chemical structures and physics diagrams directly within the portal.</p>
                     <div style={{ background: 'var(--muted)', padding: '2rem', borderRadius: '1.5rem', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--primary)', marginTop: '2rem', textAlign: 'center', fontWeight: '800' }}>
                        \int_{a}^{b} x^2 dx = \frac{b^3 - a^3}{3}
                     </div>
                  </div>
                  <div className="card" style={{ background: 'var(--secondary)', color: 'white', padding: '3rem', borderRadius: '3rem', border: 'none' }}>
                     <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Media-Rich Questions</h4>
                     <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: 0 }}>Embed HD videos for comprehension-based tests, audio clips for language proficiency, and high-res medical imagery for clinical assessments.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Security Section */}
      <section className="section-padding">
         <div className="container" style={{ textAlign: 'center' }}>
            <span className="badge">Security</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '5rem' }}>Protecting Your <span className="gradient-text">IP Assets</span></h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
               {[
                 { icon: <Icons.Lock size={32} />, title: 'Role-Based Access', text: 'Granular permissions for authors, reviewers, and publishers.' },
                 { icon: <Icons.Share2 size={32} />, title: 'Encryption at Rest', text: 'Your question content is AES-256 encrypted, even in our databases.' },
                 { icon: <Icons.Activity size={32} />, title: 'Full Audit Trail', text: 'Track every single edit, view, and version of every question.' }
               ].map((item, i) => (
                 <div key={i} className="card" style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{item.icon}</div>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>{item.text}</p>
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
                <h2 style={{ color: 'white' }}>Build a Legacy of <span className="gradient-text">Educational Quality</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem' }}>Move your question bank from scattered hard drives to a unified institutional powerhouse.</p>
                <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request QTB Demo</Link>
              </div>
              <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default QTBPage;
