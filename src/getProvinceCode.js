import { PROVINCES } from "./provinces";
import { isOld } from "./isOld";
import { _partsOld } from "./_utils";

/**
 * Returns the province code for a valid car plate in the old system (1971-2000)
 * @param {string} value
 * @returns {string}
 * @since 0.0.5
 * @example
 * getProvinceCode("GI-1234-CS"); // => "GI"
 */
function getProvinceCode(value) {
  const str = !value ? "" : value;

  if (!isOld(str)) {
    return null;
  }

  const [code] = _partsOld(str);

  return PROVINCES[code] ? code : null;
}

export { getProvinceCode };
