import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Fi from 'react-icons/fi';
import { FiCheck, FiArrowUpRight, FiChevronDown, FiVideo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useSEO } from '../hooks/useSEO';
import { useJsonLd, breadcrumb } from '../hooks/useJsonLd';
import { services, process, faqs, businessBenefits, capabilities, pricingDisclaimer } from '../data/services';
import { whyChooseMe, site } from '../data/site';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './ForClients.css';

function Faq({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'is-open' : ''}`}>
      <button className="faq__q" onClick={() => setOpen(!open)} data-cursor="hover" aria-expanded={open}>
        <span>{item.q}</span><FiChevronDown className="faq__arrow" />
      </button>
      <motion.div className="faq__a" initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }}>
        <p>{item.a}</p>
      </motion.div>
    </div>
  );
}

export default function ForClients() {
  useSEO({
    title: 'For Business Owners — Web Development Services in Delhi',
    description: 'Affordable web development for businesses in India — business websites, WordPress, landing pages, redesigns, and maintenance. Transparent launch pricing. Get a free quote.',
    path: '/for-clients',
  });
  useJsonLd('faq-schema', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
  useJsonLd('bc-clients', breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'For Business Owners', path: '/for-clients' },
  ]));
  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Saif, I want a website for my business.')}`;

  return (
    <div className="clients page container">
      <SectionTitle
        eyebrow="For Business Owners"
        title="A website that helps your business grow — without the agency price tag."
        lead="Work directly with an independent developer. Clear pricing, honest timelines, and support after launch."
      />

      {/* Why choose me */}
      <section className="clients__block">
        <h3 className="clients__h">Why Choose Me</h3>
        <motion.div className="why__grid" variants={stagger(0.05)} {...reveal}>
          {whyChooseMe.map((w) => {
            const Icon = Fi[w.icon] || FiCheck;
            return (
              <motion.div className="why-card card" key={w.title} variants={fadeUp}>
                <span className="why-card__icon"><Icon /></span>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Services */}
      <section className="clients__block">
        <h3 className="clients__h">Services</h3>
        <motion.div className="svc__grid" variants={stagger(0.06)} {...reveal}>
          {services.map((s) => (
            <motion.div className={`svc-card card ${s.popular ? 'svc-card--popular' : ''}`} key={s.id} variants={fadeUp}>
              {s.popular && <span className="svc-card__badge">Most Popular</span>}
              <span className="svc-card__icon"><s.icon /></span>
              <h4 className="svc-card__title">{s.title}</h4>
              <div className="svc-card__price">
                {s.launch ? (
                  <>
                    <span className="svc-card__old">{s.price}</span>
                    <span className="svc-card__now">{s.launch}</span>
                    <span className="svc-card__tag">Launch offer</span>
                  </>
                ) : (
                  <span className="svc-card__now">{s.price}</span>
                )}
              </div>
              <p className="svc-card__desc">{s.description}</p>
              <p className="svc-card__best"><strong>Best for:</strong> {s.best}</p>
              <ul className="svc-card__features">
                {s.features.map((f) => <li key={f}><FiCheck /> {f}</li>)}
              </ul>
              <Button to="/contact" variant={s.popular ? 'primary' : 'ghost'} icon={<FiArrowUpRight />}>Get a quote</Button>
            </motion.div>
          ))}
        </motion.div>
        <p className="pricing-disclaimer">{pricingDisclaimer}</p>
        <div className="capabilities">
          <span className="capabilities__label">Also included / available:</span>
          {capabilities.map((c) => <span key={c} className="capabilities__pill">{c}</span>)}
        </div>
      </section>

      {/* Business benefits */}
      <section className="clients__block">
        <h3 className="clients__h">What You Get</h3>
        <motion.ul className="benefits" variants={stagger(0.04)} {...reveal}>
          {businessBenefits.map((b) => (
            <motion.li key={b} variants={fadeUp}><FiCheck /> {b}</motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Process */}
      <section className="clients__block">
        <h3 className="clients__h">My Development Process</h3>
        <motion.div className="proc" variants={stagger(0.08)} {...reveal}>
          {process.map((p) => (
            <motion.div className="proc__step" key={p.step} variants={fadeUp}>
              <span className="proc__num gradient-text">{p.step}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <span className="proc__dur">{p.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="clients__block">
        <h3 className="clients__h">Frequently Asked Questions</h3>
        <div className="faq__list">
          {faqs.map((f, i) => <Faq key={i} item={f} />)}
        </div>
      </section>

      {/* Free consultation CTA */}
      <motion.section className="clients__cta" variants={fadeUp} {...reveal}>
        <span className="clients__cta-badge">Free Consultation</span>
        <h3>Let's talk about your website — free, no pressure.</h3>
        <p>Send me a message on WhatsApp, book a Google Meet, or fill the contact form. I respond within 24 hours.</p>
        <div className="clients__cta-actions">
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn--primary" data-cursor="hover">
            <span className="btn__label"><FaWhatsapp /> WhatsApp me</span>
          </a>
          <a href={site.meetUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-cursor="hover">
            <span className="btn__label"><FiVideo /> Book a Google Meet</span>
          </a>
          <Button to="/contact" variant="ghost" icon={<FiArrowUpRight />}>Contact form</Button>
        </div>
      </motion.section>
    </div>
  );
}
