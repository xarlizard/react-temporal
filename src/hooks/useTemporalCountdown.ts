import { useState, useEffect } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the remaining seconds until a target Temporal.Instant.
 */
export function useTemporalCountdown(target: Temporal.Instant) {
  const [remaining, setRemaining] = useState(() => Math.floor(Number(target.epochNanoseconds - Temporal.Now.instant().epochNanoseconds) / 1_000_000_000));
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.floor(Number(target.epochNanoseconds - Temporal.Now.instant().epochNanoseconds) / 1_000_000_000));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);
  return remaining;
}
