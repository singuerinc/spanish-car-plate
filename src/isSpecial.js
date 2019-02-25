import { _partsSpecial } from "./_utils";
import { SPECIALS } from "./specials";

/**
 * Returns true if is a valid spacial car plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.7
 * @example
 * isSpecial("CME 2342"); // => true
 * isSpecial("E 1660"); // => true
 */
function isSpecial(value) {
  const str = !value ? "" : value;
  const [code, num] = _partsSpecial(str);
  const cleaned = `${code}${num}`;

  if (cleaned.length < 5 || cleaned.length > 9) {
    return false;
  }

  if (!SPECIALS[code.toUpperCase()]) {
    return false;
  }

  return /^[CMEDGPNATFSHMORW]{1,5}[0-9]{4}$/i.test(cleaned);
}

export { isSpecial };
