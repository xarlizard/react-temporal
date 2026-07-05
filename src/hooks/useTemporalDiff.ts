import { useMemo } from 'react';
import type { TemporalInstant } from '../types';

/**
 * Returns the difference between two instants as a Temporal.Duration.
 */
export function useTemporalDiff(a: TemporalInstant, b: TemporalInstant) {
    return useMemo(() => a.until(b), [a, b]);
}
