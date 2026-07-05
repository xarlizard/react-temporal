import { useMemo } from 'react';
import type { TemporalInstant } from '../types';

const RELATIVE_UNITS: Array<{ unit: Intl.RelativeTimeFormatUnit; seconds: number }> = [
    { unit: 'year', seconds: 31_536_000 },
    { unit: 'month', seconds: 2_592_000 },
    { unit: 'week', seconds: 604_800 },
    { unit: 'day', seconds: 86_400 },
    { unit: 'hour', seconds: 3_600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
];

/**
 * Returns a locale-aware relative time string between two instants
 * (e.g. "in 3 hours", "2 days ago") using Intl.RelativeTimeFormat.
 */
export function useTemporalRelative(
    from: TemporalInstant,
    to: TemporalInstant,
    locales?: string | string[],
    options?: Intl.RelativeTimeFormatOptions,
) {
    return useMemo(() => {
        const totalSeconds = from.until(to).total('seconds');
        const rtf = new Intl.RelativeTimeFormat(locales, { numeric: 'auto', ...options });

        for (const { unit, seconds } of RELATIVE_UNITS) {
            if (Math.abs(totalSeconds) >= seconds || unit === 'second') {
                return rtf.format(Math.round(totalSeconds / seconds), unit);
            }
        }

        return rtf.format(0, 'second');
    }, [from, to, locales, options]);
}
