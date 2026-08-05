import { useEffect } from 'react';

// Injects a JSON-LD <script> into <head> and cleans it up on unmount.
// `id` keeps it unique per schema so pages don't stack duplicates.
export function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return;
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { const n = document.getElementById(id); if (n) n.remove(); };
  }, [id, data]);
}

// Helper to build a BreadcrumbList schema
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `https://pixelcodee.netlify.app${it.path}`,
    })),
  };
}