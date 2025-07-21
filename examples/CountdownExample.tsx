import React from 'react';
import { useTemporalCountdown } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function CountdownExample() {
  const target = Temporal.Instant.from('2025-08-01T00:00:00Z');
  const remaining = useTemporalCountdown(target);
  return <div>Seconds remaining: {remaining}</div>;
}
