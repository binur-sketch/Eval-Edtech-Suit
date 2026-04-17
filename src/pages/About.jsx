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
    { label: 'Annual Growth', value: '40%+' },
    { label: 'Expert Team', value: '120+' },
    { label: 'Global Offices', value: '4' }
  ];

  const milestones = [
    { year: '2015', title: 'Company Incorporated', desc: 'Company incorporated to deliver innovative software solutions.', icon: <Icons.Flag size={20} /> },
    { year: '2016', title: 'eVAL Suite Launched', desc: 'Launched the eVAL product suite in the market.', icon: <Icons.Rocket size={20} /> },
    { year: '2017', title: 'NAS 2017 Success', desc: 'Deployed eVAL OMR across 600+ districts in India, enabling release of NAS 2017 results within one month.', icon: <Icons.Map size={20} /> },
    { year: '2018', title: 'Statewide Census Survey', desc: 'Conducted large-scale census education survey for a major Indian state using eVAL OMR.', icon: <Icons.FileText size={20} /> },
    { year: '2019', title: 'CBT Platform Evolution', desc: 'Launched Eval CBT Platform for computer-based testing.', icon: <Icons.Monitor size={20} /> },
    { year: '2020', title: 'Dental College CBT', desc: 'Conducted CBT exams for a most prestigious Dental College in India.', icon: <Icons.CheckSquare size={20} /> },
    { year: '2021', title: 'United Nations Partnership', desc: 'eVAL OMR used by the United Nations for successfully evaluating nationwide school assessments.', icon: <Icons.Globe size={20} /> },
    { year: '2022', title: 'Board Expansion', desc: 'Successfully evaluated 30 lakh OMR sheets for a major education board in India.', icon: <Icons.Database size={20} /> },
    { year: '2023', title: 'African Market Entry', desc: 'Conducted large-scale school assessments (40 lakh students) in Nigeria using eVAL OMR.', icon: <Icons.MapPin size={20} /> },
    { year: '2024', title: 'Nationwide Expansion', desc: 'Executed nationwide school leaving exam evaluation in Africa using eVAL OMR.', icon: <Icons.TrendingUp size={20} /> },
    { year: '2025', title: 'CMMI Level 3 & Defense', desc: 'Achieved CMMI Level 3 (Software Development), eVAL OMR deployed across 1000 locations in India for large-scale defence sector assessments, emerging as one of the most widely adopted OMR evaluation solutions in the country.', icon: <Icons.Award size={20} /> }
  ];

  const leadership = [
    {
      name: 'Deepak Garg',
      role: 'Managing Director',
      desc: 'A gifted techno-businessman with over 20 years of experience in product innovation, strategic planning, and customer acquisition. Previously at HCL Technologies and Adobe Systems.',
      img: 'https://www.virsoftech.com/img/deepak_garg.jpg',
      linkedin: 'https://www.linkedin.com/in/deepakgarg76/',
      mail: 'deepak.garg@virsoftech.com'
    },
    {
      name: 'Abhijeet Jain',
      role: 'Chief Technology Officer',
      desc: 'A Computer Scientist, Entrepreneur, and Business Executive with over 20 years of R&D leadership. A contributor to PDF ISO specifications and chief architect for print projects.',
      img: 'https://www.virsoftech.com/img/abhijeet_pic.jpg',
      linkedin: 'https://www.linkedin.com/in/abhijeet-jain-5a9b313/',
      mail: 'abhijeet.jain@virsoftech.com'
    },
    {
      name: 'Pralaypati Ta',
      role: 'Principal Architect',
      desc: 'A coding geek with over 18 years of tech leadership experience leading R&D teams at global product companies like Samsung and Adobe Systems.',
      img: 'https://www.virsoftech.com/img/Pralay-photo.png',
      linkedin: 'https://www.linkedin.com/in/pralaypati-ta-3944691/',
      mail: 'pralaypati.ta@virsoftech.com'
    },
    {
      name: 'Sameer Manuja',
      role: 'Principal Architect',
      desc: 'Key solution architect for print and publishing technologies with over 20 years of industry experience creating path-setting innovations at Samsung and Adobe Systems.',
      img: 'https://www.virsoftech.com/sameer_manuja.jpg',
      linkedin: 'https://www.linkedin.com/in/sameermanuja/',
      mail: 'sameer.manuja@virsoftech.com'
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Corporate Overview</span>
          <h1 style={{ fontSize: '3.5rem' }}>Digitizing Evaluation, <br /><span className="gradient-text">Empowering Learning</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Part of Vir Softech Pvt. Ltd., eVAL is dedicated to bridging the gap between traditional manual evaluation and modern digital requirements with 100% accuracy and institutional trust.
          </p>
        </div>
      </section>

      {/* Identity Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Who We <span className="gradient-text">Are</span></h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                At VIR SOFTECH, we drive the next generation of business-focused IT transformation. Our mission is to empower organizations to turn their vision into measurable growth by reimagining workflows, optimizing operations, and delivering faster, smarter, and more cost-efficient outcomes.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                We specialize across four core technology areas: Enterprise Content Management & Digital Imaging, Print Technology Solutions & Services, Design and Artwork Automation, and eVAL — our advanced platform for educational assessment, evaluation, and learning management.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                With deep expertise and innovation at our core, VIR Softech has developed breakthrough solutions for a wide spectrum of clients — from Fortune 500 enterprises and financial institutions to government bodies, creative agencies, and educational organizations including schools, universities, and coaching centers.
              </p>
            </div>
            <div style={{ background: 'var(--muted)', padding: '4rem', borderRadius: '3rem' }}>
              <h2 style={{ marginBottom: '2rem' }}>Industry & <span className="gradient-text">Growth</span></h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                Our suite of products and services addresses pressing challenges faced by organizations across diverse industries — including Education, Government, Corporate Enterprises, Automotive, BFSI, Healthcare, and Print & Publishing.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                With a consistent annual growth rate of over 40%, VIR Softech continues to expand its global footprint, delivering value-driven technology solutions to clients across continents including the United States, United Kingdom, Japan, Asia, Australia, the Middle East, and India.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '3rem', color: 'var(--muted-foreground)' }}>
                Headquartered in New Delhi, India, and supported by our international office in Tokyo, Japan, VIR Softech operates as a truly global technology partner, bridging innovation and impact across markets.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                {stats.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>{s.value}</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white' }}>
        <div className="container" style={{ padding: '3rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
          {[
            'CMMI LEVEL 3', 'ISO 9001:2015', 'ISO 14001:2015', 'MSME CERTIFIED', 'GeM REGISTERED'
          ].map((cert, i) => (
            <div key={i} style={{ fontSize: '0.875rem', fontWeight: '900', color: '#94a3b8', letterSpacing: '0.1em' }}>{cert}</div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Ethos</span>
            <h2>Institutional <span className="gradient-text">Priorities</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: '3.5rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '1.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Journey</span>
            <h2>A Decade of <span className="gradient-text">Innovation</span></h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '30px', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }}></div>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>
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
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Leadership</span>
            <h2>The People Behind <span className="gradient-text">eVAL</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>A team of technologists, educators, and business leaders committed to transforming examination technology.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Partner with a <span className="gradient-text">Global Leader</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>Headquartered in New Delhi, India, and supported by our international office in Tokyo, Japan.</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Contact HQ</Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Global Partners</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
