import React from 'react';
import { Body } from 'rb-marine-design-system';

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 440 }}>
    <Body size="lg">Trusted propulsion for commercial and leisure marine.</Body>
    <Body size="base">Built to run, always — in every sea state and condition.</Body>
    <Body size="sm">Technical specifications, service intervals, and fine print.</Body>
  </div>
);
