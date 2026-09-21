import { motion, useReducedMotion } from 'framer-motion';
const dirMap = { up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 }, none: {} };
export default function Reveal({ children, direction = 'up', delay = 0, duration = 0.7, className, once = true, blur = true }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const offset = dirMap[direction] || dirMap.up;
  return (
    <motion.div className={className}
      initial={{ opacity: 0, ...offset, filter: blur ? 'blur(8px)' : 'none' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
