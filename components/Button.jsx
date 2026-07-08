import React, { useState } from 'react';
import { colors, borderRadius, typography, spacing } from '../tokens/index.js';

const base = {
  fontFamily: typography.fontFamily.brand,
  fontWeight: typography.fontWeight.bold,
  fontSize:   typography.fontSize.base,
  border:     'none',
  cursor:     'pointer',
  display:    'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap:        spacing.sm,
  transition: 'opacity 0.15s, transform 0.1s',
  letterSpacing: typography.letterSpacing.wide,
  lineHeight: 1,
};

const sizes = {
  sm: { padding: `${spacing.sm} ${spacing.md}`, fontSize: typography.fontSize.sm, borderRadius: borderRadius.md },
  md: { padding: `${spacing.md} ${spacing.lg}`, fontSize: typography.fontSize.base, borderRadius: borderRadius.md },
  lg: { padding: `${spacing.lg} ${spacing.xl}`, fontSize: typography.fontSize.lg, borderRadius: borderRadius.lg },
};

const variants = {
  primary:       { background: colors.lightGreen, color: colors.darkBlue },
  secondary:     { background: colors.darkBlue,   color: colors.white },
  outline:       { background: 'transparent', color: colors.darkBlue, border: `2px solid ${colors.darkBlue}` },
  'outline-light': { background: 'transparent', color: colors.white, border: `2px solid ${colors.white}` },
  ghost:         { background: 'transparent', color: colors.darkBlue },
};

export const Button = ({ variant = 'primary', size = 'md', fullWidth = false, disabled = false, children, onClick, as: Tag = 'button', href, className = '', style = {}, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle    = sizes[size] || sizes.md;
  return (
    <Tag href={href} onClick={onClick} disabled={disabled} className={className}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      style={{ ...base, ...variantStyle, ...sizeStyle, width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.4 : hovered ? 0.88 : 1, transform: pressed ? 'scale(0.97)' : 'scale(1)', pointerEvents: disabled ? 'none' : undefined, ...style }}
      {...props}>{children}</Tag>
  );
};
export default Button;
