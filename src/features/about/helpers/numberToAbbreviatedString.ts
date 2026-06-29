export function numberToAbbreviatedString(n: number): string {
  if (n > 999_999) return `${Math.round((n / 1_000_000) * 10) / 10}M`;
  if (n > 9999) return `${Math.round((n / 1000) * 10) / 10}K`;
  else return n.toString();
}
