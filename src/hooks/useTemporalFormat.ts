import { useMemo } from 'react';
import type {
    TemporalInstant,
    TemporalPlainDate,
    TemporalPlainTime,
    TemporalPlainDateTime,
    TemporalZonedDateTime,
} from '../types';

type FormattableTemporal =
    | TemporalInstant
    | TemporalPlainDate
    | TemporalPlainTime
    | TemporalPlainDateTime
    | TemporalZonedDateTime;

/**
 * Formats a Temporal object using Intl via Temporal's toLocaleString.
 */
export function useTemporalFormat(
    temporalObj: FormattableTemporal,
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions,
) {
    return useMemo(
        () => temporalObj.toLocaleString(locales, options),
        [temporalObj, locales, options],
    );
}
