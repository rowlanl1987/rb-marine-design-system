import React from 'react';
import { GradientBlock, Display, Body } from 'rb-marine-design-system';

export const Hero = () => (
  <GradientBlock gradient="hero" size="md">
    <Display>Always on.</Display>
    <Body color="rgba(255,255,255,0.75)" style={{ marginTop: 8 }}>
      Marine power, engineered to run.
    </Body>
  </GradientBlock>
);

export const GreenEnergy = () => <GradientBlock gradient="greenEnergy" size="sm" />;

export const LilacWave = () => <GradientBlock gradient="lilacWave" size="sm" />;

export const PowerSurge = () => <GradientBlock gradient="powerSurge" size="sm" />;
