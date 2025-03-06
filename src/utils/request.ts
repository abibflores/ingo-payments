import { SigHeaders } from "@/types/ingopay";

const generateHeadersString = (sigHeaders: SigHeaders) =>{
  let headers = '';
  Object.keys(sigHeaders).forEach(function(h) {
    if (headers !== '') headers += ' ';
    headers += h.toLowerCase();
  });
  return headers;
}

export const buildSignatureString =(
  method: string,
  requestUri: string,
  date: string,
  contentType: string,
  contentSha512: string,
  contentLength: string
): string => {

  const sigHeaders = {
    'request-line' : `${method} ${requestUri} HTTP/1.1\n`,
    'x-date' : `${date}\n`,
    'content-type' : `${contentType}`,
    'content-sha512' : `${contentSha512}`,
    'content-length' : `${contentLength}`
  };
  const headers = generateHeadersString(sigHeaders)
  return headers;
}



