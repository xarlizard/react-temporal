import { useState, useEffect } from 'react';
import { Temporal } from '../temporal';
import type { UseTemporalClockOptions, TemporalZonedDateTime } from '../types';

/**
 * Returns the current Temporal.ZonedDateTime for the given IANA time zone,
 * updating at a configurable interval.
 */
export function useTemporalZonedNow(
    timeZone: string,
    options?: UseTemporalClockOptions,
): TemporalZonedDateTime {
    const { intervalMs = 1000 } = options ?? {};
    const [now, setNow] = useState(() => Temporal.Now.zonedDateTimeISO(timeZone));

    useEffect(() => {
        const interval = setInterval(
            () => setNow(Temporal.Now.zonedDateTimeISO(timeZone)),
            intervalMs,
        );
        return () => clearInterval(interval);
    }, [timeZone, intervalMs]);

    return now;
}
