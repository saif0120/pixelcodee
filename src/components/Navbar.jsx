import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/for-clients', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/for-recruiters', label: 'For Recruiters' },
  { to: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" data-cursor="hover" onClick={() => setOpen(false)}>
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="PixelCodee — Saif Ali" className="nav__logo-img" width="120" height="46" />
          </picture>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              data-cursor="hover"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <div className="nav__cta">
            <Button to="/contact" variant="primary">Get a Free Quote</Button>
          </div>
          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} data-cursor="hover">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav className="nav__mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} aria-label="Mobile">
            {[...links, { to: '/contact', label: 'Get a Free Quote' }].map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
