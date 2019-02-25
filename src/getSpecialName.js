import { SPECIALS } from "./specials";
import { getSpecialCode } from "./getSpecialCode";

/**
 * Returns the special name for a valid car plate
 * @param {string} value
 * @returns {string}
 * @since 0.0.7
 * @example
 * getSpecialCode("CME1234"); // => "Corps of the Mossos d'Esquadra"
 */
function getSpecialName(value) {
  const str = !value ? "" : value;
  const code = getSpecialCode(str);

  return code ? SPECIALS[code.toUpperCase()] : null;
}

export { getSpecialName };
