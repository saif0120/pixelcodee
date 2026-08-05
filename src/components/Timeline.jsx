import { motion } from 'framer-motion';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './Timeline.css';

/**
 * Vertical timeline. `items` = [{ title, subtitle, meta, period, points, tech }]
 */
export default function Timeline({ items }) {
  return (
    <motion.div className="timeline" variants={stagger()} {...reveal}>
      <span className="timeline__spine" aria-hidden="true" />
      {items.map((item, i) => (
        <motion.article className="timeline__item" key={i} variants={fadeUp}>
          <span className="timeline__node" aria-hidden="true" />
          <div className="timeline__card card">
            <div className="timeline__head">
              <div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__subtitle">
                  {item.subtitle}
                  {item.meta && <span className="timeline__meta"> · {item.meta}</span>}
                </p>
              </div>
              <span className="timeline__period">{item.period}</span>
            </div>
            {item.points?.length > 0 && (
              <ul className="timeline__points">
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            )}
            {item.tech?.length > 0 && (
              <div className="timeline__tech">
                {item.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
