import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const IndustryVerticals = () => {
  const verticals = [
    {
      icon: <Icons.GraduationCap size={32} />,
      title: 'Higher Education',
      desc: 'Universities and colleges managing entrance exams, semester evaluations, and accreditation assessments.',
      stat: '2000+ Universities'
    },
    {
      icon: <Icons.School size={32} />,
      title: 'K-12 & Schools',
      desc: 'CBSE, ICSE, and state boards conducting periodic assessments, scholarship tests, and Olympiad evaluations.',
      stat: '1500+ Schools'
    },
    {
      icon: <Icons.Building2 size={32} />,
      title: 'Corporate Training',
      desc: 'Fortune 500 companies running certification programs, compliance assessments, and skill evaluations.',
      stat: '200+ Corporates'
    },
    {
      icon: <Icons.Landmark size={32} />,
      title: 'Government & PSU',
      desc: 'State and national boards conducting large-scale recruitment exams, civil services prelims, and public examinations.',
      stat: '50+ Government Bodies'
    },
    {
      icon: <Icons.Stethoscope size={32} />,
      title: 'Medical & Pharmacy',
      desc: 'Medical councils and pharmacy boards running NEET-type examinations with strict proctoring and security.',
      stat: '300+ Medical Institutes'
    },
    {
      icon: <Icons.Award size={32} />,
      title: 'Competitive Coaching',
      desc: 'JEE, NEET, and banking exam coaching chains standardizing mock tests across hundreds of centers.',
      stat: '800+ Coaching Centers'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge">Industry Solutions</span>
          <h2>Empowering Every <span className="gradient-text">Sector</span></h2>
          <p style={{ maxWidth: '640px', margin: '0 auto' }}>Purpose-built solutions for the unique assessment challenges of every industry vertical.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
          {verticals.map((v, i) => (
            <div key={i} className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary)', background: 'var(--primary-light)', padding: '1rem', borderRadius: '1.25rem' }}>{v.icon}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{v.stat}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem', flex: 1 }}>{v.desc}</p>
              <Link to="/book-demo" style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '8px', 
                fontWeight: '800', color: 'var(--primary)', fontSize: '0.875rem',
                textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                Learn More <Icons.ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticals;
