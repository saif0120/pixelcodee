import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import SmoothScroll from './components/SmoothScroll';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';
import { pageTransition } from './animations/variants';

import Home from './pages/Home';
const ForClients = lazy(() => import('./pages/ForClients'));
const ForRecruiters = lazy(() => import('./pages/ForRecruiters'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Page = ({ children }) => (
  <motion.main id="main-content" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit}>
    {children}
  </motion.main>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/for-clients" element={<Page><ForClients /></Page>} />
          <Route path="/for-recruiters" element={<Page><ForRecruiters /></Page>} />
          <Route path="/services" element={<Page><ForClients /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/resources" element={<Page><Resources /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/legal/:slug" element={<Page><Legal /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <SmoothScroll>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <AnimatedBackground />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}