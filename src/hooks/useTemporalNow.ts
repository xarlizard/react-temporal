import { useState, useEffect } from 'react';
import { Temporal } from '../temporal';
import type { UseTemporalNowOptions, TemporalInstant, TemporalZonedDateTime } from '../types';

/**
 * Returns the current time as a Temporal.Instant (or ZonedDateTime when timeZone is set),
 * updating at the configured interval.
 */
export function useTemporalNow(options?: UseTemporalNowOptions): TemporalInstant | TemporalZonedDateTime {
    const { intervalMs = 1000, timeZone } = options ?? {};

    const getNow = () =>
        timeZone
            ? Temporal.Now.zonedDateTimeISO(timeZone)
            : Temporal.Now.instant();

    const [now, setNow] = useState(getNow);

    useEffect(() => {
        const interval = setInterval(() => setNow(getNow()), intervalMs);
        return () => clearInterval(interval);
    }, [intervalMs, timeZone]);

    return now;
}
