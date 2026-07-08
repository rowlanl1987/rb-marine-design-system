import React from 'react';
import { colors, typography } from '../tokens/index.js';

const ShipIcon = ({ iconColor = colors.lightGreen, size = 56 }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="22" r="16" stroke={iconColor} strokeWidth="2.5" fill="none" />
    <polygon points="24,11 32,22 24,30 16,22" fill="none" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
    <rect x="21" y="6" width="6" height="6" rx="1" fill={iconColor} />
    <line x1="24" y1="3" x2="24" y2="6" stroke={iconColor} strokeWidth="2" />
    <circle cx="24" cy="2" r="2" fill={iconColor} />
    <line x1="24" y1="38" x2="24" y2="47" stroke={iconColor} strokeWidth="2" />
    <circle cx="24" cy="49.5" r="2.5" fill={iconColor} />
  </svg>
);

export const Logo = ({ variant = 'primary', layout = 'horizontal', height = 64, className = '', style = {} }) => {
  const configs = {
    primary:      { iconColor: colors.lightGreen, rbColor: colors.darkBlue,  marineColor: colors.darkBlue },
    reversed:     { iconColor: colors.lightGreen, rbColor: colors.white,     marineColor: colors.lightGreen },
    'mono-dark':  { iconColor: colors.darkBlue,   rbColor: colors.darkBlue,  marineColor: colors.darkBlue },
    'mono-light': { iconColor: colors.white,      rbColor: colors.white,     marineColor: colors.white },
  };
  if (variant === 'icon-only') return <div className={className} style={{ display: 'inline-flex', ...style }}><ShipIcon iconColor={colors.lightGreen} size={height * 0.85} /></div>;
  const cfg = configs[variant] || configs.primary;
  const iconSize = height * 0.85;
  const isStacked = layout === 'stacked';
  return (
    <div className={className} style={{ display: 'inline-flex', flexDirection: isStacked ? 'column' : 'row', alignItems: 'center', gap: isStacked ? '4px' : `${height * 0.2}px`, ...style }} role="img" aria-label="RB Marine">
      <ShipIcon iconColor={cfg.iconColor} size={iconSize} />
      <div style={{ textAlign: isStacked ? 'center' : 'left' }}>
        <div style={{ fontFamily: typography.fontFamily.brand, fontWeight: 700, fontSize: `${height * 0.55}px`, color: cfg.rbColor, lineHeight: 1, letterSpacing: '-0.02em' }}>RB</div>
        <div style={{ fontFamily: typography.fontFamily.brand, fontWeight: 700, fontSize: `${height * 0.2}px`, color: cfg.marineColor, letterSpacing: '0.25em', lineHeight: 1, marginTop: '2px' }}>MARINE</div>
      </div>
    </div>
  );
};

export default Logo;
