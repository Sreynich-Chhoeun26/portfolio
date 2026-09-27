import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Terminal, Wrench, Users, Languages, Check, Sparkles } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Sparkles size={16} /> },
    { id: 'frontend', label: 'Front-End', icon: <Code size={16} /> },
    { id: 'backend', label: 'Back-End & DB', icon: <Database size={16} /> },
    { id: 'programming', label: 'Programming', icon: <Terminal size={16} /> },
    { id: 'tools', label: 'Tools & Design', icon: <Wrench size={16} /> },
    { id: 'personal', label: 'Personal & Languages', icon: <Users size={16} /> }
  ];

  const skillItems = [
    // Front-end
    { name: 'React.js', category: 'frontend', level: 88, desc: 'Component Architecture, Hooks, State Management' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 85, desc: 'DOM Manipulation, Async/Await, ES Modules' },
    { name: 'Tailwind CSS', category: 'frontend', level: 90, desc: 'Utility-First Styling, Responsive Layouts' },
    { name: 'Bootstrap', category: 'frontend', level: 92, desc: 'Grid System, Components, Modern Themes' },
    { name: 'HTML5', category: 'frontend', level: 95, desc: 'Semantic Structure, Accessibility, SEO' },
    { name: 'CSS3', category: 'frontend', level: 92, desc: 'Flexbox, CSS Grid, Animations, Glassmorphism' },

    // Back-end & Database
    { name: 'Laravel', category: 'backend', level: 82, desc: 'MVC Architecture, Eloquent ORM, Blade, Routing' },
    { name: 'PHP', category: 'backend', level: 85, desc: 'OOP, Server Scripts, Session Management' },
    { name: 'SQL Server', category: 'backend', level: 84, desc: 'Database Architecture, ER Diagrams, Stored Procedures' },
    { name: 'MySQL', category: 'backend', level: 86, desc: 'Relational Schema, Query Optimization, Joins' },

    // Programming
    { name: 'C#', category: 'programming', level: 80, desc: 'Object-Oriented Logic, .NET Basics' },
    { name: 'C++', category: 'programming', level: 82, desc: 'Data Structures, Memory Management' },
    { name: 'C Language', category: 'programming', level: 85, desc: 'Procedural Programming, Logic & Algorithms' },

    // Tools & Workflows
    { name: 'Figma', category: 'tools', level: 88, desc: 'UI/UX Wireframes, High-Fidelity Design Mockups' },
    { name: 'Git & GitHub', category: 'tools', level: 85, desc: 'Version Control, Branching, Repositories' },
    { name: 'REST APIs', category: 'tools', level: 86, desc: 'API Integration, JSON Data Fetching, Axios/Fetch' },

    // Personal & Languages
    { name: 'Good Communication', category: 'personal', level: 95, desc: 'Clear verbal and written collaboration' },
    { name: 'Problem Solving', category: 'personal', level: 90, desc: 'Logical debugging and algorithmic solutions' },
    { name: 'Teamwork & Adaptability', category: 'personal', level: 94, desc: 'Collaborative spirit and fast adjustment' },
    { name: 'Microsoft Office', category: 'personal', level: 90, desc: 'Word, Excel, PowerPoint documentation' },
    { name: 'Khmer Language', category: 'personal', level: 100, desc: 'Native speaker (Speaking, Reading, Writing)' },
    { name: 'English Language', category: 'personal', level: 80, desc: 'Medium proficiency (BELTEI 1-Year Intensive Course)' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="badge-purple">
            <Code size={16} /> TECHNICAL & PERSONAL SKILLS
          </span>
          <h2>My Expertise & Tools</h2>
          <p>
            A comprehensive overview of technologies, frameworks, databases, and soft skills I utilize.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.92rem',
                fontWeight: '600',
                transition: 'all 0.25s ease',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : '#475569',
                border: activeCategory === cat.id ? '1px solid #7C3AED' : '1px solid var(--border-medium)',
                boxShadow: activeCategory === cat.id ? '0 8px 20px -4px rgba(124, 58, 237, 0.4)' : 'var(--shadow-sm)'
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}
          className="grid-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <h4 style={{ fontSize: '1.15rem', color: '#1E1B4B' }}>{skill.name}</h4>
                    <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#7C3AED', background: 'var(--purple-50)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                      {skill.level}%
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{
                    width: '100%',
                    height: '7px',
                    background: 'var(--purple-100)',
                    borderRadius: '999px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #7C3AED, #A78BFA)',
                        borderRadius: '999px'
                      }}
                    />
                  </div>
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
