import { renderHook } from '@testing-library/react-hooks';
import { useTemporalMonth } from '../hooks/useTemporalMonth';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalMonth', () => {
  it('returns all dates in the month', () => {
    const date = Temporal.PlainDate.from('2025-07-01');
    const { result } = renderHook(() => useTemporalMonth(date));
    expect(result.current.length).toBe(date.daysInMonth);
    expect(result.current[0]).toBeInstanceOf(Temporal.PlainDate);
  });
});