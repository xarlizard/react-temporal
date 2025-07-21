import React from 'react';
import { useTemporalDiff } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function DiffExample() {
  const a = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const b = Temporal.Instant.from('2025-07-21T01:00:00Z');
  const diff = useTemporalDiff(a, b);
  return <div>Difference: {diff.hours} hours</div>;
}
