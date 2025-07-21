import { renderHook } from '@testing-library/react-hooks';
import { useTemporalInterval } from '../hooks/useTemporalInterval';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalInterval', () => {
  it('runs callback at interval', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    renderHook(() => useTemporalInterval(callback, { seconds: 1 }));
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });
});
