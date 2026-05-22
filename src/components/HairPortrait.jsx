// Editorial hair portrait placeholders — replace with real photos in production.

const VARIANTS = {
  editorialFlow: {
    base: '#E0E0E0',
    render: (id) => (
      <g>
        <defs>
          <linearGradient id={`efh${id}`} x1="0.12" y1="0" x2="0.08" y2="1">
            <stop offset="0%" stopColor="#100806"/>
            <stop offset="48%" stopColor="#251508"/>
            <stop offset="100%" stopColor="#3a1e0c"/>
          </linearGradient>
          <radialGradient id={`efs${id}`} cx="50%" cy="36%" r="56%">
            <stop offset="0%" stopColor="#f5d5ac"/>
            <stop offset="65%" stopColor="#e2bd8e"/>
            <stop offset="100%" stopColor="#cda070"/>
          </radialGradient>
          <radialGradient id={`efbg${id}`} cx="66%" cy="18%" r="82%">
            <stop offset="0%" stopColor="#f7f0e5"/>
            <stop offset="55%" stopColor="#ead8c2"/>
            <stop offset="100%" stopColor="#ccb898"/>
          </radialGradient>
          <linearGradient id={`efcl${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2a23"/>
            <stop offset="100%" stopColor="#0d1810"/>
          </linearGradient>
          <radialGradient id={`efhl${id}`} cx="42%" cy="26%" r="46%">
            <stop offset="0%" stopColor="#ffe8b0" stopOpacity="0.26"/>
            <stop offset="100%" stopColor="#ffe8b0" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id={`efvg${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="58%" stopColor="#000000" stopOpacity="0"/>
            <stop offset="100%" stopColor="#000000" stopOpacity="0.24"/>
          </linearGradient>
        </defs>

        {/* Background — warm studio */}
        <rect width="400" height="900" fill={`url(#efbg${id})`}/>
        {/* Soft bokeh atmosphere */}
        <circle cx="58"  cy="248" r="60" fill="rgba(255,255,255,0.09)"/>
        <circle cx="356" cy="308" r="40" fill="rgba(255,255,255,0.07)"/>
        <circle cx="30"  cy="548" r="30" fill="rgba(255,255,255,0.06)"/>
        <circle cx="370" cy="530" r="22" fill="rgba(255,255,255,0.05)"/>

        {/* ── HAIR BACK ── */}
        <path d="M93,315 C62,255 82,200 200,200 C318,200 338,255 307,315 C340,360 362,445 368,548 C374,640 365,740 352,870 L48,870 C35,740 26,640 32,548 C38,445 60,360 93,315 Z"
          fill={`url(#efh${id})`}/>
        <path d="M96,340 C62,392 40,482 34,592 C30,682 36,768 50,870"
          stroke="#100806" strokeWidth="54" fill="none" strokeLinecap="round"/>
        <path d="M304,340 C338,392 360,482 366,592 C370,682 364,768 350,870"
          stroke="#100806" strokeWidth="54" fill="none" strokeLinecap="round"/>

        {/* ── CLOTHING (dark forest green) ── */}
        <path d="M55,638 C76,554 140,514 200,512 C260,514 324,554 345,638 C362,702 370,788 372,900 L28,900 C30,788 38,702 55,638 Z"
          fill={`url(#efcl${id})`}/>
        <path d="M170,514 C178,530 194,537 200,538 C206,537 222,530 230,514"
          stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"/>

        {/* ── NECK ── */}
        <path d="M183,452 C181,472 181,500 183,518 L217,518 C219,500 219,472 217,452 C213,444 206,441 200,441 C194,441 187,444 183,452 Z"
          fill={`url(#efs${id})`}/>
        <path d="M184,505 C188,515 195,520 200,521 C205,520 212,515 216,505"
          fill="rgba(80,45,10,0.14)"/>
        <ellipse cx="200" cy="518" rx="18" ry="5" fill="rgba(80,45,10,0.20)"/>

        {/* ── FACE ── */}
        <path d="M148,282 C144,230 162,207 200,205 C238,207 256,230 252,282 C255,332 251,382 241,413 C232,440 218,452 200,453 C182,452 168,440 159,413 C149,382 145,332 148,282 Z"
          fill={`url(#efs${id})`}/>
        {/* Subtle cheek blush */}
        <ellipse cx="158" cy="342" rx="22" ry="13" fill="rgba(220,140,100,0.14)"/>
        <ellipse cx="242" cy="342" rx="22" ry="13" fill="rgba(220,140,100,0.16)"/>
        {/* Right side face light */}
        <ellipse cx="244" cy="295" rx="13" ry="28" fill="rgba(255,248,235,0.18)"/>

        {/* ── EARS ── */}
        <ellipse cx="148" cy="320" rx="11" ry="16" fill="#dfba8e"/>
        <ellipse cx="252" cy="320" rx="11" ry="16" fill="#dfba8e"/>
        <ellipse cx="148" cy="320" rx="6"  ry="9"  fill="rgba(140,85,35,0.18)"/>
        <ellipse cx="252" cy="320" rx="6"  ry="9"  fill="rgba(140,85,35,0.18)"/>

        {/* ── EYEBROWS ── */}
        <path d="M165,257 C172,249 183,246 196,249" stroke="#1e0e06" strokeWidth="5"   fill="none" strokeLinecap="round"/>
        <path d="M165,257 C172,250 183,247 196,249" stroke="rgba(30,14,6,0.38)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M204,249 C217,246 228,249 235,257" stroke="#1e0e06" strokeWidth="5"   fill="none" strokeLinecap="round"/>
        <path d="M204,249 C217,247 228,250 235,257" stroke="rgba(30,14,6,0.38)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* ── EYES ── */}
        {/* Left */}
        <ellipse cx="182" cy="275" rx="20" ry="11" fill="rgba(100,58,18,0.06)"/>
        <path d="M163,275 C168,264 178,260 191,264 C197,266 200,274 197,280 C188,290 170,290 163,284 Z" fill="#0c0604"/>
        <ellipse cx="181" cy="272" rx="8" ry="7" fill="#1a0c07"/>
        <circle cx="181" cy="272" r="4" fill="#060302"/>
        <circle cx="185" cy="268" r="2.5" fill="rgba(255,255,255,0.80)"/>
        <circle cx="178" cy="276" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <path d="M163,275 C168,264 178,260 191,264 C197,266 200,274" stroke="#040302" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M164,283 C172,288 188,289 197,280" stroke="rgba(20,10,4,0.48)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Right */}
        <ellipse cx="218" cy="275" rx="20" ry="11" fill="rgba(100,58,18,0.06)"/>
        <path d="M203,280 C200,274 203,266 209,264 C222,260 232,264 237,275 C230,290 212,290 203,284 Z" fill="#0c0604"/>
        <ellipse cx="219" cy="272" rx="8" ry="7" fill="#1a0c07"/>
        <circle cx="219" cy="272" r="4" fill="#060302"/>
        <circle cx="223" cy="268" r="2.5" fill="rgba(255,255,255,0.80)"/>
        <circle cx="216" cy="276" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <path d="M203,274 C206,266 212,260 224,260 C232,264 237,275" stroke="#040302" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M203,283 C212,289 228,288 236,283" stroke="rgba(20,10,4,0.48)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

        {/* ── NOSE ── */}
        <path d="M194,290 C193,310 192,330 191,348" stroke="rgba(130,75,25,0.18)" strokeWidth="2.5" fill="none"/>
        <path d="M206,290 C207,310 208,330 209,348" stroke="rgba(130,75,25,0.18)" strokeWidth="2.5" fill="none"/>
        <path d="M186,355 C191,362 196,365 200,364 C204,365 209,362 214,355"
          stroke="rgba(110,60,15,0.36)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="190" cy="357" rx="5.5" ry="4" fill="rgba(110,60,15,0.15)"/>
        <ellipse cx="210" cy="357" rx="5.5" ry="4" fill="rgba(110,60,15,0.15)"/>

        {/* ── LIPS ── */}
        <path d="M175,385 C181,374 191,370 200,371 C209,370 219,374 225,385 C220,396 210,401 200,402 C190,401 180,396 175,385 Z" fill="#bf5e5e"/>
        <path d="M175,385 C181,375 191,371 200,372 C209,371 219,375 225,385" fill="rgba(155,68,68,0.72)"/>
        <path d="M175,385 C179,401 189,410 200,411 C211,410 221,401 225,385" fill="#cf7070"/>
        <ellipse cx="200" cy="404" rx="12" ry="4" fill="rgba(255,215,205,0.35)"/>
        <path d="M180,385 Q190,381 200,382 Q210,381 220,385" stroke="rgba(135,50,50,0.40)" strokeWidth="0.8" fill="none"/>
        {/* Chin shadow */}
        <path d="M170,432 C180,447 191,453 200,454 C209,453 220,447 230,432" fill="rgba(90,50,12,0.10)"/>

        {/* ── HAIR FRONT ── */}
        {/* Side locks falling over face edges */}
        <path d="M148,292 C128,324 110,372 105,432 C100,477 103,528 108,580"
          stroke="#140a05" strokeWidth="30" fill="none" strokeLinecap="round"/>
        <path d="M148,295 C130,328 113,377 108,437 C103,482 106,530 111,582"
          stroke="#221408" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <path d="M252,292 C272,324 290,372 295,432 C300,477 297,528 292,580"
          stroke="#140a05" strokeWidth="30" fill="none" strokeLinecap="round"/>
        <path d="M252,295 C270,328 287,377 292,437 C297,482 294,530 289,582"
          stroke="#221408" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* Hairline at forehead */}
        <path d="M156,259 C153,241 158,221 172,211 C165,223 163,245 167,268" fill="#140a05"/>
        <path d="M244,259 C247,241 242,221 228,211 C235,223 237,245 233,268" fill="#140a05"/>
        {/* Center parting */}
        <path d="M188,206 C191,219 194,235 196,255" stroke="#080503" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M212,206 C209,219 206,235 204,255" stroke="#080503" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* Texture strands */}
        <path d="M158,222 C154,250 153,280 157,310" stroke="rgba(55,25,6,0.36)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M174,210 C170,240 169,270 173,300" stroke="rgba(55,25,6,0.28)" strokeWidth="2"   fill="none" strokeLinecap="round"/>
        <path d="M226,210 C230,240 231,270 227,300" stroke="rgba(55,25,6,0.28)" strokeWidth="2"   fill="none" strokeLinecap="round"/>
        <path d="M242,222 C246,250 247,280 243,310" stroke="rgba(55,25,6,0.34)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Long center strands */}
        <path d="M194,296 C192,398 190,500 192,602 C194,682 198,762 200,840" stroke="rgba(65,30,8,0.26)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M200,295 C200,400 200,500 200,605 C200,685 200,765 200,840" stroke="rgba(55,24,6,0.20)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M206,296 C208,398 210,500 208,602 C206,682 202,762 200,840" stroke="rgba(65,30,8,0.24)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Hair gloss */}
        <path d="M172,216 C181,246 193,266 200,296 C207,266 219,246 228,216"
          stroke="rgba(255,228,158,0.20)" strokeWidth="24" fill="none" strokeLinecap="round"/>
        {/* Flyaway strands */}
        <path d="M162,223 C155,206 152,191 160,177" stroke="rgba(45,22,5,0.42)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M238,223 C245,206 248,191 240,177" stroke="rgba(45,22,5,0.38)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M177,213 C173,197 173,183 180,171" stroke="rgba(45,22,5,0.28)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M222,215 C230,201 228,185 220,175" stroke="rgba(45,22,5,0.25)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

        {/* ── RIM LIGHT (right) ── */}
        <path d="M246,232 C260,278 262,362 255,447 C251,490 247,522 244,550"
          stroke="rgba(255,245,215,0.18)" strokeWidth="7" fill="none" strokeLinecap="round"/>

        {/* Hair highlight overlay */}
        <rect x="0" y="0" width="400" height="900" fill={`url(#efhl${id})`} style={{ pointerEvents: 'none' }}/>
        {/* Bottom vignette */}
        <rect x="0" y="0" width="400" height="900" fill={`url(#efvg${id})`}/>
        {/* Side vignettes */}
        <rect x="0"   y="0" width="55"  height="900" fill="rgba(0,0,0,0.07)"/>
        <rect x="345" y="0" width="55"  height="900" fill="rgba(0,0,0,0.07)"/>
      </g>
    ),
  },

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
