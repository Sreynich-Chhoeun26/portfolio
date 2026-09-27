import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Code, Sparkles, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Management System',
      category: 'Full-Stack Web App',
      filter: 'fullstack',
      description: 'Comprehensive e-commerce application featuring product catalog management, interactive shopping frontend, user authentication, and REST API integration.',
      fullDescription: 'Developed during BIU coursework using Laravel backend and React.js frontend. Features full CRUD operations for products, cart management, RESTful API endpoints for backend communications, order status tracking, and dynamic admin reporting.',
      tech: ['PHP', 'Laravel', 'React.js', 'REST API', 'MySQL', 'Tailwind CSS'],
      image: '/project_ecommerce.png',
      highlights: [
        'Built full backend REST API using Laravel framework and Eloquent ORM.',
        'Designed interactive frontend interfaces with React.js components.',
        'Implemented product catalog management, search filtering, and inventory controls.',
        'Configured SQL database relationships for users, categories, products, and orders.'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Design Projects (Smart Home & Job Portal)',
      category: 'UI/UX & Wireframing',
      filter: 'uiux',
      description: 'High-fidelity mockups and interactive wireframes designed in Figma for Smart Home IoT app and Job Search Recruitment portal.',
      fullDescription: 'Crafted mobile app user interface concepts focusing on modern glassmorphism aesthetic, intuitive UX flows, accessible contrast ratios, and dark/light purple visual theme tokens.',
      tech: ['Figma', 'Wireframing', 'UI/UX Design', 'High-Fidelity Mockups', 'Prototyping'],
      image: '/project_smarthome.png',
      highlights: [
        'Created high-fidelity wireframes and user interaction flows in Figma.',
        'Designed Smart Home dashboard for managing lighting, temperature, and IoT devices.',
        'Designed Job Portal mobile screens for resume uploads, application status, and job alerts.',
        'Established consistent design system tokens, typography scales, and component libraries.'
      ]
    },
    {
      id: 3,
      title: 'Product Management System',
      category: 'Front-End App',
      filter: 'frontend',
      description: 'Dynamic frontend product inventory web application with real-time searching, responsive data tables, modal forms, and notification toasts.',
      fullDescription: 'Focused on creating a responsive and smooth user experience for managing product inventory. Built using React.js state management and Bootstrap UI elements.',
      tech: ['React.js', 'Bootstrap', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      image: null,
      highlights: [
        'Built reactive stateful forms for creating and editing inventory records.',
        'Designed responsive grid and tabular layouts styled with Bootstrap.',
        'Implemented instant keyword search, sorting by price/stock, and pagination.',
        'Handled local state persistence and clean user feedback notifications.'
      ]
    },
    {
      id: 4,
      title: 'Hotel Management System',
      category: 'Database & Architecture',
      filter: 'db',
      description: 'Relational database architectural design using SQL Server, entity-relationship diagrams (ERD), room booking schedules, and transactional queries.',
      fullDescription: 'Engineered database schema for hotel management including guest registration, room types, daily pricing, billing transactions, and staff scheduling.',
      tech: ['SQL Server', 'ER Diagrams', 'Database Architecture', 'T-SQL', 'Relational Schemas'],
      image: null,
      highlights: [
        'Modeled normalized relational database tables (1NF to 3NF) for zero data redundancy.',
        'Constructed ER diagrams mapping complex relationships between Guests, Rooms, and Bookings.',
        'Wrote complex SQL queries, JOIN operations, and transactional procedures for check-ins/check-outs.',
        'Ensured database security, foreign key constraints, and indexing for optimal query performance.'
      ]
    },
    {
      id: 5,
      title: 'Web Design Templates',
      category: 'Front-End Development',
      filter: 'frontend',
      description: 'Suite of custom website layout templates including dashboards, registration forms, responsive tables, sample pages, and smooth CSS keyframe animations.',
      fullDescription: 'Created a library of reusable Web Design templates showcasing interactive UI components, micro-animations, glassmorphic cards, and clean standard code structure.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Custom Animations', 'Responsive Layouts'],
      image: null,
      highlights: [
        'Designed responsive admin dashboard pages with sidebar navigation.',
        'Crafted custom keyframe CSS animations for modal entrances and button hovers.',
        'Built mobile-friendly pricing cards, form inputs with inline validation, and sample landing pages.',
        'Tested cross-browser compatibility across Chrome, Edge, Firefox, and mobile devices.'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'db', label: 'Database' }
  ];

  const filteredProjects = filterCategory === 'all'
    ? projects
    : projects.filter(p => p.filter === filterCategory);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="badge-purple">
            <FolderGit2 size={16} /> WORK EXPERIENCE & CLASS PROJECTS
          </span>
          <h2>Featured Academic Projects</h2>
          <p>
            Key projects built during Information Technology degree studies at BELTEI International University.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCategory(c.id)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                background: filterCategory === c.id ? '#7C3AED' : '#FFFFFF',
                color: filterCategory === c.id ? '#FFFFFF' : '#475569',
                border: filterCategory === c.id ? '1px solid #7C3AED' : '1px solid var(--border-medium)',
                boxShadow: filterCategory === c.id ? '0 4px 14px rgba(124, 58, 237, 0.3)' : 'none'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="grid-2">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Banner */}
                {project.image ? (
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      className="project-img-hover"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(30, 27, 75, 0.4), transparent)'
                    }} />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(8px)',
                      color: '#7C3AED',
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      {project.category}
                    </span>
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '140px',
                    background: 'linear-gradient(135deg, var(--purple-100) 0%, var(--purple-200) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Code size={40} style={{ color: '#7C3AED', opacity: 0.7 }} />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#FFFFFF',
                      color: '#7C3AED',
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px'
                    }}>
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Project Body */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: '#1E1B4B', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {project.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} style={{
                          background: 'var(--purple-50)',
                          color: '#7C3AED',
                          fontSize: '0.78rem',
                          fontWeight: '600',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)'
                        }}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', padding: '0.25rem 0.4rem' }}>
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      color: '#7C3AED'
                    }}>
                      <Eye size={16} /> View Project Details & Architecture
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
