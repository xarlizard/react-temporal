import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns all dates in the week of a given Temporal.PlainDate.
 */
export function useTemporalWeek(date: Temporal.PlainDate) {
    return useMemo(() => {
        const weekDay = date.dayOfWeek;
        const start = date.subtract({ days: weekDay - 1 });
        return Array.from({ length: 7 }, (_, i) => start.add({ days: i }));
    }, [date]);
}
