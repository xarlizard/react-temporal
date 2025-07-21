import { useMemo } from 'react';
import { Temporal } from '@js-temporal/polyfill';

/**
 * Formats a Temporal object using Intl.DateTimeFormat.
 */
export function useTemporalFormat(temporalObj: Temporal.PlainDateTime | Temporal.Instant, options?: Intl.DateTimeFormatOptions) {
  return useMemo(() => {
    const date = temporalObj instanceof Temporal.Instant ? temporalObj.toZonedDateTimeISO('UTC') : temporalObj;
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }, [temporalObj, options]);
}
