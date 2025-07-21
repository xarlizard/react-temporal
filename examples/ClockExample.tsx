import React from 'react';
import { useTemporalNow } from 'react-temporal';

export function ClockExample() {
  const now = useTemporalNow();
  return <div>Current time: {now.toString()}</div>;
}
