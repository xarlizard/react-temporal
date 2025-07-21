import React from 'react';
import { useTemporalYear } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function YearExample() {
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
