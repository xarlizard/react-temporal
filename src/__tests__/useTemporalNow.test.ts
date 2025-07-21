import { renderHook, act } from '@testing-library/react-hooks';
import { useTemporalNow } from '../hooks/useTemporalNow';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalNow', () => {
  it('returns a Temporal.Instant', () => {
    const { result } = renderHook(() => useTemporalNow());
    expect(result.current).toBeInstanceOf(Temporal.Instant);
  });
});
