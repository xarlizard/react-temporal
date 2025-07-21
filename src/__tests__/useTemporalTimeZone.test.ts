import { renderHook } from '@testing-library/react-hooks';
import { useTemporalTimeZone } from '../hooks/useTemporalTimeZone';

describe('useTemporalTimeZone', () => {
    it('returns the time zone ID for a given time zone name', () => {
        const { result } = renderHook(() => useTemporalTimeZone('UTC'));
        expect(result.current).toBe('UTC');
    });
});
