import React from 'react';
import { useTemporalMonth } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function MonthExample() {
  const dates = useTemporalMonth(Temporal.PlainDate.from('2025-07-01'));
  return (
    <ul>
      {dates.map(date => (
        <li key={date.toString()}>{date.toString()}</li>
      ))}
    </ul>
  );
}
