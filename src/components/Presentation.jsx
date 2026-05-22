import { useState, useEffect } from 'react';
import { PRESENTATION } from '../data';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const BASE       = '/Fr-coiffure-maquette-C';

const SLIDES = [
  { src: `${BASE}/frederico-renda.jpg`,                        caption: 'Federico Renda', pos: 'center center' },
  { src: `${BASE}/tn2-galeries-201929-fr-coiffure-geneve-01.jpg`, caption: 'Salon Plainpalais',  pos: 'center center' },
  { src: `${BASE}/tn2-galeries-201931-fr-coiffure-geneve-05.jpg`, caption: 'FR Coiffure',        pos: 'center center' },
  { src: `${BASE}/tn2-galeries-204545-41152.jpg`,               caption: 'Plainpalais, Genève',  pos: 'center center' },
];

function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(i => (i + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => { setPrev(null); setFading(false); }, 900);
    return () => clearTimeout(t);
  }, [fading]);

  return (
    <div
      style={{
        aspectRatio: '4/5',
        padding: 14,
        background: '#fff',
        boxShadow: '0 22px 60px rgba(58,58,58,0.16), 0 2px 6px rgba(58,58,58,0.08)',
      }}
      className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto lg:max-w-none lg:mt-10"
    >
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-out {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }
      `}</style>

      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>

        {/* Previous photo — fades out */}
        {prev !== null && (
          <img
            key={`out-${prev}`}
            src={SLIDES[prev].src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: SLIDES[prev].pos,
              animation: 'slide-out 0.9s cubic-bezier(0.4,0,0.2,1) both',
            }}
          />
        )}

        {/* Current photo — fades in */}
        <img
          key={`in-${current}`}
          src={SLIDES[current].src}
          alt={SLIDES[current].caption}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: SLIDES[current].pos,
            animation: 'slide-in 0.9s cubic-bezier(0.4,0,0.2,1) both',
          }}
        />

        {/* Caption */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          padding: '28px 16px 12px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 100%)',
          color: '#fff',
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
          fontWeight: 300,
        }}>
          <em style={{ fontStyle: 'italic', letterSpacing: '0.08em', textTransform: 'none', fontSize: 11 }}>
            {SLIDES[current].caption}
          </em>
          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: 6 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPrev(current); setFading(true); setCurrent(i); }}
                style={{
                  width: i === current ? 18 : 5,
                  height: 5,
                  borderRadius: 99,
                  background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s',
                }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Presentation() {
  return (
    <section
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-32 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-start gap-10 lg:gap-24">

        <PhotoSlider />

        <div className="pt-0 lg:pt-6">
          <div
            className="inline-flex items-center gap-4 mb-5 lg:mb-6 font-light"
            style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 32, height: 1, background: C_ORANGE }}></span>
            01 — Le salon
          </div>

          <h2
            className="font-sans font-light m-0"
            style={{ color: C_ANTH, fontSize: 'clamp(28px, 6vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Une{' '}
            <em className="italic" style={{ color: C_ORANGE }}>signature</em>
            {' '}genevoise,<br/>
            une approche personnalisée.
          </h2>

          <p
            className="font-sans font-light mt-7 lg:mt-10 max-w-[520px]"
            style={{ fontSize: 'clamp(14px, 2.5vw, 16.5px)', lineHeight: 1.85, color: '#5e564e' }}
          >
            {PRESENTATION}
          </p>

          <div
            className="grid grid-cols-3 gap-4 mt-10 lg:mt-12 pt-6 lg:pt-8 border-t max-w-[560px]"
            style={{ borderColor: C_HAIRLINE }}
          >
            {[
              ['+15 ans', 'à Plainpalais'],
              ['6', 'artisans coiffeurs'],
              ['Sur-mesure', 'chaque rendez-vous'],
            ].map(([key, val], i) => (
              <div key={key}>
                <div
                  className="font-sans font-light tracking-tight"
                  style={{ fontSize: 'clamp(15px, 3vw, 20px)', color: i === 1 ? C_ORANGE : C_ANTH }}
                >
                  {key}
                </div>
                <div
                  className="mt-1 font-sans"
                  style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8d8479' }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
