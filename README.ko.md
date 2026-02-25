# kr-corekit

언어: [English](./README.md) | [한국어](./README.ko.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

lodash/es-toolkit 스타일 API를 지향하는 JavaScript/TypeScript 유틸리티 모음입니다.

## 핵심 특징

- 문자열/배열/객체/비동기/Promise/날짜/수학/언어 유틸 포함 130개+ 함수
- 트리 셰이킹에 유리한 모듈 export 구조
- TypeScript `.d.ts` 타입 제공
- ESM/CJS 번들 제공

## 설치

```bash
npm install kr-corekit
# or
pnpm add kr-corekit
# or
yarn add kr-corekit
```

## 빠른 사용 예시

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

const id = stringUtil.camelCase("user profile id");
const rows = arrayUtil.chunk([1, 2, 3, 4, 5], 2);
const city = objectUtil.get({ user: { profile: { city: "Seoul" } } }, "user.profile.city");

const mapped = await asyncUtil.mapAsync([1, 2, 3], async (v) => v * 2);
const safe = await promiseUtil.withTimeout(fetch("/api/health"), 1000);

const tomorrow = dateUtil.addDays(new Date(), 1);
const average = mathUtil.mean([10, 20, 30]);
const enabled = langUtil.toBoolean("yes");
```

## 모듈 구성

- `stringUtil`: 케이스 변환, HTML escape/unescape, truncate, slugify
- `arrayUtil`: chunk, flatten, uniq/uniqBy, groupBy, sortBy, 집합 연산, 샘플링
- `collectionUtil`: 배열/객체 대상 map/filter/reduce/find/every/some/includes
- `objectUtil`: get/set/has/merge/defaults/pick/omit/deepClone/deepFreeze
- `numberUtil`: clamp, inRange, random, ceil/floor/round, sum/subtract/multiply
- `mathUtil`: mean/median/min/max/sumBy/minBy/maxBy
- `dateUtil`: 일/시간 가감, 하루 시작/끝, formatDate, 날짜 비교
- `langUtil`: toBoolean/toNumber/toString/defaultTo/castArray/isEqual
- `asyncUtil`: pLimit, mapAsync, filterAsync, eachAsync, series, parallel
- `promiseUtil`: defer, withTimeout, retryWithDelay, settle, toResult
- 기존 모듈: `commonUtil`, `functionUtil`, `validationUtil`, `formatUtil`, `typeUtil`, `cookieUtil`, `deviceUtil`, `searchQueryUtil`

## 트리 셰이킹 import

```ts
import { camelCase } from "kr-corekit/stringUtil";
import { chunk } from "kr-corekit/arrayUtil";
import { get } from "kr-corekit/objectUtil";
import { mapAsync } from "kr-corekit/asyncUtil";
import { withTimeout } from "kr-corekit/promiseUtil";
```

## 벤치마크

```bash
npm run benchmark
```

빌드 후 [`benchmark/index.mjs`](./benchmark/index.mjs) 기반 로컬 마이크로 벤치마크를 실행합니다.

최신 로컬 샘플 (2026-02-25):

```text
array.chunk       ~1,065,050 ops/s
object.get        ~2,681,055 ops/s
string.camelCase  ~1,902,407 ops/s
async.mapAsync    ~1,514,005 ops/s
```

## 참고

- 전체 API는 `package/*/index.ts` 및 `dist/types/*/index.d.ts`에서 확인할 수 있습니다.
- 함수별 문서를 더 확장할 경우 다국어 README 파일을 함께 동기화하세요.

## 라이선스

MIT
