import { performance } from "node:perf_hooks";
import * as corekit from "../dist/bundle/kr-corekit.js";

const {
  chunk,
  flattenDeep,
  get,
  merge,
  camelCase,
  isEqual,
  map,
  mean,
  mapAsync,
} = corekit;

function run(name, fn, iterations = 20000) {
  fn();
  const startedAt = performance.now();

  for (let index = 0; index < iterations; index++) {
    fn();
  }

  const elapsed = performance.now() - startedAt;
  const opsPerSec = Math.round((iterations / elapsed) * 1000);

  return { name, iterations, elapsedMs: elapsed.toFixed(2), opsPerSec };
}

async function runAsync(name, fn, iterations = 2000) {
  await fn();
  const startedAt = performance.now();

  for (let index = 0; index < iterations; index++) {
    await fn();
  }

  const elapsed = performance.now() - startedAt;
  const opsPerSec = Math.round((iterations / elapsed) * 1000);

  return { name, iterations, elapsedMs: elapsed.toFixed(2), opsPerSec };
}

const sampleArray = Array.from({ length: 1000 }, (_, index) => index);
const nestedArray = [1, [2, [3, [4, [5, [6]]]]]];
const deepObject = { user: { profile: { address: { city: "Seoul" } } } };
const mergeTarget = { a: { b: 1 }, c: [1, 2, 3] };
const mergeSource = { a: { d: 2 }, c: [3, 4], e: true };

const syncResults = [
  run("array.chunk", () => chunk(sampleArray, 25)),
  run("array.flattenDeep", () => flattenDeep(nestedArray)),
  run("object.get", () => get(deepObject, "user.profile.address.city")),
  run("object.merge", () => merge({ ...mergeTarget }, mergeSource), 5000),
  run("string.camelCase", () => camelCase("kr corekit benchmark sample")),
  run("lang.isEqual", () => isEqual({ x: [1, 2] }, { x: [1, 2] }), 10000),
  run("collection.map", () => map({ a: 1, b: 2, c: 3 }, (v) => v * 2)),
  run("math.mean", () => mean([1, 2, 3, 4, 5])),
];

const asyncResults = [
  await runAsync(
    "async.mapAsync",
    () => mapAsync([1, 2, 3, 4], async (value) => value * 2),
    1000
  ),
];

console.log("Benchmark Results");
console.table([...syncResults, ...asyncResults]);
