const url = require("url/");

const fileURLToPath = (value) => {
  const input = value instanceof URL ? value : new URL(value);
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
  ...url,
  fileURLToPath,
};