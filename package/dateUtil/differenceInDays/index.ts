import toDate, { type DateInput } from "../_toDate";

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

export default function differenceInDays(dateLeft: DateInput, dateRight: DateInput): number {
  const left = toDate(dateLeft).getTime();
  const right = toDate(dateRight).getTime();

  return Math.trunc((left - right) / MILLISECONDS_IN_DAY);
}
