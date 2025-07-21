import React from 'react';
import { useTemporalTimeZone } from 'react-temporal';

export function TimeZoneExample() {
  const tz = useTemporalTimeZone('UTC');
  return <div>Time Zone: {tz.id}</div>;
}
