import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the difference between two Temporal.Instant as a Temporal.Duration.
 */
export function useTemporalDiff(a: Temporal.Instant, b: Temporal.Instant) {
    return useMemo(() => Temporal.Duration.from({ seconds: Number((b.epochNanoseconds - a.epochNanoseconds) / BigInt(1_000_000_000)) }), [a, b]);
}
