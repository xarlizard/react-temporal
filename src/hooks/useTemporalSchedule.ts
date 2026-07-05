import { useEffect, useRef } from 'react';
import { Temporal } from '../temporal';
import type { TemporalInstant } from '../types';

/**
 * Schedules a callback to run at a specific Temporal.Instant.
 */
export function useTemporalSchedule(callback: () => void, instant: TemporalInstant) {
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const now = Temporal.Now.instant();
        const ms = instant.epochMilliseconds - now.epochMilliseconds;
        if (ms > 0) {
            const id = setTimeout(() => savedCallback.current(), ms);
            return () => clearTimeout(id);
        }
    }, [instant]);
}
