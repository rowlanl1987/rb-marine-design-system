import React from 'react';
import { Badge } from 'rb-marine-design-system';

export const InService = () => <Badge variant="green">In service</Badge>;

export const AllTones = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Badge variant="green">In service</Badge>
    <Badge variant="blue">Scheduled</Badge>
    <Badge variant="navy">Fleet</Badge>
    <Badge variant="lilac">New</Badge>
    <Badge variant="light">Docked</Badge>
    <Badge variant="outline">Draft</Badge>
  </div>
);
