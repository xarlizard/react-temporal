import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a Temporal.Duration from start and end Temporal.Instant.
 */
export function useTemporalDuration(start: Temporal.Instant, end: Temporal.Instant) {
    return useMemo(() => Temporal.Duration.from({
        seconds: Number(end.epochNanoseconds - start.epochNanoseconds) / 1_000_000_000
    }), [start, end]);
}
