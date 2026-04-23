import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-pro">

      {/* Background */}
      <div className="hero-bg"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container hero-inner">
        <div className="hero-content">

          <h1>
            Advanced <span className="gradient-text">Examination & Evaluation</span> Ecosystem
          </h1>

          <p>
            OMR, CBT & AI Proctoring Evaluation platform trusted by universities,
            coaching institutes, and government bodies.
          </p>

          {/* CTA */}
          <div className="hero-cta">
            <Link to="/book-demo" className="btn btn-primary hero-btn">
              Book Free Demo
            </Link>

            <a href="#how-it-works" className="btn hero-btn-outline">
              See How It Works
            </a>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style>{`

       .hero-pro {
  height: auto; /* important */
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
  overflow: hidden;
}

        /* Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('/assets/images/hero-bg.png') center/cover no-repeat;
          transform: scale(1.05);
          animation: zoomBg 18s ease-in-out infinite alternate;
          opacity: 0.55; /* Balanced visibility */
        }

        /* Seamless Gradient Overlay */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,0.95) 25%,
            rgba(255,255,255,0.8) 45%,
            rgba(255,255,255,0.3) 70%,
            transparent 100%
          );
        }

        /* Bottom fade to content */
        .hero-pro::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to bottom, transparent, white);
          z-index: 2;
        }

        /* INNER WRAPPER */
        .hero-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          align-items: center;
          min-height: calc(85vh - var(--nav-height));
        }

        /* CLEAN CONTENT AREA */
        .hero-content {
          max-width: 680px;
          margin: 0;
          padding: 80px 0;
          text-align: left;
          position: relative;
          z-index: 5;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.15;
          color: var(--secondary);
          margin: 0;
          /* Stronger shadow for the main text */
          text-shadow: 0 4px 20px rgba(255,255,255,1), 0 2px 5px rgba(255,255,255,0.8);
        }

        .hero-content .gradient-text {
          /* Deeper gradient for better visibility against light overlay */
          background: linear-gradient(135deg, #097B7A 0%, #1e40af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none; /* Shadow doesn't show on clip-text usually, so we use filter */
          filter: drop-shadow(0 2px 10px rgba(255,255,255,1));
        }

        .hero-content p {
          margin-top: 1.5rem;
          font-size: 1.125rem;
          color: var(--secondary); /* Darker for accessibility */
          max-width: 540px;
          line-height: 1.7;
          font-weight: 500;
          text-shadow: 0 1px 10px rgba(255,255,255,0.9);
        }

        /* CTA */
        .hero-cta {
          margin-top: 2.5rem;
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* Buttons */
        .hero-btn {
          padding: 1.1rem 2.2rem;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(14, 165, 164, 0.15);
          transition: var(--transition);
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(14, 165, 164, 0.25);
        }

        .hero-btn-outline {
          padding: 1.1rem 2.2rem;
          border-radius: 12px;
          font-weight: 700;
          border: 1px solid rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(4px);
          color: var(--secondary);
          transition: var(--transition);
        }

        .hero-btn-outline:hover {
          background: var(--secondary);
          color: white;
        }

        /* MOBILE */
        @media(max-width:768px){
          .hero-overlay {
             background: linear-gradient(
              to bottom,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.8) 50%,
              rgba(255,255,255,0.4) 100%
            );
          }

          .hero-content {
            text-align: center;
            margin: 0 auto;
            padding: 80px 1.5rem;
          }

          .hero-cta {
            justify-content: center;
          }
        }

      `}</style>
    </section>
  );
};

export default Hero;