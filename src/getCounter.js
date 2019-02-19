import { isOld } from "./isOld";
import { isValid } from "./isValid";
import { _partsOld, _partsNew } from "./_utils";

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
    const [, , counter] = _partsOld(str);
    return counter;
  } else if (isValid(str)) {
    const [, counter] = _partsNew(str);
    return counter;
  }

  return null;
}

export { getCounter };
