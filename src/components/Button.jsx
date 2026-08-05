import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Button.css';

/**
 * Polymorphic magnetic button with a ripple on click.
 * - `to`   -> React Router Link
 * - `href` -> anchor (opens new tab if external)
 * - else   -> <button>
 * variant: 'primary' | 'ghost'
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  ...rest
}) {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 20 });
  const y = useSpring(my, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };
  const handleClick = (e) => {
    const r = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((p) => p.filter((rp) => rp.id !== id)), 650);
    onClick?.(e);
  };

  const content = (
    <>
      <span className="btn__label">
        {children}
        {icon && <span className="btn__icon">{icon}</span>}
      </span>
      {ripples.map((r) => (
        <span key={r.id} className="btn__ripple" style={{ left: r.x, top: r.y }} />
      ))}
    </>
  );

  const motionProps = {
    ref,
    className: `btn btn--${variant} ${className}`,
    style: { x, y },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick: handleClick,
    'data-cursor': 'hover',
  };

  if (to) {
    return (
      <motion.div style={{ x, y, display: 'inline-flex' }}>
        <Link
          to={to}
          className={`btn btn--${variant} ${className}`}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onClick={handleClick}
          ref={ref}
          data-cursor="hover"
          {...rest}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    const external = href.startsWith('http');
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} {...motionProps} {...rest}>
      {content}
    </motion.button>
  );
}
