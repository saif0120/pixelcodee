import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="page container notfound">
      <motion.div
        className="notfound__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="notfound__code gradient-text">404</span>
        <h1>This page wandered off.</h1>
        <p>The link is broken or the page has moved. Let's get you back on track.</p>
        <Button to="/" variant="primary" icon={<FiArrowLeft />}>
          Back home
        </Button>
      </motion.div>
    </div>
  );
}
