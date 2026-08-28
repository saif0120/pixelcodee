import './Marquee.css';

// Infinite horizontal scroll strip. Pass an array of strings.
export default function Marquee({ items = [], speed = 28 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((it, i) => (
          <span className="marquee__item" key={i}>
            {it}<span className="marquee__sep">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}