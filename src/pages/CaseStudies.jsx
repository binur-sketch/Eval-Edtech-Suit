import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/common/SectionHeader';

const CaseStudies = () => {
  const segments = [
    // {
    //   id: 'coaching',
    //   title: 'Coaching Institutes',
    //   icon: <Icons.GraduationCap size={24} />,
    //   cases: [
    //     {
    //       title: 'JEE/NEET Mock Scalability',
    //       client: 'Premium Medical Coaching',
    //       tagline: 'High-Concurrency OMR Evaluation',
    //       tags: ['OMR', 'Analytics', '24h Results'],
    //       color: '#0EA5A4',
    //       background: 'A top-tier coaching institute with 50+ centers across India needed to evaluate 2 lakh mock test OMR sheets every weekend with results delivered to parents within 24 hours.',
    //       points: [
    //         'Distributed scanning across 50 centers',
    //         'Centralized cloud-based processing',
    //         'Instant SMS & App result delivery',
    //         'AI-driven error correction for stray marks'
    //       ],
    //       solution: 'Vir Softech deployed a decentralized OMR evaluation system with real-time cloud sync and automated error-resolution workflows.',
    //       features: [
    //         { title: 'Cloud-Sync OMR', items: ['Center-wise progress tracking', 'Instant data upload & validation'] },
    //         { title: 'Predictive Analytics', items: ['Student performance heatmaps', 'Topic-wise difficulty analysis'] }
    //       ],
    //       outcomes: [
    //         'Result time reduced from 72 hours to 12 hours',
    //         'Eliminated 100% of manual data entry errors',
    //         'Enhanced student trust with transparent scoring'
    //       ]
    //     },
    //     {
    //       title: 'Adaptive Learning Path',
    //       client: 'National Engineering Prep',
    //       tagline: 'Personalized Diagnostic Assessments',
    //       tags: ['CBT', 'AI', 'Adaptive'],
    //       color: '#0EA5A4',
    //       background: 'Developing a secure CBT platform for adaptive testing to identify student weak areas in real-time.',
    //       points: ['Secure remote proctoring', 'Dynamic question difficulty selection'],
    //       solution: 'AI-integrated CBT platform with behavioral analysis.',
    //       features: [{ title: 'AI Engine', items: ['Pattern recognition', 'Auto-scaling infrastructure'] }],
    //       outcomes: ['15% reduction in student dropout', '2x faster syllabus coverage']
    //     }
    //   ]
    // },
    // {
    //   id: 'k12',
    //   title: 'K-12 & Schools',
    //   icon: <Icons.BookOpen size={24} />,
    //   cases: [
    //     {
    //       title: 'West African Assessment',
    //       client: 'Ministry of Education',
    //       tagline: 'Nationwide Offline OMR Digitization',
    //       tags: ['International', 'OMR', 'Low Infrastructure'],
    //       color: '#10B981',
    //       background: 'Collaborated with a Ministry of Education to digitize the assessment of 4 million students in remote areas with limited internet access.',
    //       points: [
    //         'Battery-operated scanning solutions',
    //         'Offline data validation logic',
    //         'Secure encrypted data storage',
    //         'State-level result consolidation'
    //       ],
    //       solution: 'A custom offline-first OMR evaluation suite with encrypted thumb-drive data transfer and central hub consolidation.',
    //       features: [
    //         { title: 'Offline Validator', items: ['Hardware-agnostic sheet reading', 'Built-in battery backup support'] },
    //         { title: 'Secure Vault', items: ['End-to-end data encryption', 'Tamper-evident log system'] }
    //       ],
    //       outcomes: [
    //         'Evaluated 4 million students in record 21 days',
    //         'zero data loss across 12,000 schools',
    //         'First digital learning baseline for the nation'
    //       ]
    //     }
    //   ]
    // },
    {
      id: 'govt',
      title: 'Government & PSU',
      icon: <Icons.Building2 size={24} />,
      cases: [
        {
          title: 'National Achievement Survey (NAS) - 2017',
          client: 'Ministry of Education, Government of India',
          tagline: 'Large-Scale Learning Outcome Assessment',
          tags: ['National', 'OMR', 'NCERT'],
          color: '#6366F1',
          background: 'The National Achievement Survey (NAS) is a nationwide assessment conducted by the Ministry of Education (MoE) through NCERT to evaluate learning outcomes of school students at the system level.',
          points: [
            'Measures learning outcomes across schools',
            'Identifies learning gaps at system level',
            'Informs teaching policies & resource allocation'
          ],
          solution: 'Deployment of eVAL OMR Software and Scanners across 700+ DIET centers pan-India for rapid scanning and centralized reporting.',
          features: [
            { title: 'Nationwide Deployment', items: ['700+ DIET centers supported', 'Scanning of millions of OMR sheets'] },
            { title: 'Data Analytics', items: ['99.9% data accuracy with auto-validation', 'Dashboard for actionable insights'] }
          ],
          outcomes: [
            'Evaluated 2.2 million students rapidly',
            'Reduced evaluation time to just a few days',
            'Enhanced transparency for educational stakeholders'
          ]
        },
        // {
        //   title: 'National Recruitment Drive',
        //   client: 'Central Agency (UPSC Style)',
        //   tagline: 'High-Stakes Examination Security',
        //   tags: ['Govt', 'Security', 'Scale'],
        //   color: '#6366F1',
        //   background: 'Executing a pan-India recruitment exam for 1.2 million aspirants with 100% security and zero dispute tolerance.',
        //   points: [
        //     '400+ cities, 3000+ centers',
        //     'Double-blind evaluation process',
        //     'Forensic auditing of OMR sheets',
        //     'RT-OCR for roll number validation'
        //   ],
        //   solution: 'End-to-end secure evaluation workflow with physical-to-digital tracking and multi-tier auditing.',
        //   features: [
        //     { title: 'Security Protocol', items: ['Biometric sync with roll numbers', 'Encrypted result database'] },
        //     { title: 'Auditing Suite', items: ['Full sheet image archiving', 'Log-level tracking of every marker'] }
        //   ],
        //   outcomes: [
        //     'Completed evaluation in 15 days',
        //     '100% dispute-free result publication',
        //     'Saved 40% in logistics costs'
        //   ]
        // },
        // {
        //   title: 'State Civil Services Marks Processing',
        //   client: 'State Public Service Commission',
        //   tagline: 'Automated ICR/OCR Based Data Extraction',
        //   tags: ['ICR', 'OCR', 'Security'],
        //   color: '#6366F1',
        //   background: 'The Commission needed to process handwritten marks from subjective answer scripts for thousands of aspirants with absolute data integrity.',
        //   points: [
        //     'Handwritten marks extraction',
        //     'Automated totaling & validation',
        //     'Secure integration with result database'
        //   ],
        //   solution: 'Advanced ICR-based marks processing system that reads examiner-written marks directly from the sheets.',
        //   features: [
        //     { title: 'ICR Intelligence', items: ['Reads handwritten numerical digits', 'Multi-layer validation rules'] }
        //   ],
        //   outcomes: [
        //     'Eliminated 100% human calculation errors',
        //     'Reduced result turnaround by 60%',
        //     'Audit-ready digital marks archive'
        //   ]
        // }
      ]
    },
    // {
    //   id: 'university',
    //   title: 'Universities & Colleges',
    //   icon: <Icons.Library size={24} />,
    //   cases: [
    //     {
    //       title: 'University Digitalization',
    //       client: 'Leading Engineering College',
    //       tagline: 'End-to-End CBT & OSM Implementation',
    //       tags: ['CBT', 'OSM', 'Campus-wide'],
    //       color: '#EC4899',
    //       background: 'Transitioning a 50-year old paper-based technical university to a fully digital evaluation ecosystem.',
    //       points: [
    //         'Digital question bank management',
    //         'On-screen marking for subjective papers',
    //         'Automated mark-sheet generation',
    //         'Alumni database integration'
    //       ],
    //       solution: 'eVAL integrated suite for both objective (CBT) and subjective (OSM) evaluation.',
    //       features: [
    //         { title: 'OSM Workspace', items: ['Multi-examiner consensus marking', 'Digital annotation tools'] },
    //         { title: 'Student Portal', items: ['Instant marks view', 'Re-evaluation request workflow'] }
    //       ],
    //       outcomes: [
    //         'Reduced exam overhead by 40%',
    //         'Result turnaround improved from 60 to 12 days',
    //         '100% elimination of manual totaling errors'
    //       ]
    //     },
    //     {
    //       title: 'Medical College Subjective Marking',
    //       client: 'National Medical Board',
    //       tagline: 'High-Precision OSM for Medical Finals',
    //       tags: ['Medical', 'OSM', 'Quality Assurance'],
    //       color: '#EC4899',
    //       background: 'Evaluating subjective medical theory papers requires specialized markers and high consistency across different regions.',
    //       points: [
    //         'Decentralized marking by doctors',
    //         'Standardized marking rubrics',
    //         'Real-time progress monitoring'
    //       ],
    //       solution: 'Secure OSM platform with medical-grade data privacy and multi-stage verification.',
    //       features: [
    //         { title: 'Marking Rubrics', items: ['Criterion-based scoring', 'Auto-calculation of complex parts'] }
    //       ],
    //       outcomes: [
    //         'Increased marking speed by 3x',
    //         'Zero disputes on subjective totals',
    //         'Streamlined regional moderator review'
    //       ]
    //     }
    //   ]
    // },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Icons.Factory size={24} />,
      cases: [
        {
          title: 'OEE Tracking & Machinery Output Optimization',
          client: 'Panasonic (Factory Automation)',
          tagline: 'Data-Driven Manufacturing Intelligence',
          tags: ['OEE', 'Manufacturing', 'OMR'],
          color: '#F59E0B',
          background: 'Panasonic faced critical challenges in monitoring shop-floor productivity across 3 daily shifts. Manual logbook entries were prone to errors, leading to inaccurate OEE (Overall Equipment Effectiveness) data and delayed performance audits.',
          points: [
            'Monitoring 50+ production lines across multiple shifts',
            'Requirement for 100% data integrity for ISO audits',
            'Need for instant visual performance indicators'
          ],
          solution: 'Implemented a high-speed OMR-based data capture system using ruggedized "OEE Log Sheets". Operators bubble in machine status and output, which are scanned and processed by eVAL OMR using proprietary color-coded logic (Blue/Green/Orange/Pink) for instant visualization.',
          features: [
            { title: 'OEE Logic Engine', items: ['Shift-segregated performance tracking', 'Color-coded threshold mapping (Blue to Pink)'] },
            { title: 'Reporting Analytics', items: ['Automated OEE dashboard generation', 'Instant CSV/PDF export for ISO compliance'] }
          ],
          outcomes: [
            'Data Precision: Eliminated 100% of manual calculation errors',
            'Time Efficiency: Reduced monthly reporting time from 5 days to 10 minutes',
            'Proactive Maintenance: Identified machinery bottlenecks 25% faster'
          ]
        },
        // {
        //   title: 'Safety Compliance Audit',
        //   client: 'Automotive Giant',
        //   tagline: 'Worker Skill & Safety Certification',
        //   tags: ['Compliance', 'CBT', 'OSM'],
        //   color: '#F59E0B',
        //   background: 'Ensuring 10,000+ assembly line workers are certified for safety compliance and technical skills periodically.',
        //   points: [
        //     'Kiosk-based testing in factories',
        //     'Multilingual assessment support',
        //     'Auto-renewal certification triggers',
        //     'Skills matrix for HR'
        //   ],
        //   solution: 'Custom enterprise testing platform with automated certification lifecycle management.',
        //   features: [
        //     { title: 'Enterprise CBT', items: ['Offline kiosk support', 'Multilingual interface'] },
        //     { title: 'Compliance Dashboard', items: ['Safety status monitoring', 'Renewal alerts'] }
        //   ],
        //   outcomes: [
        //     '100% compliance across 5 global plants',
        //     'Improved safety score by 25%',
        //     'Real-time skill availability data for project planning'
        //   ]
        // }
      ]
    },
    {
      id: 'olympiad',
      title: 'Olympiad Examination',
      icon: <Icons.Trophy size={24} />,
      cases: [
        {
          title: 'Olympiad Management Solution',
          client: 'Leading Pan-India Olympiad Organization',
          tagline: 'End-to-End Automated Examination Workflow',
          tags: ['Pan India', 'Automation', '1000+ Schools'],
          color: '#8B5CF6',
          background: 'A leading Olympiad organization conducting offline examinations across Pan India with more than 1,000+ schools was managing the entire examination process manually. From student registration and payment collection to OMR evaluation and result generation, every activity required significant manpower, resulting in delays and operational challenges.',
          points: [
            'Manual registration and payment collection challenges',
            'Complex logistics for 1,000+ schools',
            'Delayed OMR evaluation and result generation',
            'Difficulties in managing large-scale examinations efficiently'
          ],
          solution: 'We introduced a complete end-to-end Olympiad Management Solution that automated the entire examination workflow, streamlining operations and improving accuracy across all participating schools.',
          features: [
            { title: 'Registration & Portals', items: ['Website Design & Development', 'School & Student Registration Portal', 'Online Payment Management', 'Online Mock Examination Platform'] },
            { title: 'Operational Logistics', items: ['Logistics Management', 'OMR Sheet Printing & Personalization', 'OMR Processing & Evaluation'] },
            { title: 'Post-Exam Analytics', items: ['Result Generation & Performance Analytics', 'Automated E-Certificate Generation'] }
          ],
          outcomes: [
            'Lakhs of candidates managed smoothly every year',
            'Fully automated and scalable digital platform',
            'Faster processing and accurate results',
            'Seamless experience for schools and students'
          ]
        },
        // {
        //   title: 'Global Science Olympiad',
        //   client: 'Education Foundation',
        //   tagline: 'Unified Global Merit Ranking',
        //   tags: ['Global', 'Hybrid', 'Ranking'],
        //   color: '#8B5CF6',
        //   background: 'Conducting a science Olympiad for students across 12 countries with a single unified merit list.',
        //   points: [
        //     'Time-zone synced testing',
        //     'Multi-currency registration support',
        //     'International rank calculation',
        //     'Digital global certifications'
        //   ],
        //   solution: 'Cloud-based hybrid platform supporting both OMR and CBT for international reach.',
        //   features: [
        //     { title: 'Global Sync', items: ['Real-time participation tracking', 'Unified scoring engine'] },
        //     { title: 'Certification Hub', items: ['Digital badge generation', 'Secured sharable results'] }
        //   ],
        //   outcomes: [
        //     'Rankings published in 48 hours',
        //     'Participants from 12 countries managed seamlessly',
        //     'Enhanced global brand value for the foundation'
        //   ]
        // }
      ]
    }
  ];

  return (
    <div className="case-studies-page" style={{ paddingTop: 'var(--nav-height)', background: '#f8fafc' }}>
      <SEO
        title="Institutional Success Stories | eVAL Edtech"
        description="Browse our portfolio of examination transformation projects across coaching, schools, government, and universities."
      />

      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--secondary)', color: 'white', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', marginBottom: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white' }}>Institutional Portfolio</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 950, marginBottom: '1.5rem', lineHeight: 1, color: 'white' }}>
              Success <span className="gradient-text">Matrix</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              Proven transformation across 5000+ institutions. Explore our impact across various sectors.
            </p>
          </Reveal>
        </div>
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.3) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
      </section>

      {/* Segment Navigation - Redesigned as Button Cards */}
      <nav style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 'var(--nav-height)', zIndex: 100, padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {segments.map(s => (
            <a key={s.id} href={`#${s.id}`} className="segment-card-link" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1.25rem 1rem',
              background: 'white',
              borderRadius: '1.25rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              textAlign: 'center'
            }}>
              <div className="segment-icon-wrapper" style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--muted)',
                borderRadius: '0.75rem',
                color: 'var(--primary)',
                transition: 'all 0.3s'
              }}>
                {s.icon}
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--foreground)' }}>{s.title}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          {segments.map((segment) => (
            <div key={segment.id} id={segment.id} style={{ marginBottom: '8rem', scrollMarginTop: '160px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                <div style={{ padding: '1rem', background: 'white', borderRadius: '1.25rem', color: 'var(--primary)', boxShadow: 'var(--shadow-md)', display: 'flex' }}>
                  {segment.icon}
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: 0 }}>{segment.title}</h2>
                <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to right, var(--border), transparent)' }}></div>
              </div>

              <div style={{ display: 'grid', gap: '4rem' }}>
                {segment.cases.map((c, i) => (
                  <Reveal key={i}>
                    <div className="case-detail-card" style={{
                      background: 'white',
                      borderRadius: '3rem',
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                      boxShadow: '0 30px 60px -12px rgba(0,0,0,0.03)'
                    }}>
                      {/* Card Header */}
                      <div style={{
                        background: c.color,
                        padding: '2rem 3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          background: 'rgba(255,255,255,0.15)',
                          borderRadius: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icons.Award size={28} color="white" />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontWeight: 800 }}>{c.title}</h3>
                          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 600 }}>{c.client}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {c.tags.map(tag => (
                            <span key={tag} style={{
                              padding: '0.4rem 0.8rem',
                              background: 'rgba(255,255,255,0.12)',
                              borderRadius: '0.5rem',
                              fontSize: '0.65rem',
                              fontWeight: '700',
                              color: 'white',
                              textTransform: 'uppercase'
                            }}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {/* Left: Background & Points */}
                        <div>
                          <h4 style={{ color: c.color, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>Background & Context</h4>
                          <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
                            {c.background}
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            {c.points.map((item, idx) => (
                              <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                                <Icons.ChevronRight size={18} style={{ color: c.color, flexShrink: 0, marginTop: '2px' }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: Solution & Features */}
                        <div>
                          <h4 style={{ color: c.color, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>The Solution: {c.tagline}</h4>
                          <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '2rem', lineHeight: '1.7' }}>
                            {c.solution}
                          </p>
                          <div style={{ display: 'grid', gap: '1.25rem' }}>
                            {c.features?.map((block, idx) => (
                              <div key={idx} style={{ background: 'var(--muted)', borderRadius: '1.5rem', padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                  <Icons.CheckCircle2 size={18} style={{ color: c.color, flexShrink: 0 }} />
                                  <span style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--foreground)' }}>{block.title}</span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem' }}>
                                  {block.items.map((item, j) => (
                                    <li key={j} style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: '1.5' }}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer: Outcomes */}
                      <div style={{
                        background: '#f8fafc',
                        padding: '2rem 3rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)' }}>Impact & Outcomes</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', flex: 1 }}>
                          {c.outcomes.map((point, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--foreground)', fontSize: '0.875rem', fontWeight: 600 }}>
                              <Icons.Zap size={16} style={{ color: c.color, flexShrink: 0, marginTop: '2px' }} />
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{
            background: 'var(--secondary)',
            borderRadius: '3rem',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'white',
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Need a Detailed Case Study?</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem' }}>Contact our solutions team for institutional whitepapers and specific technical documentation.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Request Whitepaper</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .case-detail-card {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .case-detail-card:hover {
          transform: translateY(-5px);
        }
        .segment-card-link:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }
        .segment-card-link:hover .segment-icon-wrapper {
          background: var(--primary-light);
          color: var(--primary);
        }
      `}} />
    </div>
  );
};

export default CaseStudies;
