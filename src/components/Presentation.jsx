import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { TextRotate } from './TextRotate';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const BASE       = '/Fr-coiffure-maquette-C';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

const SLIDES = [
  { src: `${BASE}/tn2-galeries-201929-fr-coiffure-geneve-01.jpg`, caption: 'Salon Plainpalais'   },
  { src: `${BASE}/tn2-galeries-201931-fr-coiffure-geneve-05.jpg`, caption: 'FR Coiffure'         },
  { src: `${BASE}/tn2-galeries-204545-41152.jpg`,                 caption: 'Plainpalais, Genève' },
];

const WORDS = ['signature', 'élégance', 'expertise', 'vision'];

function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);

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
        @keyframes si { from { opacity:0; transform:scale(1.04); } to { opacity:1; transform:none; } }
        @keyframes so { from { opacity:1; } to { opacity:0; } }
      `}</style>
      {prev !== null && (
        <img key={`o${prev}`} src={SLIDES[prev].src} alt="" aria-hidden
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', animation:`so 0.9s ${E} both` }} />
      )}
      <img key={`i${current}`} src={SLIDES[current].src} alt={SLIDES[current].caption}
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', animation:`si 1s ${E} both` }} />

      <div style={{
        position:'absolute', inset:'auto 0 0',
        padding:'32px 20px 18px',
        background:'linear-gradient(transparent, rgba(0,0,0,0.38))',
        display:'flex', alignItems:'flex-end', justifyContent:'space-between',
      }}>
        <em style={{ fontFamily:"'Open Sans',sans-serif", fontStyle:'italic', fontSize:10, letterSpacing:'0.06em', color:'rgba(255,255,255,0.6)', fontWeight:300 }}>
          {SLIDES[current].caption}
        </em>
        <div style={{ display:'flex', gap:5 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Photo ${i+1}`}
              style={{ width: i===current ? 20 : 4, height:3, background: i===current ? '#fff' : 'rgba(255,255,255,0.35)',
                border:'none', cursor:'pointer', padding:0, borderRadius:2, transition:`width 0.45s ${E}` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Presentation() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="salon"
      className="px-5 sm:px-8 lg:px-16 py-16 lg:py-28 font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      {/* Label */}
      <div className="a-up inline-flex items-center gap-3 mb-12 font-light"
        style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
        <span style={{ display:'inline-block', width:16, height:1, background:C_ORANGE }} />
        02 — Le Salon · Genève
      </div>

      {/* Two columns */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">

        {/* LEFT — Text */}
        <div className="lg:w-5/12 flex flex-col">
          <h2 className="a-up a-d1 font-sans m-0"
            style={{ color:C_ANTH, fontWeight:300, fontSize:'clamp(38px, 4.8vw, 66px)', lineHeight:1.0, letterSpacing:'-0.02em' }}>
            Une{' '}
            <em style={{ fontStyle:'italic', color:C_ORANGE }}>
              <TextRotate texts={WORDS} />
            </em>
            <br />genevoise.
          </h2>

          <div className="a-up a-d2 flex gap-4 mt-8 lg:mt-10" style={{ maxWidth:340 }}>
            <div style={{ width:2, flexShrink:0, background:C_ORANGE, borderRadius:1, marginTop:3 }} />
            <p className="m-0 font-sans font-light"
              style={{ fontSize:'clamp(13px, 1.1vw, 15px)', lineHeight:1.95, color:'#6e6560' }}>
              Basé à Plainpalais, FR Coiffure vous accueille dans un cadre épuré pour une expérience entièrement sur-mesure.
            </p>
          </div>

          <a href="#prestations" className="a-up a-d3 self-start mt-8 lg:mt-10 font-sans font-light"
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

        {/* RIGHT — Photo, contained and airy */}
        <div className="a-scale a-d2 lg:w-7/12"
          style={{ position:'relative', height:'clamp(280px, 55vw, 580px)', overflow:'hidden' }}>
          <PhotoSlider />
        </div>
      </div>

      {/* Bottom — blockquote */}
      <div className="a-up a-d4 mt-16 lg:mt-24 pt-12 lg:pt-16 border-t text-center"
        style={{ borderColor:C_HAIRLINE }}>
        <blockquote className="font-sans font-light m-0"
          style={{
            fontSize:'clamp(15px, 1.8vw, 21px)', lineHeight:1.75,
            color:'#7a6e67', maxWidth:560, margin:'0 auto',
            letterSpacing:'0.005em', fontStyle:'italic',
          }}>
          "La coiffure comme architecture — chaque détail révèle votre propre lumière."
        </blockquote>
        <a href="#reservation" className="inline-flex mt-8 font-sans font-light"
          style={{
            fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase',
            color:C_ANTH, textDecoration:'none',
            border:`1px solid rgba(58,58,58,0.3)`, padding:'12px 28px',
            transition:`color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
          }}
          onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; e.currentTarget.style.borderColor=C_ANTH; }}
          onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(58,58,58,0.3)'; }}>
          Prendre rendez-vous →
        </a>
      </div>
    </section>
  );
}
