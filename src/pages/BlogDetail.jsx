import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import * as Icons from '../components/LucideFix';
import SEO from '../components/common/SEO';

const BlogDetail = () => {
  const { id } = useParams(); // This could be an ID or a Slug
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        let query = supabase.from('blogs').select('*');

        // Determine if we should fetch by ID or Slug
        const isNumeric = /^\d+$/.test(id);
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

        if (isNumeric) {
          query = query.eq('id', parseInt(id));
        } else if (isUuid) {
          query = query.eq('id', id);
        } else {
          // It's a slug
          query = query.eq('slug', id);
        }

        const { data, error } = await query.single();

        if (error) throw error;
        setBlog(data);

        // Fetch related blogs
        if (data) {
          const { data: related, error: relatedError } = await supabase
            .from('blogs')
            .select('*')
            .neq('id', data.id)
            .eq('category', data.category)
            .limit(3);

          if (!relatedError) setRelatedBlogs(related);
        }

        // Increment view count securely via RPC
        if (data && data.id) {
          try {
            console.log('Incrementing views for:', data.id);
            const { error: rpcError } = await supabase.rpc('increment_blog_views', { blog_id: String(data.id) });

            if (rpcError) throw rpcError;

            // Optimistically update local state so user sees the increase
            setBlog(prev => prev ? { ...prev, views: (prev.views || 0) + 1 } : prev);

          } catch (e) {
            console.warn('View count increment failed. Ensure the SQL function "increment_blog_views" exists in your Supabase DB.', e);
          }
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = blog?.title || 'eVAL Insights';
    let shareUrl = '';

    switch (platform) {
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`; break;
      case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`; break;
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
    }

    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
  };

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
        <Link to="/blog" className="btn btn-primary">Back to Insights</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title={`${blog.title} | eVAL Insights`}
        description={blog.excerpt}
        ogImage={blog.image}
        ogType="article"
      />

      {/* Reading Progress Bar */}
      <div className="reading-progress-container">
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <article id="blog-detail-view" className="blog-container">
        {/* Modern Hero Header */}
        <div className="blog-hero">
          <Link to="/blog" className="back-link">
            <Icons.ArrowLeft size={18} /> Back to Insights
          </Link>

          <div className="hero-content">
            <span className="blog-badge">{blog.category}</span>
            <h1>{blog.title}</h1>

            {blog.excerpt && <p className="blog-excerpt">{blog.excerpt}</p>}

            <div className="blog-meta">
              <div className="author-info">
                <div className="author-avatar">{blog.author.charAt(0)}</div>
                <div className="author-details">
                  <span className="author-name">{blog.author}</span>
                  <span className="post-date">{blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently Published'}</span>
                </div>
              </div>
              <div className="meta-stats">
                <div className="meta-item">
                  <Icons.Clock size={16} />
                  <span>{Math.ceil((blog.content || '').split(' ').length / 200)} min read</span>
                </div>
                <div className="meta-item">
                  <Icons.Eye size={16} />
                  <span>{blog.views || 0} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-image-wide">
          <div className="featured-image-container">
            <img
              src={blog.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop'}
              alt={blog.title}
            />
          </div>
        </div>

        <div className="blog-grid-layout">
          {/* Sticky Sidebar Share */}
          <aside className="blog-sidebar">
            <div className="share-bar-pill">
              <button onClick={() => shareOnSocial('twitter')} className="share-action tw" title="Share on Twitter"><Icons.Twitter size={22} /></button>
              <button onClick={() => shareOnSocial('linkedin')} className="share-action li" title="Share on LinkedIn"><Icons.Linkedin size={22} /></button>
              <button onClick={() => shareOnSocial('facebook')} className="share-action fb" title="Share on Facebook"><Icons.Facebook size={22} /></button>
              <button onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }} className="share-action cp" title="Copy Link"><Icons.Copy size={22} /></button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="blog-main">
            <div
              className="blog-content-body"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Footer Card */}
            <div className="author-footer-card">
              <div className="author-footer-avatar">{blog.author.charAt(0)}</div>
              <div className="author-footer-info">
                <span className="written-by">Written By</span>
                <h3>{blog.author}</h3>
                <p>Expert in institutional digital transformation and examination security systems.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Grid */}
      {relatedBlogs.length > 0 && (
        <section className="related-section">
          <div className="container">
            <div className="blog-related-header">
              <h2>Related Insights</h2>
              <Link to="/blog" className="view-all">View All <Icons.ArrowRight size={18} /></Link>
            </div>

            <div className="related-grid">
              {relatedBlogs.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug || post.id}`} className="related-card">
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="card-body">
                    <span className="card-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <div className="card-footer">
                      Read Article <Icons.ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
