import React from 'react';
import { useTemporalRelative } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function RelativeExample() {
  const from = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const to = Temporal.Instant.from('2025-07-21T00:00:10Z');
  const relative = useTemporalRelative(from, to);
  return <div>Relative: {relative}</div>;
}
