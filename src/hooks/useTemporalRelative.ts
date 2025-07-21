import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a human-readable relative time string between two Temporal.Instant.
 */
export function useTemporalRelative(from: Temporal.Instant, to: Temporal.Instant) {
    return useMemo(() => {
        const diff = Temporal.Duration.from({ seconds: Number(to.epochNanoseconds - from.epochNanoseconds) / 1_000_000_000 });
        if (diff.seconds < 60) return `${diff.seconds} seconds ago`;
        if (diff.minutes < 60) return `${diff.minutes} minutes ago`;
        if (diff.hours < 24) return `${diff.hours} hours ago`;
        return `${diff.days} days ago`;
    }, [from, to]);
}
