import { motion, useReducedMotion } from 'framer-motion';
export default function SplitText({ text, className, as = 'h2', delay = 0, stagger = 0.055 }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.h2;
  const words = String(text).split(' ');
  if (reduce) { const Plain = as; return <Plain className={className}>{text}</Plain>; }
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, show: { transition: { delayChildren: delay, staggerChildren: stagger } } }} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span style={{ display: 'inline-block', willChange: 'transform' }}
            variants={{ hidden: { y: '110%', opacity: 0 }, show: { y: '0%', opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            {w}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
