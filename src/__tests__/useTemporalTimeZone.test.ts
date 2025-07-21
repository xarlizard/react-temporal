import { renderHook } from '@testing-library/react-hooks';
import { useTemporalTimeZone } from '../hooks/useTemporalTimeZone';

describe('useTemporalTimeZone', () => {
  it('returns a Temporal.TimeZone instance', () => {
    const { result } = renderHook(() => useTemporalTimeZone('UTC'));
    expect(result.current.id).toBe('UTC');
  });
});
