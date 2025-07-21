import { renderHook } from '@testing-library/react-hooks';
import { useTemporalCalendar } from '../hooks/useTemporalCalendar';

describe('useTemporalCalendar', () => {
    it('returns the calendar ID for a given calendar name', () => {
        const { result } = renderHook(() => useTemporalCalendar('iso8601'));
        expect(result.current).toBe('iso8601');
    });
});
