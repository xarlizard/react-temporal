import React from 'react';
import { useTemporalRange } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function RangeExample() {
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
