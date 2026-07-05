import { useMemo } from 'react';
import { Temporal } from '../temporal';
import type { TemporalPlainDate } from '../types';

/**
 * Returns an array of Temporal.PlainDate between start and end (inclusive).
 */
export function useTemporalRange(start: TemporalPlainDate, end: TemporalPlainDate) {
    return useMemo(() => {
        const dates: TemporalPlainDate[] = [];
        let current = start;
        while (Temporal.PlainDate.compare(current, end) <= 0) {
            dates.push(current);
            current = current.add({ days: 1 });
        }
        return dates;
    }, [start, end]);
}
