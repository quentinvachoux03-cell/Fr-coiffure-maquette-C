// Editorial hair portrait placeholders — replace with real photos in production.

const VARIANTS = {
  longFlow: {
    base: '#dccebb',
    render: (id) => (
      <g>
        <path d="M70,180 C40,110 80,40 200,40 C320,40 360,110 330,200 C355,230 360,310 340,360 C330,420 320,520 320,640 C320,720 360,820 380,900 L20,900 C40,820 80,720 80,640 C80,520 70,420 60,360 C40,310 50,230 70,180 Z" fill="rgba(58,58,58,0.55)"/>
        <path d="M200,140 C260,160 310,260 320,420 C322,520 315,640 320,780" stroke="rgba(255,255,255,0.18)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M140,180 C110,260 100,400 105,540 C108,640 115,760 110,860" stroke="rgba(0,0,0,0.20)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <ellipse cx="200" cy="245" rx="58" ry="74" fill="rgba(255,250,242,0.78)"/>
        <path d="M30,820 C90,720 140,690 200,690 C260,690 310,720 370,820 L370,900 L30,900 Z" fill="rgba(58,58,58,0.32)"/>
      </g>
    ),
  },
  bob: {
    base: '#cdc1ad',
    render: (id) => (
      <g>
        <path d="M80,100 C80,40 320,40 320,100 C340,110 340,260 320,300 L320,420 L80,420 L80,300 C60,260 60,110 80,100 Z" fill="rgba(40,30,22,0.72)"/>
        <path d="M120,130 C160,160 240,160 280,130" stroke="rgba(255,255,255,0.22)" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <ellipse cx="200" cy="270" rx="58" ry="78" fill="rgba(255,248,238,0.85)"/>
        <path d="M40,840 C90,560 140,500 200,500 C260,500 310,560 360,840 L360,900 L40,900 Z" fill="rgba(58,58,58,0.38)"/>
        <line x1="80" y1="420" x2="320" y2="420" stroke="rgba(0,0,0,0.45)" strokeWidth="2"/>
      </g>
    ),
  },
  curls: {
    base: '#d6c4a8',
    render: (id) => (
      <g>
        <g fill="rgba(58,28,8,0.7)">
          <circle cx="120" cy="170" r="60"/><circle cx="200" cy="120" r="68"/><circle cx="280" cy="170" r="60"/>
          <circle cx="90"  cy="240" r="58"/><circle cx="310" cy="240" r="58"/>
          <circle cx="100" cy="320" r="56"/><circle cx="300" cy="320" r="56"/>
          <circle cx="90"  cy="420" r="54"/><circle cx="310" cy="420" r="54"/>
          <circle cx="100" cy="520" r="52"/><circle cx="300" cy="520" r="52"/>
        </g>
        <g fill="rgba(255,255,255,0.18)">
          <circle cx="135" cy="155" r="6"/><circle cx="220" cy="100" r="7"/>
          <circle cx="290" cy="225" r="6"/><circle cx="115" cy="340" r="5"/><circle cx="290" cy="500" r="5"/>
        </g>
        <ellipse cx="200" cy="310" rx="56" ry="74" fill="rgba(255,250,242,0.85)"/>
        <path d="M30,820 C90,720 140,690 200,690 C260,690 310,720 370,820 L370,900 L30,900 Z" fill="rgba(58,58,58,0.35)"/>
      </g>
    ),
  },
  updo: {
    base: '#c8baa5',
    render: (id) => (
      <g>
        <ellipse cx="200" cy="110" rx="60" ry="42" fill="rgba(40,28,18,0.72)"/>
        <path d="M120,160 C90,210 90,300 130,330 L130,300 C140,250 160,200 200,180" fill="rgba(40,28,18,0.72)"/>
        <path d="M280,160 C310,210 310,300 270,330 L270,300 C260,250 240,200 200,180" fill="rgba(40,28,18,0.72)"/>
        <path d="M155,200 Q200,170 245,200" stroke="rgba(255,255,255,0.22)" strokeWidth="4" fill="none"/>
        <ellipse cx="200" cy="260" rx="58" ry="78" fill="rgba(255,250,242,0.85)"/>
        <rect x="178" y="320" width="44" height="60" fill="rgba(255,250,242,0.85)"/>
        <path d="M40,820 C90,700 140,680 200,680 C260,680 310,700 360,820 L360,900 L40,900 Z" fill="rgba(58,58,58,0.35)"/>
      </g>
    ),
  },
  straight: {
    base: '#bcae97',
    render: (id) => (
      <g>
        <path d="M120,90 C100,40 300,40 280,90 C340,140 350,290 330,460 C320,580 320,720 340,900 L60,900 C80,720 80,580 70,460 C50,290 60,140 120,90 Z" fill="rgba(28,18,10,0.78)"/>
        <line x1="200" y1="60" x2="200" y2="900" stroke="rgba(0,0,0,0.30)" strokeWidth="2"/>
        <path d="M150,120 C140,300 150,540 155,820" stroke="rgba(255,255,255,0.14)" strokeWidth="3" fill="none"/>
        <path d="M250,120 C260,300 250,540 245,820" stroke="rgba(255,255,255,0.14)" strokeWidth="3" fill="none"/>
      </g>
    ),
  },
  balayage: {
    base: '#d8c8af',
    render: (id) => (
      <g>
        <defs>
          <linearGradient id={`bal-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#3a2616"/>
            <stop offset="55%" stopColor="#7a4d23"/>
            <stop offset="100%" stopColor="#d6a25a"/>
          </linearGradient>
        </defs>
        <path d="M80,160 C80,60 320,60 320,160 C355,180 360,320 340,400 C330,520 330,700 350,900 L50,900 C70,700 70,520 60,400 C40,320 45,180 80,160 Z" fill={`url(#bal-${id})`}/>
        <ellipse cx="200" cy="270" rx="58" ry="76" fill="rgba(255,250,242,0.85)"/>
        <path d="M120,190 C110,400 110,640 130,860" stroke="rgba(255,230,180,0.45)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M280,190 C290,400 290,640 270,860" stroke="rgba(255,230,180,0.45)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M30,860 C80,760 130,720 200,720 C270,720 320,760 370,860 L370,900 L30,900 Z" fill="rgba(58,58,58,0.35)"/>
      </g>
    ),
  },
};

export default function HairPortrait({ variant = 'longFlow', frame = 'thin', caption, sig, idSeed = 0 }) {
  const v = VARIANTS[variant] || VARIANTS.longFlow;
  const id = `${variant}-${idSeed}`;

  const frameStyle =
    frame === 'card'
      ? { padding: 14, background: '#fff', boxShadow: '0 22px 60px rgba(58,58,58,0.16), 0 2px 6px rgba(58,58,58,0.08)' }
      : frame === 'thin'
      ? { padding: 8, background: '#fff', boxShadow: '0 6px 24px rgba(58,58,58,0.10)' }
      : {};

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', ...frameStyle }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: v.base, overflow: 'hidden' }}>
        <svg
          viewBox="0 0 400 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <defs>
            <radialGradient id={`light-${id}`} cx="62%" cy="22%" r="78%">
              <stop offset="0%"  stopColor="#fff8ee" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fff8ee" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`vignette-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" stopOpacity="0"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0.18"/>
            </linearGradient>
          </defs>
          <rect width="400" height="900" fill={`url(#light-${id})`} />
          {v.render(id)}
          <rect width="400" height="900" fill={`url(#vignette-${id})`} />
        </svg>
        {(caption || sig) && (
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            display: 'flex', justifyContent: 'space-between',
            padding: '12px 16px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.32) 100%)',
            color: '#fff',
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
            fontWeight: 300,
          }}>
            <span>{caption}</span>
            <span style={{ fontStyle: 'italic', letterSpacing: '0.08em', textTransform: 'none' }}>{sig}</span>
          </div>
        )}
      </div>
    </div>
  );
}
