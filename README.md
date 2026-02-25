# kr-corekit

Language: [English](./README.md) | [한국어](./README.ko.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

A utility toolkit for JavaScript and TypeScript inspired by lodash/es-toolkit style APIs.

## Highlights

- 130+ utility functions across string, array, object, async, promise, date, math, lang and more
- Tree-shake friendly module exports
- TypeScript-first with generated `.d.ts` files
- ESM/CJS bundle output

## Installation

```bash
npm install kr-corekit
# or
pnpm add kr-corekit
# or
yarn add kr-corekit
```

## Quick Start

```ts
import {
  stringUtil,
  arrayUtil,
  objectUtil,
  asyncUtil,
  promiseUtil,
  dateUtil,
  mathUtil,
  langUtil,
} from "kr-corekit";

const id = stringUtil.camelCase("user profile id"); // userProfileId
const rows = arrayUtil.chunk([1, 2, 3, 4, 5], 2); // [[1,2], [3,4], [5]]
const city = objectUtil.get({ user: { profile: { city: "Seoul" } } }, "user.profile.city");

const mapped = await asyncUtil.mapAsync([1, 2, 3], async (v) => v * 2);
const safe = await promiseUtil.withTimeout(fetch("/api/health"), 1000);

const tomorrow = dateUtil.addDays(new Date(), 1);
const average = mathUtil.mean([10, 20, 30]);
const enabled = langUtil.toBoolean("yes");
```

## Modules

- `stringUtil`: case conversion, HTML escape/unescape, truncate, slugify
- `arrayUtil`: chunk, flatten, uniq/uniqBy, groupBy, sortBy, set ops, sampling
- `collectionUtil`: map/filter/reduce/find/every/some/includes over arrays/objects
- `objectUtil`: get/set/has/merge/defaults/pick/omit/deepClone/deepFreeze
- `numberUtil`: clamp, inRange, random, ceil/floor/round, sum/subtract/multiply
- `mathUtil`: mean/median/min/max/sumBy/minBy/maxBy
- `dateUtil`: add/sub days/hours, start/end of day, formatDate, date comparisons
- `langUtil`: toBoolean/toNumber/toString/defaultTo/castArray/isEqual
- `asyncUtil`: pLimit, mapAsync, filterAsync, eachAsync, series, parallel
- `promiseUtil`: defer, withTimeout, retryWithDelay, settle, toResult
- plus existing: `commonUtil`, `functionUtil`, `validationUtil`, `formatUtil`, `typeUtil`, `cookieUtil`, `deviceUtil`, `searchQueryUtil`

## Tree-Shaking Import

```ts
import { camelCase } from "kr-corekit/stringUtil";
import { chunk } from "kr-corekit/arrayUtil";
import { get } from "kr-corekit/objectUtil";
import { mapAsync } from "kr-corekit/asyncUtil";
import { withTimeout } from "kr-corekit/promiseUtil";
```

## Benchmark

```bash
npm run benchmark
```

This runs a local micro-benchmark script at [`benchmark/index.mjs`](./benchmark/index.mjs) after build.

Latest local sample (2026-02-25):

```text
array.chunk       ~1,065,050 ops/s
object.get        ~2,681,055 ops/s
string.camelCase  ~1,902,407 ops/s
async.mapAsync    ~1,514,005 ops/s
```

## Notes

- Full API list is available via module entry files under `package/*/index.ts` and generated types under `dist/types/*/index.d.ts`.
- If you want function-level docs/examples expanded further, keep language files in sync when updating.

## License

MIT
