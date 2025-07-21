import React from 'react';
import { useTemporalFormat } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function FormatExample() {
  const date = Temporal.PlainDateTime.from('2025-07-21T12:34:56');
  const formatted = useTemporalFormat(date);
  return <div>Formatted: {formatted}</div>;
}
