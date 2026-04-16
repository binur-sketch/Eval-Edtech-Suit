import React from 'react';
import blogs from '../data/blogs.json';
import * as Icons from '../components/LucideFix';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Knowledge Hub</span>
          <h1 style={{ fontSize: '3.5rem' }}>eVAL <br/><span className="gradient-text">Blog & Insights</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            Stay updated with the latest trends in examination technology, ed-tech innovations, and institutional best practices.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '3rem' }}>
            {blogs.map((blog, i) => (
              <article key={i} className="card hover-lift" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'white' }}>
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                    <span style={{ padding: '0.5rem 1rem', background: 'var(--primary)', color: 'white', borderRadius: '0.75rem', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>
                      Insights
                    </span>
                  </div>
                </div>
                <div style={{ padding: '3rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted-foreground)', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{blog.title}</h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem', flex: 1 }}>
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}
                  >
                    Read More <Icons.ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}

            {/* Newsletter Card */}
            <div className="card" style={{ padding: '4rem', background: 'var(--secondary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
               <Icons.Mail size={48} style={{ color: 'var(--primary)', marginBottom: '2rem', marginInline: 'auto' }} />
               <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1.5rem' }}>In-Depth Insights <br/><span className="gradient-text">To Your Inbox</span></h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>Subscribe to our monthly institutional digest for latest ed-tech trends.</p>
               <div style={{ display: 'grid', gap: '1rem' }}>
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }} 
                  />
                  <button className="btn btn-primary" style={{ padding: '1.25rem' }}>Subscribe Now</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Have a <span className="gradient-text">Topic in Mind?</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Our research team is always looking for new institutional challenges to explore.</p>
          <Link to="/contact" className="btn btn-outline" style={{ padding: '1.25rem 4rem' }}>Suggest an Article</Link>
        </div>
      </section>
    </div>
  );
};

export default Resources;
