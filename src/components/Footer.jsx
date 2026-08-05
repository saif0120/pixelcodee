import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiArrowUpRight, FiMapPin, FiClock, FiCircle } from 'react-icons/fi';
import { useEffect, useState, useCallback } from 'react';
import SocialLinks from './SocialLinks';
import { site } from '../data/site';
import './Footer.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/for-clients', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/for-recruiters', label: 'For Recruiters' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

const techStack = ['React', 'Node.js', 'MongoDB', 'WordPress', 'Express'];

function useLocalTime(tz = 'Asia/Kolkata') {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [tz]);
  return time;
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const localTime = useLocalTime();
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    []
  );

  return (
    <footer className="footer">
      {/* ─── CTA Band ─── */}
      <div className="footer__cta-wrap">
        <div className="container footer__cta">
          <motion.div
            className="footer__cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="footer__cta-eyebrow">Have a project in mind?</span>
            <h2 className="footer__cta-title">
              Ready to get your{' '}
              <span className="gradient-text">business online?</span>
            </h2>
            <p className="footer__cta-sub">
              I respond within 24 hours. Let's discuss your project — no obligation, no pressure.
            </p>
            <div className="footer__cta-actions">
              <Link to="/contact" className="footer__cta-btn footer__cta-btn--primary" data-cursor="hover">
                Get in Touch <FiArrowUpRight />
              </Link>
              <a
                href={site.resumeUrl}
                className="footer__cta-btn footer__cta-btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Main Footer Grid ─── */}
      <div className="container footer__grid">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" data-cursor="hover">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo.png" alt="PixelCodee — Saif Ali" className="footer__logo-img" width="120" height="56" loading="lazy" />
            </picture>
          </Link>
          <p className="footer__bio">{site.bio}</p>
          <SocialLinks />
        </div>

        {/* Navigation */}
        <nav className="footer__col" aria-label="Site navigation">
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer__link" data-cursor="hover">
                  <span className="footer__link-text">{l.label}</span>
                  <FiArrowUpRight className="footer__link-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links">
            <li>
              <a href={`mailto:${site.email}`} className="footer__link" data-cursor="hover">
                <span className="footer__link-text">{site.email}</span>
                <FiArrowUpRight className="footer__link-arrow" />
              </a>
            </li>
            <li className="footer__info-row">
              <FiMapPin />
              <span>{site.location}</span>
            </li>
            <li className="footer__info-row">
              <FiClock />
              <span>Local time — {localTime}</span>
            </li>
            <li className="footer__info-row footer__status">
              <FiCircle className="footer__status-dot" />
              <span>Available for work</span>
            </li>
          </ul>
        </div>

        {/* Tech stack */}
        <div className="footer__col">
          <h4 className="footer__heading">Tech Stack</h4>
          <div className="footer__tags">
            {techStack.map((t) => (
              <span key={t} className="footer__tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="footer__bottom-wrap">
        <div className="container footer__bottom">
          <span>© {year} {site.name}. All rights reserved.</span>
          <nav className="footer__legal" aria-label="Legal">
            <Link to="/legal/privacy" data-cursor="hover">Privacy</Link>
            <Link to="/legal/terms" data-cursor="hover">Terms</Link>
            <Link to="/legal/refund" data-cursor="hover">Refund</Link>
            <Link to="/legal/cancellation" data-cursor="hover">Cancellation</Link>
            <Link to="/legal/disclaimer" data-cursor="hover">Disclaimer</Link>
          </nav>
          <span className="footer__bottom-built">
            Built with <span className="footer__heart">♥</span> using React
          </span>
        </div>
      </div>

      {/* ─── Back to Top with scroll progress ring ─── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            data-cursor="hover"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <svg className="back-to-top__ring" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="21" className="back-to-top__track" />
              <motion.circle
                cx="24"
                cy="24"
                r="21"
                className="back-to-top__progress"
                style={{ pathLength }}
              />
            </svg>
            <FiArrowUp className="back-to-top__icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}