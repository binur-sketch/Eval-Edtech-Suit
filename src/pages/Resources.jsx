import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import blogs from '../data/blogs.json';
import * as Icons from '../components/LucideFix';

const Resources = () => {
  return (
    <div className="resources-page">
      <section className="section-padding" style={{ background: 'var(--muted)', minHeight: '100vh' }}>
        <div className="container">
          <SectionHeader 
            badge="Knowledge Hub"
            title="Latest Insights & Research"
            text="Exploring the future of academic evaluation, security, and institutional scalability."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {blogs.map((blog, i) => (
              <article key={i} className="card reveal" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '900', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {blog.date} • {blog.author}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>{blog.excerpt}</p>
                  <a href={`/blog/${blog.id}`} style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    fontWeight: '800', 
                    color: 'var(--secondary)',
                    fontSize: '0.8125rem'
                  }}>
                    READ FULL ARTICLE <Icons.Plus size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
