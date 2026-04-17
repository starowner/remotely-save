const URLCtor = globalThis.URL;
const URLSearchParamsCtor = globalThis.URLSearchParams;

const fileURLToPath = (value) => {
  const input = value instanceof URLCtor ? value : new URLCtor(value);
  if (input.protocol !== "file:") {
    return input.toString();
  }

  let pathname = decodeURIComponent(input.pathname);

  if (/^\/[A-Za-z]:/.test(pathname)) {
    pathname = pathname.slice(1);
  }

  return pathname;
};

module.exports = {
  fileURLToPath,
  URL: URLCtor,
  URLSearchParams: URLSearchParamsCtor,
};