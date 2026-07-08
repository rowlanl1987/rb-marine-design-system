import React from 'react';
import { colors, typography } from '../tokens/index.js';
const ff = typography.fontFamily.brand;

export const Display = ({ children, color = colors.white, italic = false, style = {}, ...props }) => (
  <h1 style={{ fontFamily: ff, fontWeight: 700, fontSize: typography.fontSize['4xl'], lineHeight: 1.1, color, margin: 0, letterSpacing: '-0.02em', fontStyle: italic ? 'italic' : 'normal', ...style }} {...props}>{children}</h1>
);

export const Heading = ({ children, level = 2, color = colors.darkBlue, style = {}, ...props }) => {
  const Tag = `h${level}`;
  const sizes = { 1: typography.fontSize['3xl'], 2: typography.fontSize['2xl'], 3: typography.fontSize.xl, 4: typography.fontSize.lg };
  return <Tag style={{ fontFamily: ff, fontWeight: 700, fontSize: sizes[level] || sizes[2], lineHeight: 1.3, color, margin: 0, letterSpacing: '-0.02em', ...style }} {...props}>{children}</Tag>;
};

export const Body = ({ children, size = 'base', color = colors.darkBlue, style = {}, ...props }) => {
  const sizes = { sm: typography.fontSize.sm, base: typography.fontSize.base, lg: typography.fontSize.lg };
  return <p style={{ fontFamily: ff, fontWeight: 400, fontSize: sizes[size] || sizes.base, lineHeight: 1.7, color, margin: 0, ...style }} {...props}>{children}</p>;
};

export const Label = ({ children, color = colors.darkBlue, style = {}, ...props }) => (
  <span style={{ fontFamily: ff, fontWeight: 700, fontSize: typography.fontSize.xs, letterSpacing: '0.15em', textTransform: 'uppercase', color, ...style }} {...props}>{children}</span>
);

export const Tagline = ({ children = 'always on', color = colors.lilac, style = {}, ...props }) => (
  <span style={{ fontFamily: ff, fontWeight: 300, fontStyle: 'italic', fontSize: typography.fontSize.xl, color, ...style }} {...props}>{children}</span>
);

export default { Display, Heading, Body, Label, Tagline };
