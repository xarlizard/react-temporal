import { useMemo } from 'react';
import { Temporal } from '../temporal';

/**
 * Parses an ISO string to Temporal.Instant.
 */
export function useTemporalParse(isoString: string) {
    return useMemo(() => Temporal.Instant.from(isoString), [isoString]);
}
