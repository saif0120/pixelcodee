import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import Button from '../components/Button';
import { useSEO } from '../hooks/useSEO';
import { skillIcons } from '../utils/icons';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { site, currentLearning } from '../data/site';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './ForRecruiters.css';

export default function ForRecruiters() {
  useSEO({
    title: 'For Hiring Managers — Saif Ali, Web Developer',
    description: 'Professional summary, technical skills, experience, projects, and resume for Saif Ali — full stack web developer (React, Node.js, MongoDB, WordPress) based in New Delhi.',
    path: '/for-recruiters',
  });

  return (
    <div className="recruiter page container">
      <SectionTitle
        eyebrow="For Hiring Managers"
        title="A developer who ships, communicates, and keeps learning."
        lead="Everything you need to evaluate me — skills, experience, projects, and resume — in one place."
      />

      {/* Quick actions */}
      <motion.div className="recruiter__actions" variants={stagger(0.06)} initial="hidden" animate="show">
        <motion.a variants={fadeUp} className="btn btn--primary" href={site.resumeUrl} target="_blank" rel="noreferrer" data-cursor="hover">
          <span className="btn__label">Download Resume <FiDownload /></span>
        </motion.a>
        <motion.a variants={fadeUp} className="btn btn--ghost" href={site.github} target="_blank" rel="noreferrer" data-cursor="hover">
          <span className="btn__label">GitHub <FiGithub /></span>
        </motion.a>
        <motion.a variants={fadeUp} className="btn btn--ghost" href={site.linkedin} target="_blank" rel="noreferrer" data-cursor="hover">
          <span className="btn__label">LinkedIn <FiLinkedin /></span>
        </motion.a>
        <motion.a variants={fadeUp} className="btn btn--ghost" href={`mailto:${site.email}`} data-cursor="hover">
          <span className="btn__label">Email <FiMail /></span>
        </motion.a>
      </motion.div>

      {/* Professional summary */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Professional Summary</h3>
        <p className="recruiter__para">
          I'm a full stack web developer based in New Delhi with hands-on experience building and deploying
          production websites and MERN-stack applications. I work confidently across React, Node.js, Express,
          and MongoDB on the application side, and WordPress/WooCommerce for content and e-commerce sites.
          I care about responsive design, clean code, and clear communication — and I'm currently pursuing my BCA (2026).
        </p>
      </section>

      {/* Technical skills */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Technical Skills</h3>
        <motion.div className="recruiter__skills" variants={stagger(0.03)} {...reveal}>
          {skills.map((s) => {
            const Icon = skillIcons[s.icon];
            return (
              <motion.div className="skill-badge" key={s.name} variants={fadeUp}>
                {Icon && <Icon />} <span>{s.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Experience */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Experience</h3>
        <Timeline items={experience.map((e) => ({ title: e.role, subtitle: e.company, period: e.period, points: e.points, tech: e.tech }))} />
      </section>

      {/* Projects preview */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Selected Projects</h3>
        <div className="recruiter__projects">
          {projects.map((p) => (
            <div className="recruiter__project" key={p.id}>
              <div>
                <h4>{p.title}</h4>
                <p>{p.overview}</p>
                <div className="recruiter__ptech">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="recruiter__plinks">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" data-cursor="hover"><FiArrowUpRight /> Live</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" data-cursor="hover"><FiGithub /> Code</a>}
              </div>
            </div>
          ))}
        </div>
        <Button to="/projects" variant="ghost" icon={<FiArrowUpRight />}>See full case studies</Button>
      </section>

      {/* Current learning */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Currently Learning</h3>
        <p className="recruiter__para">{currentLearning.intro}</p>
        <div className="recruiter__learning">
          {currentLearning.items.map((l) => (
            <span key={l} className="learning-pill">{l}</span>
          ))}
        </div>
        <p className="recruiter__note">These are actively being studied — I represent them as growth areas, not current professional expertise.</p>
      </section>

      {/* Education */}
      <section className="recruiter__block">
        <h3 className="recruiter__h">Education</h3>
        <Timeline items={education.map((e) => ({ title: e.degree, subtitle: e.institute, period: e.period, points: e.achievements }))} />
      </section>

      {/* CTA */}
      <motion.section className="recruiter__cta" variants={fadeUp} {...reveal}>
        <h3>Want to talk about a role?</h3>
        <p>I'm open to opportunities and can start a conversation quickly.</p>
        <div className="recruiter__cta-actions">
          <Button to="/contact" variant="primary" icon={<FiArrowUpRight />}>Get in touch</Button>
          <a className="btn btn--ghost" href={site.resumeUrl} target="_blank" rel="noreferrer" data-cursor="hover">
            <span className="btn__label">Download Resume <FiDownload /></span>
          </a>
        </div>
      </motion.section>
    </div>
  );
}
