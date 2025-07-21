import { useEffect, useRef } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Runs a callback at a given Temporal.Duration interval.
 */
export function useTemporalInterval(callback: () => void, duration: Temporal.DurationLike) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const ms = Temporal.Duration.from(duration).total({ unit: 'milliseconds' });
    const id = setInterval(() => savedCallback.current(), ms);
    return () => clearInterval(id);
  }, [duration]);
}
