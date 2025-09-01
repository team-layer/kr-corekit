export default function multiply(...args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}
