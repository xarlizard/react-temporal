import { renderHook } from '@testing-library/react-hooks';
import { useTemporalYear } from '../hooks/useTemporalYear';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalYear', () => {
    it('returns all months in the year', () => {
        const date = Temporal.PlainDate.from('2025-07-21');
        const { result } = renderHook(() => useTemporalYear(date));
        expect(result.current.length).toBe(12);
    });
});
