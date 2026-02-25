# kr-corekit

言語: [English](./README.md) | [한국어](./README.ko.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

明確で実用的な API 設計を重視した JavaScript/TypeScript ユーティリティライブラリです。

## 特徴

- 文字列・配列・オブジェクト・非同期・Promise・日付・数値など 130+ 関数
- Tree-shaking しやすいモジュール export
- TypeScript `.d.ts` 型定義を提供
- ESM/CJS バンドルを提供

## インストール

```bash
npm install kr-corekit
# or
pnpm add kr-corekit
# or
yarn add kr-corekit
```

## クイックスタート

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

## モジュール

- `stringUtil`: ケース変換、HTML escape/unescape、truncate、slugify
- `arrayUtil`: chunk、flatten、uniq/uniqBy、groupBy、sortBy、集合演算、サンプリング
- `collectionUtil`: 配列/オブジェクト向け map/filter/reduce/find/every/some/includes
- `objectUtil`: get/set/has/merge/defaults/pick/omit/deepClone/deepFreeze
- `numberUtil`: clamp、inRange、random、ceil/floor/round、sum/subtract/multiply
- `mathUtil`: mean/median/min/max/sumBy/minBy/maxBy
- `dateUtil`: 日時加減算、start/end of day、formatDate、日付比較
- `langUtil`: toBoolean/toNumber/toString/defaultTo/castArray/isEqual
- `asyncUtil`: pLimit、mapAsync、filterAsync、eachAsync、series、parallel
- `promiseUtil`: defer、withTimeout、retryWithDelay、settle、toResult
- 既存モジュール: `commonUtil`, `functionUtil`, `validationUtil`, `formatUtil`, `typeUtil`, `cookieUtil`, `deviceUtil`, `searchQueryUtil`

## Tree-Shaking インポート

```ts
import { camelCase } from "kr-corekit/stringUtil";
import { chunk } from "kr-corekit/arrayUtil";
import { get } from "kr-corekit/objectUtil";
import { mapAsync } from "kr-corekit/asyncUtil";
import { withTimeout } from "kr-corekit/promiseUtil";
```

## ベンチマーク

```bash
npm run benchmark
```

ビルド後にローカルのマイクロベンチマーク [`benchmark/index.mjs`](./benchmark/index.mjs) を実行します。

最新ローカルサンプル（2026-02-25）:

```text
array.chunk       ~1,065,050 ops/s
object.get        ~2,681,055 ops/s
string.camelCase  ~1,902,407 ops/s
async.mapAsync    ~1,514,005 ops/s
```

## 補足

- API 全体は `package/*/index.ts` と `dist/types/*/index.d.ts` で確認できます。
- 関数ドキュメントを拡張する場合は多言語 README を同期してください。

## ライセンス

MIT
