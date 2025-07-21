import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the calendar ID for a given calendar name.
 */
export function useTemporalCalendar(id: string) {
    return useMemo(() => Temporal.PlainDate.from({ year: 2000, month: 1, day: 1, calendar: id }).calendarId, [id]);
}
