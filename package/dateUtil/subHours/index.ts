import toDate, { type DateInput } from "../_toDate";

export default function subHours(date: DateInput, amount: number): Date {
  const result = toDate(date);
  result.setHours(result.getHours() - amount);
  return result;
}
