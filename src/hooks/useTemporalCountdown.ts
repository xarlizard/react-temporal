import { useState, useEffect } from 'react';
import { Temporal } from '../temporal';
import type { TemporalInstant } from '../types';

/**
 * Returns the remaining seconds until a target Temporal.Instant.
 */
export function useTemporalCountdown(target: TemporalInstant) {
    const getRemaining = () =>
        Math.max(0, Math.floor(Temporal.Now.instant().until(target).total('seconds')));

    const [remaining, setRemaining] = useState(getRemaining);

    useEffect(() => {
        const interval = setInterval(() => setRemaining(getRemaining()), 1000);
        return () => clearInterval(interval);
    }, [target]);

    return remaining;
}
