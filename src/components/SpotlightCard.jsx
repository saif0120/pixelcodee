import { useRef } from 'react';
import './SpotlightCard.css';
export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} className={`spotlight ${className}`} onMouseMove={onMove}>
      <span className="spotlight__glow" aria-hidden="true" />
      <div className="spotlight__content">{children}</div>
    </div>
  );
}
