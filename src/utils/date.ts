export function getGMTDate(): string {
  const date = new Date();
  return date.toUTCString();
}
