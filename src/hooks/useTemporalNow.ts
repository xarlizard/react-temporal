import { useState, useEffect } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the current Temporal.Instant, updating every second.
 */
export function useTemporalNow() {
  const [now, setNow] = useState(() => Temporal.Now.instant());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Temporal.Now.instant());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return now;
}
