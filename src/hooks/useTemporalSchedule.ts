import { useEffect } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Schedules a callback to run at a specific Temporal.Instant.
 */
export function useTemporalSchedule(callback: () => void, instant: Temporal.Instant) {
    useEffect(() => {
        const now = Temporal.Now.instant();
        const ms = (instant.epochMilliseconds - now.epochMilliseconds);
        if (ms > 0) {
            const id = setTimeout(callback, ms);
            return () => clearTimeout(id);
        }
    }, [callback, instant]);
}
