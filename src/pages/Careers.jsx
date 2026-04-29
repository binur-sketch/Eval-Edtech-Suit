import * as Icons from '@/components/LucideFix';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import JobApplicationModal from '@/components/JobApplicationModal';

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  const values = [
    { icon: <Icons.Target size={32} />, title: 'Impact at Scale', desc: 'Your work directly impacts millions of students and thousands of institutions worldwide.' },
    { icon: <Icons.Lightbulb size={32} />, title: 'Innovation First', desc: 'We invest 30% of revenue back into R&D. Solve problems nobody else has tackled.' },
    { icon: <Icons.Users size={32} />, title: 'Diverse & Inclusive', desc: '120+ team members from 8 countries. We believe diverse perspectives build better products.' },
    { icon: <Icons.TrendingUp size={32} />, title: 'Growth Path', desc: 'Structured career ladders, mentorship programs, and learning budgets for every team member.' }
  ];

  const benefits = [
    { icon: <Icons.Heart size={24} />, title: 'Health & Wellness', items: ['Comprehensive health insurance for family', 'Mental health support & counselling', 'Gym membership reimbursement'] },
    { icon: <Icons.GraduationCap size={24} />, title: 'Learning & Development', items: ['₹1L annual learning budget', 'Conference sponsorships', 'Internal tech talks & workshops'] },
    { icon: <Icons.Clock size={24} />, title: 'Work-Life Balance', items: ['Flexible hybrid work model', '30 days paid time off', 'Sabbatical after 3 years'] },
  ];

  const openings = [
    { title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Noida / Remote', type: 'Full-time', level: 'Senior' },
    { title: 'ML Engineer — Computer Vision', department: 'Engineering', location: 'Noida', type: 'Full-time', level: 'Mid-Senior' },
    { title: 'Product Manager — CBT Platform', department: 'Product', location: 'Noida / Hybrid', type: 'Full-time', level: 'Senior' },
    { title: 'UX/UI Designer', department: 'Design', location: 'Remote', type: 'Full-time', level: 'Mid' },
    { title: 'Enterprise Sales Executive', department: 'Sales', location: 'Mumbai / Delhi', type: 'Full-time', level: 'Mid-Senior' },
    { title: 'Technical Support Lead', department: 'Support', location: 'Noida', type: 'Full-time', level: 'Senior' },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Mid' },
    { title: 'Content Strategist — EdTech', department: 'Marketing', location: 'Remote', type: 'Full-time', level: 'Mid' }
  ];

  const departments = ['All', ...new Set(openings.map(o => o.department))];
  const filtered = activeFilter === 'All' ? openings : openings.filter(o => o.department === activeFilter);

  return (
    <div style={{ paddingTop: '5rem' }}>
      <SEO
        title="Careers | Join the eVAL Edtech Team"
        description="Join a global leader in examination technology. Explore career opportunities in AI, software engineering, and educational consulting."
      />
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">We're Hiring</span>
          <h1 style={{ fontSize: '3.5rem' }}>Build the Future of <br /><span className="gradient-text">Education Technology</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Join a team of engineers, designers, and educators shaping how the world evaluates, learns, and grows. We're solving problems that impact millions.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#openings" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>View Open Roles</a>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Our Story</Link>
          </div>
        </div>
      </section>

      {/* Culture Stats */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', padding: '4rem 0', gap: '3rem' }}>
          {[
            { label: 'Team Members', value: '120+' },
            { label: 'Avg. Tenure', value: '10.5yr' },
            { label: 'Employee Rating', value: '4.6★' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Culture</span>
            <h2>Why People Love <span className="gradient-text">Working Here</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--muted)' }}>
                <div style={{ color: 'white', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-dark)', borderRadius: '1.5rem' }}>{v.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding" id="openings" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Open Positions</span>
            <h2>Find Your <span className="gradient-text">Next Role</span></h2>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {departments.map((dep, i) => (
              <button key={i} onClick={() => setActiveFilter(dep)} style={{
                padding: '0.6rem 1.5rem', borderRadius: '9999px', border: '1px solid var(--border)',
                background: activeFilter === dep ? 'var(--primary)' : 'white',
                color: activeFilter === dep ? 'white' : 'var(--muted-foreground)',
                fontWeight: '700', fontSize: '0.8125rem', cursor: 'pointer', transition: 'var(--transition)'
              }}>{dep}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {filtered.map((job, i) => (
              <div key={i} className="card" style={{
                padding: '2rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                background: 'white'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{job.title}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Icons.Briefcase size={14} /> {job.department}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Icons.MapPin size={14} /> {job.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Icons.Clock size={14} /> {job.type}</span>
                    <span style={{
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      background: 'var(--primary-light)', color: 'var(--primary)',
                      fontWeight: '700', fontSize: '0.75rem'
                    }}>{job.level}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 2rem', fontSize: '0.8125rem' }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedJob && (
          <JobApplicationModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </section>

      {/* Hiring Process */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Our Process</span>
            <h2>How We <span className="gradient-text">Hire</span></h2>
          </div>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {[
              { step: '01', title: 'Application Review', desc: 'Our talent team reviews every application within 48 hours. We value potential over pedigree.', icon: <Icons.FileText size={24} /> },
              { step: '02', title: 'Technical Assessment', desc: 'A take-home or live coding challenge designed to reflect real-world problems you would solve with us.', icon: <Icons.Code size={24} /> },
              { step: '03', title: 'Culture Conversation', desc: 'Meet the team leads. We assess mutual fit—values, communication, and collaboration style.', icon: <Icons.MessageCircle size={24} /> },
              { step: '04', title: 'Final Decision', desc: 'Fast turnaround. We respect your time—expect a decision within 5 business days of the final round.', icon: <Icons.CheckCircle2 size={24} /> }
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{
                  minWidth: '60px', height: '60px', borderRadius: '50%',
                  background: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '900', fontSize: '1.25rem', flexShrink: 0
                }}>{s.step}</div>
                <div className="card" style={{ padding: '2rem 2.5rem', flex: 1, background: 'var(--muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ color: 'var(--primary)' }}>{s.icon}</div>
                    <h4 style={{ marginBottom: 0, fontSize: '1.125rem' }}>{s.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            background: 'var(--secondary)', borderRadius: '3rem', padding: '6rem 3rem',
            color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Don't See Your <span className="gradient-text">Dream Role?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>
                We're always looking for exceptional talent. Send us your CV and tell us how you'd make an impact.
              </p>
              <a href="mailto:nishac@virsoftech.com" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                Send Open Application
              </a>
            </div>
          </div>
        </div>
        <div style={{ height: '4rem' }}></div>
      </section>
    </div>
  );
};

export default Careers;
