export type DateInput = Date | string | number;

export default function toDate(value: DateInput): Date {
  return value instanceof Date ? new Date(value.getTime()) : new Date(value);
}
