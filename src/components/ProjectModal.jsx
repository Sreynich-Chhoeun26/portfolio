import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, CheckCircle2, Calendar, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2000,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: '#FFFFFF',
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            borderRadius: '24px',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.3)',
            border: '1px solid var(--border-medium)',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              zIndex: 10,
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#1E1B4B',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <X size={20} />
          </button>

          {/* Project Header Image / Visual Banner */}
          {project.image && (
            <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative', background: 'var(--purple-50)' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(to top, #FFFFFF, transparent)'
              }} />
            </div>
          )}

          {/* Modal Body */}
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.8rem', background: 'var(--purple-50)', border: '1px solid var(--border-medium)', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '700', color: '#7C3AED', marginBottom: '0.75rem' }}>
              <Layers size={14} /> {project.category}
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#1E1B4B', marginBottom: '0.75rem' }}>{project.title}</h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {project.fullDescription || project.description}
            </p>

            {/* Tech Badges */}
            <div style={{ marginBottom: '1.8rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#1E1B4B', marginBottom: '0.75rem', fontWeight: '700' }}>Technologies Used:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'var(--purple-50)',
                      color: '#7C3AED',
                      border: '1px solid var(--border-medium)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Code2 size={14} /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Accomplishments */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#1E1B4B', marginBottom: '0.75rem', fontWeight: '700' }}>Key Features & Architecture:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.highlights.map((h, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} style={{ color: '#7C3AED', marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <button onClick={onClose} className="btn-primary" style={{ flex: 1 }}>
                Close Details
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
