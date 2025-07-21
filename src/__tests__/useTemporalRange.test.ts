import { renderHook } from '@testing-library/react-hooks';
import { useTemporalRange } from '../hooks/useTemporalRange';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalRange', () => {
    it('returns an array of dates between start and end', () => {
        const start = Temporal.PlainDate.from('2025-07-01');
        const end = Temporal.PlainDate.from('2025-07-03');
        const { result } = renderHook(() => useTemporalRange(start, end));
        expect(result.current.length).toBe(3);
    });
});
