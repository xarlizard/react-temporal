import { renderHook } from '@testing-library/react-hooks';
import { useTemporalWeek } from '../hooks/useTemporalWeek';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalWeek', () => {
    it('returns all dates in the week', () => {
        const date = Temporal.PlainDate.from('2025-07-21');
        const { result } = renderHook(() => useTemporalWeek(date));
        expect(result.current.length).toBe(7);
    });
});
