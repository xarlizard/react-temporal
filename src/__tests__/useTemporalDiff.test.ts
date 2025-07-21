import { renderHook } from '@testing-library/react-hooks';
import { useTemporalDiff } from '../hooks/useTemporalDiff';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalDiff', () => {
  it('returns the difference as Temporal.Duration', () => {
    const a = Temporal.Instant.from('2025-07-21T00:00:00Z');
    const b = Temporal.Instant.from('2025-07-21T01:00:00Z');
    const { result } = renderHook(() => useTemporalDiff(a, b));
    expect(result.current.hours).toBe(1);
  });
});
