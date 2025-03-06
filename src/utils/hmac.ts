import crypto from "crypto";

export function generateHMACSignature(secret: string, data: string): string {
  return crypto.createHmac("sha512", secret).update(data).digest("base64");
}
