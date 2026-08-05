import { motion } from 'framer-motion';
import { skillIcons } from '../utils/icons';
import { fadeUp } from '../animations/variants';
import './SkillCard.css';

export default function SkillCard({ skill }) {
  const Icon = skillIcons[skill.icon];
  return (
    <motion.div
      className="skill-card"
      variants={fadeUp}
      whileHover={{ y: -6 }}
      data-cursor="hover"
    >
      <div className="skill-card__top">
        <span className="skill-card__icon">{Icon && <Icon />}</span>
        {skill.learning && <span className="skill-card__learning">Learning</span>}
      </div>
      <h3 className="skill-card__name">{skill.name}</h3>
      <div className="skill-card__bar" aria-hidden="true">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="skill-card__pct">{skill.level}%</span>
    </motion.div>
  );
}
