import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the difference between two Temporal.Instant as a Temporal.Duration.
 */
export function useTemporalDiff(a: Temporal.Instant, b: Temporal.Instant) {
  return useMemo(() => Temporal.Duration.from({ seconds: b.epochSeconds - a.epochSeconds }), [a, b]);
}
