import { renderHook } from '@testing-library/react';
import { useTemporalFormat } from '../hooks/useTemporalFormat';
import { Temporal } from '../temporal';

describe('useTemporalFormat', () => {
    it('formats a Temporal.PlainDateTime', () => {
        const date = Temporal.PlainDateTime.from('2025-07-21T12:34:56');
        const { result } = renderHook(() => useTemporalFormat(date));
        expect(typeof result.current).toBe('string');
    });
});
