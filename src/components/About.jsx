import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Target, HeartHandshake, ShieldCheck, Zap, BookOpen } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Target size={24} />,
      title: 'Problem Solving',
      description: 'Analytical mindset focused on creating efficient algorithms and elegant software solutions.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Teamwork & Adaptability',
      description: 'Works seamlessly in collaborative environments and quickly adapts to new tools and methodologies.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Honest & Hardworking',
      description: 'Dedicated to high moral standards, punctuality, responsibility, and code quality.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quick Learner',
      description: 'Passionate about picking up modern technologies like React, Laravel, and dynamic front-end libraries.'
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="badge-purple">
            <UserCheck size={16} /> PERSONAL PROFILE
          </span>
          <h2>Driven by Passion & Technical Curiosity</h2>
          <p>
            Combining academic excellence from BELTEI International University with hands-on web application projects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="about-grid">

          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--purple-100)',
                color: '#7C3AED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BookOpen size={22} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#1E1B4B' }}>Academic & Career Vision</h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I am currently a <strong>Year 4, Semester 2 Information Technology student</strong> at <strong>BELTEI International University</strong> with a strong specialization and enthusiasm for full-stack web development.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              As a motivated and responsible developer, I thrive both in independent problem-solving and in cross-functional team environments. I am eager to apply my software engineering skills and technical expertise to real-world industrial projects
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-light)',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#7C3AED', fontFamily: 'var(--font-heading)' }}>Y4 S2</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>IT Degree Level</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#7C3AED', fontFamily: 'var(--font-heading)' }}>10+</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Major Projects</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#7C3AED', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>Dedication</div>
              </div>
            </div>
          </motion.div>

          {/* Right Qualities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="qualities-grid">
            {qualities.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--purple-50) 0%, var(--purple-100) 100%)',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-light)'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#1E1B4B' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .qualities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
