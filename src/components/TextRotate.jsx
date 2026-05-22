import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export function TextRotate({ texts, interval = 2800, style = {} }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % texts.length), interval);
    return () => clearInterval(t);
  }, [texts.length, interval]);

  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', ...style }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          style={{ display: 'inline-block' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
