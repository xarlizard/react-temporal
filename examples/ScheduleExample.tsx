import React, { useState } from 'react';
import { useTemporalSchedule } from 'react-temporal';
import { Temporal } from '@js-temporal/polyfill';

export function ScheduleExample() {
  const [triggered, setTriggered] = useState(false);
  const instant = Temporal.Now.instant().add({ seconds: 2 });
  useTemporalSchedule(() => setTriggered(true), instant);
  return <div>Scheduled: {triggered ? 'Triggered!' : 'Waiting...'}</div>;
}
