import { useMemo } from 'react';
import { Temporal } from '../temporal';
import type { TemporalPlainDate } from '../types';

/**
 * Returns the first day of each month in the year of a given Temporal.PlainDate.
 */
export function useTemporalYear(date: TemporalPlainDate) {
    return useMemo(
        () =>
            Array.from({ length: 12 }, (_, i) =>
                Temporal.PlainDate.from({ year: date.year, month: i + 1, day: 1 }),
            ),
        [date],
    );
}
