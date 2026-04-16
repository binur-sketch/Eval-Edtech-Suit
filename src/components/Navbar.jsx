import * as Icons from '@/components/LucideFix';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const productLinks = [
    { title: 'OMR Software', path: '/omr', desc: 'High-speed sheet processing' },
    { title: 'On-Screen Marking', path: '/osm', desc: 'Digital answer evaluation' },
    { title: 'Question Paper Management', path: '/qpms', desc: 'Secure paper creation' },
    { title: 'AI Proctoring', path: '/ai-proctoring', desc: 'AI-based exam integrity' },
    { title: 'CBT Platform', path: '/cbt', desc: 'Secure online examinations' },
    { title: 'LMS Portal', path: '/lms', desc: 'Learning management system' },
  ];

  const serviceLinks = [
    { title: 'OMR Printing', path: '/omr-printing', desc: 'High precision OMR sheets' },
    { title: 'OMR Scanning', path: '/omr-scanning', desc: 'Bulk data processing' },
    { title: 'Custom Development', path: '/custom-software', desc: 'Tailored exam solutions' },
  ];

  const companyLinks = [
    { title: 'About Us', path: '/about', desc: 'Our story & leadership' },
    { title: 'Our Clients', path: '/clients', desc: 'Institutions we serve' },
    { title: 'Blog', path: '/blog', desc: 'Latest articles & trends' },
    { title: 'Careers', path: '/careers', desc: 'Join our mission' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'fixed', width: '100%', zIndex: 1000, top: 0 }}>
      {/* Top Bar */}
      <div style={{
        background: '#1F1F1F',
        color: 'rgba(255,255,255,0.7)',
        padding: '0.6rem 0',
        fontSize: '0.75rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)' }}>
            <Icons.MapPin size={12} style={{ color: 'var(--primary)' }} />
            <span>New Delhi, India (HQ) | Tokyo, Japan</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Phone size={14} style={{ color: 'var(--primary)' }} />
              <span>+91-1800-3010-3232</span>
            </div>
            <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Mail size={14} style={{ color: 'var(--primary)' }} />
              <span>corp@virsoftech.com</span>
            </div>
            <a href="https://wa.me/919319123429" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}>
              <div style={{ color: '#25D366' }}><Icons.MessageCircle size={14} /></div>
              <span>WhatsApp</span>
            </a>
            <div style={{ display: 'flex', gap: '15px', marginLeft: '1rem', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <a href="#" style={{ color: 'inherit' }}><Icons.Facebook size={14} /></a>
              <a href="#" style={{ color: 'inherit' }}><Icons.Twitter size={14} /></a>
              <a href="#" style={{ color: 'inherit' }}><Icons.Linkedin size={14} /></a>
              <a href='#' style={{ color: 'inherit' }}><Icons.Youtube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        background: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', width: '100%' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '5px 0' }}>
            <img
              src="/assets/images/logo.png"
              alt="eVAL Logo"
              style={{
                height: '80px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Link>

          {/* Nav Items Container */}
          <div className="md-flex" style={{ alignItems: 'center', height: '100%' }}>
            <Link to="/" style={{
              padding: '0 1.25rem',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              color: isActive('/') ? 'var(--primary)' : 'var(--secondary)',
              fontWeight: '800',
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 1.25rem', height: '100%', background: 'none', border: 'none',
                color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Products <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '320px' }}>
                {productLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '0.875rem' }}>{s.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: '500' }}>{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 1.25rem', height: '100%', background: 'none', border: 'none',
                color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Services <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '300px' }}>
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '0.875rem' }}>{s.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: '500' }}>{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 1.25rem', height: '100%', background: 'none', border: 'none',
                color: ['/about', '/clients', '/blog', '/careers'].includes(location.pathname) ? 'var(--primary)' : 'var(--secondary)',
                fontWeight: '800', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Company <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '280px' }}>
                {companyLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '0.875rem' }}>{s.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: '500' }}>{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" style={{
              padding: '0 1.25rem', color: isActive('/contact') ? 'var(--primary)' : 'var(--secondary)',
              fontWeight: '800', fontSize: '0.8125rem', textTransform: 'uppercase',
              letterSpacing: '1px', height: '100%', display: 'flex', alignItems: 'center'
            }}>
              Contact
            </Link>

            <Link to="/book-demo" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', marginLeft: '1rem', fontSize: '0.75rem', borderRadius: '4px', fontWeight: '800' }}>
              Request a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md-hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'var(--muted)', width: '40px', height: '40px', border: 'none', borderRadius: '6px', cursor: 'pointer', color: 'var(--secondary)' }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu reveal" style={{
            padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem',
            background: 'white', position: 'absolute', top: '100%', left: 0, width: '100%',
            height: 'calc(100vh - var(--nav-height))',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 999, overflowY: 'auto'
          }}>
            <Link to="/" onClick={() => setIsOpen(false)} style={{
              fontWeight: '900', textTransform: 'uppercase', fontSize: '1.25rem',
              color: isActive('/') ? 'var(--primary)' : 'var(--secondary)'
            }}>
              Home
            </Link>

            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Products</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {productLinks.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Services</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Company</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {companyLinks.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <Link to="/contact" onClick={() => setIsOpen(false)} style={{
              fontWeight: '900', textTransform: 'uppercase', fontSize: '1.25rem',
              color: isActive('/contact') ? 'var(--primary)' : 'var(--secondary)'
            }}>
              Contact Us
            </Link>

            <div style={{ marginTop: 'auto', display: 'grid', gap: '1rem' }}>
              <Link to="/book-demo" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ width: '100%', textAlign: 'center' }}>Request a Demo</Link>
            </div>
          </div>
        )}
      </nav>
    </header >
  );
};

export default Navbar;

