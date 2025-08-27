export default function subtract(...args: number[]): number {
  return args.reduce((acc, cur) => acc - cur);
}
