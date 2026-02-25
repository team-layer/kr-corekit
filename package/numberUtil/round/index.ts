import precisionMath from "../_precision";

export default function round(value: number, precision: number = 0): number {
  return precisionMath(value, precision, Math.round);
}
