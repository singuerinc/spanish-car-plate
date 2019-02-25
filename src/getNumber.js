import { isOld } from "./isOld";
import { isValid } from "./isValid";
import { isSpecial } from "./isSpecial";
import { _partsNew, _partsOld, _partsSpecial } from "./_utils";

/**
 *
 * @param {string} value
 * @returns {number}
 * @since 0.0.5
 * @example
 * getNumber("2345BCF"); // => "2345"
 * getNumber("GI-1234-CS"); // => "1234"
 */
function getNumber(value) {
  const str = !value ? "" : value;
  let n;

  if (isOld(str) === true) {
    const [, num] = _partsOld(str);
    n = num;
  } else if (isSpecial(str) === true) {
    const [, num] = _partsSpecial(str);
    n = num;
  } else if (isValid(str)) {
    const [num] = _partsNew(str);
    n = num;
  } else {
    return null;
  }

  return parseInt(n, 10)
    .toString()
    .padStart(4, "0");
}

export { getNumber };
