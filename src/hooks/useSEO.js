import { useEffect } from 'react';

const BASE = 'PixelCodee — Saif Ali';

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Per-route SEO: title, description, OG/Twitter, canonical.
export function useSEO({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE}` : BASE;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    if (path) setCanonical(`https://pixelcodee.netlify.app${path}`);
  }, [title, description, path]);
}
