import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Button from '../components/Button';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd, breadcrumb } from '../hooks/useJsonLd';
import { stagger, fadeUp, reveal } from '../animations/variants';
import './Projects.css';

export default function Projects() {
  const [active, setActive] = useState(null);
  useSEO({ title: 'Projects — Web Development Case Studies', description: 'Real websites Saif Ali has built — e-commerce, business sites, and full-stack apps. Full case studies with problem, solution, and results.', path: '/projects' });
  useJsonLd('bc-projects', breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ]));

  return (
    <div className="projects page container">
      <SectionTitle
        eyebrow="Portfolio"
        title="Websites I've built for real businesses."
        lead="Every project is a real website, live on the internet, serving real customers."
      />

      <motion.div className="projects__grid" variants={stagger(0.08)} initial="hidden" animate="show">
        <AnimatePresence mode="popLayout">
          {projects.map((p) => (
            <motion.div key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProjectCard project={p} onOpen={setActive} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.section className="projects__cta" variants={fadeUp} {...reveal}>
        <h3>Want something similar for your business?</h3>
        <Button to="/contact" variant="primary" icon={<FiArrowUpRight />}>Get a free quote</Button>
      </motion.section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
