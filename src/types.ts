import type { Temporal } from '@js-temporal/polyfill';

/** Temporal namespace types (for annotations). Value access via `import { Temporal } from 'react-temporal'`. */
export type TemporalTypes = typeof Temporal;

export type TemporalInstant = Temporal.Instant;
export type TemporalPlainDate = Temporal.PlainDate;
export type TemporalPlainTime = Temporal.PlainTime;
export type TemporalPlainDateTime = Temporal.PlainDateTime;
export type TemporalZonedDateTime = Temporal.ZonedDateTime;
export type TemporalDuration = Temporal.Duration;
export type TemporalDurationLike = Temporal.DurationLike;

export interface UseTemporalNowOptions {
    /** Tick interval in milliseconds. Defaults to 1000. */
    intervalMs?: number;
    /** IANA time zone for zoned output. When set, returns ZonedDateTime instead of Instant. */
    timeZone?: string;
}

export interface UseTemporalClockOptions {
    /** Tick interval in milliseconds. Defaults to 1000. */
    intervalMs?: number;
}
