import React from 'react';
import { Button } from 'rb-marine-design-system';

export const Primary = () => <Button variant="primary">Get started</Button>;

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const OnDark = () => (
  <div style={{ background: '#001e60', padding: 24, borderRadius: 12, display: 'flex', gap: 12 }}>
    <Button variant="primary">Book now</Button>
    <Button variant="outline-light">Learn more</Button>
  </div>
);

export const Disabled = () => <Button variant="primary" disabled>Unavailable</Button>;
