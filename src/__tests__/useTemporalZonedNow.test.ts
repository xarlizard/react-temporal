import { renderHook } from '@testing-library/react';
import { useTemporalZonedNow } from '../hooks/useTemporalZonedNow';
import { Temporal } from '../temporal';

describe('useTemporalZonedNow', () => {
    it('returns a Temporal.ZonedDateTime for the given time zone', () => {
        const { result } = renderHook(() => useTemporalZonedNow('UTC'));
        expect(result.current).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.current.timeZoneId).toBe('UTC');
    });
});
