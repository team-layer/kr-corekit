export default function sum(...args: number[]): number {
  return args.reduce((acc, cur) => acc + cur, 0);
}
