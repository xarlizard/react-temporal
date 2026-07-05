import { renderHook } from '@testing-library/react';
import { useTemporalClock } from '../hooks/useTemporalClock';
import { Temporal } from '../temporal';

describe('useTemporalClock', () => {
    it('returns a Temporal.Instant', () => {
        const { result } = renderHook(() => useTemporalClock());
        expect(result.current).toBeInstanceOf(Temporal.Instant);
    });
});
