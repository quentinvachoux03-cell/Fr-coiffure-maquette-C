const C_ORANGE = '#D94018';
const E = 'cubic-bezier(0.16, 1, 0.3, 1)';
const BASE = '/Fr-coiffure-maquette-C';

export default function Showreel() {
  return (
    <section
      id="accueil"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={`${BASE}/Photo%20Fond%20ecran%20aceuille.jpg`}
        alt="FR Coiffure — Salon Plainpalais"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center center',
        }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.58) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: 900,
        width: '100%',
      }}>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 10, letterSpacing: '0.5em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', fontWeight: 300,
          margin: '0 0 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          animation: `hero-in 0.8s 0.1s ${E} both`,
        }}>
          <span style={{ display: 'inline-block', width: 18, height: 1, background: 'rgba(255,255,255,0.35)' }} />
          Genève · Plainpalais · Depuis 2008
          <span style={{ display: 'inline-block', width: 18, height: 1, background: 'rgba(255,255,255,0.35)' }} />
        </p>

        {/* Title — FR COIFFURE */}
        <h1 style={{
          margin: '0 0 36px',
          animation: `hero-in 1s 0.25s ${E} both`,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(48px, 11vw, 130px)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#fff',
          lineHeight: 1,
          textShadow: '0 2px 24px rgba(0,0,0,0.18)',
        }}>
          <span style={{ color: C_ORANGE, fontWeight: 600 }}>FR</span>
          {' '}Coiffure
        </h1>

        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22,
          animation: `hero-in 0.85s 0.64s ${E} both`,
        }}>
          <a
            href="#reservation"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.55)',
              color: 'rgba(255,255,255,0.92)',
              padding: '14px 36px',
              textDecoration: 'none',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 300,
              transition: 'background 0.35s, border-color 0.35s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.85)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}
          >
            Prendre rendez-vous <span aria-hidden="true">→</span>
          </a>

          <a
            href="#prestations"
            style={{
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', fontWeight: 300,
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: 4,
              transition: 'color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.75)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)'; }}
          >
            Découvrir les prestations
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        animation: `hero-in 1s 1.1s ${E} both`,
      }}>
        <span style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}>Scroll</span>
        <div style={{
          width: 1, height: 36, background: 'rgba(255,255,255,0.3)',
          animation: 'scroll-pulse 2.2s 1.8s ease-in-out infinite',
          transformOrigin: 'top',
        }} />
      </div>
    </section>
  );
}
