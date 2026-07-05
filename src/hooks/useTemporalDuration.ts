import { useMemo } from 'react';
import type { TemporalInstant } from '../types';

/**
 * Returns a Temporal.Duration between two instants.
 */
export function useTemporalDuration(start: TemporalInstant, end: TemporalInstant) {
    return useMemo(() => start.until(end), [start, end]);
}
