# react-temporal Documentation

React hooks for date and time built on the JavaScript [Temporal API](https://tc39.es/proposal-temporal/).

## Table of contents

| Document | Description |
| --- | --- |
| [Getting started](./getting-started.md) | Install, configure, and write your first component |
| [Installation](./installation.md) | Package managers, peer dependencies, and polyfill options |
| [Polyfill guide](./polyfill.md) | Native vs polyfill runtime, SSR, and browser support |
| [API reference](./api-reference.md) | Every hook, utility, and type export |
| [TypeScript](./typescript.md) | Type imports, generics, and IDE support |
| [Migration guide](./migration.md) | Upgrading from 0.0.1 / 0.0.2 to 0.0.3 |
| [Examples](../examples/README.md) | Copy-paste React components for each hook |

## Quick reference

```tsx
import {
  useTemporalNow,
  useTemporalZonedNow,
  useTemporalRelative,
  Temporal,
} from 'react-temporal';

function Dashboard() {
  const now = useTemporalNow();
  const tokyo = useTemporalZonedNow('Asia/Tokyo');
  const deadline = Temporal.Instant.from('2026-12-31T23:59:59Z');
  const relative = useTemporalRelative(Temporal.Now.instant(), deadline, 'en');

  return (
    <div>
      <p>UTC: {now.toString()}</p>
      <p>Tokyo: {tokyo.toLocaleString()}</p>
      <p>Deadline: {relative}</p>
    </div>
  );
}
```

## Requirements

- **Node.js** 22+ (development and CI)
- **React** 17, 18, or 19
- **Temporal** — native in modern browsers, or a polyfill for Node.js / Safari (see [Polyfill guide](./polyfill.md))

## Support

- [GitHub Issues](https://github.com/xarlizard/react-temporal/issues)
- [Changelog](../CHANGELOG.md)
