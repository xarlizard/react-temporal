import { renderHook } from '@testing-library/react-hooks';
import { useTemporalRelative } from '../hooks/useTemporalRelative';
import { Temporal } from '@js-temporal/polyfill';

describe('useTemporalRelative', () => {
    it('returns a human-readable relative time string', () => {
        const from = Temporal.Instant.from('2025-07-21T00:00:00Z');
        const to = Temporal.Instant.from('2025-07-21T00:00:10Z');
        const { result } = renderHook(() => useTemporalRelative(from, to));
        expect(result.current).toMatch(/seconds ago/);
    });
});
