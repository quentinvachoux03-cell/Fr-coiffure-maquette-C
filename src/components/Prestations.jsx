import { useState } from 'react';
import { SERVICES } from '../data';
import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

/* ─── Desktop: hover-expand gallery card ─── */
function GalleryCard({ service, isHovered, onHover, onLeave }) {
  const MAX_ITEMS = 6;
  const visible   = service.items.slice(0, MAX_ITEMS);
  const extra     = service.items.length - MAX_ITEMS;

  return (
    <div
      style={{
        flex: isHovered ? '5 0 0' : '1 0 0',
        minWidth: 0,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: isHovered ? C_ANTH : '#f2efea',
        borderLeft: '1px solid rgba(58,58,58,0.08)',
        transition: `flex 0.55s ${E}, background 0.45s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Service number — always visible */}
      <div style={{
        position: 'absolute', top: 22, left: 20, zIndex: 2,
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase',
        fontWeight: 300,
        color: isHovered ? C_ORANGE : 'rgba(58,58,58,0.3)',
        transition: 'color 0.35s',
      }}>
        {service.n}
      </div>

      {/* Collapsed: vertical title */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        paddingBottom: 28,
        opacity: isHovered ? 0 : 1,
        transition: `opacity 0.22s`,
        pointerEvents: 'none',
      }}>
        <span style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: C_ANTH, fontWeight: 300,
          whiteSpace: 'nowrap',
        }}>
          {service.title}
        </span>
      </div>

      {/* Expanded: full content */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: '52px 28px 28px',
        display: 'flex', flexDirection: 'column',
        opacity: isHovered ? 1 : 0,
        transition: `opacity 0.32s ${isHovered ? '0.14s' : '0s'}`,
        pointerEvents: isHovered ? 'auto' : 'none',
        overflow: 'hidden',
      }}>
        {/* Title */}
        <h3 style={{
          margin: '0 0 20px',
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1,
          fontSize: 'clamp(18px, 1.8vw, 22px)',
          color: '#fff',
          whiteSpace: 'nowrap',
        }}>
          {service.title}
        </h3>

        {/* Divider */}
        <div style={{ width: 28, height: 1, background: C_ORANGE, marginBottom: 18, opacity: 0.8 }} />

        {/* Items */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
          {visible.map((item, i) => (
            <li key={item} style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 11, fontWeight: 300, letterSpacing: '0.02em',
              color: 'rgba(255,255,255,0.62)',
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 9,
              transform: isHovered ? 'none' : 'translateX(-6px)',
              opacity: isHovered ? 1 : 0,
              transition: `opacity 0.3s ${E} ${0.18 + i * 0.045}s, transform 0.3s ${E} ${0.18 + i * 0.045}s`,
            }}>
              <span style={{ width: 14, height: 1, background: C_ORANGE, flexShrink: 0, opacity: 0.65 }} />
              {item}
            </li>
          ))}
          {extra > 0 && (
            <li style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 10, fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginTop: 6,
              opacity: isHovered ? 1 : 0,
              transition: `opacity 0.3s ${E} ${0.18 + MAX_ITEMS * 0.045}s`,
            }}>
              +{extra} de plus
            </li>
          )}
        </ul>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 14,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
          color: C_ORANGE, fontWeight: 300,
          opacity: isHovered ? 1 : 0,
          transition: `opacity 0.3s ${E} 0.35s`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>Pack {service.n}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>→</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile: accordion card ─── */
function MobileCard({ service, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`a-up a-d${Math.min(index + 1, 6)}`}
      style={{
        background: '#fff',
        borderTop: `2px solid ${open ? C_ORANGE : 'rgba(58,58,58,0.15)'}`,
        padding: 'clamp(20px, 4vw, 30px)',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 9, letterSpacing: '0.45em', textTransform: 'uppercase',
        color: open ? C_ORANGE : 'rgba(58,58,58,0.3)',
        fontWeight: 300, marginBottom: 12,
        transition: 'color 0.3s',
      }}>Pack {service.n}</div>

      <button type="button" onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          width: '100%', textAlign: 'left',
        }}
      >
        <h3 style={{
          margin: 0, fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 300,
          letterSpacing: '-0.01em', color: open ? C_ORANGE : C_ANTH,
          transition: 'color 0.3s',
        }}>{service.title}</h3>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28, flexShrink: 0, borderRadius: '50%',
          border: `1px solid ${open ? C_ORANGE : 'rgba(58,58,58,0.2)'}`,
          fontSize: 15, color: open ? C_ORANGE : 'rgba(58,58,58,0.4)',
          transform: open ? 'rotate(45deg)' : 'none',
          transition: `transform 0.4s ${E}, color 0.3s, border-color 0.3s`,
        }}>+</span>
      </button>

      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: `grid-template-rows 0.48s ${E}` }}>
        <div style={{ overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: '14px 0 4px', margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {service.items.map((item, i) => (
              <li key={item} style={{
                fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 300,
                letterSpacing: '0.02em', color: '#7a7068',
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(4px)',
                transition: `opacity 0.33s ${E} ${0.05 + i * 0.035}s, transform 0.33s ${E} ${0.05 + i * 0.035}s`,
              }}>
                <span style={{ width: 14, height: 1, background: C_ORANGE, display: 'inline-block', flexShrink: 0, opacity: 0.6 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Prestations() {
  const ref = useReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      ref={ref}
      id="prestations"
      className="font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >
      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-16 pt-16 lg:pt-28 pb-10 lg:pb-14">
        <div className="a-up inline-flex items-center gap-3 mb-10 font-light"
          style={{ fontSize:9, letterSpacing:'0.55em', textTransform:'uppercase', color:C_ORANGE }}>
          <span style={{ display:'inline-block', width:16, height:1, background:C_ORANGE }} />
          02 — Prestations
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="a-up a-d1 font-sans m-0"
            style={{ color:C_ANTH, fontWeight:300, fontSize:'clamp(34px, 5.5vw, 72px)', lineHeight:0.93, letterSpacing:'-0.01em' }}>
            L'art du{' '}
            <em style={{ fontStyle:'italic', fontWeight:300, color:C_ORANGE }}>soin</em>,<br />
            six expertises.
          </h2>
          <p className="a-up a-d2 font-sans font-light m-0"
            style={{ fontSize:'clamp(12px, 1.2vw, 14px)', lineHeight:1.9, color:'#9c8f7e', maxWidth:240 }}>
            Passez votre curseur sur un pack<br />pour découvrir les prestations.
          </p>
        </div>
      </div>

      {/* Desktop gallery */}
      <div className="hidden lg:flex px-5 sm:px-8 lg:px-16"
        style={{ height: 420, gap: 0, border: '1px solid rgba(58,58,58,0.1)', borderLeft: 'none', borderRight: 'none' }}>
        {SERVICES.map((s, i) => (
          <GalleryCard
            key={s.n}
            service={s}
            index={i}
            isHovered={hovered === i}
            onHover={() => setHovered(i)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden px-5 sm:px-8 flex flex-col gap-3 pb-10">
        {SERVICES.map((s, i) => <MobileCard key={s.n} service={s} index={i} />)}
      </div>

      {/* CTA */}
      <div className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-24">
        <div className="a-up a-d6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-8 pt-8 border-t"
          style={{ borderColor:C_HAIRLINE }}>
          <span className="font-sans font-light"
            style={{ fontSize:9, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(58,58,58,0.35)' }}>
            Lun — Sam · 9h00 — 19h00 · Plainpalais, Genève
          </span>
          <a href="#reservation"
            className="self-start sm:self-auto inline-flex items-center gap-3 font-sans font-light"
            style={{
              fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase',
              color:C_ANTH, textDecoration:'none',
              border:`1px solid rgba(58,58,58,0.3)`, padding:'12px 24px',
              transition:`color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background=C_ANTH; e.currentTarget.style.borderColor=C_ANTH; }}
            onMouseLeave={e => { e.currentTarget.style.color=C_ANTH; e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(58,58,58,0.3)'; }}>
            Prendre rendez-vous →
          </a>
        </div>
      </div>
    </section>
  );
}
