import { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

/**
 * Ambient background: moving aurora blobs, faint grid, and a cursor-reactive
 * glow that follows the pointer for a living, premium feel.
 */
export default function AnimatedBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    const onMove = (e) => { target.x = e.clientX; target.y = e.clientY; };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <span className="blob blob--1" />
      <span className="blob blob--2" />
      <span className="blob blob--3" />
      <span className="bg-beam" />
      <span ref={glowRef} className="bg-cursor-glow" />
    </div>
  );
}