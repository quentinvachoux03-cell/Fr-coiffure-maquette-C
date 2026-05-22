import { SALON } from '../data';

const C_ORANGE = '#D94018';
const C_FOREST = '#1c2a23';
const C_CREAM  = '#f5ede0';

export default function Footer() {
  return (
    <footer
      className="px-16 pt-24 pb-12 font-sans"
      style={{ background: C_FOREST, color: C_CREAM }}
    >
      <div className="grid gap-12" style={{ gridTemplateColumns: '0.9fr 1.1fr 1fr 1.1fr' }}>

        {/* Brand + badges */}
        <div>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 64, height: 64, background: C_ORANGE }}
            >
              <em className="italic font-bold text-white" style={{ fontSize: 24, lineHeight: 1 }}>f.r.</em>
            </div>
            <div
              className="font-light tracking-widest uppercase"
              style={{ fontSize: 13, letterSpacing: '0.3em' }}
            >
              coiffure
            </div>
          </div>

          <p
            className="font-sans font-light mt-8 max-w-[280px]"
            style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(245,237,224,0.75)' }}
          >
            Maison indépendante à Plainpalais, Genève — depuis la fin des années 2000.
          </p>

          <div className="flex items-center gap-3 mt-10">
            <div
              className="flex flex-col items-center justify-center rounded-full border"
              style={{ width: 64, height: 64, borderColor: 'rgba(245,237,224,0.75)' }}
            >
              <span style={{ fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1 }}>Entreprise</span>
              <span className="font-bold mt-1" style={{ fontSize: 22, lineHeight: 1 }}>B</span>
              <span style={{ fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1, marginTop: 4 }}>Certifiée</span>
            </div>
            <div
              className="flex flex-col items-center justify-center text-center rounded-full border"
              style={{ width: 64, height: 64, borderColor: 'rgba(245,237,224,0.75)' }}
            >
              <span style={{ fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1 }}>Label</span>
              <span className="font-medium mt-1" style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>Éco-Salon</span>
              <span className="rounded-full mt-1.5" style={{ width: 6, height: 6, background: C_ORANGE }}></span>
            </div>
          </div>
        </div>

        {/* Salon info */}
        <div>
          <div
            className="mb-5 pb-3 border-b font-sans"
            style={{
              fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: C_ORANGE, borderColor: 'rgba(245,237,224,0.2)',
            }}
          >
            {SALON.name}
          </div>
          <address className="not-italic font-sans font-light" style={{ fontSize: 14, lineHeight: 1.9 }}>
            {SALON.address1}<br />{SALON.address2}<br />
            <a
              href={`tel:${SALON.phone.replace(/\s/g, '')}`}
              style={{ color: C_CREAM, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {SALON.phone}
            </a>
          </address>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 font-sans font-light border-b"
            style={{
              fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              textDecoration: 'none', color: C_ORANGE, borderColor: C_ORANGE,
              paddingBottom: 4, transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Ouvrir l'itinéraire ↗
          </a>
        </div>

        {/* Hours */}
        <div>
          <div
            className="mb-5 pb-3 border-b font-sans"
            style={{
              fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: C_ORANGE, borderColor: 'rgba(245,237,224,0.2)',
            }}
          >
            Horaires
          </div>
          <div className="font-sans font-light" style={{ fontSize: 14, lineHeight: 2 }}>
            {SALON.hoursWeek}
            <br />
            <span style={{ color: 'rgba(245,237,224,0.55)' }}>{SALON.hoursSun}</span>
          </div>
          <div
            className="mt-6 font-sans font-light"
            style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,237,224,0.6)' }}
          >
            Sur rendez-vous
          </div>
        </div>

        {/* Social + newsletter */}
        <div>
          <div
            className="mb-5 pb-3 border-b font-sans"
            style={{
              fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
              color: C_ORANGE, borderColor: 'rgba(245,237,224,0.2)',
            }}
          >
            Suivez-nous
          </div>
          <div className="flex flex-col gap-3 mb-8">
            {[
              ['Instagram', SALON.instagram],
              ['Facebook', SALON.facebook],
            ].map(([platform, handle]) => (
              <a
                key={platform}
                href="#"
                className="inline-flex items-center gap-3 font-sans font-light"
                style={{ fontSize: 14, color: C_CREAM, textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <span style={{ color: C_ORANGE }}>→</span>
                {platform} · {handle}
              </a>
            ))}
          </div>

          <div
            className="mb-3 font-sans font-light"
            style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,237,224,0.6)' }}
          >
            Newsletter
          </div>
          <form
            className="flex border-b"
            style={{ borderColor: 'rgba(245,237,224,0.6)' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 bg-transparent border-0 outline-none py-2 font-sans font-light"
              style={{ fontSize: 13, color: C_CREAM }}
            />
            <button
              className="bg-transparent border-0 cursor-pointer font-sans font-light"
              style={{
                fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: C_ORANGE, transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              S'inscrire →
            </button>
          </form>
        </div>
      </div>

      <div
        className="mt-20 pt-6 border-t flex justify-between font-sans font-light"
        style={{
          borderColor: 'rgba(245,237,224,0.15)',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(245,237,224,0.55)',
        }}
      >
        <span>© 2026 FR Coiffure · Plainpalais, Genève</span>
        <span>Mentions légales · Confidentialité</span>
      </div>
    </footer>
  );
}
