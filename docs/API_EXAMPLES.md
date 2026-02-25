# kr-corekit API Examples (All Public APIs)

현재 공개된 API(총 134개)에 대한 사용 예제입니다.

## stringUtil

```ts
import {
  camelCase,
  capitalize,
  escapeHtml,
  kebabCase,
  pascalCase,
  slugify,
  snakeCase,
  truncate,
  unescapeHtml,
} from "kr-corekit/stringUtil";

camelCase("hello world"); // "helloWorld"
capitalize("hELLO"); // "Hello"
escapeHtml("<div>hello</div>"); // "&lt;div&gt;hello&lt;/div&gt;"
kebabCase("helloWorld"); // "hello-world"
pascalCase("hello world"); // "HelloWorld"
slugify("Hello World 안녕"); // "hello-world-안녕"
snakeCase("helloWorld"); // "hello_world"
truncate("abcdefghijklmnopqrstuvwxyz", { length: 10 }); // "abcdefg..."
unescapeHtml("&lt;div&gt;hello&lt;/div&gt;"); // "<div>hello</div>"
```

## arrayUtil

```ts
import {
  chunk,
  compact,
  difference,
  first,
  flatten,
  flattenDeep,
  groupBy,
  intersection,
  keyBy,
  last,
  partition,
  sample,
  sampleSize,
  shuffle,
  sortBy,
  union,
  uniqBy,
  unique,
  unzip,
  zip,
} from "kr-corekit/arrayUtil";

chunk([1, 2, 3, 4, 5], 2); // [[1,2], [3,4], [5]]
compact([0, 1, false, 2, "", 3, null, undefined]); // [1,2,3]
difference([1, 2, 3], [2]); // [1,3]
first([10, 20, 30]); // 10
flatten([1, [2, 3], [4]]); // [1,2,3,4]
flattenDeep([1, [2, [3, [4]]]]); // [1,2,3,4]
groupBy([{ id: 1, role: "admin" }, { id: 2, role: "user" }], (v) => v.role);
intersection([1, 2, 3], [2, 4]); // [2]
keyBy([{ id: 1, name: "Kim" }, { id: 2, name: "Lee" }], (v) => v.id);
last([10, 20, 30]); // 30
partition([1, 2, 3, 4], (n) => n % 2 === 0); // [[2,4], [1,3]]
sample([1, 2, 3]); // 1 | 2 | 3
sampleSize([1, 2, 3, 4], 2); // 예: [3,1]
shuffle([1, 2, 3]); // 예: [2,1,3]
sortBy([{ id: 3 }, { id: 1 }, { id: 2 }], (v) => v.id); // [{id:1},{id:2},{id:3}]
union([1, 2], [2, 3], [3, 4]); // [1,2,3,4]
uniqBy([{ id: 1 }, { id: 1 }, { id: 2 }], (v) => v.id); // [{id:1},{id:2}]
unique([1, 2, 2, 3]); // [1,2,3]
unzip([
  ["a", 1],
  ["b", 2],
]); // [["a","b"], [1,2]]
zip(["a", "b"], [1, 2], [true, false]); // [["a",1,true], ["b",2,false]]
```

## collectionUtil

```ts
import {
  entries,
  every,
  filter,
  find,
  forEach,
  includes,
  keys,
  map,
  reduce,
  size,
  some,
  values,
} from "kr-corekit/collectionUtil";

entries({ a: 1, b: 2 }); // [["a",1], ["b",2]]
every([2, 4, 6], (v) => v % 2 === 0); // true
filter({ a: 1, b: 2, c: 3 }, (v) => v > 1); // [2,3]
find([1, 2, 3], (v) => v > 1); // 2
forEach({ a: 1, b: 2 }, (value, key) => console.log(key, value));
includes("hello world", "world"); // true
includes([1, 2, 3], 2); // true
keys({ a: 1, b: 2 }); // ["a", "b"]
map({ a: 1, b: 2 }, (value, key) => `${key}:${value}`); // ["a:1", "b:2"]
reduce([1, 2, 3], (acc, v) => acc + v, 0); // 6
size(new Set([1, 2, 3])); // 3
some([1, 2, 3], (v) => v > 2); // true
values({ a: 1, b: 2 }); // [1,2]
```

## objectUtil

```ts
import {
  clearNullProperties,
  defaults,
  deepClone,
  deepFreeze,
  get,
  has,
  invert,
  mapValues,
  merge,
  omit,
  pick,
  removeKey,
  set,
} from "kr-corekit/objectUtil";

clearNullProperties({ a: 1, b: null, c: undefined, d: { e: null, f: 2 } });
defaults({ a: 1, b: undefined }, { b: 2, c: 3 }); // {a:1,b:2,c:3}
deepClone({ user: { name: "Kim" }, items: [1, 2, 3] });
deepFreeze({ config: { enabled: true } });
get({ user: { profile: [{ city: "Seoul" }] } }, "user.profile[0].city", "N/A"); // "Seoul"
has({ a: { b: 1 } }, "a.b"); // true
invert({ a: "x", b: "y" }); // {x:"a", y:"b"}
mapValues({ a: 1, b: 2 }, (v) => v * 10); // {a:10,b:20}
merge({ a: { b: 1 }, arr: [1, 2] }, { a: { c: 2 }, arr: [3] });
omit({ a: 1, b: 2, c: 3 }, ["b"]); // {a:1,c:3}
pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // {a:1,c:3}
removeKey("b", { a: 1, b: 2, c: 3 }); // {a:1,c:3}
set({}, "user.profile[0].city", "Seoul"); // { user: { profile: [{ city: "Seoul" }] } }
```

## asyncUtil

```ts
import {
  eachAsync,
  filterAsync,
  mapAsync,
  parallel,
  pLimit,
  series,
} from "kr-corekit/asyncUtil";

await eachAsync([1, 2, 3], async (v) => {
  console.log(v);
});

await filterAsync([1, 2, 3, 4], async (v) => v % 2 === 0); // [2,4]
await mapAsync([1, 2, 3], async (v) => v * 2, { concurrency: 2 }); // [2,4,6]

await parallel([
  async () => 1,
  async () => 2,
  async () => 3,
]); // [1,2,3]

const limit = pLimit(2);
await Promise.all([
  limit(async () => "A"),
  limit(async () => "B"),
  limit(async () => "C"),
]);

await series([
  async () => "step1",
  async () => "step2",
]); // ["step1", "step2"]
```

## promiseUtil

```ts
import {
  defer,
  retryWithDelay,
  settle,
  toResult,
  withTimeout,
} from "kr-corekit/promiseUtil";

const d = defer<number>();
setTimeout(() => d.resolve(10), 100);
await d.promise; // 10

let attempt = 0;
await retryWithDelay(async () => {
  attempt++;
  if (attempt < 3) throw new Error("temporary");
  return "ok";
}, { retries: 5, delay: 50, factor: 2 });

await settle([
  Promise.resolve(1),
  Promise.reject(new Error("fail")),
  Promise.resolve(2),
]); // { fulfilled: [1,2], rejected: [Error] }

await toResult(Promise.resolve("ok")); // { data: "ok", error: null }
await toResult(Promise.reject(new Error("fail"))); // { data: null, error: Error }

await withTimeout(
  new Promise((resolve) => setTimeout(() => resolve("late"), 300)),
  100,
  { fallback: () => "fallback" }
); // "fallback"
```

## dateUtil

```ts
import {
  addDays,
  addHours,
  differenceInDays,
  endOfDay,
  formatDate,
  isAfter,
  isBefore,
  isSameDay,
  startOfDay,
  subDays,
  subHours,
} from "kr-corekit/dateUtil";

addDays(new Date("2025-01-01"), 7);
addHours(new Date("2025-01-01T00:00:00"), 5);
differenceInDays("2025-01-10", "2025-01-01"); // 9
endOfDay(new Date());
formatDate(new Date(), "YYYY/MM/DD HH:mm:ss");
isAfter("2025-01-02", "2025-01-01"); // true
isBefore("2025-01-01", "2025-01-02"); // true
isSameDay("2025-01-01", "2025-01-01T23:59:59"); // true
startOfDay(new Date());
subDays(new Date("2025-01-10"), 3);
subHours(new Date("2025-01-01T10:00:00"), 2);
```

## langUtil

```ts
import {
  castArray,
  defaultTo,
  isEqual,
  toBoolean,
  toNumber,
  toString,
} from "kr-corekit/langUtil";

castArray(1); // [1]
castArray([1, 2]); // [1,2]
defaultTo(undefined, "fallback"); // "fallback"
isEqual({ a: [1, 2] }, { a: [1, 2] }); // true
toBoolean("yes"); // true
toBoolean("false"); // false
toNumber("42", 0); // 42
toNumber("x", 0); // 0
toString(null); // ""
toString(123); // "123"
```

## mathUtil

```ts
import {
  max,
  maxBy,
  mean,
  meanBy,
  median,
  min,
  minBy,
  sumBy,
} from "kr-corekit/mathUtil";

max([1, 5, 3]); // 5
maxBy([{ score: 10 }, { score: 20 }], (v) => v.score); // { score: 20 }
mean([10, 20, 30]); // 20
meanBy([{ v: 2 }, { v: 4 }], (x) => x.v); // 3
median([1, 2, 3, 4]); // 2.5
min([1, 5, 3]); // 1
minBy([{ score: 10 }, { score: 20 }], (v) => v.score); // { score: 10 }
sumBy([{ price: 100 }, { price: 200 }], (item) => item.price); // 300
```

## numberUtil

```ts
import {
  ceil,
  clamp,
  floor,
  inRange,
  multiply,
  random,
  round,
  subtract,
  sum,
} from "kr-corekit/numberUtil";

ceil(1.234, 2); // 1.24
clamp(10, 0, 5); // 5
floor(1.239, 2); // 1.23
inRange(3, 1, 5); // true
multiply(2, 3, 4); // 24
random(1, 10); // 1~10 정수
round(1.235, 2); // 1.24
subtract(10, 3, 2); // 5
sum(1, 2, 3); // 6
```

## commonUtil

```ts
import {
  copyToClipboard,
  debounce,
  decodeBase64,
  encodeBase64,
  isEmpty,
  isNull,
  retry,
  sleep,
  storage,
  throttle,
} from "kr-corekit/commonUtil";

isEmpty(""); // true
isNull(null); // true
await sleep(100);
await copyToClipboard("hello");

const encoded = encodeBase64("Hello 한글");
decodeBase64(encoded); // "Hello 한글"

const debounced = debounce(() => console.log("run"), 300);
const throttled = throttle(() => console.log("run"), 300);

debounced();
throttled();

await retry(async () => {
  return "success";
}, 3);

storage.set("user", { id: 1, name: "Kim" });
storage.get<{ id: number; name: string }>("user");
storage.remove("user");
```

## functionUtil

```ts
import {
  compose,
  identity,
  memoize,
  noop,
  once,
  pipe,
} from "kr-corekit/functionUtil";

compose(
  (v) => Number(v) * 2,
  (v) => Number(v) + 1
)(3); // 8

identity({ a: 1 }); // { a: 1 }

const squareMemo = memoize((n: number) => n * n);
squareMemo(5); // 25
squareMemo(5); // 캐시 결과

noop("ignored", 123); // undefined

const initialize = once(() => "initialized");
initialize(); // "initialized"
initialize(); // "initialized"

pipe(
  (v) => Number(v) + 1,
  (v) => Number(v) * 2
)(3); // 8
```

## formatUtil

```ts
import {
  formatNumberWithCommas,
  formatPhoneNumber,
} from "kr-corekit/formatUtil";

formatPhoneNumber("01012345678"); // "010-1234-5678"
formatNumberWithCommas(1234567); // "1,234,567"
```

## typeUtil

```ts
import {
  isArray,
  isBoolean,
  isDate,
  isFunction,
  isNil,
  isNumber,
  isPlainObject,
  isString,
} from "kr-corekit/typeUtil";

isArray([1, 2]); // true
isBoolean(false); // true
isDate(new Date()); // true
isFunction(() => null); // true
isNil(undefined); // true
isNumber(10); // true
isPlainObject({ a: 1 }); // true
isString("hello"); // true
```

## validationUtil

```ts
import {
  checkBase64,
  checkDomain,
  checkEmail,
  checkHttpUrl,
  checkPassword,
} from "kr-corekit/validationUtil";

checkEmail("user@example.com"); // true
checkHttpUrl("https://example.com"); // true
checkDomain("example.com"); // true
checkBase64("aGVsbG8="); // true
checkPassword("Abc123!@#", {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecialChar: true,
}); // true
```

## cookieUtil

```ts
import { getCookie, setCookie } from "kr-corekit/cookieUtil";

setCookie("theme", "dark", { path: "/", maxAge: 3600 });
getCookie("theme"); // "dark"
```

## deviceUtil

```ts
import { getDevice } from "kr-corekit/deviceUtil";

getDevice();
// { isMobile, isTablet, isDesktop, isIOS, isAndroid }
```

## searchQueryUtil

```ts
import { getAllQuery } from "kr-corekit/searchQueryUtil";

getAllQuery();
// 예: { page: "1", tag: ["typescript", "utility"] }
```

---

참고:

- 브라우저 환경 의존 API: `copyToClipboard`, `storage`, `getCookie`, `setCookie`, `getAllQuery`, `getDevice`
- 비동기 API는 `await` 또는 `then/catch` 패턴으로 사용하세요.
