type UnaryFunction = (value: unknown) => unknown;

export default function compose(...fns: UnaryFunction[]): UnaryFunction {
  return (value: unknown) =>
    fns.reduceRight((acc, fn) => fn(acc), value);
}
