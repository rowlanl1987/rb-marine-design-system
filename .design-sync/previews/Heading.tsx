import React from 'react';
import { Heading } from 'rb-marine-design-system';

export const Levels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <Heading level={1}>Our fleet</Heading>
    <Heading level={2}>Propulsion systems</Heading>
    <Heading level={3}>Specifications</Heading>
    <Heading level={4}>Service intervals</Heading>
  </div>
);
