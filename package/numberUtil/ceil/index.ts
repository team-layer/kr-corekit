import precisionMath from "../_precision";

export default function ceil(value: number, precision: number = 0): number {
  return precisionMath(value, precision, Math.ceil);
}
