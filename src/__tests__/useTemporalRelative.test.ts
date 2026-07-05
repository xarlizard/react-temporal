import { renderHook } from '@testing-library/react';
import { useTemporalRelative } from '../hooks/useTemporalRelative';
import { Temporal } from '../temporal';

describe('useTemporalRelative', () => {
    it('returns a locale-aware relative time string', () => {
        const from = Temporal.Instant.from('2025-07-21T00:00:00Z');
        const to = Temporal.Instant.from('2025-07-21T00:00:10Z');
        const { result } = renderHook(() => useTemporalRelative(from, to, 'en'));
        expect(result.current).toMatch(/in 10 seconds/);
    });
});
