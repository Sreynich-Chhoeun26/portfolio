import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Terminal, Wrench, Sparkles } from 'lucide-react';
import { TechIcon } from './TechIcons';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Sparkles size={15} /> },
    { id: 'frontend', label: 'Front-End', icon: <Code size={15} /> },
    { id: 'backend', label: 'Back-End & DB', icon: <Database size={15} /> },
    { id: 'programming', label: 'Programming', icon: <Terminal size={15} /> },
    { id: 'tools', label: 'Tools & Design', icon: <Wrench size={15} /> }
  ];

  const skillItems = [
    // Top 9 skills matching requested 3x3 layout (HTML, React.js, Node.js / CSS, Next.js, Tailwind CSS / JavaScript, Python, Git)
    { name: 'HTML', category: 'frontend', level: 95, icon: 'html' },
    { name: 'React.js', category: 'frontend', level: 85, icon: 'react' },
    { name: 'Node.js', category: 'backend', level: 80, icon: 'node' },
    { name: 'CSS', category: 'frontend', level: 90, icon: 'css' },
    { name: 'Next.js', category: 'frontend', level: 80, icon: 'next' },
    { name: 'Tailwind CSS', category: 'frontend', level: 90, icon: 'tailwind' },
    { name: 'JavaScript', category: 'frontend', level: 90, icon: 'javascript' },
    { name: 'Python', category: 'programming', level: 85, icon: 'python' },
    { name: 'Git', category: 'tools', level: 85, icon: 'git' },

    // Additional Backend & Database
    { name: 'PHP', category: 'backend', level: 85, icon: 'php' },
    { name: 'Laravel', category: 'backend', level: 85, icon: 'laravel' },
    { name: 'MySQL', category: 'backend', level: 85, icon: 'mysql' },
    { name: 'SQL Server', category: 'backend', level: 84, icon: 'sql server' },
    { name: 'REST APIs', category: 'tools', level: 86, icon: 'api' },

    // Programming
    { name: 'C#', category: 'programming', level: 80, icon: 'c#' },
    { name: 'C++', category: 'programming', level: 82, icon: 'c++' },
    { name: 'C Language', category: 'programming', level: 85, icon: 'c' },

    // Tools & Design
    { name: 'Figma', category: 'tools', level: 88, icon: 'figma' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '6.5rem 0', position: 'relative' }}>
      <div className="container">

        {/* Section Header matching requested design */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <p style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-purple, #A78BFA)',
            marginBottom: '0.5rem'
          }}>
            MY SKILLS
          </p>
          <h2 style={{
            fontSize: '2.35rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.85rem'
          }}>
            Technologies
          </h2>
          {/* Purple accent line underneath heading */}
          <div style={{
            width: '44px',
            height: '3.5px',
            background: 'linear-gradient(90deg, #7C3AED, #A855F7)',
            borderRadius: '999px',
            margin: '0 auto'
          }} />
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3.5rem'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  background: isActive
                    ? 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)'
                    : 'var(--tab-inactive-bg, rgba(124, 58, 237, 0.05))',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid #7C3AED' : '1px solid var(--border-light)',
                  boxShadow: isActive ? '0 4px 14px rgba(124, 58, 237, 0.35)' : 'none'
                }}
              >
                {cat.icon} {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Skills Grid */}
        <motion.div
          layout
          className="skills-modern-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="skill-modern-item"
              >
                {/* Skill Name & Percentage Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '26px',
                      height: '26px',
                      flexShrink: 0
                    }}>
                      <TechIcon name={skill.icon || skill.name} size={26} />
                    </div>
                    <span style={{
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em'
                    }}>
                      {skill.name}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)'
                  }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div style={{
                  width: '100%',
                  height: '7px',
                  backgroundColor: 'var(--skill-track-bg, rgba(255, 255, 255, 0.08))',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.03 }}
                    style={{
                      height: '100%',
                      borderRadius: '999px',
                      background: 'linear-gradient(90deg, #6366F1 0%, #7C3AED 50%, #A855F7 100%)',
                      boxShadow: '0 0 10px rgba(124, 58, 237, 0.45)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
