import React from "react";
import { Link } from "react-router-dom";
import * as Icons from '@/components/LucideFix';

const products = [
  { icon: <Icons.FileCheck size={28} />, title: "OMR Software", desc: "State-of-the-art OMR reader for 100% accurate data capture from plain paper sheets at 300–500 sheets/min.", path: "/omr" },
  { icon: <Icons.Monitor size={28} />, title: "On-Screen Marking", desc: "Secure digital evaluation for both objective and subjective answer sheets with identity masking.", path: "/osm" },
  { icon: <Icons.BookOpen size={28} />, title: "Question Paper Management", desc: "Secure lifecycle management of question papers with multi-level approval and encryption.", path: "/qpms" },
  { icon: <Icons.Shield size={28} />, title: "AI Proctoring", desc: "AI-powered exam integrity with facial recognition, eye tracking, and automated incident flagging.", path: "/ai-proctoring" },
  { icon: <Icons.GraduationCap size={28} />, title: "Computer Based Testing", desc: "Comprehensive center-based examination solution with secure browser lockdown.", path: "/cbt" },
  { icon: <Icons.Layers size={28} />, title: "Learning Management System", desc: "Flexible LMS for schools, universities, coaching institutes with assessment & analytics.", path: "/lms" },
];

const Products = () => (
  <div style={{ paddingTop: '5rem' }}>
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span className="badge">Products</span>
          <h1>Our <span className="gradient-text">Product Suite</span></h1>
          <p style={{ fontSize: '1.125rem' }}>
            End-to-end solutions for examination, evaluation, and learning management.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {products.map((p, i) => (
            <Link to={p.path} key={i} className="card hover-lift" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {p.icon}
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.9375rem', marginBottom: '2rem', flexGrow: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700', fontSize: '0.875rem' }}>
                Learn More <Icons.ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;

