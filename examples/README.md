# Usage Examples

This directory contains examples of how to use react-temporal package.

## Clock Example
```tsx
import { useTemporalNow } from 'react-temporal';

function ClockExample() {
  const now = useTemporalNow();
  return <div>Current time: {now.toString()}</div>;
}
```

## Month Example
```tsx
import { useTemporalMonth } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function MonthExample() {
  const dates = useTemporalMonth(Temporal.PlainDate.from('2025-07-01'));
  return (
    <ul>
      {dates.map(date => (
        <li key={date.toString()}>{date.toString()}</li>
      ))}
    </ul>
  );
}
```

## Countdown Example
```tsx
import { useTemporalCountdown } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function CountdownExample() {
  const target = Temporal.Instant.from('2025-08-01T00:00:00Z');
  const remaining = useTemporalCountdown(target);
  return <div>Seconds remaining: {remaining}</div>;
}
```

## Calendar Example
```tsx
import { useTemporalCalendar } from 'react-temporal';

function CalendarExample() {
  const calendar = useTemporalCalendar('iso8601');
  return <div>Calendar ID: {calendar.id}</div>;
}
```

## Diff Example
```tsx
import { useTemporalDiff } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function DiffExample() {
  const a = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const b = Temporal.Instant.from('2025-07-21T01:00:00Z');
  const diff = useTemporalDiff(a, b);
  return <div>Difference: {diff.hours} hours</div>;
}
```

## Duration Example
```tsx
import { useTemporalDuration } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function DurationExample() {
  const start = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const end = Temporal.Instant.from('2025-07-21T00:01:00Z');
  const duration = useTemporalDuration(start, end);
  return <div>Duration: {duration.seconds} seconds</div>;
}
```

## Format Example
```tsx
import { useTemporalFormat } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function FormatExample() {
  const date = Temporal.PlainDateTime.from('2025-07-21T12:34:56');
  const formatted = useTemporalFormat(date);
  return <div>Formatted: {formatted}</div>;
}
```

## Interval Example
```tsx
import { useTemporalInterval } from 'react-temporal';
import React, { useState } from 'react';

function IntervalExample() {
  const [count, setCount] = useState(0);
  useTemporalInterval(() => setCount(c => c + 1), { seconds: 1 });
  return <div>Interval count: {count}</div>;
}
```

## Parse Example
```tsx
import { useTemporalParse } from 'react-temporal';

function ParseExample() {
  const instant = useTemporalParse('2025-07-21T00:00:00Z');
  return <div>Parsed Instant: {instant.toString()}</div>;
}
```

## Range Example
```tsx
import { useTemporalRange } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function RangeExample() {
  const start = Temporal.PlainDate.from('2025-07-01');
  const end = Temporal.PlainDate.from('2025-07-03');
  const dates = useTemporalRange(start, end);
  return (
    <ul>
      {dates.map(date => (
        <li key={date.toString()}>{date.toString()}</li>
      ))}
    </ul>
  );
}
```

## Relative Example
```tsx
import { useTemporalRelative } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function RelativeExample() {
  const from = Temporal.Instant.from('2025-07-21T00:00:00Z');
  const to = Temporal.Instant.from('2025-07-21T00:00:10Z');
  const relative = useTemporalRelative(from, to);
  return <div>Relative: {relative}</div>;
}
```

## Schedule Example
```tsx
import { useTemporalSchedule } from 'react-temporal';
import React, { useState } from 'react';
import { Temporal } from '@js-temporal/polyfill';

function ScheduleExample() {
  const [triggered, setTriggered] = useState(false);
  const instant = Temporal.Now.instant().add({ seconds: 2 });
  useTemporalSchedule(() => setTriggered(true), instant);
  return <div>Scheduled: {triggered ? 'Triggered!' : 'Waiting...'}</div>;
}
```

## TimeZone Example
```tsx
import { useTemporalTimeZone } from 'react-temporal';

function TimeZoneExample() {
  const tz = useTemporalTimeZone('UTC');
  return <div>Time Zone: {tz.id}</div>;
}
```

## Week Example
```tsx
import { useTemporalWeek } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function WeekExample() {
  const date = Temporal.PlainDate.from('2025-07-21');
  const week = useTemporalWeek(date);
  return (
    <ul>
      {week.map(day => (
        <li key={day.toString()}>{day.toString()}</li>
      ))}
    </ul>
  );
}
```

## Year Example
```tsx
import { useTemporalYear } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

function YearExample() {
  const date = Temporal.PlainDate.from('2025-07-21');
  const months = useTemporalYear(date);
  return (
    <ul>
      {months.map(month => (
        <li key={month.toString()}>{month.toString()}</li>
      ))}
    </ul>
  );
}
```

---

All hooks are named exports from `react-temporal`. See the source for more advanced usage and patterns.
