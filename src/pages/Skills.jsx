import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills, skillCategories } from '../data/skills';
import { stagger } from '../animations/variants';
import './Skills.css';

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="skills page container">
      <SectionTitle
        eyebrow="Skills"
        title="Tools I reach for."
        lead="A working toolkit — weighted by how often I use each in real projects, not how many tutorials I've watched."
      />

      <div className="filter-bar" role="tablist" aria-label="Skill categories">
        {skillCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`filter-chip ${active === cat ? 'is-active' : ''}`}
            onClick={() => setActive(cat)}
            data-cursor="hover"
          >
            {active === cat && (
              <motion.span className="filter-chip__bg" layoutId="skillFilter" />
            )}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      <motion.div
        className="skills__grid"
        variants={stagger(0.02, 0.06)}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div key={skill.name} layout exit={{ opacity: 0, scale: 0.9 }}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
