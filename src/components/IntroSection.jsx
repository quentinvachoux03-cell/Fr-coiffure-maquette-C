import { useReveal } from '../hooks/useReveal';

const C_ANTH     = '#3A3A3A';
const C_ORANGE   = '#D94018';
const C_HAIRLINE = 'rgba(58,58,58,0.12)';
const E          = 'cubic-bezier(0.16, 1, 0.3, 1)';

export default function IntroSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      id="intro"
      className="font-sans border-t"
      style={{ borderColor: C_HAIRLINE }}
    >

      {/* ── TOP BLOCK — centered hero text ── */}
      <div style={{ textAlign: 'center', padding: 'clamp(64px, 10vw, 140px) clamp(24px, 6vw, 80px) clamp(48px, 7vw, 96px)' }}>

        {/* Eyebrow */}
        <div className="a-up inline-flex items-center gap-4 mb-10 font-light"
          style={{ fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', color: C_ORANGE }}>
          <span style={{ display: 'inline-block', width: 22, height: 1, background: C_ORANGE }} />
          Plainpalais · Genève · Depuis 2008
          <span style={{ display: 'inline-block', width: 22, height: 1, background: C_ORANGE }} />
        </div>

        {/* Main title — big, thin, editorial */}
        <h2 className="a-up a-d1 m-0 font-sans" style={{
          fontWeight: 300,
          fontSize: 'clamp(52px, 11vw, 148px)',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          color: C_ANTH,
        }}>
          SALON DE<br />COIFFURE
        </h2>

        {/* Script line */}
        <p className="a-up a-d2 m-0" style={{
          fontFamily: "'Sacramento', cursive",
          fontSize: 'clamp(28px, 4vw, 54px)',
          color: 'rgba(58,58,58,0.38)',
          marginTop: 'clamp(14px, 2vw, 28px)',
          marginBottom: 'clamp(36px, 5vw, 60px)',
        }}>
          par nos artisans
        </p>

        {/* CTA */}
        <a
          className="a-up a-d3"
          href="#reservation"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', fontWeight: 300,
            color: C_ANTH, textDecoration: 'none',
            border: `1px solid rgba(58,58,58,0.35)`,
            padding: '14px 36px',
            transition: `color 0.3s ${E}, background 0.3s ${E}, border-color 0.3s`,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = C_ANTH; e.currentTarget.style.borderColor = C_ANTH; }}
          onMouseLeave={e => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(58,58,58,0.35)'; }}
        >
          Prendre rendez-vous
        </a>
      </div>

      {/* ── BOTTOM BLOCK — two columns ── */}
      <div
        className="border-t px-5 sm:px-8 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24"
        style={{ borderColor: C_HAIRLINE }}
      >
        {/* LEFT — name block */}
        <div className="lg:w-5/12">
          <p className="a-up m-0" style={{
            fontFamily: "'Sacramento', cursive",
            fontSize: 'clamp(26px, 3.5vw, 44px)',
            color: 'rgba(58,58,58,0.35)',
            marginBottom: 12,
          }}>
            Bienvenue
          </p>
          <h3 className="a-up a-d1 m-0 font-sans" style={{
            fontWeight: 300,
            fontSize: 'clamp(36px, 6.5vw, 88px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: C_ANTH,
          }}>
            FR COIFFURE<br />
            <em style={{ fontStyle: 'italic', color: C_ORANGE, fontWeight: 300 }}>GENÈVE</em>
          </h3>
          <p className="a-up a-d2 font-sans font-light m-0" style={{
            fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: 'rgba(58,58,58,0.4)',
            marginTop: 20,
          }}>
            Salon de coiffure · Coloriste · Plainpalais
          </p>
        </div>

        {/* RIGHT — description */}
        <div className="lg:w-7/12 flex flex-col justify-center gap-8">
          <p className="a-up a-d2 font-sans font-light m-0" style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 2,
            color: '#6e6560',
            maxWidth: 520,
          }}>
            Fondé par Federico Renda dans le quartier de Plainpalais, FR Coiffure s'est rapidement imposé comme une référence genevoise grâce à son style moderne, son approche sur-mesure et son expertise en coupes, colorations et soins capillaires.
          </p>

          <div className="a-up a-d3 flex flex-col sm:flex-row gap-6">
            <a href="#/salon"
              className="font-sans font-light"
              style={{
                fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase',
                color: C_ANTH, textDecoration: 'none',
                borderBottom: `1px solid rgba(58,58,58,0.25)`, paddingBottom: 4,
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
              onMouseLeave={e => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.25)'; }}
            >
              Découvrir le salon →
            </a>
            <a href="#prestations"
              className="font-sans font-light"
              style={{
                fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase',
                color: 'rgba(58,58,58,0.45)', textDecoration: 'none',
                borderBottom: `1px solid rgba(58,58,58,0.15)`, paddingBottom: 4,
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(58,58,58,0.45)'; e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.15)'; }}
            >
              Voir les prestations →
            </a>
          </div>

          {/* Stats strip */}
          <div className="a-up a-d4 flex gap-10 pt-6 border-t" style={{ borderColor: C_HAIRLINE }}>
            {[['2008', 'Fondé'], ['6', 'Artisans'], ['100%', 'Sur-mesure']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontWeight: 300, fontSize: 'clamp(22px, 3vw, 36px)', color: C_ANTH, letterSpacing: '-0.02em', lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 9, letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(58,58,58,0.38)', fontWeight: 300, marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
