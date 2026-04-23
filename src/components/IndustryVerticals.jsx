import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const IndustryVerticals = () => {
  const verticals = [
    {
      icon: <Icons.Award size={32} />,
      title: 'Coaching Institutes',
      desc: 'JEE, NEET, and banking exam coaching chains standardizing mock tests across hundreds of centers.',
      stat: '800+ Coaching Centers'
    },
    {
      icon: <Icons.School size={32} />,
      title: 'K-12 & Schools',
      desc: 'CBSE, ICSE, and state boards conducting periodic assessments, scholarship tests, and Olympiad evaluations.',
      stat: '1500+ Schools'
    },
    {
      icon: <Icons.Landmark size={32} />,
      title: 'Government & PSU',
      desc: 'State and national boards conducting large-scale recruitment exams, civil services prelims, and public examinations.',
      stat: '50+ Government Bodies'
    },
    {
      icon: <Icons.GraduationCap size={32} />,
      title: 'Higher Education',
      desc: 'Universities and colleges managing entrance exams, semester evaluations, and accreditation assessments.',
      stat: '2000+ Universities'
    },

    {
      icon: <Icons.Building2 size={32} />,
      title: 'Corporate Training',
      desc: 'Fortune 500 companies running certification programs, compliance assessments, and skill evaluations.',
      stat: '200+ Corporates'
    },

    {
      icon: <Icons.Stethoscope size={32} />,
      title: 'Olympiad Examination Bodies',
      desc: 'Olympiad organizations conducting competitive exams to identify academic excellence across schools and institutions.',
      stat: '300+ Examination Bodies'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--muted)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge">Industry Solutions</span>
          <h2>Empowering Every <span className="gradient-text">Sector</span></h2>
          <p style={{ maxWidth: '640px', margin: '0 auto' }}>Purpose-built solutions for the unique assessment challenges of every industry vertical.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {verticals.map((v, i) => (
            <div key={i} className="hover-lift" style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              borderRadius: '1.75rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid var(--border)',
              transition: 'all 0.4s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{
                  color: 'var(--primary)',
                  background: 'var(--primary-light)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{v.icon}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{v.stat}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--foreground)' }}>{v.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem', flex: 1, lineHeight: '1.7' }}>{v.desc}</p>


            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default IndustryVerticals;
