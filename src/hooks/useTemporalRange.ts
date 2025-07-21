import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns an array of Temporal.PlainDate between start and end.
 */
export function useTemporalRange(start: Temporal.PlainDate, end: Temporal.PlainDate) {
  return useMemo(() => {
    const dates = [];
    let current = start;
    while (Temporal.PlainDate.compare(current, end) <= 0) {
      dates.push(current);
      current = current.add({ days: 1 });
    }
    return dates;
  }, [start, end]);
}
