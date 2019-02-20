import { SPECIALS } from "./specials";
import { isSpecial } from "./isSpecial";
import { _partsSpecial } from "./_utils";

/**
 * Returns the special code for a valid car plate
 * @param {string} value
 * @returns {string}
 * @since 0.0.7
 * @example
 * getSpecialCode("DGP-1234"); // => "DGP"
 */
function getSpecialCode(value) {
  const str = !value ? "" : value;

  if (!isSpecial(str)) {
    return null;
  }

  const [code] = _partsSpecial(str);

  return SPECIALS[code] ? code : null;
}

export { getSpecialCode };
