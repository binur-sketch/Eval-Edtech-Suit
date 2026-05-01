import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from '@/components/LucideFix';

const Hero = () => {
  const offlineProducts = [
    { title: 'OMR Software', icon: <Icons.FileText size={18} />, color: '#0EA5A4' },
    { title: 'On Screen Marking', icon: <Icons.Monitor size={18} />, color: '#6366F1' },
    { title: 'Olympiad Solutions', icon: <Icons.GraduationCap size={18} />, color: '#8B5CF6' },
  ];

  const onlineProducts = [
    { title: 'AI Proctoring', icon: <Icons.ShieldCheck size={18} />, color: '#EC4899' },
    { title: 'CBT Platform', icon: <Icons.Zap size={18} />, color: '#F59E0B' },
    { title: 'Olympiad Solutions', icon: <Icons.GraduationCap size={18} />, color: '#8B5CF6' },
  ];

  return (
    <section className="hero-v4">
      {/* Background with subtle tech pattern */}
      <div className="hero-v4-bg">
        <div className="grid-overlay"></div>
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
      </div>

      <div className="container hero-v4-inner">
        <div className="hero-v4-grid">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-v4-content"
          >


            <h1>
              The Complete <br />
              <span className="gradient-text">Examination Evaluation </span> <br />
              Suite.
            </h1>

            <p>
              eVAL provides an end-to-end ecosystem for modern institutions—from secure student registration and QPMS to high-speed OMR, OSM, CBT, and AI-driven proctoring.
            </p>

            <div className="hero-v4-cta">
              <Link to="/book-demo" className="btn-v4-primary">
                Book Free Demo
                <Icons.ArrowRight size={18} />
              </Link>
              <a href="#solutions" className="btn-v4-secondary">
                Explore Solutions
              </a>
            </div>
          </motion.div>

          {/* Right Visual Ecosystem */}
          <div className="hero-v4-visual">
            <div className="ecosystem-container">
              <div className="flow-visual-v8">
                <svg className="flow-svg-v8" viewBox="0 0 740 400" fill="none">
                  <defs>
                    <linearGradient id="main-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5A4" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow-v8">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Step 1 to Step 2: Solid Fixed Line Connection */}
                  <defs>
                    <path id="offline-curve" d="M 245,185 C 310,185 330,40 450,40" />
                    <path id="online-curve" d="M 245,199 C 310,199 330,345 450,345" />
                  </defs>

                  <path
                    d="M 80,192 H 240" stroke="rgba(14, 165, 164, 0.4)" strokeWidth="2"
                  />

                  {/* Fan Out from QPMS to Vertical Stacks (Fixed) */}
                  {/* Offline Fan */}
                  {[20, 85, 150].map((y, i) => (
                    <path
                      key={`fan-off-${i}`}
                      d={`M 240,192 C 300,192 320,${y} 380,${y}`}
                      stroke="#0EA5A4" strokeWidth="1.5" opacity="0.3" fill="none"
                    />
                  ))}

                  {/* Online Fan */}
                  {[235, 300, 365].map((y, i) => (
                    <path
                      key={`fan-on-${i}`}
                      d={`M 240,192 C 300,192 320,${y} 380,${y}`}
                      stroke="#6366F1" strokeWidth="1.5" opacity="0.3" fill="none"
                    />
                  ))}

                  {/* Curved Labels Overlay */}
                  <text fill="#0EA5A4" style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.9 }}>
                    <textPath xlinkHref="#offline-curve" startOffset="30%" dy="-6">OFFLINE EXAM PRODUCTS</textPath>
                  </text>
                  <text fill="#6366F1" style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.9 }}>
                    <textPath xlinkHref="#online-curve" startOffset="30%" dy="12">ONLINE EXAM PRODUCTS</textPath>
                  </text>

                  {/* Fan In from Vertical Stacks to Results (Fixed) */}
                  {/* Offline Convergence */}
                  {[20, 85, 150].map((y, i) => (
                    <path
                      key={`conv-off-${i}`}
                      d={`M 560,${y} C 620,${y} 640,192 700,192`}
                      stroke="#10B981" strokeWidth="1.5" opacity="0.3" fill="none"
                    />
                  ))}

                  {/* Online Convergence */}
                  {[235, 300, 365].map((y, i) => (
                    <path
                      key={`conv-on-${i}`}
                      d={`M 560,${y} C 620,${y} 640,192 700,192`}
                      stroke="#10B981" strokeWidth="1.5" opacity="0.3" fill="none"
                    />
                  ))}
                </svg>

                {/* DOM Nodes Overlay */}
                <div className="flow-nodes-v8">
                  {/* Hub 1: Registration */}
                  <div className="hub-node-v8" style={{ left: '20px', top: '160px' }}>
                    <div className="hub-icon-v8"><Icons.UserPlus size={24} /></div>
                    <span className="hub-label-v8">STUDENT REGISTRATION</span>
                  </div>

                  {/* Hub 2: QPMS */}
                  <div className="hub-node-v8" style={{ left: '180px', top: '160px' }}>
                    <div className="hub-icon-v8" style={{ borderColor: '#6366F1', color: '#6366F1' }}><Icons.Database size={24} /></div>
                    <span className="hub-label-v8">QUESTION PAPER MANAGEMENT SYSTEM</span>
                  </div>

                  {/* Offline Vertical Stack (Fixed) */}
                  {offlineProducts.map((p, i) => (
                    <div
                      key={i}
                      className="flow-item-v8"
                      style={{ left: '380px', top: `${10 + i * 65}px`, width: '180px' }}
                    >
                      <div className="item-dot-v8" style={{ background: p.color }}></div>
                      <span>{p.title}</span>
                    </div>
                  ))}

                  {/* Online Vertical Stack (Fixed) */}
                  {onlineProducts.map((p, i) => (
                    <div
                      key={i}
                      className="flow-item-v8"
                      style={{ left: '380px', top: `${225 + i * 65}px`, width: '180px' }}
                    >
                      <div className="item-dot-v8" style={{ background: p.color }}></div>
                      <span>{p.title}</span>
                    </div>
                  ))}

                  {/* Result Hub */}
                  <div className="hub-node-v8 result-hub-v8" style={{ left: '640px', top: '160px' }}>
                    <div className="hub-icon-v8" style={{ borderColor: '#10B981', color: '#10B981' }}><Icons.Trophy size={24} /></div>
                    <span className="hub-label-v8">REPORTS & <br />Analysis</span>
                  </div>
                </div>
              </div>
            </div> {/* ecosystem-container */}
          </div> {/* hero-v4-visual */}
        </div> {/* hero-v4-grid */}
      </div> {/* hero-v4-inner */}

      <style>{`
        .hero-v4 {
          position: relative;
          min-height: 85vh;
          background: #020617; /* Deepest Navy */
          color: white;
          padding-top: calc(var(--nav-height) + 5rem);
          padding-bottom: 5rem;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-v4-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(14, 165, 164, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 164, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
        }

        .glow-1 {
          width: 500px;
          height: 500px;
          background: var(--primary);
          top: -10%;
          right: -10%;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #4F46E5;
          bottom: -10%;
          left: -5%;
        }

        .hero-v4-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-v4-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          justify-items: center;
          width: 100%;
          max-width: 1400px;
        }

        /* Left Content */
        .hero-v4-content {
          max-width: 600px;
          text-align: left;
        }

        .hero-v4-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 164, 0.1);
          border: 1px solid rgba(14, 165, 164, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          animation: dotPulse 2s infinite;
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-v4-content h1 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 1.1;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
        }

        .hero-v4-content p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
          max-width: 580px;
        }

        .hero-v4-cta {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .btn-v4-primary {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(14, 165, 164, 0.2);
        }

        .btn-v4-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(14, 165, 164, 0.3);
          background: #0D8A89;
        }

        .btn-v4-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          transition: all 0.3s ease;
        }

        .btn-v4-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hero-v4-trust {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trust-logos {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .trust-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .trust-icons {
          display: flex;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.3);
        }

        /* Visual Ecosystem Area */
        .hero-v4-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ecosystem-container {
          position: relative;
          width: 740px;
          height: 420px;
          transform-origin: center center;
        }

        .ecosystem-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .nodes-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .eco-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .eco-node-main {
          z-index: 3;
        }

        .node-icon {
          width: 64px;
          height: 64px;
          background: #1e293b;
          border: 2px solid rgba(14, 165, 164, 0.3);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }

        .eco-node:hover .node-icon {
          transform: translateY(-5px) scale(1.1);
          border-color: var(--primary);
          box-shadow: 0 15px 40px rgba(14, 165, 164, 0.2);
        }

        .result-node:hover .node-icon {
          border-color: #10B981 !important;
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.2) !important;
        }

        .node-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        /* Flow V8 - Architectural Blueprint */
        .flow-visual-v8 {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .flow-svg-v8 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .flow-nodes-v8 {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hub-node-v8 {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          width: 120px;
        }

        .hub-icon-v8 {
          width: 64px;
          height: 64px;
          background: #0f172a;
          border: 2px solid var(--primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 30px rgba(14, 165, 164, 0.2);
        }

        .hub-label-v8 {
          font-size: 0.6rem;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
          line-height: 1.4;
        }

        .track-label-v8 {
          position: absolute;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .flow-item-v8 {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(5px);
          padding: 8px 15px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
          width: 180px;
        }

        .item-dot-v8 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .flow-item-v8 span {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .result-hub-v8 .hub-icon-v8 {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
        }

        @media (max-width: 1400px) {
          .hero-v4-visual { transform: scale(0.8); }
        }

        @media (max-width: 768px) {
          .hero-v4-visual { display: none; }
        }

        @media (max-width: 1400px) {
          .lifecycle-grid { flex-direction: column; gap: 20px; }
          .block-arrow { transform: rotate(90deg); padding: 10px; }
          .evaluation-block { width: 100%; }
        }

        @media (max-width: 480px) {
          .hero-v4-visual { display: none; }
          .hero-v4 { min-height: auto; padding-bottom: 4rem; }
        }
      `}</style>
    </section >
  );
};

export default Hero;