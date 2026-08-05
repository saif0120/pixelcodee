import { motion } from 'framer-motion';
import { socials } from '../data/site';
import { socialIcons } from '../utils/icons';
import './SocialLinks.css';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {socials.map((s) => {
        const Icon = socialIcons[s.icon];
        return (
          <li key={s.name}>
            <motion.a
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.name}
              data-cursor="hover"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Icon />
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}
