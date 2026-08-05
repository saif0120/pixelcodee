import { motion } from 'framer-motion';
import { FiMessageCircle, FiZap, FiTool, FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import Button from '../components/Button';
import Picture from '../components/Picture';
import { skillIcons } from '../utils/icons';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { certificates } from '../data/certificates';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './About.css';

const whyMe = [
  { icon: <FiMessageCircle />, title: 'Direct Communication', text: 'You talk to me directly — no middleman, no project managers, no delays.' },
  { icon: <FiZap />, title: 'Fast Turnaround', text: 'Most projects delivered in 2–4 weeks. Landing pages in under a week.' },
  { icon: <FiTool />, title: 'Post-Launch Support', text: "I don't disappear after delivery. 30 days free support with every project." },
];

export default function About() {
  useSEO({ title: 'About — Saif Ali, Web Developer', description: 'About Saif Ali — an independent full stack web developer based in New Delhi, pursuing BCA (2026). Passionate developer, continuous learner, problem solver.', path: '/about' });
  return (
    <div className="about page container">
      <SectionTitle
        eyebrow="About"
        title="A developer who cares about your business."
        lead="I don't just write code — I build websites that bring in customers."
      />

      {/* Intro */}
      <motion.div className="about__grid" variants={fadeUp} {...reveal}>
        <div className="about__intro">
          <div className="about__photo-wrap">
            <Picture src="/profile.jpg" webp="/profile.webp" alt={`${site.name}, web developer`} className="about__photo" width="180" height="180" />
          </div>
          <div>
            <p className="about__para">
              I'm Saif Ali, a web developer based in New Delhi. I've built production websites for restaurants, e-commerce brands, and service businesses across India.
            </p>
            <p className="about__para">
              Unlike agencies that take months and charge lakhs, I deliver fast, communicate clearly, and make sure your site works on every device, loads quickly, and shows up on Google.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why Work With Me */}
      <section className="about__block">
        <h3 className="about__h">Why Work With Me</h3>
        <motion.div className="about__values" variants={stagger()} {...reveal}>
          {whyMe.map((v) => (
            <motion.div className="value-card card" key={v.title} variants={fadeUp}>
              <span className="value-card__icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="about__block">
        <h3 className="about__h">Tech Stack</h3>
        <motion.div className="about__skills" variants={stagger(0.03)} {...reveal}>
          {skills.map((s) => {
            const Icon = skillIcons[s.icon];
            return (
              <motion.div className="skill-badge" key={s.name} variants={fadeUp}>
                {Icon && <Icon />}
                <span>{s.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Experience */}
      <section className="about__block">
        <h3 className="about__h">Experience</h3>
        <Timeline items={experience.map((e) => ({
          title: e.role,
          subtitle: e.company,
          period: e.period,
          points: e.points,
          tech: e.tech,
        }))} />
      </section>

      {/* Education */}
      <section className="about__block">
        <h3 className="about__h">Education</h3>
        <Timeline items={education.map((e) => ({
          title: e.degree,
          subtitle: e.institute,
          period: e.period,
          points: e.achievements,
        }))} />
      </section>

      {/* Certificates */}
      <section className="about__block">
        <h3 className="about__h">Certifications</h3>
        <motion.div className="about__certs" variants={stagger()} {...reveal}>
          {certificates.map((c) => (
            <motion.div className="cert-card card" key={c.title} variants={fadeUp}>
              <h4>{c.title}</h4>
              <span>{c.issuer} · {c.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section className="about__cta" variants={fadeUp} {...reveal}>
        <h3>Interested in working together?</h3>
        <Button to="/contact" variant="primary" icon={<FiArrowUpRight />}>Get a free quote</Button>
      </motion.section>
    </div>
  );
}