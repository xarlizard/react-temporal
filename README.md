# react-temporal 

[![npm version](https://badge.fury.io/js/@xarlizard%2Freact-temporal.svg)](https://badge.fury.io/js/@xarlizard%2Freact-temporal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI/CD](https://github.com/xarlizard/react-temporal/actions/workflows/publish.yml/badge.svg)](https://github.com/xarlizard/react-temporal/actions/workflows/publish.yml)
[![Production Deployment](https://github.com/xarlizard/react-temporal/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/xarlizard/react-temporal/actions/workflows/deploy.yml)


**react-temporal** is a comprehensive React hooks library for date and time management, powered by the new JavaScript
[Temporal API](https://tc39.es/proposal-temporal/). It aims to be the only required library for handling dates, times,
durations, calendars, and time zones in React projects.

---

## 🚀 Install

```bash
npm install @xarlizard/react-temporal
```

---

## 📦 Usage

All hooks are named exports:

```tsx
import { useTemporalNow, useTemporalMonth } from 'react-temporal';

function Clock() {
  const now = useTemporalNow();
  return <div>Current time: {now.toString()}</div>;
}
```

---

## 🧩 Hooks Overview

| Hook                   | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| `useTemporalNow`       | Returns the current `Temporal.Instant`, updating every second.        |
| `useTemporalInterval`  | Runs a callback at a given `Temporal.Duration` interval.              |
| `useTemporalDuration`  | Returns a `Temporal.Duration` between two instants.                   |
| `useTemporalCalendar`  | Returns a `Temporal.Calendar` instance for a given calendar ID.       |
| `useTemporalTimeZone`  | Returns a `Temporal.TimeZone` instance for a given time zone ID.      |
| `useTemporalFormat`    | Formats a Temporal object using `Intl.DateTimeFormat`.                |
| `useTemporalRange`     | Returns an array of `Temporal.PlainDate` between start and end.       |
| `useTemporalRelative`  | Returns a human-readable relative time string between two instants.   |
| `useTemporalCountdown` | Returns the remaining seconds until a target instant.                 |
| `useTemporalSchedule`  | Schedules a callback to run at a specific instant.                    |
| `useTemporalParse`     | Parses an ISO string to `Temporal.Instant`.                           |
| `useTemporalDiff`      | Returns the difference between two instants as a `Temporal.Duration`. |
| `useTemporalWeek`      | Returns all dates in the week of a given `Temporal.PlainDate`.        |
| `useTemporalMonth`     | Returns all dates in the month of a given `Temporal.PlainDate`.       |
| `useTemporalYear`      | Returns all months in the year of a given `Temporal.PlainDate`.       |

---

### Example Hooks

#### `useTemporalNow`

Returns the current `Temporal.Instant`, updating every second.

```tsx
const now = useTemporalNow();
```

#### `useTemporalMonth`

Returns all dates in the month of a given `Temporal.PlainDate`.

```tsx
const dates = useTemporalMonth(Temporal.PlainDate.from('2025-07-01'));
```

#### `useTemporalCountdown`

Returns the remaining seconds until a target `Temporal.Instant`.

```tsx
const remaining = useTemporalCountdown(Temporal.Instant.from('2025-08-01T00:00:00Z'));
```

#### ...and many more!

See [`examples/`](examples/README.md) for more usage patterns.

---

## 🧪 Testing

All hooks are covered by unit tests in [`src/__tests__/`](src/__tests__). Run tests with:

```bash
npm test
```

---

## 🛠️ Development

- Clone the repo: `git clone https://github.com/xarlizard/react-temporal.git`
- Install dependencies: `npm install`
- Run tests: `npm test`
- Build: `npm run build`

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

## 📄 License

MIT © [xarlizard](https://github.com/xarlizard)
