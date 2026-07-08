import React from 'react';
import { Display } from 'rb-marine-design-system';

export const Default = () => (
  <div style={{ background: '#001e60', padding: 32, borderRadius: 12 }}>
    <Display>Always on.</Display>
  </div>
);

export const Italic = () => (
  <div style={{ background: '#001e60', padding: 32, borderRadius: 12 }}>
    <Display italic color="#d28dd3">always on</Display>
  </div>
);
