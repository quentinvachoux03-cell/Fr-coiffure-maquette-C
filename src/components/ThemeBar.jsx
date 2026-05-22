import { useTheme } from '../context/ThemeContext';
import { LiquidToggle } from './LiquidToggle';

export default function ThemeBar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        gap: 12,
        padding: '10px clamp(20px, 4vw, 64px)',
        borderBottom: '1px solid rgba(58,58,58,0.1)',
      }}
    >
      <span style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
        color: 'rgba(58,58,58,0.38)', fontWeight: 300,
        whiteSpace: 'nowrap',
      }}>
        Test couleur pour Frederico
      </span>
      <LiquidToggle checked={darkMode} onCheckedChange={setDarkMode} />
    </div>
  );
}
