import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { useSEO } from '../hooks/useSEO';
import { legalPages, legalIndex } from '../data/legal';
import { fadeUp, stagger } from '../animations/variants';
import './Legal.css';

export default function Legal() {
  const { slug } = useParams();
  const doc = legalPages[slug];
  useSEO({
    title: doc ? doc.title : 'Legal',
    description: doc ? `${doc.title} for PixelCodee — Saif Ali, independent web developer, New Delhi.` : 'Legal information.',
    path: `/legal/${slug || ''}`,
  });

  if (!doc) return <Navigate to="/legal/privacy" replace />;

  return (
    <div className="legal page container">
      <nav className="legal__crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><FiChevronRight /><span>{doc.title}</span>
      </nav>

      <SectionTitle eyebrow="Legal" title={doc.title} lead={doc.intro} />
      <p className="legal__updated">Last updated: {doc.updated}</p>

      <div className="legal__layout">
        <motion.article className="legal__content" variants={stagger(0.05)} initial="hidden" animate="show">
          {doc.sections.map((s) => (
            <motion.section key={s.h} variants={fadeUp} className="legal__section">
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </motion.section>
          ))}
        </motion.article>

        <aside className="legal__nav">
          <span className="eyebrow">All policies</span>
          <ul>
            {legalIndex.map((l) => (
              <li key={l.slug}>
                <Link to={`/legal/${l.slug}`} className={l.slug === slug ? 'is-active' : ''} data-cursor="hover">{l.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
