import React from 'react';
import * as Icons from '@/components/LucideFix';

const team = [
  {
    name: 'Deepak Garg',
    role: 'Managing Director',
    bio: 'Techno-businessman with 20+ years of product innovation at HCL and Adobe.',
    img: 'https://www.virsoftech.com/img/deepak_garg.jpg',
    linkedin: 'https://www.linkedin.com/in/deepakgarg76/',
    mail: 'deepak.garg@virsoftech.com'
  },
  {
    name: 'Abhijeet Jain',
    role: 'Chief Technology Officer',
    bio: 'Computer Scientist and contributor to PDF ISO specifications.',
    img: 'https://www.virsoftech.com/img/abhijeet_pic.jpg',
    linkedin: 'https://www.linkedin.com/in/abhijeet-jain-5a9b313/',
    mail: 'abhijeet.jain@virsoftech.com'
  },
  {
    name: 'Pralaypati Ta',
    role: 'Principal Architect',
    bio: '18+ years of tech leadership experience leading R&D at Samsung and Adobe.',
    img: 'https://www.virsoftech.com/img/Pralay-photo.png',
    linkedin: 'https://www.linkedin.com/in/pralaypati-ta-3944691/',
    mail: 'pralaypati.ta@virsoftech.com'
  },
  {
    name: 'Sameer Manuja',
    role: 'Principal Architect',
    bio: 'Key architect creating path-setting innovations holding US patents.',
    img: 'https://www.virsoftech.com/sameer_manuja.jpg',
    linkedin: 'https://www.linkedin.com/in/sameermanuja/',
    mail: 'sameer.manuja@virsoftech.com'
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }} className="reveal">
          <span className="badge">Our People</span>
          <h2>Driven by <span className="gradient-text">Academic Experts</span></h2>
          <p>The eVAL suite is built by a multidisciplinary team of educators, data scientists, and security engineers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
          {team.map((member, idx) => (
            <div key={idx} className="card reveal" style={{ textAlign: 'center' }}>
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                style={{
                  width: '100px', height: '100px', borderRadius: '50%',
                  marginBottom: '1.25rem', border: '4px solid var(--primary-light)', objectFit: 'cover'
                }}
              />
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{member.name}</h3>
              <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>{member.role}</div>
              <p style={{ fontSize: '0.875rem', marginBottom: 0, color: 'var(--muted-foreground)' }}>{member.bio}</p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '1.25rem' }}>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'opacity 0.2s', opacity: 0.7 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}>
                    <Icons.Linkedin size={18} />
                  </a>
                )}
                {member.mail && (
                  <a href={`mailto:${member.mail}`} style={{ color: 'var(--primary)', transition: 'opacity 0.2s', opacity: 0.7 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}>
                    <Icons.Mail size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
