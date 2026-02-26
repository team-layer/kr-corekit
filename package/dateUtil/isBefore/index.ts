import toDate, { type DateInput } from "../_toDate";

export default function isBefore(date: DateInput, compareDate: DateInput): boolean {
  return toDate(date).getTime() < toDate(compareDate).getTime();
}
