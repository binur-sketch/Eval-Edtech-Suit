import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import * as Icons from '@/components/LucideFix';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchBlogs();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/admin/login');
    } else {
      setUser(user);
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) {
        console.error('Error fetching blogs:', error);
      } else {
        setBlogs(data || []);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-thumbnails/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setEditingBlog({ ...editingBlog, image: publicUrl });
    } catch (err) {
      alert('Error uploading image: ' + err.message + '\nMake sure you have created a public "blog-images" bucket in Supabase Storage.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const { error } = await supabase.from('blogs').delete().eq('id', id);
        if (error) throw error;
        setBlogs(blogs.filter(b => b.id !== id));
      } catch (err) {
        alert('Error deleting blog: ' + err.message);
      }
    }
  };

  const openModal = (blog = null) => {
    setEditingBlog(blog || {
      title: '',
      excerpt: '',
      content: '',
      category: 'Assessment',
      author: 'eVAL Team',
      date: new Date().toISOString().split('T')[0],
      image: '',
      status: 'published'
    });
    setIsModalOpen(true);
  };

  const saveBlog = async (e, statusOverride = null) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const status = statusOverride || editingBlog.status || 'published';
      const slug = editingBlog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      const payload = { ...editingBlog, slug, status };
      delete payload.views; // Remove views if it exists
      
      if (editingBlog.id) {
        const { id, ...updateData } = payload;
        const { error } = await supabase
          .from('blogs')
          .update(updateData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([payload]);
        if (error) throw error;
      }
      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      console.error('Supabase Save Error:', err);
      alert('Error saving blog: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', overflowX: 'hidden' }}>
      
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="mobile-menu-toggle"
        style={{ 
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', 
          width: '56px', height: '56px', borderRadius: '50%', 
          background: 'var(--primary)', color: 'white', border: 'none', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 1100,
          display: 'none', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        {isSidebarOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', zIndex: 900, backdropFilter: 'blur(4px)' }}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ 
        width: '280px', background: 'white', borderRight: '1px solid #e2e8f0', 
        padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', 
        position: 'fixed', height: '100vh', zIndex: 1000,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Icons.LayoutDashboard size={20} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>eVAL <span style={{ color: 'var(--primary)' }}>Admin</span></span>
        </div>

        <nav style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', border: 'none', background: 'rgba(14, 165, 164, 0.1)', color: 'var(--primary)', fontWeight: '600', textAlign: 'left', cursor: 'pointer' }}>
            <Icons.FileText size={18} /> Blogs
          </button>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', color: '#64748b', fontWeight: '600' }}>
            <Icons.Home size={18} /> Back to Website
          </Link>
        </nav>

        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', border: 'none', background: '#fff1f2', color: '#e11d48', fontWeight: '600', cursor: 'pointer' }}>
          <Icons.LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main" style={{ 
        marginLeft: '280px', flexGrow: 1, padding: 'clamp(1rem, 5vw, 3rem)', minHeight: '100vh', width: 'calc(100% - 280px)',
        transition: 'all 0.3s ease'
      }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: '800', color: '#0f172a', marginBottom: '0.25rem', letterSpacing: '-0.025em' }}>Blog Management</h2>
            <p style={{ color: '#64748b', fontSize: '0.9375rem' }}>Logged in as <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{user.email}</span></p>
          </div>
          <button className="btn btn-primary" onClick={() => openModal()} style={{ padding: '0.875rem 1.75rem', borderRadius: '0.75rem', fontWeight: '700', boxShadow: '0 10px 15px -3px rgba(14, 165, 164, 0.4)' }}>
            <Icons.Plus size={20} /> <span style={{ marginLeft: '0.5rem' }}>Create New Post</span>
          </button>
        </header>

        {/* Stats Grid */}
        <div className="admin-stats-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))', 
          gap: '1.25rem', 
          marginBottom: '2.5rem' 
        }}>
          {[
            { label: 'Total Blogs', value: blogs.length, icon: <Icons.FileText color="#0ea5a4" />, bg: '#f0fdfa' },
            { label: 'Published', value: blogs.filter(b => b.status === 'published').length, icon: <Icons.CheckCircle color="#10b981" />, bg: '#f0fdf4' },
            { label: 'Drafts', value: blogs.filter(b => b.status === 'draft').length, icon: <Icons.Clock color="#f59e0b" />, bg: '#fffbeb' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div style={{ background: 'white', borderRadius: '1.25rem', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <h4 style={{ fontWeight: '800', color: '#0f172a' }}>Recent Posts</h4>
            <div style={{ position: 'relative', width: 'min(100%, 300px)' }}>
              <Icons.Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input placeholder="Search blogs..." style={{ width: '100%', padding: '0.625rem 1rem 0.625rem 2.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.875rem', background: '#f8fafc' }} />
            </div>
          </div>
          
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>Blog Info</th>
                  <th style={{ textAlign: 'left', padding: '1rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '1rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>Views</th>
                  <th style={{ textAlign: 'left', padding: '1rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>Date</th>
                  <th style={{ textAlign: 'right', padding: '1rem 1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="5" style={{ textAlign: 'center', padding: '4rem' }}><div style={{ width: '32px', height: '32px', border: '3px solid var(--primary-light)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }}></div></td></tr>
                ) : blogs.length === 0 ? (
                  <tr><td colSpan="5" style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>No blogs found. Start by creating one!</td></tr>
                ) : (
                  blogs.map((blog) => (
                    <tr key={blog.id} style={{ borderBottom: '1px solid #f1f5f9', transition: '0.2s' }} className="table-row-hover">
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '44px', height: '44px', borderRadius: '10px', overflow: 'hidden', background: '#f1f5f9', flexShrink: 0 }}>
                            <img src={blog.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&auto=format&fit=crop'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div style={{ maxWidth: '240px' }}>
                            <p style={{ fontWeight: '700', color: '#1e293b', marginBottom: '0.15rem', fontSize: '0.9375rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.title}</p>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '500' }}>{blog.author}</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span style={{ 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '2rem', 
                          fontSize: '0.7rem', 
                          fontWeight: '700', 
                          textTransform: 'uppercase',
                          background: blog.status === 'published' ? '#f0fdf4' : '#f1f5f9', 
                          color: blog.status === 'published' ? '#166534' : '#475569',
                          border: `1px solid ${blog.status === 'published' ? '#bcf0da' : '#e2e8f0'}`
                        }}>
                          {blog.status === 'published' ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600' }}>
                          <Icons.Eye size={14} /> {blog.views || 0}
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: '500' }}>{blog.date ? new Date(blog.date).toLocaleDateString() : 'N/A'}</td>
                      <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                          <button onClick={() => openModal(blog)} title="Edit" style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', cursor: 'pointer', transition: '0.2s' }}><Icons.Edit size={15} /></button>
                          <button onClick={() => handleDelete(blog.id)} title="Delete" style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid #fee2e2', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', cursor: 'pointer', transition: '0.2s' }}><Icons.Trash2 size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Editor Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1200, padding: 'clamp(0.5rem, 3vw, 1.5rem)' }}>
          <div style={{ background: 'white', maxWidth: '850px', width: '100%', maxHeight: '95vh', overflowY: 'auto', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'slideUp 0.3s ease-out' }}>
            <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 10 }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>{editingBlog.id ? 'Edit Blog Post' : 'Create New Post'}</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', transition: '0.2s' }}><Icons.X size={18} /></button>
            </div>
            
            <form onSubmit={saveBlog} style={{ padding: '2rem', display: 'grid', gap: '1.5rem' }}>
              
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Post Title</label>
                <input required placeholder="Enter a catchy title..." value={editingBlog.title} onChange={e => setEditingBlog({...editingBlog, title: e.target.value})} style={{ padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '1rem', width: '100%', outlineColor: 'var(--primary)', background: '#f8fafc' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Category</label>
                  <select 
                    value={editingBlog.category} 
                    onChange={e => setEditingBlog({...editingBlog, category: e.target.value})} 
                    style={{ padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '1rem', width: '100%', background: '#f8fafc', cursor: 'pointer' }}
                  >
                    <option>Assessment</option>
                    <option>OMR</option>
                    <option>CBT</option>
                    <option>OSM</option>
                    <option>AI Proctoring</option>
                    <option>LMS</option>
                    <option>QPMS</option>
                    <option>Education</option>
                    <option>Security</option>
                    <option value="Other">Other (Type below...)</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Author</label>
                  <input required value={editingBlog.author} onChange={e => setEditingBlog({...editingBlog, author: e.target.value})} placeholder="e.g. eVAL Team" style={{ padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '1rem', width: '100%', background: '#f8fafc' }} />
                </div>
              </div>

              {(editingBlog.category === 'Other' || !['Assessment', 'OMR', 'CBT', 'OSM', 'AI Proctoring', 'LMS', 'QPMS', 'Education', 'Security'].includes(editingBlog.category)) && (
                <div style={{ display: 'grid', gap: '0.75rem', animation: 'slideDown 0.2s ease-out' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Custom Category Name</label>
                  <input 
                    placeholder="Enter custom category..." 
                    value={editingBlog.category === 'Other' ? '' : editingBlog.category} 
                    onChange={e => setEditingBlog({...editingBlog, category: e.target.value})} 
                    style={{ padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '1rem', width: '100%', background: '#f8fafc' }} 
                  />
                </div>
              )}

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Short Excerpt</label>
                <textarea rows="2" placeholder="Brief summary for the blog card..." value={editingBlog.excerpt} onChange={e => setEditingBlog({...editingBlog, excerpt: e.target.value})} style={{ padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.9375rem', width: '100%', resize: 'vertical', background: '#f8fafc' }} />
              </div>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Cover Image</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                  {editingBlog.image && (
                    <div style={{ height: '120px', borderRadius: '0.75rem', overflow: 'hidden', border: '2px solid #e2e8f0' }}>
                      <img src={editingBlog.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <label style={{ position: 'relative', border: '2px dashed #cbd5e1', borderRadius: '1rem', padding: '2rem', textAlign: 'center', transition: '0.3s', cursor: 'pointer', display: 'block' }}>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }} />
                    <div style={{ pointerEvents: 'none' }}>
                      <Icons.Upload size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                      <p style={{ fontSize: '0.875rem', fontWeight: '800', color: '#1e293b' }}>{uploading ? 'Uploading...' : 'Upload Image'}</p>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>PNG, JPG or WEBP</p>
                    </div>
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600' }}>OR URL:</span>
                  <input placeholder="https://..." value={editingBlog.image} onChange={e => setEditingBlog({...editingBlog, image: e.target.value})} style={{ flexGrow: 1, padding: '0.5rem 0.875rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '0.875rem', background: '#f8fafc' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '0.875rem', color: '#334155' }}>Blog Content (HTML Supported)</label>
                <textarea rows="10" placeholder="Write your content here..." value={editingBlog.content} onChange={e => setEditingBlog({...editingBlog, content: e.target.value})} style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', fontSize: '0.9375rem', width: '100%', resize: 'vertical', fontFamily: 'monospace', background: '#f8fafc' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', position: 'sticky', bottom: 0, background: 'white', padding: '1.5rem 0', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap-reverse' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: '1 1 120px', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', fontWeight: '700', cursor: 'pointer', transition: '0.2s' }}>Cancel</button>
                
                {(editingBlog.status === 'draft' || !editingBlog.id) && (
                  <button 
                    type="button" 
                    onClick={() => saveBlog(null, 'draft')}
                    style={{ flex: '1 1 120px', padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '700', cursor: 'pointer', transition: '0.2s' }}
                  >
                    Save Draft
                  </button>
                )}

                <button 
                  type="button" 
                  onClick={() => saveBlog(null, 'published')}
                  className="btn btn-primary" 
                  style={{ flex: '2 1 200px', padding: '0.875rem', borderRadius: '0.75rem', fontWeight: '700' }}
                >
                  {loading ? 'Processing...' : (editingBlog.status === 'published' && editingBlog.id ? 'Update Post' : 'Publish Post')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .table-row-hover:hover {
          background-color: #f8fafc !important;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) {
          .admin-sidebar { transform: translateX(-100%); }
          .admin-sidebar.open { transform: translateX(0); }
          .admin-main { margin-left: 0 !important; width: 100% !important; }
          .mobile-menu-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
