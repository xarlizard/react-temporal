import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns all dates in the month of a given Temporal.PlainDate.
 */
export function useTemporalMonth(date: Temporal.PlainDate) {
    return useMemo(() => {
        const days = Temporal.PlainDate.from({ year: date.year, month: date.month, day: 1 }).daysInMonth;
        return Array.from({ length: days }, (_, i) => Temporal.PlainDate.from({ year: date.year, month: date.month, day: i + 1 }));
    }, [date]);
}
