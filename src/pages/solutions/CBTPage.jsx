import * as Icons from '@/components/LucideFix';
import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';

const CBTPage = () => {
  const steps = [
    { title: 'Candidate Registration', desc: 'Candidates register online by entering their personal, academic, and contact details along with uploading photograph and signature.' },
    { title: 'Center Setup', desc: 'Exam centers are added in the system with detailed information such as location and seating capacity.' },
    { title: 'Center Allocation', desc: 'System allocates candidates to centers automatically based on capacity and session availability.' },
    { title: 'Admit Card Generation', desc: 'Admit cards are generated with candidate details, exam center, date, and reporting instructions.' },
    { title: 'Exam Conduct', desc: 'Center administrator verifies candidate identity and allows access. Candidates login and begin the computer-based test in a secure environment.' },
    { title: 'Evaluation & Result', desc: 'Responses are evaluated automatically according to the defined marking scheme. Detailed reports are published for administrators and candidates.' },
  ];

  const features = [
    {
      title: 'Candidate Registration & Management',
      icon: <Icons.Users />,
      items: ['Online candidate registration portal', 'Bulk candidate upload', 'Candidate profile management', 'Photo & signature upload', 'Document verification support', 'Application status tracking']
    },
    {
      title: 'Exam Center Management',
      icon: <Icons.MapPin />,
      items: ['Multiple exam center creation', 'Center capacity configuration', 'Location-wise center mapping', 'Center admin login & infrastructure allocation', 'Center availability tracking']
    },
    {
      title: 'Computer Based Test Engine',
      icon: <Icons.Zap />,
      items: ['Multiple question types (MCQ, descriptive, etc.)', 'Section-wise exam structure', 'Timer-based exam control with auto-save functionality', 'Question randomization', 'Negative marking support', 'Multi-language support']
    },
    {
      title: 'Security Features',
      icon: <Icons.Lock />,
      items: ['Secure login authentication with role-based access control', 'Browser lockdown mode', 'Question encryption', 'Auto logout on inactivity', 'IP-based restriction and audit trail logs']
    },
    {
      title: 'Result Processing',
      icon: <Icons.CheckCircle2 />,
      items: ['Automatic evaluation with instant result generation', 'Score calculation and rank generation', 'Cut-off management and merit list creation']
    },
    {
      title: 'Reports & Analytics',
      icon: <Icons.BarChart2 />,
      items: ['Candidate performance report', 'Center-wise and session-wise performance reports', 'Attendance report and question analysis report', 'Export in Excel/PDF format']
    },
  ];
  const cbtFaqs = [
    {
      question: "What types of questions are supported in CBT?",
      answer: "The system supports MCQs, descriptive questions, case studies, and multimedia-based questions."
    },
    {
      question: "Can CBT exams be conducted remotely?",
      answer: "Yes, CBT can be conducted remotely with optional AI proctoring for secure monitoring."
    },
    {
      question: "How is result processing handled?",
      answer: "Objective questions are evaluated instantly, while descriptive answers can be assessed manually or via onscreen marking."
    },
    {
      question: "Is the platform scalable for large exams?",
      answer: "Yes, it is designed to handle thousands to lakhs of candidates simultaneously."
    },
    {
      question: "Can we schedule and manage multiple exams?",
      answer: "Yes, you can easily schedule, manage, and monitor multiple exams from a single dashboard."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Computer Based Test (CBT) Platform | Online Exam System"
        description="Secure and scalable Computer Based Test (CBT) platform for entrance exams, corporate assessments, and certifications. Feature-rich online examination system."
        keywords="CBT Platform, Online Exam Software, Computer Based Test System, Secure Online Assessment, Entrance Exam Software"
      />
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Overview</span>
              <h1 style={{ fontSize: '3.5rem' }}>Center Based <span className="gradient-text">Examination Solution</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                A comprehensive platform designed to conduct secure, scalable, and controlled computer-based tests at designated examination centers. This solution ensures a standardized testing environment, minimizes malpractice, and allows organizations to conduct large-scale examinations efficiently.</p>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', marginTop: '2rem' }}>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  It is suitable for universities, recruitment boards, certification bodies, government organizations, and corporates that require reliable exam execution across multiple locations. It ensures a fast, secure, and efficient process — eliminating logistical, administrative, and accuracy challenges of traditional paper-based evaluation.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Institutional Enquiry</Link>
                <Link to="/book-demo" className="btn btn-outline">Request Demo</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/CBT.png" alt="On-Screen Marking" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Process Flow */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>The CBT <span className="gradient-text">Process Flow</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {steps.map((s, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem', position: 'relative', background: 'var(--muted)' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '3.5rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.4 }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Key <span className="gradient-text">Features</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{ padding: '3rem', background: 'var(--muted)' }}>
                <div style={{ color: 'white', padding: '12px', background: 'var(--primary-dark)', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{f.title}</h3>
                <ul style={{ display: 'grid', gap: '0.875rem', padding: 0, listStyle: 'none' }}>
                  {f.items.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>
                      <Icons.ChevronRight size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ lineHeight: '1.5' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Build a Standardized Testing Environment</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>The choice for universities, recruitment boards, and government organizations looking to execute reliable exams across multiple locations.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Enquire for Partnerships</Link>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={cbtFaqs} />
    </div>
  );
};

export default CBTPage;


