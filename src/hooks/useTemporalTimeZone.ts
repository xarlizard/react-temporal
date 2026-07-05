import { useMemo } from 'react';
import { Temporal } from '../temporal';

/**
 * Validates and returns the time zone ID for a given IANA time zone name.
 */
export function useTemporalTimeZone(id: string) {
    return useMemo(
        () =>
            Temporal.ZonedDateTime.from({
                year: 2000,
                month: 1,
                day: 1,
                timeZone: id,
            }).timeZoneId,
        [id],
    );
}
