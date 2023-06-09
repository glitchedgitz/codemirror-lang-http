export const Headers = [
  "Accept",
  "Accept-Encoding",
  "Accept-Language",
  "Cache-Control",
  "Content-Type",
  "Cookie",
  "Connection",
  "User-Agent",
  "Authorization",
  "Content-Length",
  "Host",
  "Referer",
  "Server",
  "Set-Cookie",
  "Origin",
  "X-Forwarded-For",
  "X-Frame-Options",
  "X-XSS-Protection",
  "X-Content-Type-Options",
  "Content-Security-Policy",
  "Strict-Transport-Security",
  "Referrer-Policy",
  "Feature-Policy",
  "Expect-CT",
  "Public-Key-Pins",
  "Content-Encoding",
  "X-Permitted-Cross-Domain-Policies",
  "X-Download-Options",
  "X-DNS-Prefetch-Control",
  "X-Request-ID",
  "X-Correlation-ID",
  "X-HTTP-Method-Override",
  "X-Powered-By",
  "X-Robots-Tag",
  "X-Content-Duration",
  "X-SourceMap",
  "X-Debug-Token",
  "X-Debug-Token-Link",
  "X-PHP-Originating-Script",
  "X-Original-URL",
  "X-Rewrite-URL",
  "X-Real-IP",
  "X-Remote-IP",
  "X-Remote-Addr",
  "X-Wap-Profile",
  "X-UIDH",
  "Proxy-Authorization",
  "Proxy-Connection",
  "Proxy-Authenticate",
  "Forwarded",
  "TE",
  "DNT",
  "If-Match",
  "If-None-Match",
  "If-Modified-Since",
  "If-Unmodified-Since",
  "If-Range",
  "Range",
  "Content-Range",
  "X-HTTP-Method",
  "X-Override-Method",
  "X-HTTP-Method-Override",
  "X-Forwarded-Proto",
  "X-Forwarded-Host",
  "X-Forwarded-Port",
  "X-Forwarded-Scheme",
  "X-Forwarded-Server",
  "X-Forwarded-By",
  "X-Forwarded-Prefix",
  "X-Forwarded-Protocol",
  "X-Forwarded-SSL",
].map(tag => ({ label: tag }))

export const Methods = [
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "HEAD",
  "OPTIONS",
  "CONNECT",
  "TRACE",
  "PATCH"].map(tag => ({ label: tag }))