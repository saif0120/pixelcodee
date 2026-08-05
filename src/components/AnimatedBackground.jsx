import './AnimatedBackground.css';

/**
 * Ambient background: soft aurora blobs + a faint grid.
 * Pure CSS animation so it stays cheap on the main thread.
 */
export default function AnimatedBackground() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <span className="blob blob--1" />
      <span className="blob blob--2" />
      <span className="blob blob--3" />
    </div>
  );
}
