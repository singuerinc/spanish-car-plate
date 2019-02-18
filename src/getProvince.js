import { PROVINCES } from "./provinces";
import { isOld } from "./isOld";

/**
 * Returns the province for a valid car plate in the old system (1971-2000)
 * @param {string} value
 * @returns {string}
 * @since 0.0.3
 * @example
 * getProvince("GI-1234-CS"); // => "Province of Girona"
 */
const getProvince = (value) => {
  if (!isOld(value)) {
    throw new Error("Only old plates contain information about the province.");
  }

  const num = !value ? "" : value;
  const code = num.replace(
    /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
    "$1"
  );

  if (code.length !== 1 && code.length !== 2) {
    throw new Error("This plate does not contains information about the province.");
  }

  return PROVINCES[code];
};

export { getProvince };
