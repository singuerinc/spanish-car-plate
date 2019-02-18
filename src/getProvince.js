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
function getProvince(value) {
  if (!isOld(value)) {
    return null;
  }

  const num = !value ? "" : value;
  const code = num.replace(
    /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
    "$1"
  );

  return PROVINCES[code] || null;
}

export { getProvince };
