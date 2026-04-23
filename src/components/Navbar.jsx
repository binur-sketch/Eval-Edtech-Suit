import * as Icons from '@/components/LucideFix';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const productLinks = [
    { title: 'OMR Software', path: '/omr' },
    { title: 'On-Screen Marking', path: '/osm' },
    { title: 'Question Paper Management', path: '/qpms' },
    { title: 'AI Proctoring', path: '/ai-proctoring' },
    { title: 'CBT Platform', path: '/cbt' },
    { title: 'LMS Portal', path: '/lms' },
  ];

  const serviceLinks = [
    { title: 'OMR Printing', path: '/omr-printing' },
    { title: 'OMR Scanning & Result Generation', path: '/omr-scanning' },
    { title: 'Custom Software Development', path: '/custom-software' },
  ];

  const isActive = (path) => location.pathname === path;

  // Auto-close menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinkStyle = (path) => ({
    padding: '0 1rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: isActive(path) ? 'var(--primary)' : 'var(--secondary)',
    fontWeight: '700',
    fontSize: '0.8125rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'color 0.2s ease'
  });

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
              <a href="tel:+919319275051"> <span>+91 9319275051</span></a>
            </div>
            <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Mail size={14} style={{ color: 'var(--primary)' }} />
              <a href="mailto:corp@virsoftech.com"><span>corp@virsoftech.com</span></a>
            </div>
            <a href="https://wa.me/919319275051" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}>
              <div style={{ color: '#25D366' }}><Icons.MessageCircle size={14} /></div>
              <span>WhatsApp</span>
            </a>
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
                height: 'clamp(40px, 8vw, 60px)',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Link>

          {/* Nav Items Container */}
          <div className="md-flex" style={{ alignItems: 'center', height: '100%' }}>
            <Link to="/" style={navLinkStyle('/')}>Home</Link>

            {/* Products Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 1rem', height: '100%', background: 'none', border: 'none',
                color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Products <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '320px', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', padding: '1rem' }}>
                {productLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', transition: 'all 0.2s ease', display: 'block' }}>
                    <span style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem' }}>{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 1rem', height: '100%', background: 'none', border: 'none',
                color: 'var(--secondary)', fontWeight: '700', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Services <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '300px', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', padding: '1rem' }}>
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', transition: 'all 0.2s ease', display: 'block' }}>
                    <span style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem' }}>{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Independent Menu Items */}
            <Link to="/about" style={navLinkStyle('/about')}>About Us</Link>
            <Link to="/clients" style={navLinkStyle('/clients')}>Our Clients</Link>
            <Link to="/blog" style={navLinkStyle('/blog')}>Blog</Link>
            <Link to="/careers" style={navLinkStyle('/careers')}>Careers</Link>
            <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>

            <Link to="/book-demo" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', marginLeft: '1rem', fontSize: '0.75rem' }}>
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
            padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
            background: 'white', position: 'absolute', top: '100%', left: 0, width: '100%',
            height: 'calc(100vh - var(--nav-height))',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 999, overflowY: 'auto'
          }}>
            <Link to="/" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/') ? 'var(--primary)' : 'var(--secondary)' }}>Home</Link>

            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Products</div>
              <div style={{ display: 'grid', gap: '0.8rem', paddingLeft: '0.5rem' }}>
                {productLinks.map((s, i) => (
                  <Link key={i} to={s.path} style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Services</div>
              <div style={{ display: 'grid', gap: '0.8rem', paddingLeft: '0.5rem' }}>
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path} style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <Link to="/about" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/about') ? 'var(--primary)' : 'var(--secondary)' }}>About Us</Link>
            <Link to="/clients" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/clients') ? 'var(--primary)' : 'var(--secondary)' }}>Our Clients</Link>
            <Link to="/blog" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/blog') ? 'var(--primary)' : 'var(--secondary)' }}>Blog</Link>
            <Link to="/careers" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/careers') ? 'var(--primary)' : 'var(--secondary)' }}>Careers</Link>
            <Link to="/contact" style={{ fontWeight: '800', textTransform: 'uppercase', color: isActive('/contact') ? 'var(--primary)' : 'var(--secondary)' }}>Contact Us</Link>

            <Link to="/book-demo" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>Request a Demo</Link>
          </div>
        )}
      </nav>
    </header >
  );
};

export default Navbar;
