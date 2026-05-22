import { useReveal } from '../hooks/useReveal';
import { TARIFS } from '../data';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.10)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

function TarifBlock({ cat, items, delay }) {
  return (
    <div className={`a-up a-d${Math.min(delay, 6)}`} style={{ breakInside: 'avoid', marginBottom: 40 }}>
      {/* Category header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        paddingBottom: 10, marginBottom: 16,
        borderBottom: `1px solid ${C_HAIRLINE}`,
      }}>
        <span style={{ display: 'inline-block', width: 12, height: 1, background: C_ORANGE }} />
        <span style={{
          fontFamily: "'Open Sans',sans-serif",
          fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase',
          color: C_ORANGE, fontWeight: 300,
        }}>
          {cat}
        </span>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            gap: 16, padding: '9px 0',
            borderBottom: `1px solid ${C_HAIRLINE}`,
          }}>
            <span style={{
              fontFamily: "'Open Sans',sans-serif",
              fontSize: 13, fontWeight: 300, color: C_ANTH,
            }}>
              {item.name}
            </span>
            <span style={{
              fontFamily: "'Open Sans',sans-serif",
              fontSize: 12, fontWeight: 300,
              color: 'rgba(58,58,58,0.55)',
              whiteSpace: 'nowrap', letterSpacing: '0.02em',
            }}>
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PageTarifs() {
  const ref = useReveal();

  return (
    <div ref={ref} style={{ paddingTop: 80 }}>
      {/* Header */}
      <div
        className="px-5 sm:px-8 lg:px-16 py-16 lg:py-24 border-b"
        style={{ borderColor: C_HAIRLINE, textAlign: 'center' }}
      >
        <div className="a-up inline-flex items-center gap-3 mb-8 font-light"
          style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}>
          <span style={{ display: 'inline-block', width: 16, height: 1, background: C_ORANGE }} />
          Tarifs · FR Coiffure
        </div>

        <h1 className="a-up a-d1 font-sans m-0" style={{
          color: C_ANTH, fontWeight: 300,
          fontSize: 'clamp(36px, 6vw, 84px)',
          lineHeight: 0.9, letterSpacing: '-0.02em',
        }}>
          Nos tarifs
        </h1>

        <p className="a-up a-d2 font-sans font-light m-0" style={{
          fontSize: 13, lineHeight: 1.9, color: '#9c8f7e',
          margin: '20px auto 0', maxWidth: 320,
        }}>
          Tarifs incluant le shampooing traitant et soin.<br />
          Consultation gratuite.
        </p>

        <a
          href="#accueil"
          onClick={() => { window.location.hash = ''; }}
          className="a-up a-d3 font-sans font-light"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 32, fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: 'rgba(58,58,58,0.4)', textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = C_ORANGE}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(58,58,58,0.4)'}
        >
          ← Retour à l'accueil
        </a>
      </div>

      {/* Price grid — 2 columns on desktop */}
      <div
        className="px-5 sm:px-8 lg:px-16 py-14 lg:py-20"
        style={{
          columnCount: undefined,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '0 clamp(40px, 6vw, 80px)',
          alignItems: 'start',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {TARIFS.map((block, i) => (
          <TarifBlock key={block.cat} cat={block.cat} items={block.items} delay={i + 1} />
        ))}
      </div>

      {/* Note */}
      <div
        className="px-5 sm:px-8 lg:px-16 pb-14 lg:pb-20 border-t"
        style={{ borderColor: C_HAIRLINE, maxWidth: 1100, margin: '0 auto' }}
      >
        <p className="font-sans font-light" style={{
          fontSize: 11, letterSpacing: '0.15em',
          color: 'rgba(58,58,58,0.45)',
          paddingTop: 24, margin: 0,
        }}>
          Nos tarifs incluent le shampooing traitant et soin · Consultation gratuite · Lun — Sam · 9h00 — 19h00 · Plainpalais, Genève
        </p>
      </div>
    </div>
  );
}
