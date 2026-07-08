import React from 'react';
import { Logo } from 'rb-marine-design-system';

export const Primary = () => <Logo variant="primary" height={72} />;

export const Reversed = () => (
  <div style={{ background: '#001e60', padding: 32, borderRadius: 12, display: 'inline-block' }}>
    <Logo variant="reversed" height={72} />
  </div>
);

export const Stacked = () => <Logo variant="primary" layout="stacked" height={84} />;

export const IconOnly = () => <Logo variant="icon-only" height={56} />;
