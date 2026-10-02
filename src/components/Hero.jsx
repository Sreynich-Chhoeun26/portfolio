import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">

          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hero-text-content"
          >
            {/* Main Headline */}
            <h1 className="hero-title">
              Hi, I'm CHHOEUN<br />
              Sreynich
            </h1>

            {/* Role Title */}
            <h2 className="hero-role">
              Frontend Developer
            </h2>

            {/* Description */}
            <p className="hero-description">
              Hi, I'm CHHOEUN Sreynich, a <span className="">dedicated</span> Frontend Developer from Phnom Penh, Cambodia.
            </p>

            {/* Tagline */}
            <p className="hero-tagline">
              Explore my work and connect with me!
            </p>

            {/* Contact Me Button */}
            <div>
              <a href="#contact" className="hero-btn-contact">
                Contact Me <Send size={18} className="contact-icon" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Organic Blob Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="hero-visual"
          >
            <div className="hero-blob-container">
              <img
                src="/profile.png"
                alt="CHHOEUN Sreynich"
                className="hero-blob-img"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 7.5rem;
          padding-bottom: 5.5rem;
          position: relative;
          background-color: var(--bg-primary, #FAF8FF);
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3.5rem;
        }

        .hero-text-content {
          max-width: 540px;
        }

        /* Headline: Hi, I'm CHHOEUN Sreynich */
        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.8vw, 3.6rem);
          font-weight: 800;
          color: var(--text-primary, #1E1B4B);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 0.65rem;
          transition: color 0.3s ease;
        }

        /* Role Subtitle: Frontend Developer */
        .hero-role {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 1.8vw, 1.45rem);
          font-weight: 600;
          color: var(--text-primary, #1E1B4B);
          margin-bottom: 1.35rem;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        /* Description */
        .hero-description {
          font-size: clamp(1rem, 1.25vw, 1.12rem);
          line-height: 1.65;
          color: var(--text-primary, #1E1B4B);
          margin-bottom: 1.8rem;
          max-width: 480px;
          transition: color 0.3s ease;
        }

        .highlight-purple {
          color: #7C3AED;
          font-weight: 600;
        }

        [data-theme='dark'] .highlight-purple {
          color: #C084FC;
        }

        /* Tagline */
        .hero-tagline {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary, #1E1B4B);
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
        }

        /* Contact Me Button */
        .hero-btn-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: #5D3FE8;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.85rem 1.8rem;
          border-radius: 12px;
          box-shadow: 0 8px 20px -4px rgba(93, 63, 232, 0.4);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .hero-btn-contact:hover {
          background: #4F32D6;
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -4px rgba(93, 63, 232, 0.55);
          color: #FFFFFF;
        }

        .contact-icon {
          transform: rotate(0deg);
          transition: transform 0.2s ease;
        }

        .hero-btn-contact:hover .contact-icon {
          transform: translate(2px, -2px);
        }

        /* Right Visual: Profile */
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-blob-container {
          position: relative;
          max-width: 380px;
          width: 100%;
          aspect-ratio: 1 / 1.18;
          border-radius: 46% 54% 50% 50% / 48% 46% 54% 52%;
          overflow: hidden;
          box-shadow: 
            0 20px 45px -10px rgba(93, 63, 232, 0.3),
            0 0 0 4px rgba(93, 63, 232, 0.12);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          background: #5D3FE8;
        }

        .hero-blob-container:hover {
          transform: scale(1.025);
          box-shadow: 
            0 25px 55px -10px rgba(93, 63, 232, 0.4),
            0 0 0 6px rgba(93, 63, 232, 0.2);
        }

        .hero-blob-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }

        [data-theme='dark'] .hero-blob-container {
          box-shadow: 
            0 20px 45px -10px rgba(124, 58, 237, 0.45),
            0 0 0 4px rgba(168, 85, 247, 0.2);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 4rem;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .hero-text-content {
            max-width: 100%;
            margin: 0 auto;
            order: 2;
          }

          .hero-visual {
            order: 1;
            margin: 0 auto;
          }

          .hero-blob-container {
            max-width: 320px;
          }

          .hero-description,
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
