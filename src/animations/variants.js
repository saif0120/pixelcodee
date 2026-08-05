// Shared Framer Motion variants — imported across pages/components
// to keep motion language consistent.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container: children animate in sequence
export const stagger = (delayChildren = 0.05, stagger = 0.09) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren: stagger },
  },
});

// Page-level transition used by AnimatePresence
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

// Common viewport config for scroll reveals
export const reveal = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '-80px' },
};
