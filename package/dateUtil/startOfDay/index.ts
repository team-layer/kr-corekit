import toDate, { type DateInput } from "../_toDate";

export default function startOfDay(date: DateInput): Date {
  const result = toDate(date);
  result.setHours(0, 0, 0, 0);
  return result;
}
