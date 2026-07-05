import { renderHook } from '@testing-library/react';
import { useTemporalCountdown } from '../hooks/useTemporalCountdown';
import { Temporal } from '../temporal';

describe('useTemporalCountdown', () => {
    it('returns remaining seconds until target', () => {
        const now = Temporal.Now.instant();
        const target = Temporal.Instant.from(now.add({ seconds: 10 }).toString());
        const { result } = renderHook(() => useTemporalCountdown(target));
        expect(result.current).toBeGreaterThanOrEqual(0);
    });
});
