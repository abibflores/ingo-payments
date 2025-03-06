import crypto from "crypto";

export function generateHMACSignature(secret: string, data: string): string {
  const sigHash = crypto.createHmac("sha512", secret).update(data).digest();
  return sigHash.toString("base64");
}
