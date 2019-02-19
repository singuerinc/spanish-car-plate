import { isOld } from "./isOld";
import { isValid } from "./isValid";
import { _partsNew, _partsOld } from "./_utils";

/**
 *
 * @param {string} value
 * @returns {number}
 * @since 0.0.5
 * @example
 * getNumber("2345BCF"); // => 2345
 * getNumber("GI-1234-CS"); // => 1234
 */
function getNumber(value) {
  const str = !value ? "" : value;

  if (isOld(str) === true) {
    const [, num] = _partsOld(str);
    return parseInt(num, 10);
  } else if (isValid(str)) {
    const [num] = _partsNew(str);
    return parseInt(num, 10);
  }

  return null;
}

export { getNumber };
