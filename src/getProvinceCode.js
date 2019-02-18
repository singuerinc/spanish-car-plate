import { PROVINCES } from "./provinces";
import { isOld } from "./isOld";

/**
 * Returns the province code for a valid car plate in the old system (1971-2000)
 * @param {string} value
 * @returns {string}
 * @since 0.0.5
 * @example
 * getProvinceCode("GI-1234-CS"); // => "GI"
 */
function getProvinceCode(value) {
  const str = !value ? "" : value;

  if (!isOld(str)) {
    return null;
  }

  const code = str.replace(
    /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
    "$1"
  );

  return PROVINCES[code] ? code : null;
}

export { getProvinceCode };
