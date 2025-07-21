import { useState, useEffect } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the remaining seconds until a target Temporal.Instant.
 */
export function useTemporalCountdown(target: Temporal.Instant) {
  const [remaining, setRemaining] = useState(() => target.epochSeconds - Temporal.Now.instant().epochSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(target.epochSeconds - Temporal.Now.instant().epochSeconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);
  return remaining;
}
