import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position on every route change (works with Lenis smooth scroll).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);
  return null;
}