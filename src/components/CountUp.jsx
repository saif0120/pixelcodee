import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const match = String(value).match(/([^\d]*)([\d.]+)(.*)/);
  useEffect(() => {
    if (!match || reduce) { setDisplay(value); return; }
    if (!inView) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = (num.split('.')[1] || '').length;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);
  return <span ref={ref}>{match ? display : value}</span>;
}
