type UnaryFunction = (value: unknown) => unknown;

export default function pipe(...fns: UnaryFunction[]): UnaryFunction {
  return (value: unknown) => fns.reduce((acc, fn) => fn(acc), value);
}
