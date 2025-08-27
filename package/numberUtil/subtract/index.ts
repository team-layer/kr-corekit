export default function subtract(...args: number[]): number {
  if (args.length === 0) {
    return 0;
  }

  return args.reduce((acc, cur) => acc - cur);
}
