import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheck, FiMail, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../components/SectionTitle';
import SocialLinks from '../components/SocialLinks';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import { fadeUp, stagger, reveal } from '../animations/variants';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initial = { name: '', email: '', phone: '', projectType: '', budget: '', message: '' };

export default function Contact() {
  useSEO({ title: 'Contact — Hire a Web Developer in Delhi', description: 'Get in touch with Saif Ali for your web project. WhatsApp, email, phone, or book a Google Meet. Response within 24 hours.', path: '/contact' });
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) e.message = 'A little more detail helps (10+ chars).';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;
      if (configured) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          from_name: form.name, from_email: form.email,
          phone: form.phone, project_type: form.projectType,
          budget: form.budget, message: form.message,
        }, { publicKey: PUBLIC_KEY });
      } else {
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus('success');
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Saif, I need a website for my business. Can we discuss?')}`;

  return (
    <div className="page container contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's discuss your project."
        lead="Tell me about your project and I'll get back to you within 24 hours with a free assessment and quote."
      />

      <div className="contact__grid">
        {/* Sidebar */}
        <motion.aside className="contact__aside" variants={stagger()} {...reveal}>
          <motion.a className="contact__item contact__item--wa" href={waUrl} target="_blank" rel="noopener noreferrer" variants={fadeUp} data-cursor="hover">
            <span className="contact__icon contact__icon--wa"><FaWhatsapp /></span>
            <span>
              <strong>WhatsApp (Fastest)</strong>
              <em>Chat now →</em>
            </span>
          </motion.a>
          <motion.a className="contact__item card" href={site.meetUrl} target="_blank" rel="noopener noreferrer" variants={fadeUp} data-cursor="hover">
            <span className="contact__icon"><FiPhone /></span>
            <span>
              <strong>Google Meet</strong>
              <em>Book a free call →</em>
            </span>
          </motion.a>
          <motion.a className="contact__item card" href={`tel:${site.phone}`} variants={fadeUp} data-cursor="hover">
            <span className="contact__icon"><FiPhone /></span>
            <span>
              <strong>Call</strong>
              <em>{site.phone}</em>
            </span>
          </motion.a>
          <motion.a className="contact__item card" href={`mailto:${site.email}`} variants={fadeUp} data-cursor="hover">
            <span className="contact__icon"><FiMail /></span>
            <span>
              <strong>Email</strong>
              <em>{site.email}</em>
            </span>
          </motion.a>
          <motion.div className="contact__item card" variants={fadeUp}>
            <span className="contact__icon"><FiMapPin /></span>
            <span>
              <strong>Based in</strong>
              <em>{site.location}</em>
            </span>
          </motion.div>
          <motion.div className="contact__item card" variants={fadeUp}>
            <span className="contact__icon"><FiClock /></span>
            <span>
              <strong>Response time</strong>
              <em>Under 24 hours</em>
            </span>
          </motion.div>
          <motion.div className="contact__socials" variants={fadeUp}>
            <span className="eyebrow">Elsewhere</span>
            <SocialLinks />
          </motion.div>
        </motion.aside>

        {/* Form */}
        <motion.div className="contact__form-wrap card" variants={fadeUp} {...reveal}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div key="success" className="contact__success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <motion.span className="contact__check" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}>
                  <FiCheck />
                </motion.span>
                <h3>Project details received!</h3>
                <p>Thanks for reaching out. I'll review your project and reply within 24 hours.</p>
                <button className="btn btn--ghost" onClick={() => setStatus('idle')} data-cursor="hover"><span className="btn__label">Send another</span></button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} placeholder="Your name" />
                    {errors.name && <span className="field__error">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} placeholder="you@company.com" />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91-XXXXX XXXXX" />
                  </div>
                  <div className="field">
                    <label htmlFor="projectType">Project type</label>
                    <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Business Website</option>
                      <option>E-Commerce Store</option>
                      <option>Landing Page</option>
                      <option>Web Application</option>
                      <option>Website Redesign</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="budget">Budget range</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Project details *</label>
                  <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={errors.message ? 'has-error' : ''} placeholder="Tell me about your project — what do you need, when do you need it, and any other details..." />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>
                {status === 'error' && <p className="contact__form-error">Something went wrong. Please WhatsApp or email me directly.</p>}
                <button className="btn btn--primary contact__submit" type="submit" disabled={status === 'loading'} data-cursor="hover">
                  <span className="btn__label">
                    {status === 'loading' ? (<><span className="spinner" /> Sending…</>) : (<>Send project details <FiSend /></>)}
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}