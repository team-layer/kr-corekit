# kr-corekit

语言: [English](./README.md) | [한국어](./README.ko.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

一个为 JavaScript/TypeScript 打造的工具函数库，强调清晰且实用的 API 设计。

## 主要特性

- 覆盖字符串、数组、对象、异步、Promise、日期、数学、语言等 130+ 函数
- 适合 Tree-shaking 的模块导出结构
- 提供 TypeScript `.d.ts` 类型
- 提供 ESM/CJS 打包产物

## 安装

```bash
npm install kr-corekit
# or
pnpm add kr-corekit
# or
yarn add kr-corekit
```

## 快速示例

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

## 模块

- `stringUtil`: 大小写转换、HTML escape/unescape、truncate、slugify
- `arrayUtil`: chunk、flatten、uniq/uniqBy、groupBy、sortBy、集合运算、抽样
- `collectionUtil`: 面向数组/对象的 map/filter/reduce/find/every/some/includes
- `objectUtil`: get/set/has/merge/defaults/pick/omit/deepClone/deepFreeze
- `numberUtil`: clamp、inRange、random、ceil/floor/round、sum/subtract/multiply
- `mathUtil`: mean/median/min/max/sumBy/minBy/maxBy
- `dateUtil`: 日期加减、当天起止、formatDate、日期比较
- `langUtil`: toBoolean/toNumber/toString/defaultTo/castArray/isEqual
- `asyncUtil`: pLimit、mapAsync、filterAsync、eachAsync、series、parallel
- `promiseUtil`: defer、withTimeout、retryWithDelay、settle、toResult
- 其他模块: `commonUtil`, `functionUtil`, `validationUtil`, `formatUtil`, `typeUtil`, `cookieUtil`, `deviceUtil`, `searchQueryUtil`

## Tree-Shaking 导入

```ts
import { camelCase } from "kr-corekit/stringUtil";
import { chunk } from "kr-corekit/arrayUtil";
import { get } from "kr-corekit/objectUtil";
import { mapAsync } from "kr-corekit/asyncUtil";
import { withTimeout } from "kr-corekit/promiseUtil";
```

## 基准测试

```bash
npm run benchmark
```

该命令会在构建后执行本地微基准脚本 [`benchmark/index.mjs`](./benchmark/index.mjs)。

最新本地样例（2026-02-25）:

```text
array.chunk       ~1,065,050 ops/s
object.get        ~2,681,055 ops/s
string.camelCase  ~1,902,407 ops/s
async.mapAsync    ~1,514,005 ops/s
```

## 说明

- 完整 API 可查看 `package/*/index.ts` 与 `dist/types/*/index.d.ts`。
- 若继续扩展函数文档，请同步更新多语言 README。

## 许可证

MIT
