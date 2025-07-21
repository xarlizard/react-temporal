import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Parses an ISO string to Temporal.Instant.
 */
export function useTemporalParse(isoString: string) {
    return useMemo(() => Temporal.Instant.from(isoString), [isoString]);
}
