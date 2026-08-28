import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiCheck } from 'react-icons/fi';
import './ChatMockup.css';

// A realistic, on-brand WhatsApp-style conversation that plays when scrolled into view.
const SCRIPT = [
  { from: 'them', text: 'Hi Saif! I run a small restaurant. I need a website with online menu and WhatsApp ordering.', delay: 600 },
  { from: 'me', text: 'Hi! Happy to help 👋 I can build that — responsive site, digital menu, and a WhatsApp order button. Ready in about a week.', delay: 1400 },
  { from: 'them', text: 'That sounds perfect. How much would it cost?', delay: 1300 },
  { from: 'me', text: 'For that scope, launch offer is ₹8,999. Fixed quote, no surprises. Want me to start?', delay: 1500 },
  { from: 'them', text: 'Yes, let\'s do it! 🚀', delay: 1100 },
  { from: 'me', text: 'Awesome! Here\'s your live site 👇\nwww.your-restaurant.com', delay: 1500, link: true },
];

function TypingDots() {
  return (
    <div className="chat__bubble chat__bubble--them chat__typing">
      <span /><span /><span />
    </div>
  );
}

export default function ChatMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setShown(SCRIPT.length); return; }
    if (shown >= SCRIPT.length) return;
    const next = SCRIPT[shown];
    setTyping(true);
    const t1 = setTimeout(() => {
      setTyping(false);
      setShown((s) => s + 1);
    }, next.delay);
    return () => clearTimeout(t1);
  }, [inView, shown, reduce]);

  return (
    <div className="chat" ref={ref}>
      <div className="chat__phone">
        <div className="chat__header">
          <span className="chat__avatar"><FaWhatsapp /></span>
          <div className="chat__meta">
            <strong>Saif Ali</strong>
            <span>online</span>
          </div>
        </div>
        <div className="chat__body">
          <AnimatePresence>
            {SCRIPT.slice(0, shown).map((m, i) => (
              <motion.div
                key={i}
                className={`chat__bubble chat__bubble--${m.from}`}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {m.link ? (
                  <>
                    Awesome! Here's your live site 👇
                    <span className="chat__link">www.your-restaurant.com</span>
                  </>
                ) : m.text}
                <span className="chat__time">
                  {m.from === 'me' && <FiCheck className="chat__tick" />}
                  now
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          {typing && shown < SCRIPT.length && SCRIPT[shown].from === 'them' && <TypingDots />}
        </div>
      </div>
    </div>
  );
}