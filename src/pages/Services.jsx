import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { services, process, faqs } from '../data/services';
import { site } from '../data/site';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './Services.css';

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'is-open' : ''}`}>
      <button className="faq__q" onClick={() => setOpen(!open)} data-cursor="hover">
        <span>{item.q}</span>
        <FiChevronDown className="faq__arrow" />
      </button>
      <motion.div className="faq__a" initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }}>
        <p>{item.a}</p>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Saif, I want to discuss a project.')}`;
  return (
    <div className="services page container">
      <SectionTitle
        eyebrow="Services"
        title="Web Development That Grows Your Business."
        lead="From starter websites to custom full-stack applications — clear scope, fixed pricing, no surprises."
      />

      {/* Service Cards */}
      <motion.div className="services__grid" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {services.map((s) => (
          <motion.div className={`service-card card ${s.popular ? 'service-card--popular' : ''}`} key={s.id} variants={fadeUp}>
            {s.popular && <span className="service-card__badge">Most Popular</span>}
            <span className="service-card__icon"><s.icon /></span>
            <h3 className="service-card__title">{s.title}</h3>
            <div className="service-card__price">
              <span className="service-card__amount">{s.price}</span>
              <span className="service-card__suffix">{s.suffix}</span>
            </div>
            <p className="service-card__desc">{s.description}</p>
            <p className="service-card__best"><strong>Best for:</strong> {s.best}</p>
            <p className="service-card__timeline"><strong>Timeline:</strong> {s.timeline}</p>
            <ul className="service-card__features">
              {s.features.map((f) => (
                <li key={f}><FiCheck /> {f}</li>
              ))}
            </ul>
            <Button to="/contact" variant={s.popular ? 'primary' : 'ghost'} icon={<FiArrowUpRight />}>
              {s.id === 'webapp' ? 'Discuss your project' : 'Get started'}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Process */}
      <section className="process">
        <h2 className="process__title">How I Work</h2>
        <p className="process__sub">A simple, transparent process from first call to launch.</p>
        <motion.div className="process__steps" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {process.map((p, i) => (
            <motion.div className="process__step" key={p.step} variants={fadeUp}>
              <span className="process__num gradient-text">{p.step}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <span className="process__dur">{p.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <div className="faq__list">
          {faqs.map((f, i) => <FaqItem key={i} item={f} />)}
        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section className="services__cta" variants={fadeUp} {...reveal}>
        <h2>Ready to get your business online?</h2>
        <p>Book a free discovery call or send me a WhatsApp message — I respond within 24 hours.</p>
        <div className="services__cta-actions">
          <Button to="/contact" variant="primary" icon={<FiArrowUpRight />}>Get a free quote</Button>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" data-cursor="hover">
            <span className="btn__label"><FaWhatsapp /> Chat on WhatsApp</span>
          </a>
        </div>
      </motion.section>
    </div>
  );
}
