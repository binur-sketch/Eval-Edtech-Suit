import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import * as Icons from '../components/LucideFix';
import SEO from '../components/common/SEO';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loader"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <h2>Post not found</h2>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title={blog.title}
        description={blog.excerpt}
        ogImage={blog.image}
        ogType="article"
      />

      <article className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '2rem' }}>
            <Icons.ArrowLeft size={18} /> Back to Insights
          </Link>

          <header style={{ marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>{blog.category}</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>{blog.title}</h1>
            
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--muted-foreground)', fontSize: '0.9375rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.Calendar size={16} /> {new Date(blog.date).toLocaleDateString()}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.Clock size={16} /> {blog.read_time}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.User size={16} /> {blog.author}</span>
            </div>
          </header>

          <div style={{ width: '100%', height: 'auto', maxHeight: '500px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '3rem' }}>
            <img 
              src={blog.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop'} 
              alt={blog.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div 
            className="blog-content"
            style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--foreground)' }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--muted)', borderRadius: '2rem', textAlign: 'center' }}>
            <h3>Interested in our solutions?</h3>
            <p>Schedule a personalized demo with our experts today.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link to="/book-demo" className="btn btn-primary">Book Demo</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
