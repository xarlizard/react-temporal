import { useState, useEffect } from 'react';
import { Temporal } from '../temporal';
import type { UseTemporalClockOptions, TemporalInstant } from '../types';

/**
 * Returns the current Temporal.Instant, updating at a configurable interval.
 * Alias-friendly clock hook for live UIs (timers, dashboards, etc.).
 */
export function useTemporalClock(options?: UseTemporalClockOptions): TemporalInstant {
    const { intervalMs = 1000 } = options ?? {};
    const [now, setNow] = useState(() => Temporal.Now.instant());

    useEffect(() => {
        const interval = setInterval(() => setNow(Temporal.Now.instant()), intervalMs);
        return () => clearInterval(interval);
    }, [intervalMs]);

    return now;
}
