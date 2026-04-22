import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {

    const labelStyle = {
        fontSize: '0.6875rem',
        fontWeight: '700',
        color: 'rgba(255,255,255,0.4)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
    };

    const valueStyle = {
        fontWeight: '800',
        color: 'white',
        fontSize: '1.0625rem',
        display: 'block',
        marginTop: '2px'
    };

    return (
        <footer
            className="footer"
            style={{
                borderTop: '1px solid var(--border)',
                background: 'var(--secondary)',
                padding: 'clamp(3rem, 10vw, 6rem) 0 0',
                color: 'white'
            }}
        >
            <div className="container">

                {/* ✅ Pre-footer CTA Bar (RESPONSIVE) */}
                <div className="footer-top-bar">

                    {/* Support */}
                    <div className="footer-contact-item">
                        <div className="icon primary">
                            <Icons.Phone size={20} />
                        </div>
                        <div>
                            <div className="label">Institutional Support</div>
                            <a href="tel:+919319275051" className="value">
                                +91 9319275051
                            </a>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="footer-contact-item">
                        <div className="icon primary">
                            <Icons.Mail size={20} />
                        </div>
                        <div>
                            <div className="label">Enterprise Enquiries</div>
                            <a href="mailto:corp@virsoftech.com" className="value">
                                corp@virsoftech.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Chat */}
                    <div className="footer-contact-item">
                        <div className="icon whatsapp">
                            <Icons.MessageCircle size={20} />
                        </div>
                        <div>
                            <div className="label">Quick Chat</div>
                            <a href="https://wa.me/919319275051" className="value">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Info */}
                    <div style={{ gridColumn: 'span min(auto, 1)' }}>
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem', background: 'white', borderRadius: '0.75rem', padding: '0.5rem 1rem' }}>
                            <img src="/assets/images/logo.png" alt="eVAL Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                        </Link>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '2rem' }}>
                            Transforming academic and corporate evaluations with 100% accurate, hardware-independent digital solutions. Trusted by 5000+ institutions globally.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[{ icon: <Icons.Twitter size={18} />, href: 'https://x.com/virsoftech' }, { icon: <Icons.Linkedin size={18} />, href: 'https://in.linkedin.com/company/virsoftech' }, { icon: <Icons.Facebook size={18} />, href: 'https://www.facebook.com/virsoftech.official/' }, { icon: <Icons.Youtube size={18} />, href: 'https://www.youtube.com/c/VirSoftech' }].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'var(--transition)' }}>{social.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore</h4>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <Link to="/about" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>About Us</Link>
                            <Link to="/clients" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Our Clients</Link>
                            <Link to="/careers" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Careers</Link>
                            <Link to="/contact" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Contact Us</Link>
                            <Link to="/blog" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Blogs</Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions</h4>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <Link to="/omr" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OMR Software</Link>
                            <Link to="/osm" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>OSM Software</Link>
                            <Link to="/qpms" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>QPMS System</Link>
                            <Link to="/ai-proctoring" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>AI Proctoring</Link>
                            <Link to="/cbt" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>CBT Platform</Link>
                            <Link to="/lms" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>LMS Portal</Link>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div style={{ minWidth: '220px' }}>
                        <h4 style={{ color: 'white', fontSize: '0.875rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global HQ</h4>
                        <div style={{ display: 'grid', gap: '1.25rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <Icons.MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                                <a href='https://share.google/bwL9Zpu33JXuIR2sw' target="_blank" rel="noopener noreferrer"><span>A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201301</span></a>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Icons.Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                <a href='mailto:corp@virsoftech.com'><span>corp@virsoftech.com</span></a>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <Icons.Phone
                                    size={16}
                                    style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }}
                                />

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',   // ✅ changed from column → row
                                        gap: '15px',
                                        flexWrap: 'wrap'        // ✅ prevents breaking on small screens
                                    }}
                                >
                                    <a href="tel:+919319275051"><span>+91 9319275051,</span></a>
                                    <a href="tel:+919871258989"><span>+91 9871258989,</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div style={{ marginTop: '2rem', paddingTop: '2rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>
                    <p style={{ marginBottom: 0 }}>© {new Date().getFullYear()} eVAL – Examination Evaluation Solutions. Powered by <a href='https://virsoftech.com' style={{ color: 'inherit', textDecoration: 'underline' }}>Vir Softech Pvt. Ltd.</a></p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
                        <Link to="/terms-of-service" style={{ color: 'inherit' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;