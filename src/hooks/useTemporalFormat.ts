import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Formats a Temporal object using Intl.DateTimeFormat.
 */
export function useTemporalFormat(temporalObj: Temporal.PlainDateTime | Temporal.Instant, options?: Intl.DateTimeFormatOptions) {
    return useMemo(() => {
        const zonedDateTime =
            temporalObj instanceof Temporal.Instant
                ? temporalObj.toZonedDateTimeISO('UTC')
                : temporalObj;
        const jsDate = new Date(zonedDateTime.toString());
        return new Intl.DateTimeFormat(undefined, options).format(jsDate);
    }, [temporalObj, options]);
}
