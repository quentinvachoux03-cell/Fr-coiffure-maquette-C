import { useState, useEffect, useRef } from 'react';
import { PRESENTATION } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.14)';
const BASE       = '/Fr-coiffure-maquette-C';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

const SLIDES = [
  { src: `${BASE}/frederico-renda.jpg`,                           caption: 'Federico Renda'      },
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
      const pct  = Math.max(-1, Math.min(1, -rect.top / window.innerHeight));
      innerRef.current.style.transform = `translateY(${pct * 36}px)`;
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

  const go = (i) => { setPrev(current); setCurrent(i); setTimeout(() => setPrev(null), 1000); };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <style>{`
        @keyframes si { from { opacity:0; transform:scale(1.06); } to { opacity:1; transform:none; } }
        @keyframes so { from { opacity:1; }                        to { opacity:0; } }
      `}</style>

      <div ref={innerRef} style={{ position: 'absolute', inset: '-10% 0', willChange: 'transform' }}>
        {prev !== null && (
          <img key={`o${prev}`} src={SLIDES[prev].src} alt="" aria-hidden
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:`so 0.9s ${E} both` }} />
        )}
        <img key={`i${current}`} src={SLIDES[current].src} alt={SLIDES[current].caption}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:`si 1s ${E} both` }} />
      </div>

      {/* Bottom bar */}
      <div style={{
        position:'absolute', inset:'auto 0 0', zIndex:2, padding:'32px 24px 20px',
        background:'linear-gradient(transparent, rgba(0,0,0,0.45))',
        display:'flex', alignItems:'flex-end', justifyContent:'space-between',
      }}>
        <em style={{ fontFamily:"'Open Sans',sans-serif", fontStyle:'italic', fontSize:11, letterSpacing:'0.06em', color:'rgba(255,255,255,0.65)', fontWeight:300 }}>
          {SLIDES[current].caption}
        </em>
        <div style={{ display:'flex', gap:6 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Photo ${i+1}`}
              style={{ width: i===current ? 22 : 5, height:3, background: i===current ? '#fff' : 'rgba(255,255,255,0.35)',
                border:'none', cursor:'pointer', padding:0, borderRadius:2,
                transition:`width 0.45s ${E}` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Presentation() {
  const sectionRef = useRef(null);
  const revealRef  = useReveal();
  const ref = el => { sectionRef.current = el; revealRef.current = el; };

  return (
    <section ref={ref} id="salon" className="font-sans relative overflow-hidden border-t" style={{ borderColor: C_HAIRLINE }}>

      {/* Ghost watermark numeral */}
      <div aria-hidden style={{
        position:'absolute', top:'-0.1em', left:'-0.04em', zIndex:0,
        fontFamily:"'Open Sans',sans-serif", fontWeight:300, lineHeight:1,
        fontSize:'clamp(220px, 30vw, 420px)',
        color:'rgba(58,58,58,0.045)', letterSpacing:'-0.06em',
        pointerEvents:'none', userSelect:'none',
      }}>01</div>

      {/* ── Main grid ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2" style={{ zIndex:1, minHeight:'92vh' }}>

        {/* LEFT — full-bleed image, no frame */}
        <div className="a-fade relative overflow-hidden order-1"
          style={{ minHeight:'60vw', maxHeight:'100vh', height:'100%' }}>
          <PhotoSlider sectionRef={sectionRef} />
        </div>

        {/* RIGHT — editorial text */}
        <div className="order-2 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-20">

          <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
            style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
            <span style={{ display:'inline-block', width:18, height:1, background:C_ORANGE }} />
            Le Salon · Genève
          </div>

          {/* Monumental title */}
          <h2 className="a-up a-d1 font-sans font-light m-0"
            style={{ color:C_ANTH, fontSize:'clamp(40px, 5.5vw, 78px)', lineHeight:0.96, letterSpacing:'-0.03em' }}>
            Une{' '}
            <em style={{ fontStyle:'italic', color:C_ORANGE }}>signature</em>
            <br />genevoise,
            <br />une approche
            <br />
            <span style={{ color:'rgba(58,58,58,0.28)' }}>personnalisée.</span>
          </h2>

          {/* Accented body */}
          <div className="a-up a-d2 flex gap-5 mt-10 lg:mt-14" style={{ maxWidth:400 }}>
            <div style={{ width:2, flexShrink:0, background:C_ORANGE, borderRadius:1, alignSelf:'stretch' }} />
            <p className="m-0 font-sans font-light"
              style={{ fontSize:'clamp(13px, 1.3vw, 15.5px)', lineHeight:1.95, color:'#6e6560' }}>
              {PRESENTATION}
            </p>
          </div>

          <a href="#prestations" className="a-up a-d3 self-start mt-10 lg:mt-14 font-sans font-light"
            style={{
              fontSize:10, letterSpacing:'0.38em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              borderBottom:`1px solid rgba(58,58,58,0.25)`, paddingBottom:5,
              transition:'color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color=C_ORANGE; e.currentTarget.style.borderBottomColor=C_ORANGE; }}
            onMouseLeave={e => { e.currentTarget.style.color=C_ANTH;   e.currentTarget.style.borderBottomColor='rgba(58,58,58,0.25)'; }}>
            Découvrir les prestations →
          </a>
        </div>
      </div>

      {/* ── Stats — typographic strip ── */}
      <div className="a-up relative grid grid-cols-3 border-t" style={{ zIndex:1, borderColor:C_HAIRLINE }}>
        {[
          { v:'+15', u:'ans', sub:'à Plainpalais' },
          { v:'6',   u:'artisans', sub:'coiffeurs', accent:true },
          { v:'∞',   u:'sur-mesure', sub:'chaque rendez-vous' },
        ].map(({ v, u, sub, accent }, i) => (
          <div key={v} className="px-5 sm:px-8 lg:px-14 py-8 lg:py-12"
            style={{ borderRight: i < 2 ? `1px solid ${C_HAIRLINE}` : 'none' }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:6 }}>
              <span className="font-sans font-light"
                style={{ fontSize:'clamp(28px, 4.5vw, 52px)', letterSpacing:'-0.03em', color: accent ? C_ORANGE : C_ANTH }}>
                {v}
              </span>
              <span className="font-sans font-light"
                style={{ fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(58,58,58,0.4)' }}>
                {u}
              </span>
            </div>
            <div className="font-sans font-light mt-1"
              style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'#aba19a' }}>
              {sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
