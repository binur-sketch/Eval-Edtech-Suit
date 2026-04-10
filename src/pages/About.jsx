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

  const milestones = [
    { year: '2015', title: 'Company Founded', desc: 'Vir Softech Pvt. Ltd. established in Noida with a mission to digitize academic evaluation.', icon: <Icons.Flag size={20} /> },
    { year: '2016', title: 'First OMR Product', desc: 'Launched the first hardware-independent OMR processing software, eliminating the need for specialty scanners.', icon: <Icons.Lightbulb size={20} /> },
    { year: '2018', title: '1000+ Institutions', desc: 'Reached the milestone of 1,000 institutions across 5 states in India.', icon: <Icons.Users size={20} /> },
    { year: '2019', title: 'CBT Platform Launch', desc: 'Introduced the Computer-Based Testing platform with AI-powered proctoring capabilities.', icon: <Icons.Monitor size={20} /> },
    { year: '2020', title: 'Pandemic Response', desc: 'Rapid deployment of remote examination solutions for 500+ institutions during COVID-19.', icon: <Icons.ShieldCheck size={20} /> },
    { year: '2021', title: 'Global Expansion', desc: 'Opened regional offices in Dubai and Nairobi. Expanded to Middle East and African education markets.', icon: <Icons.Globe size={20} /> },
    { year: '2023', title: 'Complete Suite', desc: 'Launched the full EVAL Suite: OMR, CBT, LMS, QTB, and OSM — a complete examination ecosystem.', icon: <Icons.Layers size={20} /> },
    { year: '2025', title: '5000+ Institutions', desc: 'Crossed 5,000 institutional partners spanning 12 countries with 10M+ students impacted annually.', icon: <Icons.Award size={20} /> }
  ];

  const leadership = [
    { 
      name: 'Deepak Garg', 
      role: 'Co-Founder & Managing Director', 
      desc: 'Oversees sales, business development, operations, and financial divisions.', 
      img: 'https://ui-avatars.com/api/?name=Deepak+Garg&background=E53935&color=fff&size=200',
      linkedin: 'https://www.linkedin.com/in/deepak-garg-570a2b2/',
      mail: 'deepak.garg@virsoftech.com'
    },
    { 
      name: 'Abhijeet Jain', 
      role: 'Co-Founder & Chief Technology Officer', 
      desc: 'Key architect driving digital transformation and technical strategy.', 
      img: 'https://ui-avatars.com/api/?name=Abhijeet+Jain&background=1F1F1F&color=fff&size=200',
      linkedin: 'https://www.linkedin.com/in/abhijeet-jain-4467319/',
      mail: 'abhijeet.jain@virsoftech.com'
    },
    { 
      name: 'Pralaypati Ta', 
      role: 'Co-Founder & Principal Architect', 
      desc: 'Specializing in highly scalable and secure cloud-based solutions.', 
      img: 'https://ui-avatars.com/api/?name=Pralaypati+Ta&background=E53935&color=fff&size=200',
      linkedin: 'https://www.linkedin.com/in/pralaypatita/',
      mail: 'pralaypati.ta@virsoftech.com'
    },
    { 
      name: 'Sameer Manuja', 
      role: 'Co-Founder & Principal Architect', 
      desc: 'Architecting dynamic document management and evaluation platforms.', 
      img: 'https://ui-avatars.com/api/?name=Sameer+Manuja&background=1F1F1F&color=fff&size=200',
      linkedin: 'https://www.linkedin.com/in/sameermanuja/',
      mail: 'sameer.manuja@virsoftech.com'
    }
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
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', padding: '4rem 0', gap: '3rem' }}>
           {stats.map((s, i) => (
             <div key={i} style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.value}</div>
               <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem' }}>
            <div className="card" style={{ padding: '3.5rem', borderTop: '4px solid var(--primary)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>
                <Icons.Target size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: 0 }}>
                To democratize accurate, high-speed examination technology by removing hardware barriers and making enterprise-grade evaluation accessible to every institution—from rural schools to national boards.
              </p>
            </div>
            <div className="card" style={{ padding: '3.5rem', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>
                <Icons.Eye size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: 0 }}>
                To build the world's most intelligent, unbiased, and scalable examination ecosystem that serves as the global standard for academic and professional evaluation by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '6rem', alignItems: 'center' }}>
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
                    <div style={{ background: 'white', padding: '0.75rem', borderRadius: '1rem', color: 'var(--primary)', border: '1px solid var(--border)' }}>
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

      {/* Timeline */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Journey</span>
            <h2>A Decade of <span className="gradient-text">Innovation</span></h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '30px', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }}></div>

            <div style={{ display: 'grid', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Timeline Node */}
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%', flexShrink: 0,
                    background: 'white', border: '3px solid var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', zIndex: 1
                  }}>{m.icon}</div>

                  <div className="card" style={{ padding: '2rem 2.5rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem',
                        fontWeight: '800', background: 'var(--primary)', color: 'white'
                      }}>{m.year}</span>
                      <h4 style={{ marginBottom: 0, fontSize: '1.0625rem' }}>{m.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0, lineHeight: '1.6' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Leadership</span>
            <h2>The People Behind <span className="gradient-text">EVAL</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>A team of technologists, educators, and business leaders committed to transforming examination technology.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2.5rem' }}>
            {leadership.map((leader, i) => (
              <div key={i} className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  loading="lazy"
                  style={{ 
                    width: '100px', height: '100px', borderRadius: '50%', 
                    marginBottom: '1.25rem', border: '4px solid var(--primary-light)', objectFit: 'cover'
                  }} 
                />
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{leader.name}</h4>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{leader.role}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{leader.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '1.25rem' }}>
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'opacity 0.2s', opacity: 0.7 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}>
                      <Icons.Linkedin size={18} />
                    </a>
                  )}
                  {leader.mail && (
                    <a href={`mailto:${leader.mail}`} style={{ color: 'var(--primary)', transition: 'opacity 0.2s', opacity: 0.7 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}>
                      <Icons.Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container">
           <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white' }}>A Vision for <span className="gradient-text">Universal Assessment</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '2rem auto 5rem', fontSize: '1.125rem' }}>We are committed to building the world's most intelligent, unbiased, and scalable examination ecosystem for generations to come.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem' }}>
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

      {/* Awards & Recognition */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge">Recognition</span>
          <h2 style={{ marginBottom: '4rem' }}>Awards & <span className="gradient-text">Accolades</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
            {[
              { title: 'Best EdTech Startup 2022', org: 'NASSCOM' },
              { title: 'Innovation Award 2023', org: 'India EdTech Forum' },
              { title: 'Top 50 EdTech Companies', org: 'Analytics India Magazine' },
              { title: 'Excellence in Exam Tech', org: 'AICTE' }
            ].map((award, i) => (
              <div key={i} style={{
                padding: '2rem 3rem', background: 'white', borderRadius: '2rem',
                border: '1px solid var(--border)', minWidth: '220px'
              }}>
                <Icons.Award size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{award.title}</h4>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
           <h2 style={{ fontSize: '3rem' }}>Join the <span className="gradient-text">EVAL</span> Ecosystem</h2>
           <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>Experience the most accurate and high-speed evaluation system in the industry.</p>
           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
             <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Connect with Us</Link>
             <Link to="/careers" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Join Our Team</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
