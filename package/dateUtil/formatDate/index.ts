import toDate, { type DateInput } from "../_toDate";

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export default function formatDate(
  date: DateInput,
  format: string = "YYYY-MM-DD"
): string {
  const value = toDate(date);

  const tokenMap: Record<string, string> = {
    YYYY: String(value.getFullYear()),
    MM: pad(value.getMonth() + 1),
    DD: pad(value.getDate()),
    HH: pad(value.getHours()),
    mm: pad(value.getMinutes()),
    ss: pad(value.getSeconds()),
  };

  return Object.entries(tokenMap).reduce(
    (result, [token, tokenValue]) => result.replaceAll(token, tokenValue),
    format
  );
}
