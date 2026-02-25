import toDate, { type DateInput } from "../_toDate";

export default function addDays(date: DateInput, amount: number): Date {
  const result = toDate(date);
  result.setDate(result.getDate() + amount);
  return result;
}
