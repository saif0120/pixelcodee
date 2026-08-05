import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

/**
 * Premium dot + trailing ring cursor. Grows over interactive elements.
 * Disabled on touch / reduced-motion devices.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      setHovering(
        Boolean(el.closest('a, button, [data-cursor="hover"], input, textarea'))
      );
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
