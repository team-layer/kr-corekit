import toDate, { type DateInput } from "../_toDate";

export default function isSameDay(date: DateInput, compareDate: DateInput): boolean {
  const left = toDate(date);
  const right = toDate(compareDate);

  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}
