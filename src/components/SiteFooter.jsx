import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--secondary)', padding: '6rem 0 3rem', color: 'white' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '4rem'
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '300px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'white' }}>
              <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: '900' }}>E</div>
              <span className="gradient-text">EVAL</span>
            </Link>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
              Transforming academic and corporate evaluations with 100% accurate, hardware-independent digital solutions. Trusted by 5000+ top institutions globally.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem' }}>
              <a href="#" style={{ color: 'white', opacity: 0.6 }}><Icons.Twitter size={20} /></a>
              <a href="#" style={{ color: 'white', opacity: 0.6 }}><Icons.Linkedin size={20} /></a>
              <a href="#" style={{ color: 'white', opacity: 0.6 }}><Icons.Facebook size={20} /></a>
              <a href="https://wa.me/919319123429" style={{ color: '#25D366', opacity: 1 }}><Icons.MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '800', marginBottom: '2rem' }}>Solutions</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <Link to="/omr" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>OMR Software</Link>
              <Link to="/cbt" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>CBT Platform</Link>
              <Link to="/lms" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>LMS Portal</Link>
              <Link to="/qtb" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>Question Bank</Link>
              <Link to="/osm" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>On-Screen Marking</Link>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '800', marginBottom: '2rem' }}>Resources</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <Link to="/about" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Story</Link>
              <Link to="/clients" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>Success Stories</Link>
              <Link to="/resources" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>Insights & Blog</Link>
              <Link to="/contact" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact Us</Link>
              <Link to="/book-demo" className="footer-link" style={{ color: 'var(--primary)', fontWeight: '700' }}>Schedule a Demo</Link>
            </div>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '800', marginBottom: '2rem' }}>Global HQ</h4>
            <div style={{ display: 'grid', gap: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Icons.Mail size={18} style={{ color: 'var(--primary)' }} /> <span>corp@virsoftech.com</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Icons.Phone size={18} style={{ color: 'var(--primary)' }} /> <span>+91-1800-3010-3232</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Icons.MapPin size={18} style={{ color: 'var(--primary)' }} /> <span>A 306, The I Thum, Plot No. A 40, Sector 62, Noida, Uttar Pradesh 201301</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>
          <p>© {new Date().getFullYear()} EVAL – Examination Evaluation & Learning Solutions. Powered by Vir Softech</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
