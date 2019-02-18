import { _partsOld } from "./_utils";

/**
 * Returns true if is a valid (old system 1971-2000) car plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.2
 * @example
 * isOld("GI-1234-CS"); // => true
 */
function isOld(value) {
  const str = !value ? "" : value;
  const cleaned = _partsOld(str).join("");

  if (cleaned.length < 7 || cleaned.length > 9) {
    return false;
  }

  return /^[A-Z]{1,3}[0-9]{4}[A-Z]{2}$/i.test(cleaned);
}

export { isOld };
