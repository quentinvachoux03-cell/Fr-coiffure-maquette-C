import HairPortrait from './HairPortrait';

const C_ANTH   = '#3A3A3A';
const C_ORANGE = '#D94018';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative px-5 sm:px-8 lg:px-16 pt-20 pb-14 lg:pt-28 lg:pb-28 font-sans"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-24">
        <div>
          <div
            className="inline-flex items-center gap-3 mb-6 lg:mb-9 font-light"
            style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: C_ORANGE }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, background: C_ORANGE }}></span>
            Maison de coiffure · Genève — Plainpalais
          </div>

          <h1
            className="font-sans font-light m-0"
            style={{ color: C_ANTH, fontSize: 'clamp(40px, 9vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.025em' }}
          >
            La coiffure,<br/>
            comme un{' '}
            <em className="italic" style={{ color: C_ORANGE }}>geste</em>.
          </h1>

          <p
            className="font-sans font-light mt-7 lg:mt-10 max-w-[480px]"
            style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', lineHeight: 1.75, color: '#6b6358' }}
          >
            Trois mètres de miroir, six paires de mains, une carte courte — à Plainpalais, Genève,
            depuis la fin des années 2000.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7 mt-10 lg:mt-14">
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 text-white rounded-full font-light"
              style={{
                background: C_ORANGE, padding: '16px 28px',
                fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = C_ANTH}
              onMouseLeave={(e) => e.currentTarget.style.background = C_ORANGE}
            >
              Prendre rendez-vous <span aria-hidden="true">→</span>
            </a>
            <a
              href="#reservation"
              className="font-light"
              style={{
                color: C_ANTH, textDecoration: 'none',
                fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
                borderBottom: '1px solid rgba(58,58,58,0.3)', paddingBottom: 4,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C_ORANGE; e.currentTarget.style.borderBottomColor = C_ORANGE; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = C_ANTH; e.currentTarget.style.borderBottomColor = 'rgba(58,58,58,0.3)'; }}
            >
              Découvrir les prestations
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[320px] sm:max-w-[400px] mx-auto lg:max-w-none mt-4 lg:mt-0" style={{ aspectRatio: '4/5' }}>
          <HairPortrait variant="editorialFlow" frame="card" caption="Pl. № 01" sig="Salon Plainpalais" idSeed={201} />
        </div>
      </div>
    </section>
  );
}
