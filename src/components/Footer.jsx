import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-light)',
      padding: '2.25rem 0',
      position: 'relative'
    }}>
      <div className="container">
        <div
          className="footer-content"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            minHeight: '42px'
          }}
        >
          {/* Copyright */}
          <div style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            © {new Date().getFullYear()} Chhoeun Sreynich. All rights reserved.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="footer-scroll-top"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--bg-card, #FFFFFF)',
              color: 'var(--text-purple, #7C3AED)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = '#7C3AED';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
