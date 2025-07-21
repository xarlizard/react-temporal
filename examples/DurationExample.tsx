import React from 'react';
import { useTemporalDuration } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function DurationExample() {
  const start = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const end = Temporal.Instant.from('2025-07-21T00:01:00Z');
  const duration = useTemporalDuration(start, end);
  return <div>Duration: {duration.seconds} seconds</div>;
}
