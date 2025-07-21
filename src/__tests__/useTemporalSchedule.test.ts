import { renderHook } from '@testing-library/react-hooks';
import { useTemporalSchedule } from '../hooks/useTemporalSchedule';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalSchedule', () => {
  it('schedules a callback at a specific instant', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const instant = Temporal.Now.instant().add({ seconds: 1 });
    renderHook(() => useTemporalSchedule(callback, instant));
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
