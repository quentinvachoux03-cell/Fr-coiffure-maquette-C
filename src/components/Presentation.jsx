import { useState, useEffect, useRef } from 'react';
import { PRESENTATION } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.18)';
const BASE       = '/Fr-coiffure-maquette-C';

const SLIDES = [
  { src: `${BASE}/frederico-renda.jpg`,                           caption: 'Federico Renda'      },
  { src: `${BASE}/tn2-galeries-201929-fr-coiffure-geneve-01.jpg`, caption: 'Salon Plainpalais'   },
  { src: `${BASE}/tn2-galeries-201931-fr-coiffure-geneve-05.jpg`, caption: 'FR Coiffure'         },
  { src: `${BASE}/tn2-galeries-204545-41152.jpg`,                 caption: 'Plainpalais, Genève' },
];

const E = 'cubic-bezier(0.16, 1, 0.3, 1)';

function PhotoSlider({ sectionRef }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [fading, setFading]   = useState(false);
  const wrapRef               = useRef(null);

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef?.current || !wrapRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const pct  = Math.max(-1, Math.min(1, -rect.top / window.innerHeight));
      wrapRef.current.style.transform = `translateY(${pct * 28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionRef]);

  /* Auto-advance */
  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(i => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, [current]);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => { setPrev(null); setFading(false); }, 900);
    return () => clearTimeout(t);
  }, [fading]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <style>{`
        @keyframes pres-in  { from { opacity:0; transform:scale(1.05); } to { opacity:1; transform:scale(1); } }
        @keyframes pres-out { from { opacity:1; transform:scale(1);    } to { opacity:0; transform:scale(0.97); } }
      `}</style>

      <div ref={wrapRef} style={{ position:'absolute', inset:'-8% 0', willChange:'transform' }}>
        {prev !== null && (
          <img key={`out-${prev}`} src={SLIDES[prev].src} alt="" aria-hidden="true"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%',
              objectFit:'cover', objectPosition:'center',
              animation:`pres-out 0.9s ${E} both` }} />
        )}
        <img key={`in-${current}`} src={SLIDES[current].src} alt={SLIDES[current].caption}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%',
            objectFit:'cover', objectPosition:'center',
            animation:`pres-in 0.9s ${E} both` }} />
      </div>

      {/* Caption */}
      <div style={{
        position:'absolute', bottom:20, left:20, zIndex:2,
        fontFamily:"'Open Sans',sans-serif", fontSize:9,
        letterSpacing:'0.35em', textTransform:'uppercase',
        color:'rgba(255,255,255,0.6)', fontWeight:300,
      }}>
        {SLIDES[current].caption}
      </div>

      {/* Dots */}
      <div style={{ position:'absolute', bottom:20, right:20, zIndex:2, display:'flex', gap:5 }}>
        {SLIDES.map((_, i) => (
          <button key={i}
            onClick={() => { setPrev(current); setFading(true); setCurrent(i); }}
            aria-label={`Photo ${i + 1}`}
            style={{
              width: i === current ? 20 : 5, height:5, borderRadius:99,
              background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
              border:'none', cursor:'pointer', padding:0,
              transition:`width 0.45s ${E}, background 0.3s`,
            }} />
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { value: '+15 ans', label: 'à Plainpalais, Genève' },
  { value: '6',       label: 'artisans coiffeurs',    accent: true },
  { value: '∞',       label: 'sur-mesure, toujours'  },
];

export default function Presentation() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();

  /* Merge both refs */
  const ref = (el) => {
    sectionRef.current = el;
    revealRef.current  = el;
  };

  return (
    <section
      ref={ref}
      id="salon"
      className="font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      {/* ── Editorial split ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '88vh' }}>

        {/* Left — text */}
        <div
          className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-20 lg:py-28 order-2 lg:order-1"
        >
          <div className="a-up inline-flex items-center gap-3 mb-10 lg:mb-14 font-light"
            style={{ fontSize:10, letterSpacing:'0.48em', textTransform:'uppercase', color:C_ORANGE }}>
            <span style={{ display:'inline-block', width:20, height:1, background:C_ORANGE }} />
            01 — Le Salon
          </div>

          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color:C_ANTH, fontSize:'clamp(34px, 5vw, 64px)', lineHeight:1.0, letterSpacing:'-0.025em' }}>
            Une{' '}
            <em className="italic" style={{ color:C_ORANGE }}>signature</em>
            {' '}genevoise,<br />
            une approche<br />
            personnalisée.
          </h2>

          <p className="a-up a-d2 font-sans font-light"
            style={{
              fontSize:'clamp(14px, 1.4vw, 16px)', lineHeight:1.95,
              color:'#6b6358', marginTop:'clamp(28px, 4vw, 48px)',
              maxWidth:420,
            }}>
            {PRESENTATION}
          </p>

          <a
            href="#prestations"
            className="a-up a-d3 self-start inline-flex items-center gap-3 font-light"
            style={{
              marginTop:'clamp(28px, 4vw, 52px)',
              fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              borderBottom:`1px solid rgba(58,58,58,0.3)`, paddingBottom:4,
              transition:'color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
            onMouseLeave={e => { e.currentTarget.style.color = C_ANTH;   e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.3)'; }}
          >
            Voir nos prestations →
          </a>
        </div>

        {/* Right — full-bleed image, no frame */}
        <div className="a-fade relative order-1 lg:order-2 overflow-hidden"
          style={{ minHeight:'55vw', maxHeight:'100vh' }}>
          <PhotoSlider sectionRef={sectionRef} />
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="a-up grid grid-cols-3 border-t" style={{ borderColor:C_HAIRLINE }}>
        {STATS.map(({ value, label, accent }, i) => (
          <div key={label}
            className="px-5 sm:px-8 lg:px-16 py-8 lg:py-14"
            style={{
              borderRight: i < 2 ? `1px solid ${C_HAIRLINE}` : 'none',
            }}>
            <div className="font-sans font-light"
              style={{ fontSize:'clamp(24px, 4vw, 48px)', letterSpacing:'-0.025em', lineHeight:1, color: accent ? C_ORANGE : C_ANTH }}>
              {value}
            </div>
            <div className="mt-2 font-sans font-light"
              style={{ fontSize:10, letterSpacing:'0.28em', textTransform:'uppercase', color:'#9c8f7e' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
