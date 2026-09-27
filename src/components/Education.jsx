import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      period: 'Present (Year 4 – Semester 2)',
      institution: 'BELTEI International University',
      subtitle: 'Bachelor of Information Technology and Science',
      status: 'Ongoing Degree Program',
      details: [
        'Specializing in Web Development, Software Engineering, Database Systems, and Object-Oriented Programming.',
        'Actively participating in class team assignments, frontend/backend projects, and technical workshops.',
        'Consistently applying modern stack tools: React.js, PHP Laravel, MySQL, and Figma.'
      ],
      isCurrent: true
    },
    {
      period: '1 Year Duration',
      institution: 'BELTEI International University',
      subtitle: 'Intensive Course of English',
      status: 'Completed',
      details: [
        'Comprehensive 1-Year English Intensive Program focused on academic writing, technical reading, and workplace speaking.',
        'Enhanced ability to comprehend English software documentation, APIs, and international developer resources.'
      ],
      isCurrent: false
    },
    {
      period: '2023 Graduated',
      institution: 'Samdech Techo Hun Sen Sondek High School',
      subtitle: 'High School Diploma',
      status: 'Completed',
      details: [
        'Successfully completed national high school curriculum with focus on mathematics and basic science.',
        'Developed foundational analytical and problem-solving skills.'
      ],
      isCurrent: false
    }
  ];

  return (
    <section id="education" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="badge-purple">
            <GraduationCap size={16} /> ACADEMIC BACKGROUND
          </span>
          <h2>Education & Certifications</h2>
          <p>
            My academic journey at BELTEI International University and foundational high school diploma.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Timeline Bar */}
          <div style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '28px',
            width: '4px',
            background: 'linear-gradient(to bottom, #7C3AED 0%, #DDD6FE 100%)',
            borderRadius: '999px'
          }} className="timeline-bar" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationItems.map((item, index) => (
              <motion.div
                key={item.institution + index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: '1.5rem',
                  alignItems: 'flex-start'
                }}
              >
                {/* Timeline Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: item.isCurrent ? 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' : '#FFFFFF',
                  color: item.isCurrent ? '#FFFFFF' : '#7C3AED',
                  border: '2px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: item.isCurrent ? '0 10px 20px rgba(124, 58, 237, 0.3)' : 'var(--shadow-sm)',
                  zIndex: 2
                }}>
                  {item.isCurrent ? <GraduationCap size={26} /> : <Award size={24} />}
                </div>

                {/* Content Card */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {item.period}
                      </span>
                      <h3 style={{ fontSize: '1.4rem', color: '#1E1B4B', marginTop: '0.2rem' }}>{item.institution}</h3>
                    </div>

                    <span style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      background: item.isCurrent ? 'var(--purple-50)' : '#F1F5F9',
                      color: item.isCurrent ? '#7C3AED' : '#475569',
                      border: '1px solid var(--border-light)'
                    }}>
                      {item.status}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: '#6D28D9', fontWeight: '600', marginBottom: '1rem' }}>
                    {item.subtitle}
                  </h4>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} style={{ color: '#7C3AED', marginTop: '3px', flexShrink: 0 }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-bar { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
