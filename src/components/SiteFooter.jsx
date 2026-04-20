import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--secondary)', padding: '6rem 0 0', color: 'white' }}>
      <div className="container">
        {/* Pre-footer CTA Bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2rem', marginBottom: '5rem', padding: '3rem',
          background: 'rgba(255,255,255,0.03)', borderRadius: '2rem',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'var(--primary)', padding: '0.75rem', borderRadius: '1rem', color: 'white' }}>
              <Icons.Phone size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Toll-Free Support</div>
              <div style={{ fontWeight: '800', color: 'white', fontSize: '1.0625rem' }}>+91-1800-3010-3232</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'var(--primary)', padding: '0.75rem', borderRadius: '1rem', color: 'white' }}>
              <Icons.Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise Enquiries</div>
              <div style={{ fontWeight: '800', color: 'white', fontSize: '1.0625rem' }}>corp@virsoftech.com</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#25D366', padding: '0.75rem', borderRadius: '1rem', color: 'white' }}>
              <Icons.MessageCircle size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Chat</div>
              <a href="https://wa.me/919319123429" style={{ fontWeight: '800', color: 'white', fontSize: '1.0625rem' }}>WhatsApp Us</a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* Brand Info */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem', background: 'white', borderRadius: '0.75rem', padding: '0.5rem 1rem' }}>
              <img
                src="/assets/images/logo.png"
                alt="eVAL Logo"
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Transforming academic and corporate evaluations with 100% accurate, hardware-independent digital solutions. Trusted by 5000+ institutions globally.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: <Icons.Twitter size={18} />, href: '#' },
                { icon: <Icons.Linkedin size={18} />, href: '#' },
                { icon: <Icons.Facebook size={18} />, href: '#' },
                { icon: <Icons.Youtube size={18} />, href: '#' }
              ].map((social, i) => (
                <a key={i} href={social.href} style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', transition: 'var(--transition)'
                }}>{social.icon}</a>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore</h4>
            <div style={{ display: 'grid', gap: '0.875rem' }}>
              <Link to="/about" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>About Us</Link>
              <Link to="/clients" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Our Clients</Link>
              <Link to="/careers" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Careers</Link>
              <Link to="/contact" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Contact Us</Link>
              <Link to="/blog" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Blogs</Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions</h4>
            <div style={{ display: 'grid', gap: '0.875rem' }}>
              <Link to="/omr" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OMR Software</Link>
              <Link to="/osm" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OSM Software</Link>
              <Link to="/qpms" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>QPMS System</Link>
              <Link to="/ai-proctoring" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>AI Proctoring</Link>
              <Link to="/cbt" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>CBT Platform</Link>
              <Link to="/lms" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>LMS Portal</Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
            <div style={{ display: 'grid', gap: '0.875rem' }}>
              <Link to="/omr-printing" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OMR Printing</Link>
              <Link to="/omr-scanning" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OMR Scanning & Result Generation</Link>
              <Link to="/custom-software" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Custom Software Development</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global HQ</h4>
            <div style={{ display: 'grid', gap: '1.25rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Icons.MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201301</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Icons.Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>corp@virsoftech.com</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Icons.Phone size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>+91-1800-3010-3232</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{
          marginTop: '4rem', paddingTop: '2rem', paddingBottom: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
          color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem'
        }}>
          <p style={{ marginBottom: 0 }}>© {new Date().getFullYear()} eVAL – Examination Evaluation & Learning Solutions. Powered by Vir Softech Pvt. Ltd.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

