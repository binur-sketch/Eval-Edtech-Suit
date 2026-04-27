import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from '@/components/LucideFix';

const Hero = () => {
  const ecosystemItems = [
    { title: 'OMR Software', icon: <Icons.FileText size={18} />, color: '#0EA5A4' },
    { title: 'On Screen Marking', icon: <Icons.Monitor size={18} />, color: '#6366F1' },
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
              {/* Connecting Lines SVG */}
              <svg className="ecosystem-lines" width="100%" height="100%" viewBox="0 0 740 400">
                {/* Lines from Reg to QPMS */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x1="64" y1="200" x2="140" y2="200"
                  stroke="rgba(14, 165, 164, 0.2)" strokeWidth="2" strokeDasharray="4 4"
                />

                {/* Lines from QPMS to Central Stack */}
                {[85, 147, 209, 271, 333].map((y, i) => (
                  <motion.path
                    key={`q-stack-${i}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 + (i * 0.1) }}
                    d={`M 204,200 C 240,200 270,${y} 310,${y}`}
                    stroke="rgba(14, 165, 164, 0.15)" strokeWidth="1.5" fill="none"
                  />
                ))}

                {/* Lines from Central Stack to Portal */}
                {[85, 147, 209, 271, 333].map((y, i) => (
                  <motion.path
                    key={`stack-p-${i}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 + (i * 0.1) }}
                    d={`M 490,${y} C 520,${y} 530,200 560,200`}
                    stroke="rgba(14, 165, 164, 0.15)" strokeWidth="1.5" fill="none"
                  />
                ))}

                {/* Line from Portal to Results */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                  x1="624" y1="200" x2="676" y2="200"
                  stroke="rgba(14, 165, 164, 0.2)" strokeWidth="2" strokeDasharray="4 4"
                />
              </svg>

              {/* Nodes */}
              <div className="nodes-layer">

                {/* 1. Registration */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="eco-node eco-node-main left-node"
                >
                  <div className="node-icon"><Icons.UserPlus size={24} /></div>
                  <div className="node-label" style={{ textAlign: 'center', lineHeight: '1.4' }}>Student<br />Registration</div>
                </motion.div>

                {/* 2. QPMS Hub */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="eco-node eco-node-main qpms-node"
                >
                  <div className="node-icon"><Icons.Database size={24} /></div>
                  <div className="node-label" style={{ textAlign: 'center', lineHeight: '1.4' }}>Question Paper<br />Management System</div>
                </motion.div>

                {/* 3. Central Stack */}
                <div className="central-stack">
                  {ecosystemItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="eco-node-pill"
                    >
                      <div className="pill-icon" style={{ background: item.color }}>{item.icon}</div>
                      <span>{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                {/* 4. Portal & LMS */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="eco-node eco-node-main portal-node"
                >
                  <div className="node-icon"><Icons.LayoutDashboard size={24} /></div>
                  <div className="node-label">Portal & LMS</div>
                </motion.div>

                {/* 5. Results */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.9 }}
                  className="eco-node eco-node-main result-node"
                >
                  <div className="node-icon" style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}><Icons.CheckCircle size={24} /></div>
                  <div className="node-label">Results</div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-v4 {
          position: relative;
          min-height: 100vh;
          background: #020617; /* Deepest Navy */
          color: white;
          padding-top: calc(var(--nav-height) + 2rem);
          padding-bottom: 4rem;
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
          max-width: 1400px;
        }

        .hero-v4-grid {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        /* Left Content */
        .hero-v4-content {
          max-width: 600px;
          flex: 1 1 500px;
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
          margin-bottom: 2rem;
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
          margin-bottom: 1.5rem;
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
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 740px;
          max-width: 740px;
        }

        .ecosystem-container {
          position: relative;
          width: 740px;
          height: 400px;
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

        /* Horizontal Layout Positions */
        .left-node { top: 168px; left: 0px; }
        .qpms-node { top: 168px; left: 140px; }
        
        .central-stack {
          position: absolute;
          left: 310px;
          top: 60px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .portal-node { top: 168px; left: 560px; }
        .result-node { top: 168px; left: 676px; }

        .eco-node-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1e293b;
          padding: 8px 16px 8px 8px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          width: 180px;
          transition: all 0.3s ease;
        }

        .eco-node-pill:hover {
          transform: translateX(10px);
          background: #334155;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .pill-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .eco-node-pill span {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
        }

        @media (max-width: 1400px) {
          .hero-v4-grid { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
          .hero-v4-content { margin: 0 auto; }
          .hero-v4-cta { justify-content: center; }
          .hero-v4-visual { margin-top: 2rem; justify-content: center; transform: scale(0.9); }
        }

        @media (max-width: 768px) {
          .hero-v4-visual { transform: scale(0.6); margin-top: -4rem; margin-bottom: -4rem; }
        }

        @media (max-width: 480px) {
          .hero-v4-visual { display: none; }
          .hero-v4 { min-height: auto; padding-bottom: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;