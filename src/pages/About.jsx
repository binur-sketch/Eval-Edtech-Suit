import * as Icons from '@/components/LucideFix';
import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/common/SectionHeader';


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
    { year: '2025', title: 'CMMI Level 3 & Defense', desc: 'Achieved CMMI Level 3 (Software Development), eVAL OMR deployed across 1000 locations in India for large-scale defence sector assessments, emerging as one of the most widely adopted OMR evaluation solutions in the country.', icon: <Icons.Award size={20} /> },
    { year: '2024', title: 'Nationwide Expansion', desc: 'Executed nationwide school leaving exam evaluation in Africa using eVAL OMR.', icon: <Icons.TrendingUp size={20} /> },
    { year: '2023', title: 'African Market Entry', desc: 'Conducted large-scale school assessments (40 lakh students) in Nigeria using eVAL OMR.', icon: <Icons.MapPin size={20} /> },
    { year: '2022', title: 'Board Expansion', desc: 'Successfully evaluated 30 lakh OMR sheets for a major education board in India.', icon: <Icons.Database size={20} /> },
    { year: '2021', title: 'United Nations Partnership', desc: 'eVAL OMR used by the United Nations for successfully evaluating nationwide school assessments.', icon: <Icons.Globe size={20} /> },
    { year: '2020', title: 'Dental College CBT', desc: 'Conducted CBT exams for a most prestigious Dental College in India.', icon: <Icons.CheckSquare size={20} /> },
    { year: '2019', title: 'CBT Platform Evolution', desc: 'Launched Eval CBT Platform for computer-based testing.', icon: <Icons.Monitor size={20} /> },
    { year: '2018', title: 'Statewide Census Survey', desc: 'Conducted large-scale census education survey for a major Indian state using eVAL OMR.', icon: <Icons.FileText size={20} /> },
    { year: '2017', title: 'NAS 2017 Success', desc: 'Deployed eVAL OMR across 600+ districts in India, enabling release of NAS 2017 results within one month.', icon: <Icons.Map size={20} /> },
    { year: '2016', title: 'eVAL Suite Launched', desc: 'Launched the eVAL product suite in the market.', icon: <Icons.Rocket size={20} /> },
    { year: '2015', title: 'Company Incorporated', desc: 'Company incorporated to deliver innovative software solutions.', icon: <Icons.Flag size={20} /> }
  ];

  const leadership = [
    {
      name: 'Deepak Garg',
      role: 'Managing Director',
      desc: 'A gifted techno-businessman with over 20 years of experience in product innovation, strategic planning, and customer acquisition. Previously at HCL Technologies and Adobe Systems.',
      img: '/assets/images/team/deepak_garg.jpg',
      linkedin: 'https://www.linkedin.com/in/deepakgarg76/',
      mail: 'deepak@virsoftech.com'
    },
    {
      name: 'Abhijeet Jain',
      role: 'Chief Technology Officer',
      desc: 'A Computer Scientist, Entrepreneur, and Business Executive with over 20 years of R&D leadership. A contributor to PDF ISO specifications and chief architect for print projects.',
      img: '/assets/images/team/abhijeet_pic.jpg',
      linkedin: 'https://www.linkedin.com/in/abhijeet-jain-5a9b313/',
      mail: 'abhijeet@virsoftech.com'
    },
    {
      name: 'Pralaypati Ta',
      role: 'Principal Architect',
      desc: 'A coding geek with over 18 years of tech leadership experience leading R&D teams at global product companies like Samsung and Adobe Systems.',
      img: '/assets/images/team/Pralay-photo.png',
      linkedin: 'https://www.linkedin.com/in/pralaypati-ta-3944691/',
      mail: 'pralay@virsoftech.com'
    },
    {
      name: 'Sameer Manuja',
      role: 'Principal Architect',
      desc: 'Key solution architect for print and publishing technologies with over 20 years of industry experience creating path-setting innovations at Samsung and Adobe Systems.',
      img: '/assets/images/team/sameer_manuja.jpg',
      linkedin: 'https://www.linkedin.com/in/sameermanuja/',
      mail: 'sameer@virsoftech.com'
    },
    {
      name: 'Akihide Sugino',
      role: 'Country Head, Japan',
      desc: 'Seasoned industry veteran with 35+ years of experience in sales, marketing, and license compliance. Previously worked with Epson & Adobe.',
      img: '/assets/images/team/sugino.jpg', // update if needed
      linkedin: 'https://jp.linkedin.com/in/akihide-sugino-938526154',
      mail: 'sugino@virsoftech.com'
    },
    {
      name: 'Manu Paliwal',
      role: 'Vice President – Sales',
      desc: '25+ years of experience in sales, alliances, and operations. Drives growth strategy and business expansion.',
      img: '/assets/images/team/manu_paliwal.jpeg',
      linkedin: 'https://in.linkedin.com/in/manu-paliwal-a549a144',
      mail: 'manu@virsoftech.com'
    }
  ];

  return (
    <div className="about-page" style={{ paddingTop: 'var(--nav-height)', overflowX: 'hidden' }}>
      <SEO
        title="About Us | Pioneers in Examination Evaluation"
        description="Learn about eVAL by Vir Softech. We are dedicated to transforming institutional assessments with smart, secure, and accurate technology solutions."
        keywords="About eVAL, Vir Softech, Examination Technology Company, EdTech India, Assessment Experts"
      />
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Corporate Overview</span>
          <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>Digitizing Evaluation, <br /><span className="gradient-text">Empowering Learning</span></h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', maxWidth: '800px', margin: '0 auto' }}>
            Part of Vir Softech Pvt. Ltd., eVAL is dedicated to bridging the gap between traditional manual evaluation and modern digital requirements with 100% accuracy and institutional trust.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <SectionHeader
                badge="Our Identity"
                title={<>Who We <span className="gradient-text">Are</span></>}
                centered={false}
              />

              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  At VIR SOFTECH, we drive the next generation of business-focused IT transformation. Our mission is to empower organizations to turn their vision into measurable growth by reimagining workflows, optimizing operations, and delivering faster, smarter, and more cost-efficient outcomes.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  We specialize across four core technology areas: Enterprise Content Management & Digital Imaging, Print Technology Solutions & Services, Design and Artwork Automation, and eVAL — our advanced platform for educational assessment, evaluation, and learning management.
                </p>
                <p>
                  With deep expertise and innovation at our core, VIR Softech has developed breakthrough solutions for a wide spectrum of clients — from Fortune 500 enterprises and financial institutions to government bodies, creative agencies, and educational organizations including schools, universities, and coaching centers.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'var(--primary-light)',
                borderRadius: '2rem',
                zIndex: 0
              }}></div>
              <img
                src="/assets/images/whoweare.jpeg"
                alt="Who We Are"
                style={{
                  width: '100%',
                  borderRadius: '2.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                  zIndex: 1,
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Growth */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <SectionHeader
                badge="Market Presence"
                title={<>Industry & <span className="gradient-text">Growth</span></>}
                centered={false}
              />

              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                Our suite of products and services addresses pressing challenges faced by organizations across diverse industries — including Education, Government, Corporate Enterprises, Automotive, BFSI, Healthcare, and Print & Publishing.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
                With a consistent annual growth rate of over 40%, VIR Softech continues to expand its global footprint, delivering value-driven technology solutions to clients across continents including the United States, United Kingdom, Japan, Asia, Australia, the Middle East, and India.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                Headquartered in New Delhi, India, and supported by our international office in Tokyo, Japan, VIR Softech operates as a truly global technology partner, bridging innovation and impact across markets.
              </p>
            </div>

            <div className="card" style={{ padding: '3rem', background: 'var(--muted)', borderRadius: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {stats.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', lineHeight: '1.2' }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--muted)', overflow: 'hidden' }}>

        <div className="container logo-row-container no-scrollbar" style={{
          padding: '4.5rem 0',
          gap: 'clamp(1.5rem, 5vw, 5rem)'
        }}>
          {[
            { src: '/assets/images/cmmi logo.png', alt: 'CMMI Level 3' },
            { src: '/assets/images/iso9001.png', alt: 'ISO 9001' },
            { src: '/assets/images/iso14001.png', alt: 'ISO 14001' },
            { src: '/assets/images/msme.png', alt: 'MSME' },
            { src: '/assets/images/gem.png', alt: 'GeM India' },
            { src: '/assets/images/rkcllogo.png', alt: 'RKCL' }
          ].map((cert, i) => (
            <div key={i} style={{
              height: 'clamp(40px, 8vw, 80px)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.9,
              transition: 'all 0.3s ease',
            }} onMouseEnter={e => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.transform = 'scale(1.05)';
            }} onMouseLeave={e => {
              e.currentTarget.style.opacity = 0.9;
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <img
                src={cert.src}
                alt={cert.alt}
                style={{ maxHeight: '100%', maxWidth: '200px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: 'white' }}>

        <div className="container">
          <SectionHeader
            badge="Our Ethos"
            title={<>Institutional <span className="gradient-text">Priorities</span></>}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', textAlign: 'center', background: 'var(--muted)' }}>

                <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones - Compact Grid Redesign */}
      <section className="section-padding" style={{ background: 'var(--muted)', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader
            badge="Our Journey"
            title={<>A Decade of <span className="gradient-text">Innovation</span></>}
            text="From our inception to becoming a global assessment leader, every milestone represents our commitment to excellence."
          />


          <div className="connected-timeline" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '1rem 0' }}>
            <div className="timeline-line"></div>

            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
                  <div className="timeline-node">
                    {React.cloneElement(m.icon, { size: 16 })}
                  </div>
                  <div className="timeline-content card hover-lift">
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '900',
                      color: 'var(--primary-light)',
                      position: 'absolute',
                      top: '-5px',
                      right: isEven ? '-5px' : 'auto',
                      left: isEven ? 'auto' : '-5px',
                      lineHeight: '1',
                      zIndex: 0,
                      opacity: 0.5
                    }}>
                      {m.year}
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        padding: '0.15rem 0.6rem',
                        borderRadius: '100px',
                        marginBottom: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '800'
                      }}>
                        {m.year}
                      </div>
                      <h4 style={{ fontSize: '0.9375rem', marginBottom: '0.25rem', lineHeight: '1.2' }}>{m.title}</h4>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', margin: 0, lineHeight: '1.5' }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .connected-timeline .timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 3px;
            background: linear-gradient(to bottom, var(--primary-light), var(--primary), var(--primary-light));
            transform: translateX(-50%);
            border-radius: 4px;
            z-index: 1;
          }
          .timeline-item {
            display: flex;
            justify-content: flex-end;
            padding-right: 50%;
            position: relative;
            margin-bottom: 1rem;
            width: 100%;
          }
          .timeline-item.right {
            justify-content: flex-start;
            padding-right: 0;
            padding-left: 50%;
          }
          .timeline-node {
            position: absolute;
            left: 50%;
            top: 15px;
            transform: translate(-50%, 0);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: white;
            border: 3px solid var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            z-index: 2;
            box-shadow: 0 0 0 3px white, var(--shadow-sm);
          }
          .timeline-content {
            width: calc(100% - 3rem);
            padding: 1rem 1.25rem;
            background: white;
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
          }
          .timeline-item.left .timeline-content {
            margin-right: 0;
            border-right: 3px solid var(--primary);
          }
          .timeline-item.right .timeline-content {
            margin-left: 3rem;
            border-left: 3px solid var(--primary);
          }
          
          @media (max-width: 768px) {
            .connected-timeline .timeline-line {
              left: 20px;
            }
            .timeline-item, .timeline-item.right {
              padding-left: 50px;
              padding-right: 0;
              justify-content: flex-start;
            }
            .timeline-node {
              left: 20px;
            }
            .timeline-content {
              width: 100%;
              margin-left: 0 !important;
              border-left: 3px solid var(--primary) !important;
              border-right: none !important;
            }
          }
        `}} />
      </section>

      {/* Leadership */}
      <section className="section-padding" style={{ background: 'white' }}>

        <div className="container">
          <SectionHeader
            badge="Leadership"
            title={<>The People Behind <span className="gradient-text">eVAL</span></>}
            text="A team of technologists, educators, and business leaders committed to transforming examination technology."
          />


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            // On large screens, we force it to exactly 3 columns if feasible
          }} className="leadership-grid">
            {leadership.map((leader, i) => (
              <div key={i} className="card hover-lift" style={{
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                textAlign: 'center',
                background: 'var(--muted)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'

              }}>
                <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto 1.5rem' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    opacity: 0.2
                  }}></div>
                  <img
                    src={leader.img}
                    alt={leader.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
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
                    <a href={`mailto:${leader.mail}`} style={{ color: '#EA4335', transition: 'opacity 0.2s', opacity: 0.7 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}>
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
      <section className="section-padding" style={{ background: 'var(--muted)' }}>

        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)' }}>Partner with a <span className="gradient-text">Global Leader</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>Headquartered in New Delhi, India, and supported by our international office in Tokyo, Japan.</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Contact HQ</Link>
            <Link to="/partner" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Global Partners</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
