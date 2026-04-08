import React from 'react';
import * as Icons from '@/components/LucideFix';

const TeamSection = () => {
  const team = [
    { name: 'Dr. Arpit Verma', role: 'Head of Evaluation Tech', bio: 'PhD in Cognitive Assessment with 15+ years in Psychometrics.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Sameer Malhotra', role: 'Chief Systems Architect', bio: 'Specialist in high-concurrency cloud examination frameworks.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Ananya Sharma', role: 'Director of Institutional Success', bio: 'Ensuring seamless digitisation for 2000+ government schools.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop' }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }} class="reveal">
          <span className="badge">Our People</span>
          <h2>Driven by <span className="gradient-text">Academic Experts</span></h2>
          <p>The EVAL suite is built by a multidisciplinary team of educators, data scientists, and security engineers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {team.map((member, idx) => (
            <div key={idx} className="card reveal" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
              <img 
                src={member.img} 
                alt={member.name} 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  marginBottom: '1.5rem',
                  border: '4px solid var(--primary-light)',
                  objectFit: 'cover'
                }} 
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{member.name}</h3>
              <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem' }}>{member.role}</div>
              <p style={{ fontSize: '0.875rem', marginBottom: 0, color: 'var(--muted-foreground)' }}>{member.bio}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '1.5rem', opacity: 0.5 }}>
                <a href="#"><Icons.Linkedin size={16} /></a>
                <a href="#"><Icons.Twitter size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
