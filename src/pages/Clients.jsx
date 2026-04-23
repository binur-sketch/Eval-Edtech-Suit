import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const ClientCategory = ({ title, clients }) => (
  <div style={{ marginBottom: '6rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
      <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to right, transparent, var(--border))' }}></div>
      <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted-foreground)', fontWeight: '800' }}>{title}</h3>
      <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to left, transparent, var(--border))' }}></div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
      {clients.map((client, i) => {
        const clientName = typeof client === 'string' ? client : client.name;
        const clientLogo = typeof client === 'string' ? null : client.logo;
        return (
          <div key={i} className="hover-lift" style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '1.5rem',
            height: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: clientLogo ? '0.75rem' : '1.5rem',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}>
            {clientLogo ? (
              <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={clientLogo} alt={clientName} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ) : (
              <>
                <div style={{
                  width: '100%',
                  height: '40px',
                  background: 'var(--muted)',
                  borderRadius: '0.5rem',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>LOGO</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--foreground)' }}>{clientName}</div>
              </>
            )}
          </div>
        )
      })}
    </div>
  </div>
);

const Clients = () => {
  const categories = [
    {
      title: 'Coaching',
      clients: [
        { name: 'Physics Wallah', logo: '/assets/images/coaching/physics wallah.webp' },
        { name: 'Aakash Institute', logo: '/assets/images/coaching/aakash logo.png' },
        { name: 'Narayana Institute', logo: '/assets/images/coaching/narayana.png' },
        { name: 'Xylem Learning', logo: '/assets/images/coaching/xylem.webp' },
        { name: 'Resonance', logo: '/assets/images/coaching/Resonance.png' },
        { name: 'DD Target PMT', logo: '/assets/images/coaching/dd target.webp' },
        { name: 'TAF IAS Academy', logo: '/assets/images/coaching/taf ias.png' },
        { name: 'CEDEES', logo: '/assets/images/coaching/cedeed.png' },
        { name: 'Shaheen Group', logo: '/assets/images/coaching/shaheen.png' },
        { name: 'Bansal Classes', logo: '/assets/images/coaching/bansal classes.png' },
        { name: 'Sri Chaitanya', logo: '/assets/images/coaching/sri chaitanya.png' },
        { name: 'BASE EDUCATION', logo: '/assets/images/coaching/base education.png' },
        { name: 'KHAN GLOBAL STUDIES', logo: '/assets/images/coaching/khan global.avif' },
        { name: 'Career Launcher', logo: '/assets/images/coaching/career launcher.png' },
        { name: 'IMS LEARNING', logo: '/assets/images/coaching/ims.webp' },

      ]
    },
    {
      title: 'Schools',
      clients: [
        { name: 'Delhi Public School', logo: '/assets/images/school/dps.webp' },
        { name: 'St Francis De Sales', logo: '/assets/images/school/St Francis De Sales Sr Sec School.webp' },
        { name: 'RPS International', logo: '/assets/images/school/RPS International School.png' },
        { name: 'Dr. Radhakrishnan Intl.', logo: '/assets/images/school/Dr. Radhakrishnan International School.png' },
        { name: 'Bankura Hindu High School', logo: '/assets/images/school/BANKURA HINDU HIGH SCHOOL.png' },
        { name: 'Mata Harki Devi Sr Sec', logo: '/assets/images/school/Mata_Harki_Devi_Senior_secondary_School-removebg-preview.png' },
        { name: 'SURAJ SCHOOL', logo: '/assets/images/school/SURAJ SCHOOL.png' },
        { name: 'Siddhi Vinayak', logo: '/assets/images/school/Siddhi Vinayak Education Trust.png' },
        { name: 'Discovery Intl.', logo: '/assets/images/school/Discovery International School.png' },
        { name: 'Sainik School', logo: '/assets/images/school/Sainik School.png' },
        { name: 'OASIS International', logo: '/assets/images/school/OASIS International School.png' },
        { name: 'Jawahar Navodaya', logo: '/assets/images/school/Jawahar Navodaya Vidyalaya.png' },
        { name: 'Uttam School', logo: '/assets/images/school/Uttam School for Girls.png' },
        { name: 'DAV School', logo: '/assets/images/school/DAV School.avif' },
        { name: 'ICFAI Business School', logo: '/assets/images/school/ICFAI Business School.png' }
      ]
    },
    {
      title: 'Universities',
      clients: [
        { name: 'United University', logo: '/assets/images/university/United University.png' },
        { name: 'Parul University', logo: '/assets/images/university/Parul University.png' },
        { name: 'Jamia Millia Islamia', logo: '/assets/images/university/Jamia Millia Islamia.png' },
        { name: 'Atmiya University', logo: '/assets/images/university/Atmiya University.png' },
        { name: 'Noble University', logo: '/assets/images/university/Noble University.png' },
        { name: 'Assam Skill Univ', logo: '/assets/images/university/Assam Skill University.png' },
        { name: 'Banaras Hindu Univ', logo: '/assets/images/university/BANARAS HINDU UNIVERSITY.png' },
        { name: 'Adani University', logo: '/assets/images/university/ADANI UNIVERSITY.png' },
        { name: 'Bagalkot University', logo: '/assets/images/university/BAGALKOT UNIVERSITY.webp' },
        { name: 'RG Aviation Univ', logo: '/assets/images/university/RAJIV GANDHI NATIONAL AVIATION UNIVERSITY.png' },
        { name: 'Al-Karim University', logo: '/assets/images/university/AL-KARIM UNIVERSITY.png' },
        { name: 'Forensic Sciences Univ', logo: '/assets/images/university/National Forensic Sciences University.png' },
        { name: 'Silver Oak Univ', logo: '/assets/images/university/Silver Oak University.png' },
        { name: 'Punjab State Open Univ', logo: '/assets/images/university/Jagat Guru Nanak Dev Punjab State Open University.png' },
        { name: 'Central Agricultural Univ', logo: '/assets/images/university/Central Agricultural University.png' }
      ]
    },
    {
      title: 'Government',
      clients: [
        { name: 'National Cadet Corps', logo: '/assets/images/government/National Cadet Corps.png' },
        { name: 'Maulana Azad Medical', logo: '/assets/images/government/Maulana Azad Medical College.png' },
        { name: 'Lady Hardinge Medical', logo: '/assets/images/government/Lady Hardinge Medical College.png' },
        { name: 'UPSC', logo: '/assets/images/government/Union Public Service Commission.png' },
        { name: 'Unani Medicine Inst', logo: '/assets/images/government/NATIONAL INSTITUTE OF UNANI MEDICINE.png' },
        { name: 'IIT Goa', logo: '/assets/images/government/IIT Goa.png' },
        { name: 'IIT Bhubaneshwar', logo: '/assets/images/government/IIT_Bhubaneswar_Logo-1.png' },
        { name: 'NIT Goa', logo: '/assets/images/government/NIT Goa.png' },
        { name: 'CBEC India', logo: '/assets/images/government/Central Board of Excise and Customs.png' },
        { name: 'Indian Post', logo: '/assets/images/government/Indian Post.png' },
        { name: 'Indian Railway', logo: '/assets/images/government/Indian Railway.png' },
        { name: 'Bharat Electronic Ltd', logo: '/assets/images/government/Bharat Electronic Limited.png' },
        { name: 'Quality Council of India', logo: '/assets/images/government/QUALITY COUNCIL OF INDIA.png' },
        { name: 'AIIMS', logo: '/assets/images/government/AIIMS.svg' },
        { name: 'Nuclear Power Corp', logo: '/assets/images/government/Nuclear Power Corporation Of India Ltd.png' },

      ]
    }
  ];


  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Success Ecosystem</span>
          <h1 style={{ fontSize: '3.5rem' }}>Empowering <span className="gradient-text">5000+ Institutions</span> <br />Across 12 Countries</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Join the global network of excellence. eVAL provides the technological foundation for the world's most demanding educational and recruitment organizations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Join the Network</Link>
            <Link to="/book-demo" className="btn btn-outline">Request POC</Link>
          </div>
        </div>
      </section>

      {/* Main Client Logos Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="badge">Portfolio</span>
            <h2>Trusted by <span className="gradient-text">Segment Leaders</span></h2>
          </div>

          {categories.map((cat, i) => (
            <ClientCategory key={i} title={cat.title} clients={cat.clients} />
          ))}
        </div>
      </section>

      {/* Global HQ Info */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white' }}>Ready to Scale?</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '2rem', fontSize: '1.125rem' }}>Our institutional consultants are available for onsite deployment strategy worldwide.</p>
              <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', flex: 1 }}>
                  <div style={{ fontWeight: '800', marginBottom: '0.5rem' }}>INDIA HQ</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>Noida, UP 201301</div>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', flex: 1 }}>
                  <div style={{ fontWeight: '800', marginBottom: '0.5rem' }}>JAPAN HQ</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>International Ops, Tokyo</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <a href="mailto:corp@virsoftech.com" className="btn btn-primary" style={{ padding: '1.5rem' }}>Email Institutional Sales</a>
                <a href="tel:9319275051" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', padding: '1.5rem' }}>Call HQ (+91) 9319275051</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Partner with <span className="gradient-text">eVAL</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Experience 100% accuracy and institutional transparency in your examination lifecycle.</p>
          <a href='/book-demo'> <button className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Request Institutional Demo</button></a>
        </div>
      </section>
    </div>
  );
};

export default Clients;
