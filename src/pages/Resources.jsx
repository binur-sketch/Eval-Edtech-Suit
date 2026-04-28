import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import * as Icons from '../components/LucideFix';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('status', 'published')
          .order('date', { ascending: false });
        
        if (error) throw error;
        setBlogs(data || []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        // Fallback or error handling
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter(b => b.category === activeCategory);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Insights & Resources | eVAL Edtech Blog"
        description="Stay updated with the latest trends in OMR technology, digital marking, and AI-powered proctoring for educational institutions."
      />

      {/* HERO */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, rgba(14,165,164,0.05), white)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <span className="badge">Knowledge Hub</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.2rem)' }}>
            eVAL <span className="gradient-text">Insights</span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--muted-foreground)',
            marginTop: '1rem'
          }}>
            Explore trends in examination technology, ed-tech innovations,
            and institutional best practices.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}>
            {/* Sidebar / Category Filter */}
            <aside style={{
              background: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              height: 'fit-content',
              border: '1px solid var(--border)',
              position: 'sticky',
              top: '120px'
            }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Categories</h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {categories.map((cat, i) => {
                  const count =
                    cat === 'All'
                      ? blogs.length
                      : blogs.filter(b => b.category === cat).length;

                  return (
                    <button
                      key={i}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.75rem',
                        border: 'none',
                        cursor: 'pointer',
                        background:
                          activeCategory === cat
                            ? 'var(--primary)'
                            : 'transparent',
                        color:
                          activeCategory === cat
                            ? 'white'
                            : 'var(--foreground)',
                        fontWeight: '600',
                        transition: '0.3s'
                      }}
                    >
                      <span>{cat}</span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Blog Content */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <h3>
                  {activeCategory} Blogs ({filteredBlogs.length})
                </h3>
              </div>

              {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
                  <div className="loader"></div>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gap: '2rem'
                }}>
                  {filteredBlogs.map((blog, i) => (
                    <article
                      key={blog.id || i}
                      style={{
                        background: 'white',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        border: '1px solid var(--border)',
                        transition: '0.3s',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      className="hover-lift"
                    >
                      <div style={{ height: '220px', overflow: 'hidden' }}>
                        <img
                          src={blog.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60'}
                          alt={blog.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>

                      <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          fontSize: '0.75rem',
                          color: 'var(--muted-foreground)',
                          marginBottom: '1rem'
                        }}>
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          <span>•</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Icons.Eye size={14} /> {blog.views || 0}
                          </span>
                          <span>•</span>
                          <span>{blog.author}</span>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{blog.title}</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem', flexGrow: 1 }}>{blog.excerpt}</p>

                        <Link
                          to={`/blog/${blog.slug || blog.id}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--primary)',
                            fontWeight: '700'
                          }}
                        >
                          Read More <Icons.ArrowRight size={16} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;