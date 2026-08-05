import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Saif, I need a website for my business. Can we discuss?')}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp />
          <span className="whatsapp-fab__pulse" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
