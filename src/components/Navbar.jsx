import * as Icons from '@/components/LucideFix';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const productLinks = [
    { title: 'OMR Software', path: '/omr' },
    { title: 'On-Screen Marking', path: '/osm' },
    { title: 'Question Paper Management', path: '/qpms' },
    { title: 'AI Proctoring', path: '/ai-proctoring' },
    { title: 'CBT Platform', path: '/cbt' },
    { title: 'Olympiad Portal', path: '/olympiad' },
    { title: 'Mobile Application', path: '/mobile-app' },
  ];

  const serviceLinks = [
    { title: 'OMR Printing', path: '/omr-printing' },
    { title: 'OMR Scanning & Result Generation', path: '/omr-scanning' },
    { title: 'Custom Software Development', path: '/custom-software' },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinkStyle = (path) => ({
    padding: '0 0.75rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: isActive(path) ? 'var(--primary)' : 'var(--secondary)',
    fontWeight: '700',
    fontSize: '0.8125rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    transition: 'var(--transition)'
  });

  return (
    <header style={{
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      top: 0,
      transition: 'var(--transition)'
    }}>
      {/* Top Bar - Hide on scroll for cleaner look */}
      <div style={{
        background: 'var(--secondary)',
        color: 'rgba(255,255,255,0.6)',
        padding: scrolled ? '0' : '0.5rem 0',
        height: scrolled ? '0' : 'auto',
        overflow: 'hidden',
        fontSize: '0.85rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.MapPin size={12} style={{ color: 'var(--primary)' }} />
              <span>Global HQ: Noida, India</span>
            </div>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.1)' }} className="md-flex"></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.Globe size={12} style={{ color: 'var(--primary)' }} />
              <span>International: Tokyo, Japan</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Phone size={12} style={{ color: 'var(--primary)' }} />
              <a href="tel:+919319275051">+91 9319275051</a>
            </div>
            <div className="md-flex" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Mail size={12} style={{ color: '#EA4335' }} />
              <a href="mailto:corp@virsoftech.com">corp@virsoftech.com</a>
            </div>
            <div className="md-flex" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'white',
              padding: '3px 8px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <img src="/assets/images/gem.png" alt="GeM" style={{ height: '12px', width: 'auto' }} />
              <span style={{ fontWeight: '800', color: '#2d3748', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Available as OEM on GeM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'white',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(15px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.05)',
        height: scrolled ? '65px' : 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition)',
        borderBottom: scrolled ? '1px solid rgba(14, 165, 164, 0.1)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', width: '100%' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', transition: 'var(--transition)' }}>
            <img
              src="/assets/images/logo.png"
              alt="eVAL Logo"
              style={{
                height: scrolled ? '38px' : '48px',
                width: 'auto',
                transition: 'var(--transition)'
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="md-flex desktop-nav" style={{ alignItems: 'center', height: '100%' }}>
            <Link to="/" style={navLinkStyle('/')}>Home</Link>

            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 0.75rem', height: '100%', background: 'none', border: 'none',
                color: isActive('/products') ? 'var(--primary)' : 'var(--secondary)',
                fontWeight: '700', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Products <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown">
                {productLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{
                padding: '0 0.75rem', height: '100%', background: 'none', border: 'none',
                color: isActive('/services') ? 'var(--primary)' : 'var(--secondary)',
                fontWeight: '700', fontSize: '0.8125rem',
                textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Services <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown">
                {serviceLinks.map((s, i) => (
                  <Link key={i} to={s.path} className="dropdown-item">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" style={navLinkStyle('/about')}>About</Link>
            <Link to="/clients" style={navLinkStyle('/clients')}>Clients</Link>
            <Link to="/blog" style={navLinkStyle('/blog')}>Blogs</Link>
            <Link to="/case-studies" style={navLinkStyle('/case-studies')}>Case Studies</Link>
            <Link to="/partner" style={navLinkStyle('/partner')}>Partner</Link>


            <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>

            <Link to="/book-demo" className="btn btn-primary" style={{
              padding: '0.65rem 1.5rem',
              marginLeft: '1.5rem',
              fontSize: '0.8125rem',
              borderRadius: '0.75rem'
            }}>
              Request Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{ 
              background: isOpen ? 'var(--primary-light)' : 'var(--muted)', 
              width: '42px', height: '42px', border: 'none', 
              borderRadius: '12px', cursor: 'pointer', 
              color: isOpen ? 'var(--primary)' : 'var(--secondary)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {isOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`} style={{
          position: 'fixed',
          top: scrolled ? '65px' : 'var(--nav-height)',
          left: 0,
          width: '100%',
          background: 'white',
          padding: '1.5rem 1.5rem 4rem',
          height: `calc(100vh - ${scrolled ? '65px' : 'var(--nav-height)'})`,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 999,
          overflowY: 'auto',
          borderTop: '1px solid var(--border)',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <Link to="/" style={{ fontWeight: '800', color: isActive('/') ? 'var(--primary)' : 'var(--secondary)' }}>Home</Link>

          <div>
            <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Solutions</div>
            <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
              {productLinks.map((s, i) => (
                <Link key={i} to={s.path} style={{ fontWeight: '600', color: 'var(--secondary)' }}>{s.title}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Expertise</div>
            <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
              {serviceLinks.map((s, i) => (
                <Link key={i} to={s.path} style={{ fontWeight: '600', color: 'var(--secondary)' }}>{s.title}</Link>
              ))}
            </div>
          </div>

          <Link to="/about" style={{ fontWeight: '800', color: isActive('/about') ? 'var(--primary)' : 'var(--secondary)' }}>About Us</Link>
          <Link to="/clients" style={{ fontWeight: '800', color: isActive('/clients') ? 'var(--primary)' : 'var(--secondary)' }}>Our Clients</Link>
          <Link to="/blog" style={{ fontWeight: '800', color: isActive('/blog') ? 'var(--primary)' : 'var(--secondary)' }}>Blogs</Link>
          <Link to="/case-studies" style={{ fontWeight: '800', color: isActive('/case-studies') ? 'var(--primary)' : 'var(--secondary)' }}>Case Studies</Link>
          <Link to="/partner" style={{ fontWeight: '800', color: isActive('/partner') ? 'var(--primary)' : 'var(--secondary)' }}>Partner with Us</Link>


          <Link to="/contact" style={{ fontWeight: '800', color: isActive('/contact') ? 'var(--primary)' : 'var(--secondary)' }}>Contact</Link>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--muted)', padding: '10px 15px', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <img src="/assets/images/gem.png" alt="GeM" style={{ height: '14px', width: 'auto' }} />
              <span style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Available as OEM on GeM</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href="tel:+919319275051" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem' }}>
                <Icons.Phone size={18} style={{ color: 'var(--primary)' }} /> +91 9319275051
              </a>
              <a href="mailto:corp@virsoftech.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem' }}>
                <Icons.Mail size={18} style={{ color: '#EA4335' }} /> corp@virsoftech.com
              </a>
            </div>
          </div>

          <Link to="/book-demo" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book Demo</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

