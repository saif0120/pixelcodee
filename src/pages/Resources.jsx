import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiFileText, FiBookOpen, FiAward, FiFolder, FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd, breadcrumb } from '../hooks/useJsonLd';
import { site, currentLearning } from '../data/site';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './Resources.css';

const available = [
  { icon: <FiFileText />, title: 'Resume', text: 'My latest resume (PDF).', href: site.resumeUrl, cta: 'Download' },
  { icon: <FiGithub />, title: 'GitHub', text: 'Code, repositories, and projects.', href: site.github, cta: 'Visit' },
  { icon: <FiLinkedin />, title: 'LinkedIn', text: 'Professional profile and updates.', href: site.linkedin, cta: 'Connect' },
  { icon: <FiMail />, title: 'Email', text: 'Reach me directly.', href: `mailto:${site.email}`, cta: 'Email me' },
];

const roadmap = [
  { phase: 'Now', items: ['Strengthening React & Node.js', 'Building real client websites', ...currentLearning.items.slice(0, 3).map((i) => `Learning ${i}`)] },
  { phase: 'Next', items: ['Deeper into ASP.NET Core', 'SQL Server & EF Core', 'More full-stack projects'] },
  { phase: 'Future', items: ['Cloud deployment (Azure)', 'Automated testing', 'Open-source contributions'] },
];

const comingSoon = [
  { icon: <FiAward />, title: 'Certificates', text: 'Verified certifications — added as I earn them.' },
  { icon: <FiBookOpen />, title: 'Blog', text: 'Articles on web development, WordPress, and SEO.' },
  { icon: <FiFolder />, title: 'Case Study PDFs', text: 'Downloadable deep-dives on selected projects.' },
];

export default function Resources() {
  useSEO({
    title: 'Resources — Resume, GitHub & Learning Roadmap',
    description: 'Central hub for Saif Ali\'s resume, GitHub, LinkedIn, and learning roadmap. Certificates, blog, and case studies coming soon.',
    path: '/resources',
  });
  useJsonLd('bc-resources', breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
  ]));

  return (
    <div className="resources page container">
      <SectionTitle eyebrow="Resources" title="Everything in one place." lead="Quick access to my resume, profiles, and where I'm headed next." />

      <section className="res__block">
        <h3 className="res__h">Available Now</h3>
        <motion.div className="res__grid" variants={stagger(0.06)} {...reveal}>
          {available.map((r) => (
            <motion.a key={r.title} className="res-card card" href={r.href} target="_blank" rel="noreferrer" variants={fadeUp} data-cursor="hover">
              <span className="res-card__icon">{r.icon}</span>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
              <span className="res-card__cta">{r.cta} <FiArrowUpRight /></span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="res__block">
        <h3 className="res__h">Learning Roadmap</h3>
        <motion.div className="roadmap" variants={stagger(0.08)} {...reveal}>
          {roadmap.map((r) => (
            <motion.div className="roadmap__col card" key={r.phase} variants={fadeUp}>
              <span className="roadmap__phase">{r.phase}</span>
              <ul>{r.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="res__block">
        <h3 className="res__h">Coming Soon</h3>
        <motion.div className="res__grid" variants={stagger(0.06)} {...reveal}>
          {comingSoon.map((r) => (
            <motion.div key={r.title} className="res-card res-card--soon card" variants={fadeUp}>
              <span className="res-card__icon">{r.icon}</span>
              <h4>{r.title} <span className="res-card__soon">Soon</span></h4>
              <p>{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}