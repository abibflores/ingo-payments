import crypto from "crypto";

import { getGMTDate } from "@/utils/date";
import { generateHMACSignature } from "@/utils/hmac";
import { buildSignatureString } from "@/utils/request";

const API_URL = process.env.NEXT_PUBLIC_API as string;
const USERNAME = process.env.NEXT_PUBLIC_USERNAME as string;
const SECRET = process.env.NEXT_PUBLIC_SECRET as string;
const CONTENT_TYPE = "application/json";

export async function sendHmacRequest(body: object): Promise<Response> {
  const requestBody = JSON.stringify(body);
  const contentSha512 = crypto
    .createHash("sha512")
    .update(requestBody)
    .digest("base64");
  const date = getGMTDate();

  const signatureString = buildSignatureString(
    "POST",
    "/gateway/verify",
    date,
    CONTENT_TYPE,
    contentSha512,
    "398"
  );

  const signature = generateHMACSignature(SECRET, signatureString);

  const headers = {
    "X-Date": date,
    "content-type": CONTENT_TYPE,
    "content-sha512": contentSha512,
    "content-length": "398",
    Authorization: `hmac username=\"${USERNAME}\", algorithm=\"hmac-sha512\", request_headers=\"request-line x-date content-type content-sha512 content-length\", signature=\"${signature}\"`,
  };

  return fetch(API_URL, {
    method: "POST",
    headers,
    body: requestBody,
  });
}
