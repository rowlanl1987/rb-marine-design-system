// RB Marine Design System — Tokens
// Source: RB Marine Brand Guidelines 2024

export const colors = {
  // Core palette
  darkBlue:    '#001e60',
  lightGreen:  '#00e99a',
  lightBlue:   '#41b6e6',
  lilac:       '#d28dd3',
  digitalBlue: '#0066cc',
  white:       '#ffffff',

  // Pantone references (print)
  pantone: {
    darkBlue:   '3597 C',
    lightGreen: '7479 C',
    lightBlue:  '298 C',
    lilac:      '2573 C',
  },

  // CMYK references (print)
  cmyk: {
    darkBlue:   'C100 M82 Y6 K28',
    lightGreen: 'C56 M0 Y58 K0',
    lightBlue:  'C67 M2 Y0 K0',
    lilac:      'C35 M52 Y0 K0',
  },

  // RGB references
  rgb: {
    darkBlue:   'rgb(0, 30, 96)',
    lightGreen: 'rgb(0, 233, 154)',
    lightBlue:  'rgb(65, 182, 230)',
    lilac:      'rgb(210, 141, 211)',
    digitalBlue:'rgb(0, 102, 204)',
  },
};

export const gradients = {
  // Gradient 1 — Digital Blue to Light Green
  greenEnergy: `linear-gradient(135deg, ${colors.digitalBlue} 0%, ${colors.lightGreen} 100%)`,
  // Gradient 2 — Digital Blue to Lilac
  lilacWave:   `linear-gradient(135deg, ${colors.digitalBlue} 0%, ${colors.lilac} 100%)`,
  // Full three-stop gradient
  powerSurge:  `linear-gradient(135deg, ${colors.lightGreen} 0%, ${colors.digitalBlue} 50%, ${colors.darkBlue} 100%)`,
  // Hero background
  hero:        `linear-gradient(135deg, ${colors.darkBlue} 0%, ${colors.digitalBlue} 60%, ${colors.lightGreen} 100%)`,
};

export const typography = {
  // Primary brand font — Bould (web fallback: Poppins, then Verdana)
  fontFamily: {
    brand:    '"Bould", "Poppins", Verdana, sans-serif',
    fallback: 'Verdana, sans-serif',
  },

  fontWeight: {
    light:    300,
    regular:  400,
    medium:   500,
    semiBold: 600,
    bold:     700,
  },

  fontSize: {
    xs:   '11px',
    sm:   '13px',
    base: '16px',
    lg:   '20px',
    xl:   '24px',
    '2xl':'32px',
    '3xl':'40px',
    '4xl':'56px',
  },

  lineHeight: {
    tight:  1.1,
    snug:   1.3,
    normal: 1.5,
    relaxed:1.7,
  },

  letterSpacing: {
    tight:  '-0.02em',
    normal: '0',
    wide:   '0.05em',
    wider:  '0.1em',
    widest: '0.15em',
  },
};

export const spacing = {
  xs:  '4px',
  sm:  '8px',
  md:  '16px',
  lg:  '24px',
  xl:  '32px',
  '2xl':'48px',
  '3xl':'64px',
  '4xl':'96px',
};

export const borderRadius = {
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 3px rgba(0,30,96,0.12)',
  md: '0 4px 12px rgba(0,30,96,0.16)',
  lg: '0 8px 32px rgba(0,30,96,0.20)',
};

// Semantic role mappings
export const semantic = {
  background: {
    primary:   colors.darkBlue,
    secondary: colors.white,
    accent:    colors.lightGreen,
  },
  text: {
    onDark:    colors.white,
    onLight:   colors.darkBlue,
    accent:    colors.lightGreen,
    muted:     'rgba(255,255,255,0.6)',
  },
  border: {
    default: 'rgba(0,30,96,0.15)',
    strong:  colors.darkBlue,
    accent:  colors.lightGreen,
  },
};

export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1536px',
};

const tokens = { colors, gradients, typography, spacing, borderRadius, shadows, semantic, breakpoints };
export default tokens;
