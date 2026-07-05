import { useMemo } from 'react';
import { Temporal } from '../temporal';
import type { TemporalPlainDate } from '../types';

/**
 * Returns all dates in the month of a given Temporal.PlainDate.
 */
export function useTemporalMonth(date: TemporalPlainDate) {
    return useMemo(() => {
        const days = Temporal.PlainDate.from({
            year: date.year,
            month: date.month,
            day: 1,
        }).daysInMonth;
        return Array.from({ length: days }, (_, i) =>
            Temporal.PlainDate.from({ year: date.year, month: date.month, day: i + 1 }),
        );
    }, [date]);
}
