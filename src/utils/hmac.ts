import HmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

export function generateHMACSignature(secret: string, data: string): string {
  const sigHash = HmacSHA512(data, secret);
  return Base64.stringify(sigHash);
}
