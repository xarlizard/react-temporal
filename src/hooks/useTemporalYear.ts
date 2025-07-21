import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns all months in the year of a given Temporal.PlainDate.
 */
export function useTemporalYear(date: Temporal.PlainDate) {
    return useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => Temporal.PlainDate.from({ year: date.year, month: i + 1, day: 1 }));
    }, [date]);
}
