import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import blogs from '../data/blogs.json';
import * as Icons from '../components/LucideFix';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const whitepapers = [
    { title: 'The State of Digital Evaluation in India 2026', type: 'Research Report', pages: '42 pages', icon: <Icons.FileText size={24} /> },
    { title: 'OMR vs CBT: A Comparative Cost Analysis', type: 'Whitepaper', pages: '18 pages', icon: <Icons.BarChart3 size={24} /> },
    { title: 'AI Proctoring: Ethics, Accuracy & Implementation', type: 'Technical Brief', pages: '24 pages', icon: <Icons.Brain size={24} /> },
    { title: 'Building a Secure Question Bank at Scale', type: 'Best Practices Guide', pages: '32 pages', icon: <Icons.BookOpen size={24} /> }
  ];

  const webinars = [
    { title: 'Hybrid Examination Models: What Works in 2026', date: 'Apr 15, 2026', duration: '45 min', speakers: 'Dr. Rajesh Kumar, IIT Delhi', status: 'Upcoming' },
    { title: 'Scaling OMR to 1 Million+ Sheets', date: 'Mar 20, 2026', duration: '60 min', speakers: 'EVAL Engineering Team', status: 'On-Demand' },
    { title: 'GDPR & EdTech: Compliance Masterclass', date: 'Feb 28, 2026', duration: '50 min', speakers: 'Legal & Compliance Panel', status: 'On-Demand' }
  ];

  const caseStudyHighlights = [
    { client: 'NCERT', metric: '10M+ answer scripts', result: 'Zero totaling grievances', desc: 'Deployed EVAL OMR and OSM across national level exams with complete accuracy.', icon: <Icons.Award size={28} /> },
    { client: 'Aakash Institute', metric: '250+ centers', result: '100% Secure CBT', desc: 'Standardized testing with AI proctoring for competitive medical entrance exams.', icon: <Icons.ShieldCheck size={28} /> },
    { client: 'Amity University', metric: '100K students', result: 'Unified LMS + Exams', desc: 'Merged content delivery with secure examinations into one dashboard.', icon: <Icons.CheckCircle2 size={28} /> }
  ];

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'webinars', label: 'Webinars' },
    { id: 'case-studies', label: 'Case Studies' }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Knowledge Hub</span>
          <h1 style={{ fontSize: '3.5rem' }}>Insights, Research & <br/><span className="gradient-text">Thought Leadership</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Stay ahead of the curve with the latest in examination technology, institutional best practices, and digital evaluation innovation.
          </p>
        </div>
      </section>

      {/* Resource Tabs */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'white', position: 'sticky', top: '130px', zIndex: 50 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', overflow: 'auto' }}>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '1.25rem 2rem', border: 'none', background: 'none', cursor: 'pointer',
                fontWeight: '700', fontSize: '0.875rem', color: activeTab === tab.id ? 'var(--primary)' : 'var(--muted-foreground)',
                borderBottom: activeTab === tab.id ? '3px solid var(--primary)' : '3px solid transparent',
                transition: 'var(--transition)', whiteSpace: 'nowrap'
              }}>{tab.label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {(activeTab === 'all' || activeTab === 'blog') && (
        <section className="section-padding" style={{ background: 'var(--muted)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge">Latest Articles</span>
                <h2 style={{ marginBottom: '0.5rem' }}>Blog & <span className="gradient-text">Insights</span></h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
              {blogs.map((blog, i) => (
                <article key={i} className="card reveal" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <span style={{ padding: '0.4rem 1rem', borderRadius: '9999px', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article</span>
                    </div>
                  </div>
                  <div style={{ padding: '2.5rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '900', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {blog.date} • {blog.author}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>{blog.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>{blog.excerpt}</p>
                    <a href={`/blog/${blog.id}`} style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '800', color: 'var(--secondary)', fontSize: '0.8125rem'
                    }}>
                      READ FULL ARTICLE <Icons.ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}

              {/* Placeholder article for visual balance */}
              <article className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '240px', background: 'linear-gradient(135deg, var(--primary-light), #fff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icons.PenTool size={48} style={{ color: 'var(--primary)', opacity: 0.3 }} />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '900', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Coming Soon • EVAL Research
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Question Bank Optimization with Machine Learning</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>How AI is helping institutions build better, more balanced question papers automatically.</p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--muted-foreground)' }}>PUBLISHING SOON</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Whitepapers Section */}
      {(activeTab === 'all' || activeTab === 'whitepapers') && (
        <section className="section-padding" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span className="badge">Deep Dives</span>
              <h2>Whitepapers & <span className="gradient-text">Research</span></h2>
              <p>Expert research on examination technology, security, and digital transformation for institutions.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              {whitepapers.map((wp, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '1rem' }}>{wp.icon}</div>
                    <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--muted-foreground)', textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: 'var(--muted)', borderRadius: '9999px' }}>{wp.pages}</span>
                  </div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{wp.type}</div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', flex: 1 }}>{wp.title}</h4>
                  <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.8125rem', padding: '0.75rem' }}>
                    <Icons.Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Webinars Section */}
      {(activeTab === 'all' || activeTab === 'webinars') && (
        <section className="section-padding" style={{ background: 'var(--muted)' }}>
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <span className="badge">Learn Live</span>
              <h2>Webinars & <span className="gradient-text">Events</span></h2>
              <p>Join industry experts for live discussions on evaluation technology and institutional best practices.</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px' }}>
              {webinars.map((w, i) => (
                <div key={i} className="card" style={{
                  padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '1.5rem'
                }}>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1 }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '1.25rem',
                      background: w.status === 'Upcoming' ? 'var(--primary)' : 'var(--muted)',
                      color: w.status === 'Upcoming' ? 'white' : 'var(--primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Icons.Video size={28} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          padding: '0.2rem 0.75rem', borderRadius: '9999px', fontSize: '0.6875rem', fontWeight: '800',
                          background: w.status === 'Upcoming' ? 'var(--primary-light)' : 'var(--muted)',
                          color: w.status === 'Upcoming' ? 'var(--primary)' : 'var(--muted-foreground)',
                          textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}>{w.status}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{w.date} • {w.duration}</span>
                      </div>
                      <h4 style={{ fontSize: '1.0625rem', marginBottom: '0.35rem' }}>{w.title}</h4>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginBottom: 0 }}>{w.speakers}</p>
                    </div>
                  </div>
                  <button className={w.status === 'Upcoming' ? 'btn btn-primary' : 'btn btn-outline'} style={{ padding: '0.75rem 2rem', fontSize: '0.8125rem', flexShrink: 0 }}>
                    {w.status === 'Upcoming' ? 'Register Free' : 'Watch Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {(activeTab === 'all' || activeTab === 'case-studies') && (
        <section className="section-padding" style={{ background: 'white' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge">Proven Results</span>
                <h2>Featured <span className="gradient-text">Case Studies</span></h2>
              </div>
              <Link to="/clients" className="btn btn-outline" style={{ fontSize: '0.8125rem', padding: '0.75rem 2rem' }}>
                View All <Icons.ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
              {caseStudyHighlights.map((cs, i) => (
                <div key={i} className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ color: 'var(--primary)', background: 'var(--primary-light)', padding: '1rem', borderRadius: '1.25rem' }}>{cs.icon}</div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase' }}>{cs.metric}</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cs.result}</div>
                  <h3 style={{ fontSize: '1.375rem', marginBottom: '1rem' }}>{cs.client}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem', flex: 1 }}>{cs.desc}</p>
                  <Link to="/clients" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontWeight: '800', color: 'var(--primary)', fontSize: '0.875rem',
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>
                    Read Full Story <Icons.ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{
            background: 'var(--secondary)', borderRadius: 'clamp(1.5rem, 3vw, 3rem)', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 3vw, 3rem)',
            color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Icons.Mail size={48} style={{ color: 'var(--primary)', marginBottom: '2rem' }} />
              <h2 style={{ color: 'white', marginBottom: '1rem' }}>Stay <span className="gradient-text">Informed</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.0625rem' }}>
                Get monthly insights on examination technology, institutional best practices, and product updates delivered to your inbox.
              </p>
              <div style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input type="email" placeholder="your@institution.edu" style={{
                  flex: 1, minWidth: '240px', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '1rem'
                }} />
                <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
