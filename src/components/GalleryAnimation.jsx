import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BASE = '/Fr-coiffure-maquette-C';
const SALON_IMAGES = [
  `${BASE}/tn2-galeries-201929-fr-coiffure-geneve-01.jpg`,
  `${BASE}/tn2-galeries-201931-fr-coiffure-geneve-05.jpg`,
  `${BASE}/tn2-galeries-204545-41152.jpg`,
  `${BASE}/Photo%20Fond%20ecran%20aceuille.jpg`,
];

const C_ORANGE = '#D94018';
const E_EASE = [0.16, 1, 0.3, 1];

export default function GalleryAnimation({ images = SALON_IMAGES }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getFlexValue = (index) => {
    if (hoveredIndex === null) return 1;
    return hoveredIndex === index ? 2.2 : 0.5;
  };

  const prev = () => setSelectedIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setSelectedIndex(i => (i + 1) % images.length);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Strip gallery */}
      <div style={{ display: 'flex', gap: 3, height: '100%' }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            style={{ flex: 1, position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: E_EASE }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image}
              alt={`Salon ${index + 1}`}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block',
              }}
            />
            <motion.div
              style={{ position: 'absolute', inset: 0, background: '#000' }}
              animate={{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.35 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute', bottom: 14, left: 14,
                    fontFamily: "'Open Sans',sans-serif",
                    fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)', fontWeight: 300,
                  }}
                >
                  Agrandir
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(0,0,0,0.88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: E_EASE }}
              style={{
                position: 'relative',
                maxWidth: '85vw', maxHeight: '85vh',
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt={`Salon ${selectedIndex + 1}`}
                style={{
                  maxWidth: '85vw', maxHeight: '85vh',
                  objectFit: 'contain', display: 'block',
                }}
              />

              {/* Prev */}
              <button
                onClick={prev}
                style={{
                  position: 'absolute', left: -52, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: '1px solid rgba(255,255,255,0.25)',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Open Sans',sans-serif", fontSize: 16,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                ←
              </button>

              {/* Next */}
              <button
                onClick={next}
                style={{
                  position: 'absolute', right: -52, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: '1px solid rgba(255,255,255,0.25)',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Open Sans',sans-serif", fontSize: 16,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                →
              </button>

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                style={{
                  position: 'absolute', top: -44, right: 0,
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
                  fontWeight: 300,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                Fermer ✕
              </button>

              {/* Counter */}
              <div style={{
                position: 'absolute', bottom: -34, left: '50%', transform: 'translateX(-50%)',
                fontFamily: "'Open Sans',sans-serif",
                fontSize: 9, letterSpacing: '0.4em',
                color: 'rgba(255,255,255,0.4)', fontWeight: 300,
              }}>
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
