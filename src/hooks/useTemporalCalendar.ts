import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a Temporal.Calendar instance for a given calendar ID.
 */
export function useTemporalCalendar(id: string) {
  return useMemo(() => Temporal.Calendar.from(id), [id]);
}
