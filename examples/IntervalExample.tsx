import React, { useState } from 'react';
import { useTemporalInterval } from 'react-temporal';

export function IntervalExample() {
  const [count, setCount] = useState(0);
  useTemporalInterval(() => setCount(c => c + 1), { seconds: 1 });
  return <div>Interval count: {count}</div>;
}
