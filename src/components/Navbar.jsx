import React, { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'light';
    }
    return 'light';
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Sync theme with html data-theme attribute & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Handle Scroll Spy & background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.85rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled
          ? isDark
            ? 'rgba(12, 10, 26, 0.92)'
            : 'rgba(250, 248, 255, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? isDark
            ? '1px solid rgba(168, 85, 247, 0.16)'
            : '1px solid rgba(124, 58, 237, 0.08)'
          : 'none',
        boxShadow: isScrolled
          ? isDark
            ? '0 4px 20px rgba(0, 0, 0, 0.4)'
            : '0 4px 20px rgba(124, 58, 237, 0.05)'
          : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Name: Clean "Sreynich" Text */}
        <a
          href="#home"
          style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            color: isDark ? '#FFFFFF' : '#1E1B4B',
            textDecoration: 'none',
            letterSpacing: '-0.015em',
            transition: 'color 0.25s ease'
          }}
        >
          Sreynich
        </a>

        {/* Desktop Nav Items + Moon Icon */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.2rem' }} className="desktop-nav">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive
                      ? isDark
                        ? '#C084FC'
                        : '#7C3AED'
                      : isDark
                        ? '#E2E8F0'
                        : '#334155',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    padding: '0.25rem 0'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isDark ? '#C084FC' : '#7C3AED';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isDark ? '#E2E8F0' : '#334155';
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle (Moon Icon) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.35rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDark ? '#E2E8F0' : '#334155',
              transition: 'all 0.25s ease',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isDark ? '#C084FC' : '#7C3AED';
              e.currentTarget.style.transform = 'scale(1.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isDark ? '#E2E8F0' : '#334155';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Moon size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="mobile-controls">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDark ? '#E2E8F0' : '#334155',
              transition: 'all 0.2s ease'
            }}
          >
            <Moon size={20} strokeWidth={1.8} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Menu"
            style={{
              padding: '0.45rem',
              borderRadius: '8px',
              background: isDark ? 'rgba(168, 85, 247, 0.15)' : 'var(--purple-50)',
              color: isDark ? '#C084FC' : '#7C3AED',
              border: isDark ? '1px solid rgba(168, 85, 247, 0.25)' : '1px solid var(--border-light)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: isDark ? 'rgba(12, 10, 26, 0.98)' : 'rgba(250, 248, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '1.25rem 1.5rem',
            borderBottom: isDark ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive
                    ? isDark ? '#C084FC' : '#7C3AED'
                    : isDark ? '#E2E8F0' : '#1E1B4B',
                  padding: '0.55rem 0.8rem',
                  borderRadius: '8px',
                  background: isActive
                    ? isDark ? 'rgba(168, 85, 247, 0.12)' : 'var(--purple-50)'
                    : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 850px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 849px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
