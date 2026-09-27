import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sreynich-Chhoeun26',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chhoeun-sreynich26',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sreynich_26/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61555935325372',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    }
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7C3AED', '#A78BFA', '#5B21B6']
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="badge-purple">
            <Send size={16} /> GET IN TOUCH
          </span>
          <h2>Let's Connect & Work Together</h2>
          <p>
            Feel free to reach out for employment opportunities, project inquiries, or collaboration.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem' }} className="contact-grid">
          
          {/* Left Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--purple-100)',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Phone Numbers</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1E1B4B' }}>
                    0966017079 / 095518810
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy('0966017079', 'phone')}
                style={{
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  background: copiedField === 'phone' ? '#10B981' : 'var(--purple-50)',
                  color: copiedField === 'phone' ? '#FFFFFF' : '#7C3AED',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedField === 'phone' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--purple-100)',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={22} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Email Address</div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1E1B4B', wordBreak: 'break-all' }}>
                    sreynichchhoeun26@gmail.com
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy('sreynichchhoeun26@gmail.com', 'email')}
                style={{
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  background: copiedField === 'email' ? '#10B981' : 'var(--purple-50)',
                  color: copiedField === 'email' ? '#FFFFFF' : '#7C3AED',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedField === 'email' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'var(--purple-100)',
                color: '#7C3AED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Current Address</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1E1B4B' }}>
                  Sangkat Chaom Chao2, Khan Porsenchey, Phnom Penh City, Cambodia
                </div>
              </div>
            </motion.div>

            {/* Social Profiles Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--purple-100)',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Share2 size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Social Profiles</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1E1B4B' }}>
                    Connect on Social Media
                  </div>
                </div>
              </div>

              {/* Social Icon Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingLeft: '0.2rem' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--purple-50)',
                      border: '1px solid var(--border-medium)',
                      color: '#7C3AED',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: 'var(--shadow-sm)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#7C3AED';
                      e.currentTarget.style.boxShadow = '0 6px 20px -2px rgba(124, 58, 237, 0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'var(--purple-50)';
                      e.currentTarget.style.color = '#7C3AED';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#1E1B4B', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={22} style={{ color: '#7C3AED' }} /> Send Me a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Fill out the form below to send an instant message directly to my email inbox.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'var(--purple-50)',
                  border: '1px solid var(--border-medium)',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#1E1B4B', marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for contacting Chhoeun Sreynich. I will get back to you promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#1E1B4B', marginBottom: '0.4rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid var(--border-medium)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#1E1B4B', marginBottom: '0.4rem' }}>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid var(--border-medium)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#1E1B4B', marginBottom: '0.4rem' }}>Subject</label>
                  <input
                    type="text"
                    placeholder="Job Inquiry / Project Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid var(--border-medium)',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#1E1B4B', marginBottom: '0.4rem' }}>Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Sreynich, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid var(--border-medium)',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}

          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
