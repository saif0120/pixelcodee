import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './CodeShowcase.css';

const LINES = [
  { t: 'const developer = {', c: 'plain' },
  { t: '  name: "Saif Ali",', c: 'str' },
  { t: '  role: "Full Stack Web Developer",', c: 'str' },
  { t: '  location: "New Delhi, India",', c: 'str' },
  { t: '  stack: ["React", "Node.js", "MongoDB", "WordPress"],', c: 'arr' },
  { t: '  available: true,', c: 'bool' },
  { t: '};', c: 'plain' },
  { t: '', c: 'plain' },
  { t: 'function build(project) {', c: 'fn' },
  { t: '  return ship(project, { fast: true, clean: true });', c: 'ret' },
  { t: '}', c: 'plain' },
];

function useTypedLines(active) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) { setLineIdx(LINES.length); return; }
    if (lineIdx >= LINES.length) return;
    const current = LINES[lineIdx].t;
    if (charIdx < current.length) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), 22 + Math.random() * 30);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, 180);
    return () => clearTimeout(id);
  }, [active, lineIdx, charIdx, reduce]);

  return { lineIdx, charIdx };
}

export default function CodeShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { lineIdx, charIdx } = useTypedLines(inView);

  return (
    <div className="code-showcase" ref={ref}>
      <div className="code-win">
        <div className="code-win__bar">
          <span className="code-win__dot code-win__dot--r" />
          <span className="code-win__dot code-win__dot--y" />
          <span className="code-win__dot code-win__dot--g" />
          <span className="code-win__file">developer.js</span>
        </div>
        <pre className="code-win__body">
          <code>
            {LINES.map((ln, i) => {
              let text = '';
              if (i < lineIdx) text = ln.t;
              else if (i === lineIdx) text = ln.t.slice(0, charIdx);
              const typing = i === lineIdx && charIdx < ln.t.length;
              if (i > lineIdx) return <span key={i} className="code-line">{'\u00A0'}</span>;
              return (
                <span key={i} className={`code-line code-line--${ln.c}`}>
                  <span className="code-ln">{String(i + 1).padStart(2, ' ')}</span>
                  <span className="code-txt">{text || '\u00A0'}</span>
                  {typing && <span className="code-cursor" />}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}