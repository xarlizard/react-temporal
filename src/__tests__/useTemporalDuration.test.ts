import { renderHook } from '@testing-library/react-hooks';
import { useTemporalDuration } from '../hooks/useTemporalDuration';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalDuration', () => {
  it('returns a Temporal.Duration between two instants', () => {
    const start = Temporal.Instant.from('2025-07-21T00:00:00Z');
    const end = Temporal.Instant.from('2025-07-21T00:01:00Z');
    const { result } = renderHook(() => useTemporalDuration(start, end));
    expect(result.current.seconds).toBe(60);
  });
});
