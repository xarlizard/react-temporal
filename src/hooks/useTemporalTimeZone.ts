import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a Temporal.TimeZone instance for a given time zone ID.
 */
export function useTemporalTimeZone(id: string) {
  return useMemo(() => Temporal.TimeZone.from(id), [id]);
}
