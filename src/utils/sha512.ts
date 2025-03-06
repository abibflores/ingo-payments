import crypto from "crypto";

export const generateSHA512Base64 = (data: string): string  => {
  const sha512Digest = crypto.createHash("sha512").update(data).digest();

  return sha512Digest.toString("base64");
}
