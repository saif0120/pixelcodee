import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import { fadeUp, stagger } from '../animations/variants';
import './AudiencePaths.css';

const paths = [
  {
    to: '/for-recruiters',
    icon: <FiBriefcase />,
    emoji: '💼',
    title: 'Hiring Managers',
    text: 'Reviewing me for a role? Jump straight to my skills, experience, projects, and resume.',
    links: ['Skills', 'Experience', 'Projects', 'Resume', 'GitHub'],
    cta: 'View my profile',
    variant: 'recruiter',
  },
  {
    to: '/for-clients',
    icon: <FiTrendingUp />,
    emoji: '🚀',
    title: 'Business Owners',
    text: 'Need a website for your business? See my services, process, pricing, and get a free quote.',
    links: ['Services', 'Process', 'Pricing', 'FAQ', 'Free Consultation'],
    cta: 'See how I can help',
    variant: 'client',
  },
];

export default function AudiencePaths() {
  return (
    <section className="container paths" aria-label="Choose your path">
      <motion.div className="paths__grid" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {paths.map((p) => (
          <motion.div key={p.to} variants={fadeUp}>
            <Link to={p.to} className={`path-card path-card--${p.variant}`} data-cursor="hover">
              <span className="path-card__emoji" aria-hidden="true">{p.emoji}</span>
              <h3 className="path-card__title">{p.title}</h3>
              <p className="path-card__text">{p.text}</p>
              <div className="path-card__links">
                {p.links.map((l) => <span key={l} className="path-card__pill">{l}</span>)}
              </div>
              <span className="path-card__cta">{p.cta} <FiArrowRight /></span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
