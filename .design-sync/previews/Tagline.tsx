import React from 'react';
import { Tagline } from 'rb-marine-design-system';

export const Default = () => (
  <div style={{ background: '#001e60', padding: 28, borderRadius: 12, display: 'inline-block' }}>
    <Tagline />
  </div>
);

export const CustomColor = () => (
  <div style={{ background: '#001e60', padding: 28, borderRadius: 12, display: 'inline-block' }}>
    <Tagline color="#00e99a">ready when you are</Tagline>
  </div>
);
