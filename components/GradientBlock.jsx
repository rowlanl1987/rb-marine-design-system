import React from 'react';
import { gradients, colors, typography, borderRadius } from '../tokens/index.js';

export const GradientBlock = ({ gradient = 'hero', size = 'md', children, style = {}, ...props }) => {
  const heights = { sm: '120px', md: '200px', lg: '320px', full: '100vh' };
  return (
    <div style={{ background: gradients[gradient] || gradients.hero, borderRadius: size === 'full' ? 0 : borderRadius.lg, padding: '32px 40px', minHeight: heights[size] || heights.md, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', ...style }} {...props}>{children}</div>
  );
};

export const HeroCard = ({ eyebrow, headline, body, style = {}, ...props }) => (
  <div style={{ background: colors.darkBlue, borderRadius: borderRadius.lg, padding: '40px 48px', ...style }} {...props}>
    {eyebrow && <p style={{ fontFamily: typography.fontFamily.brand, fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.lightGreen, margin: '0 0 12px' }}>{eyebrow}</p>}
    {headline && <h2 style={{ fontFamily: typography.fontFamily.brand, fontWeight: 700, fontSize: typography.fontSize['3xl'], lineHeight: 1.1, color: colors.white, margin: '0 0 16px', letterSpacing: '-0.02em' }}>{headline}</h2>}
    {body && <p style={{ fontFamily: typography.fontFamily.brand, fontWeight: 400, fontSize: typography.fontSize.base, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', margin: 0 }}>{body}</p>}
  </div>
);

export default GradientBlock;
