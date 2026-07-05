# Migration guide

## Upgrading to 0.0.3 from 0.0.1 / 0.0.2

Version **0.0.3** modernizes the library for 2026 Temporal adoption. Most changes are additive; a few APIs changed behavior.

### Install / dependency changes

**Before (0.0.2):**

```bash
npm install react-temporal
# react and react-dom were bundled as direct dependencies
# polyfill was bundled inside the package
```

**After (0.0.3):**

```bash
npm install react-temporal
npm install temporal-polyfill   # recommended for SSR / Safari / Node
```

Ensure `react` and `react-dom` are in your app's `package.json` (peer dependencies).

### Import changes

You can now import `Temporal` from the package instead of `@js-temporal/polyfill`:

```diff
- import { useTemporalMonth } from 'react-temporal';
- import { Temporal } from '@js-temporal/polyfill';
+ import { useTemporalMonth, Temporal } from 'react-temporal';
```

### `useTemporalFormat`

Signature changed to match `toLocaleString`:

```diff
- useTemporalFormat(date, { dateStyle: 'full' })
+ useTemporalFormat(date, undefined, { dateStyle: 'full' })
+ useTemporalFormat(date, 'en-US', { dateStyle: 'full' })
```

### `useTemporalRelative`

Output format changed from manual strings (`"10 seconds ago"`) to `Intl.RelativeTimeFormat` (`"in 10 seconds"`). Pass a locale as the third argument:

```diff
- useTemporalRelative(from, to)
+ useTemporalRelative(from, to, 'en')
```

### `useTemporalDuration` / `useTemporalDiff`

These now use `until()` internally. Access total units with `.total()`:

```diff
- diff.hours
+ diff.total('hours')
```

### New hooks (optional adoption)

- `useTemporalClock({ intervalMs })` — configurable live clock
- `useTemporalZonedNow(timeZone, { intervalMs })` — zoned live clock
- `useTemporalNow({ intervalMs, timeZone })` — extended options

### Node.js version

Development requires **Node.js 22+**. Update your local environment and CI:

```bash
nvm install 22
nvm use 22
```

### No action needed

These hooks work the same way, with improved internals:

- `useTemporalParse`
- `useTemporalRange`
- `useTemporalWeek` / `useTemporalMonth` / `useTemporalYear`
- `useTemporalCalendar` / `useTemporalTimeZone`
- `useTemporalInterval`
- `useTemporalSchedule`
