import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpen }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => { px.set(0.5); py.set(0.5); };

  return (
    <motion.article
      ref={ref}
      className="project-card"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -6 }}
      data-cursor="hover"
    >
      <button className="project-card__media" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}>
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        {project.featured && <span className="project-card__badge">Featured</span>}
        <span className="project-card__view">View case study <FiArrowUpRight /></span>
      </button>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__blurb">{project.blurb}</p>
        <div className="project-card__tech">
          {project.tech.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-card__links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" data-cursor="hover"><FiExternalLink /> Live</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" data-cursor="hover"><FiGithub /> Code</a>
          )}
          <button onClick={() => onOpen(project)} data-cursor="hover">Case study</button>
        </div>
      </div>
    </motion.article>
  );
}