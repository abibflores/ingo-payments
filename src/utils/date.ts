export function getGMTDate(): string {
  const date = new Date();
  return date.toUTCString().replace("GMT", "GMT");
}
