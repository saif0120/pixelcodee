import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { certificates } from '../data/certificates';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './Certificates.css';

export default function Certificates() {
  return (
    <div className="page container">
      <SectionTitle
        eyebrow="Certificates"
        title="Proof of the reps."
        lead="Courses and programs I finished — each one left something in the toolkit above."
      />

      <motion.div className="cert-grid" variants={stagger()} {...reveal}>
        {certificates.map((c) => (
          <motion.article className="cert-card" key={c.title} variants={fadeUp} data-cursor="hover">
            <div className="cert-card__media">
              <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
              <span className="cert-card__year">{c.year}</span>
            </div>
            <div className="cert-card__body">
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              <div className="cert-card__actions">
                <a href={c.url} target="_blank" rel="noreferrer" data-cursor="hover">
                  <FiExternalLink /> View
                </a>
                <a href={c.url} download data-cursor="hover">
                  <FiDownload /> Download
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
