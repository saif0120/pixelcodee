import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import Button from '../components/Button';
import Picture from '../components/Picture';
import SocialLinks from '../components/SocialLinks';
import AudiencePaths from '../components/AudiencePaths';
import CountUp from '../components/CountUp';
import CodeShowcase from '../components/CodeShowcase';
import ChatMockup from '../components/ChatMockup';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { useTypewriter } from '../hooks/useTypewriter';
import { useSEO } from '../hooks/useSEO';
import { site, stats, trustLine } from '../data/site';
import { fadeUp, stagger } from '../animations/variants';
import './Home.css';

const marqueeItems = ['React', 'Node.js', 'MongoDB', 'WordPress', 'JavaScript', 'Express', 'WooCommerce', 'REST APIs', 'Responsive', 'SEO'];

export default function Home() {
  const typed = useTypewriter(site.taglines);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  useSEO({
    title: 'Full Stack Web Developer in Delhi',
    description: 'Saif Ali — independent full stack web developer in New Delhi. I build modern, responsive, SEO-ready websites that help businesses grow. View projects or get a free quote.',
    path: '/',
  });

  return (
    <div className="home page">
      <motion.section className="hero container" ref={heroRef} style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <motion.div className="hero__content" variants={stagger(0.1, 0.12)} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={fadeUp}>Independent Full Stack Web Developer · New Delhi</motion.span>

          <motion.h1 className="hero__title" variants={fadeUp} aria-label="Building Modern Websites That Help Your Business Grow">
            <span className="hero__title-line">
              {'Building Modern Websites That'.split(' ').map((w, i) => (
                <span className="hero__word-mask" key={i}>
                  <motion.span className="hero__word" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>{w}&nbsp;</motion.span>
                </span>
              ))}
            </span>
            <span className="hero__title-line">
              {'Help Your Business'.split(' ').map((w, i) => (
                <span className="hero__word-mask" key={i}>
                  <motion.span className="hero__word" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, delay: 0.55 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>{w}&nbsp;</motion.span>
                </span>
              ))}
              <span className="hero__word-mask">
                <motion.span className="hero__word gradient-text" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}>Grow</motion.span>
              </span>
            </span>
          </motion.h1>

          <motion.div className="hero__typed" variants={fadeUp}>
            <span className="gradient-text">{typed}</span><span className="hero__caret" aria-hidden="true" />
          </motion.div>

          <motion.p className="hero__lead section-lead" variants={fadeUp}>{site.bio}</motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <Button to="/projects" variant="primary" icon={<FiArrowUpRight />}>View projects</Button>
            <Button to="/for-recruiters" variant="ghost">Hire me</Button>
            <Button to="/contact" variant="ghost" icon={<FiArrowUpRight />}>Get free quote</Button>
          </motion.div>

          <motion.ul className="hero__trust" variants={fadeUp}>
            {trustLine.map((t) => <li key={t}>{t}</li>)}
          </motion.ul>

          <motion.div className="hero__socials" variants={fadeUp}><SocialLinks /></motion.div>
        </motion.div>

        <motion.div className="hero__profile" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
          <div className="hero__orbit">
            <motion.div className="hero__avatar" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Picture src="/profile.jpg" webp="/profile.webp" alt={`${site.name}, web developer`} loading="eager" fetchpriority="high" width="220" height="220" />
            </motion.div>
            <span className="hero__ring hero__ring--1" /><span className="hero__ring hero__ring--2" />
            <motion.span className="hero__chip hero__chip--react" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>React.js</motion.span>
            <motion.span className="hero__chip hero__chip--ui" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>WordPress</motion.span>
            <motion.span className="hero__chip hero__chip--node" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>Node.js</motion.span>
          </div>
        </motion.div>
      </motion.section>

      <div className="home__marquee"><Marquee items={marqueeItems} speed={30} /></div>

      <AudiencePaths />

      <section className="container code-section">
        <div className="code-section__text">
          <Reveal><span className="eyebrow">This is me, in code</span></Reveal>
          <SplitText as="h2" className="code-section__title" text="A developer who ships clean, fast, reliable work." />
          <Reveal delay={0.1}><p className="section-lead">I don't just talk about building websites — I build them properly. Clean structure, modern tools, and code that's made to last and easy to maintain.</p></Reveal>
          <Reveal delay={0.2}><div className="code-section__cta"><Button to="/projects" variant="primary" icon={<FiArrowUpRight />}>See my work</Button></div></Reveal>
        </div>
        <Reveal direction="left" className="code-section__win"><CodeShowcase /></Reveal>
      </section>

      <section className="container chat-section">
        <Reveal direction="right" className="chat-section__mock"><ChatMockup /></Reveal>
        <div className="chat-section__text">
          <Reveal><span className="eyebrow">What working with me looks like</span></Reveal>
          <SplitText as="h2" className="chat-section__title" text="Just message me. I'll handle the rest." />
          <Reveal delay={0.1}><p className="section-lead">No agencies, no long email threads, no confusing dashboards. You message me on WhatsApp, tell me what you need, and I build it — with clear pricing and honest timelines.</p></Reveal>
          <Reveal delay={0.2}><div className="chat-section__cta">
            <Button href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Saif, I need a website for my business.')}`} variant="primary" icon={<FiArrowUpRight />}>Message me on WhatsApp</Button>
          </div></Reveal>
        </div>
      </section>

      <section className="container punch">
        <Reveal><SplitText as="h2" className="punch__title" text="You could keep scrolling..." /></Reveal>
        <Reveal delay={0.15}><p className="punch__sub">or you could just get your website built. Free quote, no pressure.</p></Reveal>
        <Reveal delay={0.3}><div className="punch__actions">
          <Button to="/contact" variant="primary" icon={<FiArrowUpRight />}>Get a free quote</Button>
          <Button to="/projects" variant="ghost">See my work</Button>
        </div></Reveal>
      </section>

      <motion.section className="container stats" variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {stats.map((s) => (
          <motion.div className="stats__item" key={s.label} variants={fadeUp}>
            <span className="stats__value gradient-text"><CountUp value={s.value} /></span>
            <span className="stats__label">{s.label}</span>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
