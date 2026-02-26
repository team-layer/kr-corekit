function isObjectLike(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === "object" && value !== null;
}

function equalArrays(
  left: readonly unknown[],
  right: readonly unknown[],
  stack: WeakMap<object, object>
): boolean {
  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index++) {
    if (!isEqualInternal(left[index], right[index], stack)) {
      return false;
    }
  }

  return true;
}

function equalMaps(
  left: Map<unknown, unknown>,
  right: Map<unknown, unknown>,
  stack: WeakMap<object, object>
): boolean {
  if (left.size !== right.size) {
    return false;
  }

  for (const [key, value] of left) {
    if (!right.has(key) || !isEqualInternal(value, right.get(key), stack)) {
      return false;
    }
  }

  return true;
}

function equalSets(
  left: Set<unknown>,
  right: Set<unknown>,
  stack: WeakMap<object, object>
): boolean {
  if (left.size !== right.size) {
    return false;
  }

  const rightValues = [...right];

  for (const leftValue of left) {
    const matchedIndex = rightValues.findIndex((rightValue) =>
      isEqualInternal(leftValue, rightValue, stack)
    );

    if (matchedIndex === -1) {
      return false;
    }

    rightValues.splice(matchedIndex, 1);
  }

  return true;
}

function isEqualInternal(
  left: unknown,
  right: unknown,
  stack: WeakMap<object, object>
): boolean {
  if (Object.is(left, right)) {
    return true;
  }

  if (!isObjectLike(left) || !isObjectLike(right)) {
    return false;
  }

  const cached = stack.get(left);

  if (cached && cached === right) {
    return true;
  }

  stack.set(left, right);

  if (left.constructor !== right.constructor) {
    return false;
  }

  if (left instanceof Date && right instanceof Date) {
    return left.getTime() === right.getTime();
  }

  if (left instanceof RegExp && right instanceof RegExp) {
    return left.source === right.source && left.flags === right.flags;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    return equalArrays(left, right, stack);
  }

  if (left instanceof Map && right instanceof Map) {
    return equalMaps(left, right, stack);
  }

  if (left instanceof Set && right instanceof Set) {
    return equalSets(left, right, stack);
  }

  const leftKeys = Reflect.ownKeys(left);
  const rightKeys = Reflect.ownKeys(right);

  if (leftKeys.length !== rightKeys.length) {
    return false;
  }

  for (const key of leftKeys) {
    if (!rightKeys.includes(key)) {
      return false;
    }

    if (!isEqualInternal(left[key], right[key], stack)) {
      return false;
    }
  }

  return true;
}

export default function isEqual(left: unknown, right: unknown): boolean {
  return isEqualInternal(left, right, new WeakMap<object, object>());
}
