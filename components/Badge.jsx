import React from 'react';
import { colors, typography, borderRadius, spacing } from '../tokens/index.js';

const presets = {
  green:   { background: colors.lightGreen,  color: colors.darkBlue },
  blue:    { background: colors.digitalBlue, color: colors.white },
  navy:    { background: colors.darkBlue,    color: colors.white },
  lilac:   { background: colors.lilac,       color: colors.darkBlue },
  light:   { background: colors.lightBlue,   color: colors.darkBlue },
  outline: { background: 'transparent', color: colors.darkBlue, border: `1.5px solid ${colors.darkBlue}` },
};

export const Badge = ({ children, variant = 'green', style = {}, ...props }) => {
  const preset = presets[variant] || presets.green;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: `${spacing.xs} ${spacing.sm}`, borderRadius: borderRadius.full, fontFamily: typography.fontFamily.brand, fontWeight: 700, fontSize: typography.fontSize.xs, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1, border: preset.border || 'none', ...preset, ...style }} {...props}>{children}</span>
  );
};
export default Badge;
