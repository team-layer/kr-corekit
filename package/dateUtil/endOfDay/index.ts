import toDate, { type DateInput } from "../_toDate";

export default function endOfDay(date: DateInput): Date {
  const result = toDate(date);
  result.setHours(23, 59, 59, 999);
  return result;
}
