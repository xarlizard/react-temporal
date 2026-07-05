import { Temporal as PolyfillTemporal } from '@js-temporal/polyfill';

export type TemporalNamespace = typeof PolyfillTemporal;

declare global {
    // eslint-disable-next-line no-var
    var Temporal: TemporalNamespace | undefined;
}

/**
 * Returns the Temporal namespace, preferring native browser/runtime support
 * (Chrome 144+, Firefox 139+, Edge 144+) and falling back to the polyfill.
 */
export function getTemporal(): TemporalNamespace {
    if (typeof globalThis !== 'undefined' && globalThis.Temporal) {
        return globalThis.Temporal;
    }
    return PolyfillTemporal;
}

/** Cached Temporal namespace for hot paths inside hooks. */
export const Temporal: TemporalNamespace = getTemporal();
