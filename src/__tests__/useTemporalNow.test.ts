import { renderHook } from '@testing-library/react';
import { useTemporalNow } from '../hooks/useTemporalNow';
import { Temporal } from '../temporal';

describe('useTemporalNow', () => {
  it('returns a Temporal.Instant', () => {
    const { result } = renderHook(() => useTemporalNow());
    expect(result.current).toBeInstanceOf(Temporal.Instant);
  });
});
