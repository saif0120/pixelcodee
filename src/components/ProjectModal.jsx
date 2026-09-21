import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';
import './ProjectModal.css';

const Block = ({ label, children }) => (
  <div className="modal__block">
    <h4 className="modal__block-h">{label}</h4>
    {children}
  </div>
);

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    // Lock background scroll AND pause Lenis smooth-scroll so the modal
    // scrolls internally instead of the page scrolling behind it.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      if (window.__lenis) window.__lenis.start();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
          <motion.div
            className="modal__panel"
            data-lenis-prevent
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label="Close" data-cursor="hover"><FiX /></button>
            <div className="modal__media">
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            </div>
            <div className="modal__body">
              <div className="modal__tags">
                {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <h3 className="modal__title">{project.title}</h3>

              {project.overview && <p className="modal__desc">{project.overview}</p>}
              {project.problem && <Block label="Business Problem"><p>{project.problem}</p></Block>}
              {project.solution && <Block label="Solution"><p>{project.solution}</p></Block>}
              {project.features?.length > 0 && (
                <Block label="Key Features">
                  <ul className="modal__list">{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
                </Block>
              )}
              {project.value && <Block label="Business Value"><p>{project.value}</p></Block>}
              <Block label="Technology Stack">
                <div className="modal__techrow">{project.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </Block>
              {project.lessons && <Block label="Lessons Learned"><p>{project.lessons}</p></Block>}
              {project.future && <Block label="Future Improvements"><p>{project.future}</p></Block>}

              {(project.demo || project.github) && (
                <div className="modal__actions">
                  {project.demo && (
                    <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer" data-cursor="hover">
                      <span className="btn__label">Live demo <FiExternalLink /></span>
                    </a>
                  )}
                  {project.github && (
                    <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer" data-cursor="hover">
                      <span className="btn__label">Source <FiGithub /></span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}