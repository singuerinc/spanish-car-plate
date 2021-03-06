import { _partsNew } from "./_utils";
import { isOld } from "./isOld";
import { isSpecial } from "./isSpecial";

/**
 * Returns true if is a valid (post year 2000) car plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.1
 * @example
 * isValid("2345BCF"); // => true
 */
function isValid(value) {
  if (isOld(value)) {
    return true;
  }

  if (isSpecial(value)) {
    return true;
  }

  const str = !value ? "" : value;
  const cleaned = _partsNew(str).join("");

  if (cleaned.length !== 7) {
    return false;
  }

  return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
}

export { isValid };
