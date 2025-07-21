import { renderHook } from '@testing-library/react-hooks';
import { useTemporalParse } from '../hooks/useTemporalParse';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalParse', () => {
  it('parses an ISO string to Temporal.Instant', () => {
    const { result } = renderHook(() => useTemporalParse('2025-07-21T00:00:00Z'));
    expect(result.current).toBeInstanceOf(Temporal.Instant);
  });
});
