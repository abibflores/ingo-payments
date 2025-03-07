import CryptoJS from "crypto-js";

export const generateSHA512Base64 = (data: string): string => {
  const sha512Digest = CryptoJS.SHA512(data);
  return CryptoJS.enc.Base64.stringify(sha512Digest);
};
