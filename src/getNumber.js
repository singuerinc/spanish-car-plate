import { isOld } from "./isOld";
import { isValid } from "./isValid";

/**
 *
 * @param {string} value
 * @returns {number}
 * @since 0.0.5
 * @example
 * getNumber("GI-1234-CS"); // => 1234
 * getNumber("2345BCF"); // => 2345
 */
function getNumber(value) {
  const str = !value ? "" : value;

  if (isOld(str) === true) {
    const cleaned = str.replace(
      /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
      "$2"
    );

    if (cleaned.length !== 4) {
      return null;
    }

    return parseInt(cleaned, 10);
  } else if (isValid(str)) {
    const cleaned = str.replace(
      /^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i,
      "$1"
    );

    if (cleaned.length !== 4) {
      return null;
    }

    return parseInt(cleaned, 10);
  }

  return null;
}

export { getNumber };
