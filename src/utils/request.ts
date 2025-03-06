export function buildSignatureString(
  method: string,
  requestUri: string,
  date: string,
  contentType: string,
  contentSha512: string,
  contentLength: string
): string {
  return (
    `${method} ${requestUri} HTTP/1.1\n` +
    `x-date: ${date}\n` +
    `content-type: ${contentType}\n` +
    `content-sha512: ${contentSha512}\n` +
    `content-length: ${contentLength}`
  );
}
