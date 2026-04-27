import * as Icons from '@/components/LucideFix';
import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';

const LMSPage = () => {
  const roles = [
    { title: 'Students / Candidates', desc: 'Access courses, submit tests, view results and feedback', icon: <Icons.User /> },
    { title: 'Teachers', desc: 'Create and deliver content, assign homework, evaluate performance', icon: <Icons.GraduationCap /> },
    { title: 'Parents', desc: 'Monitor child\'s progress, attendance, and performance', icon: <Icons.Users /> },
    { title: 'Trainers', desc: 'Manage training programmes, deliver content, assess learners', icon: <Icons.Laptop /> },
    { title: 'Supervisors / Managers', desc: 'Oversee batches, track completion, manage reporting', icon: <Icons.Briefcase /> },
    { title: 'Support Staff', desc: 'Manage user queries, resolve system issues', icon: <Icons.Phone /> },
    { title: 'Group Leads', desc: 'Manage specific learner groups and their content access', icon: <Icons.Users /> },
    { title: 'Facilitators', desc: 'Assist in course delivery and interactive sessions', icon: <Icons.MessageSquare /> },
    { title: 'Branch Supervisors', desc: 'Manage users and operations across branches', icon: <Icons.MapPin /> },
    { title: 'Admins', desc: 'Configure all platform settings, user management, and system oversight', icon: <Icons.Settings /> }
  ];

  const courseBatchFeatures = [
    { title: 'Course Creation', desc: 'Create rich content courses with a structured delivery plan. Define subjects, topics, and sub-topics. Manage classes, sections, courses, groups, and centres.', icon: <Icons.BookOpen /> },
    { title: 'Rich Content Delivery', desc: 'Deliver courses on the web in varying formats: rich text, video, audio, animated images, large documents, case studies, samples, and interactive quizzes.', icon: <Icons.MonitorPlay /> },
    { title: 'Batch Assignment', desc: 'Create groups, batches, and sections and assign them to learners. Assign learning assets and goals. Manage content access and monitoring.', icon: <Icons.Users /> },
    { title: 'Secure Role-Based Access', desc: 'Permission-based access to all content. Manage passwords, security, and entitlements to ensure only authorised access.', icon: <Icons.Lock /> },
    { title: 'Timetable Management', desc: 'Create and assign multiple timetables. Create sessions and assign teachers, group leads, and student groups.', icon: <Icons.Calendar /> },
    { title: 'Library & Asset Management', desc: 'Manage your institutional library. Track books available, issued, and in use. Assign books based on subjects and student needs.', icon: <Icons.Library /> }
  ];

  const evalReportFeatures = [
    { title: 'Assessment & Evaluation', desc: 'Create, assign, deliver, evaluate, and analyse all tests. Manage student performance through follow-up tests and learning goals. Conduct tests in multiple formats.', icon: <Icons.CheckSquare /> },
    { title: 'Performance Tracking', desc: 'Track lesson completion rates. Create, monitor, publish, and share reports and rankings. Identify learning and training gaps.', icon: <Icons.TrendingUp /> },
    { title: 'User Reports', desc: 'Complete transparency with reports for all user roles. Covers tests, performance, behaviour, and access to educational resources.', icon: <Icons.FileText /> }
  ];

  const additionalModules = [
    { title: 'Attendance Management', desc: 'Track, record, and reward attendance of students and educators across all sessions and courses.', icon: <Icons.Clock /> },
    { title: 'Notifications', desc: 'Automatic notifications via email, SMS, and WhatsApp for updates, reminders, and alerts.', icon: <Icons.Bell /> },
    { title: 'Homework Management', desc: 'Create, assign, review, verify, and follow-up on homework and home assignments.', icon: <Icons.Home /> },
    { title: 'Reward Points', desc: 'Manage student rating and aspirations through reward points for attendance, performance, behaviour, and co-curricular work.', icon: <Icons.Star /> },
    { title: 'Test Bank Management', desc: 'Ingest all questions, apply advanced search and filters, and create tests for different lesson plans and levels with various question types.', icon: <Icons.Database /> },
    { title: 'Certification Management', desc: 'Upload certificate templates and automatically generate certificates upon successful course completion.', icon: <Icons.Award /> },
    { title: 'Registration Management', desc: 'Complete user registration workflows with account login, forget password, and OTP support.', icon: <Icons.UserPlus /> },
    { title: 'Payment Gateway', desc: 'Payment gateway integration ready for course fees, subscriptions, and other transactions.', icon: <Icons.CreditCard /> },
    { title: 'Reports & Roster', desc: 'High-level management reports for tracking performance, roster of users, and activity logs.', icon: <Icons.PieChart /> }
  ];
  const lmsFaqs = [
    {
      question: "What features does your LMS offer?",
      answer: "Our LMS includes course management, student tracking, assessments, content delivery, and performance analytics."
    },
    {
      question: "Can we upload different types of learning content?",
      answer: "Yes, videos, PDFs, presentations, quizzes, and interactive modules can all be uploaded."
    },
    {
      question: "Does LMS support live classes??",
      answer: "Yes, it integrates with live class tools for real-time teaching and interaction."
    },
    {
      question: "Can we track student performance?",
      answer: "Yes, detailed analytics and reports help monitor student progress and engagement."
    },
    {
      question: "Is the LMS customizable?",
      answer: "Yes, the platform can be tailored to your institution’s branding and learning requirements."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title="Learning Management System (LMS) | Education Technology"
        description="A powerful Learning Management System (LMS) for schools and universities. Manage courses, track student progress, and deliver blended learning."
        keywords="LMS, Learning Management System, Education Software, E-learning Platform, School Management Software"
      />
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">LMS Central</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>Learning <span className="gradient-text">Management System</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                VIR Softech's Learning Management System (LMS) is an easy and efficient way to deliver student learning and manage the entire learning process at scale. Everything needed to manage learning efficiently, productively, and cost-effectively is built into this platform.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--muted-foreground)', fontWeight: '500', marginBottom: 0 }}>
                Whether your institution is a school, university, government cell, or training centre, the eVAL LMS is designed to be flexible, scalable, and future-ready. It supports online classrooms, self-paced courses, and a full management portal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Enquiry Now</Link>
                <Link to="/book-demo" className="btn btn-outline">Request Demo</Link>
              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/LMS.png" alt="LMS Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Role Management */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Comprehensive <span className="gradient-text">Role Management</span></h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--muted-foreground)' }}>The LMS supports a comprehensive hierarchy of roles, each with defined access and responsibilities.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {roles.map((r, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ color: 'white', padding: '12px', background: 'var(--primary-dark)', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem' }}>{r.icon}</div>
                  <h3 style={{ fontSize: '1.125rem', margin: 0 }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course & Batch Management */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Course & Batch <span className="gradient-text">Management</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {courseBatchFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'white', color: 'var(--primary)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border)' }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation & Reports Management */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Evaluation & <span className="gradient-text">Reports Management</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {evalReportFeatures.map((f, i) => (
              <div key={i} className="card" style={{ padding: '3rem', borderLeft: '4px solid var(--primary)', background: 'var(--muted)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--primary)' }}>{f.icon}</span> {f.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Modules */}
      <section className="section-padding" style={{ background: 'var(--muted)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Accent */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Extended Capabilities</span>
            <h2>Powerful <span className="gradient-text">Additional Modules</span></h2>
            <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: 'var(--muted-foreground)' }}>Enhance your institutional ecosystem with these specialized integration modules.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {additionalModules.map((m, i) => (
              <div key={i} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '1.5rem',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }} className="hover-lift">
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', background: 'var(--primary-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {React.cloneElement(m.icon, { size: 24 })}
                </div>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.125rem', marginBottom: '0.75rem', fontWeight: '700' }}>{m.title}</h4>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to empower your educators and learners?</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Build a future-ready educational ecosystem with the eVAL Learning Management System.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Request Implementation</Link>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={lmsFaqs} />

    </div>
  );
};

export default LMSPage;
