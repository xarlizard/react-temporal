import { renderHook } from '@testing-library/react-hooks';
import { useTemporalCalendar } from '../hooks/useTemporalCalendar';

describe('useTemporalCalendar', () => {
  it('returns a Temporal.Calendar instance', () => {
    const { result } = renderHook(() => useTemporalCalendar('iso8601'));
    expect(result.current.id).toBe('iso8601');
  });
});
