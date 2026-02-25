import precisionMath from "../_precision";

export default function floor(value: number, precision: number = 0): number {
  return precisionMath(value, precision, Math.floor);
}
