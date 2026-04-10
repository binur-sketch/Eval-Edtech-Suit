import * as Icons from '@/components/LucideFix';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const solutions = [
    { title: 'OMR Software', path: '/omr', desc: 'High-speed sheet processing' },
    { title: 'CBT Platform', path: '/cbt', desc: 'Secure online examinations' },
    { title: 'LMS Portal', path: '/lms', desc: 'Learning management system' },
    { title: 'Question Bank', path: '/qtb', desc: 'Intelligent question management' },
    { title: 'On-Screen Marking', path: '/osm', desc: 'Digital answer evaluation' },
    { title: 'Hardware Products', path: '/products', desc: 'Advanced scanners & printers' },
  ];

  const companyLinks = [
    { title: 'About EVAL', path: '/about', desc: 'Our story & mission' },
    { title: 'Our Clients', path: '/clients', desc: 'Success stories & case studies' },
    { title: 'Partners', path: '/partners', desc: 'Integration ecosystem' },
    { title: 'Careers', path: '/careers', desc: 'Join our team' },
  ];

  const resourceLinks = [
    { title: 'Insights & Blog', path: '/resources', desc: 'Articles & research' },
    { title: 'Pricing', path: '/pricing', desc: 'Plans & comparison' },
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
            <span>Noida, India • Dubai • Nairobi</span>
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
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              width: '36px', 
              height: '36px', 
              background: 'var(--primary)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: '900',
              fontSize: '1.25rem'
            }}>
              E
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--secondary)', letterSpacing: '-0.5px' }}>EVAL</span>
          </Link>

          {/* Nav Items Container */}
          <div className="md-flex" style={{ alignItems: 'center', height: '100%' }}>
            <Link to="/" style={{ 
              padding: '0 1.75rem', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              background: isActive('/') ? 'var(--primary)' : 'transparent',
              color: isActive('/') ? 'white' : 'var(--secondary)',
              fontWeight: '800',
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{ 
                padding: '0 1.25rem', height: '100%', background: 'none', border: 'none', 
                color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8125rem', 
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Solutions <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '300px' }}>
                {solutions.map((s, i) => (
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
                color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8125rem', 
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Company <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0', width: '280px' }}>
                {companyLinks.map((c, i) => (
                  <Link key={i} to={c.path} className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '0.875rem' }}>{c.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: '500' }}>{c.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <button style={{ 
                padding: '0 1.25rem', height: '100%', background: 'none', border: 'none', 
                color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8125rem', 
                textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                Resources <Icons.ChevronDown size={14} />
              </button>
              <div className="dropdown" style={{ top: '100%', left: '0' }}>
                {resourceLinks.map((r, i) => (
                  <Link key={i} to={r.path} className="dropdown-item" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '0.875rem' }}>{r.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: '500' }}>{r.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" style={{ 
              padding: '0 1.25rem', color: 'var(--secondary)', fontWeight: '800', 
              fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '1px',
              height: '100%', display: 'flex', alignItems: 'center'
            }}>
              Contact
            </Link>

            <Link to="/book-demo" className="btn btn-primary" style={{ padding: '0.8rem 2rem', marginLeft: '1rem', fontSize: '0.8125rem', borderRadius: '4px', fontWeight: '800' }}>
              Book a Demo
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
              color: isActive('/') ? 'var(--primary)' : 'var(--secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
              Home {isActive('/') && <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>}
            </Link>
            
            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Solutions</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {solutions.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{s.title}</Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Company</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {companyLinks.map((c, i) => (
                  <Link key={i} to={c.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{c.title}</Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: '900', marginBottom: '1.25rem', color: 'var(--primary)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Resources</div>
              <div style={{ display: 'grid', gap: '1rem', paddingLeft: '0.5rem' }}>
                {resourceLinks.map((r, i) => (
                  <Link key={i} to={r.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--secondary)' }}>{r.title}</Link>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'grid', gap: '1rem' }}>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</Link>
              <Link to="/book-demo" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>Book Free Demo</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
