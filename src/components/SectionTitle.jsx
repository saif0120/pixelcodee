import { motion } from 'framer-motion';
import { fadeUp, reveal } from '../animations/variants';
import './SectionTitle.css';

// Consistent page/section header: eyebrow + heading + optional lead.
export default function SectionTitle({ eyebrow, title, lead, align = 'left' }) {
  return (
    <motion.header
      className={`section-title section-title--${align}`}
      variants={fadeUp}
      {...reveal}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title__h">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </motion.header>
  );
}
