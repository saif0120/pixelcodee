import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import AudiencePaths from '../components/AudiencePaths';
import { useTypewriter } from '../hooks/useTypewriter';
import { useSEO } from '../hooks/useSEO';
import { site, stats, trustLine } from '../data/site';
import { fadeUp, stagger } from '../animations/variants';
import './Home.css';

export default function Home() {
  const typed = useTypewriter(site.taglines);
  useSEO({
    title: 'Full Stack Web Developer in Delhi',
    description: 'Saif Ali — independent full stack web developer in New Delhi. I build modern, responsive, SEO-ready websites that help businesses grow. View projects or get a free quote.',
    path: '/',
  });

  return (
    <div className="home page">
      <section className="hero container">
        <motion.div className="hero__content" variants={stagger(0.1, 0.12)} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={fadeUp}>
            Independent Full Stack Web Developer · New Delhi
          </motion.span>

          <motion.h1 className="hero__title" variants={fadeUp}>
            Building Modern Websites That
            <br />
            Help Your Business{' '}
            <span className="gradient-text">Grow</span>
          </motion.h1>

          <motion.div className="hero__typed" variants={fadeUp}>
            <span className="gradient-text">{typed}</span>
            <span className="hero__caret" aria-hidden="true" />
          </motion.div>

          <motion.p className="hero__lead section-lead" variants={fadeUp}>
            {site.bio}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <Button to="/projects" variant="primary" icon={<FiArrowUpRight />}>View projects</Button>
            <Button to="/for-recruiters" variant="ghost">Hire me</Button>
            <Button to="/contact" variant="ghost" icon={<FiArrowUpRight />}>Get free quote</Button>
          </motion.div>

          <motion.ul className="hero__trust" variants={fadeUp}>
            {trustLine.map((t) => <li key={t}>{t}</li>)}
          </motion.ul>

          <motion.div className="hero__socials" variants={fadeUp}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div className="hero__profile" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
          <div className="hero__orbit">
            <motion.div className="hero__avatar" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <img src="/profile.jpg" alt={site.name} />
            </motion.div>
            <span className="hero__ring hero__ring--1" />
            <span className="hero__ring hero__ring--2" />
            <motion.span className="hero__chip hero__chip--react" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>React.js</motion.span>
            <motion.span className="hero__chip hero__chip--ui" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>WordPress</motion.span>
            <motion.span className="hero__chip hero__chip--node" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>Node.js</motion.span>
          </div>
        </motion.div>
      </section>

      {/* Dual audience paths */}
      <AudiencePaths />

      {/* Stats */}
      <motion.section className="container stats" variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {stats.map((s) => (
          <motion.div className="stats__item" key={s.label} variants={fadeUp}>
            <span className="stats__value gradient-text">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </motion.div>
        ))}
      </motion.section>

      <motion.a href="#" className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} aria-hidden="true">
        <span>Scroll</span>
        <motion.span className="scroll-hint__icon" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </div>
  );
}
