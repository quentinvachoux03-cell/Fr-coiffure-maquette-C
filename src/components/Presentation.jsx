import { useState, useEffect, useRef } from 'react';
import { PRESENTATION } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const BASE       = '/Fr-coiffure-maquette-C';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

const INSPIRE = `La pureté des lignes, la texture brute de la matière et la singularité de chaque visage. Nous envisageons la coiffure non pas comme une routine, mais comme une architecture sur-mesure. Pour nous, le luxe réside dans le détail invisible, la fluidité d'un mouvement et l'élégance du minimalisme. Un art de la retenue où chaque coupe révèle votre propre lumière.`;

const SLIDES = [
  { src: `${BASE}/tn2-galeries-201929-fr-coiffure-geneve-01.jpg`, caption: 'Salon Plainpalais'   },
  { src: `${BASE}/tn2-galeries-201931-fr-coiffure-geneve-05.jpg`, caption: 'FR Coiffure'         },
  { src: `${BASE}/tn2-galeries-204545-41152.jpg`,                 caption: 'Plainpalais, Genève' },
];

function PhotoSlider({ sectionRef }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const innerRef              = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef?.current || !innerRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const pct  = Math.max(-1, Math.min(1, -rect.top / (window.innerHeight * 2)));
      innerRef.current.style.transform = `translateY(${pct * 30}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionRef]);

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current);
      setCurrent(i => (i + 1) % SLIDES.length);
      setTimeout(() => setPrev(null), 1000);
    }, 5500);
    return () => clearInterval(t);
  }, [current]);

  const go = i => { setPrev(current); setCurrent(i); setTimeout(() => setPrev(null), 1000); };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <style>{`
        @keyframes si { from { opacity:0; transform:scale(1.05); } to { opacity:1; transform:none; } }
        @keyframes so { from { opacity:1; } to { opacity:0; } }
      `}</style>
      <div ref={innerRef} style={{ position: 'absolute', inset: '-8% 0', willChange: 'transform' }}>
        {prev !== null && (
          <img key={`o${prev}`} src={SLIDES[prev].src} alt="" aria-hidden
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:`so 0.9s ${E} both` }} />
        )}
        <img key={`i${current}`} src={SLIDES[current].src} alt={SLIDES[current].caption}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:`si 1s ${E} both` }} />
      </div>
      <div style={{
        position:'absolute', inset:'auto 0 0', zIndex:2,
        padding:'32px 24px 20px',
        background:'linear-gradient(transparent, rgba(0,0,0,0.42))',
        display:'flex', alignItems:'flex-end', justifyContent:'space-between',
      }}>
        <em style={{ fontFamily:"'Open Sans',sans-serif", fontStyle:'italic', fontSize:10, letterSpacing:'0.06em', color:'rgba(255,255,255,0.6)', fontWeight:300 }}>
          {SLIDES[current].caption}
        </em>
        <div style={{ display:'flex', gap:5 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Photo ${i+1}`}
              style={{ width: i===current ? 20 : 4, height:3, background: i===current ? '#fff' : 'rgba(255,255,255,0.3)',
                border:'none', cursor:'pointer', padding:0, borderRadius:2, transition:`width 0.45s ${E}` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Presentation() {
  const sectionRef = useRef(null);
  const panel1Ref  = useReveal();
  const panel2Ref  = useReveal(0.15);

  return (
    <section
      ref={sectionRef}
      id="salon"
      className="font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      <style>{`
        /* Sticky photo — desktop only */
        @media (min-width: 1024px) {
          .salon-photo-col {
            position: sticky;
            top: 0;
            height: 100vh;
          }
        }
      `}</style>

      {/* ── Sticky scroll wrapper ── */}
      <div className="flex flex-col lg:flex-row" style={{ alignItems: 'flex-start' }}>

        {/* LEFT — text panels (scroll normally) */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2">

          {/* Panel 1 — Le Salon */}
          <div ref={panel1Ref}
            className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0"
            style={{ minHeight: '100vh' }}>

            <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
              style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
              <span style={{ display:'inline-block', width:16, height:1, background:C_ORANGE }} />
              01 — Le Salon · Genève
            </div>

            <h2 className="a-up a-d1 font-sans m-0"
              style={{ color:C_ANTH, fontWeight:600, fontSize:'clamp(34px, 4.2vw, 62px)', lineHeight:0.97, letterSpacing:'-0.01em' }}>
              Une{' '}
              <em style={{ fontStyle:'italic', fontWeight:400, color:C_ORANGE }}>signature</em>
              <br />genevoise,
              <br />une approche
              <br />
              <span style={{ color:'rgba(58,58,58,0.28)', fontWeight:300 }}>personnalisée.</span>
            </h2>

            <div className="a-up a-d2 flex gap-5 mt-10 lg:mt-12" style={{ maxWidth:400 }}>
              <div style={{ width:2, flexShrink:0, background:C_ORANGE, borderRadius:1 }} />
              <p className="m-0 font-sans font-light"
                style={{ fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.95, color:'#6e6560' }}>
                {PRESENTATION}
              </p>
            </div>

            <a href="#prestations" className="a-up a-d3 self-start mt-10 lg:mt-12 font-sans font-light"
              style={{
                fontSize:10, letterSpacing:'0.38em', textTransform:'uppercase',
                color:C_ANTH, textDecoration:'none',
                borderBottom:`1px solid rgba(58,58,58,0.25)`, paddingBottom:4,
                transition:'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color=C_ORANGE; e.currentTarget.style.borderBottomColor=C_ORANGE; }}
              onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.borderBottomColor='rgba(58,58,58,0.25)'; }}>
              Voir les prestations →
            </a>
          </div>

          {/* Panel 2 — Ce qui nous inspire */}
          <div ref={panel2Ref}
            className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 border-t"
            style={{ minHeight:'90vh', borderColor:C_HAIRLINE }}>

            <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
              style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:'rgba(58,58,58,0.35)' }}>
              <span style={{ display:'inline-block', width:16, height:1, background:'rgba(58,58,58,0.25)' }} />
              Notre philosophie
            </div>

            <h3 className="a-up a-d1 font-sans m-0"
              style={{ color:C_ANTH, fontWeight:600, fontSize:'clamp(30px, 3.8vw, 54px)', lineHeight:1.0, letterSpacing:'-0.01em', marginBottom:'clamp(24px, 3vw, 40px)' }}>
              Ce qui nous{' '}
              <em style={{ fontStyle:'italic', fontWeight:400, color:C_ORANGE }}>inspire.</em>
            </h3>

            <p className="a-up a-d2 font-sans font-light m-0"
              style={{ fontSize:'clamp(14px, 1.3vw, 16px)', lineHeight:2.0, color:'#6e6560', maxWidth:460 }}>
              {INSPIRE}
            </p>

            <a href="#reservation" className="a-up a-d3 self-start mt-10 font-sans font-light"
              style={{
                fontSize:10, letterSpacing:'0.38em', textTransform:'uppercase',
                color:C_ANTH, textDecoration:'none',
                border:`1px solid rgba(58,58,58,0.3)`, padding:'12px 24px',
                transition:`color 0.3s ${E}, background 0.3s ${E}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; }}
              onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; }}>
              Prendre rendez-vous →
            </a>
          </div>
        </div>

        {/* RIGHT — sticky photo */}
        <div className="salon-photo-col order-1 lg:order-2 w-full lg:w-1/2 overflow-hidden"
          style={{ height: 'clamp(280px, 60vw, 100vh)' }}>
          <PhotoSlider sectionRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
