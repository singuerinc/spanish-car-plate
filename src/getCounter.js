import { isOld } from "./isOld";
import { isValid } from "./isValid";

/**
 *
 * @param {string} value
 * @returns {string}
 * @since 0.0.5
 * @example
 * getCounter("GI-1234-CS"); // => "CS"
 * getCounter("2345BCF"); // => "CS"
 */
function getCounter(value) {
  const str = !value ? "" : value;

  if (isOld(str) === true) {
    const cleaned = str.replace(
      /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
      "$3"
    );

    if (cleaned.length !== 2) {
      return null;
    }

    return cleaned;
  } else if (isValid(str)) {
    const cleaned = str.replace(
      /^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i,
      "$2"
    );

    if (cleaned.length !== 3) {
      return null;
    }

    return cleaned;
  }

  return null;
}

export { getCounter };
