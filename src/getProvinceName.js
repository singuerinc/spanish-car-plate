import { PROVINCES } from "./provinces";
import { getProvinceCode } from "./getProvinceCode";

/**
 * Returns the province name for a valid car plate in the old system (1971-2000)
 * @param {string} value
 * @returns {string}
 * @since 0.0.5
 * @example
 * getProvinceName("GI-1234-CS"); // => "Province of Girona"
 */
function getProvinceName(value) {
  const str = !value ? "" : value;
  const code = getProvinceCode(str);

  return PROVINCES[code] || null;
}

export { getProvinceName };
