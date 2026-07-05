import { useMemo } from 'react';
import type { TemporalPlainDate } from '../types';

/**
 * Returns all dates in the ISO week (Monday–Sunday) containing the given PlainDate.
 */
export function useTemporalWeek(date: TemporalPlainDate) {
    return useMemo(() => {
        const weekDay = date.dayOfWeek;
        const start = date.subtract({ days: weekDay - 1 });
        return Array.from({ length: 7 }, (_, i) => start.add({ days: i }));
    }, [date]);
}
