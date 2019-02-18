import { isValid } from "./isValid";
import { isOld } from "./isOld";
import { getProvinceName } from "./getProvinceName";
import { getProvinceCode } from "./getProvinceCode";
import { getCounter } from "./getCounter";
import { getNumber } from "./getNumber";

function _parseNew(str) {
  const parsed = {};
  parsed.isOld = false;
  parsed.counter = getCounter(str);
  parsed.number = getNumber(str);
  return parsed;
}

function _parseOld(str) {
  const parsed = {};
  parsed.isOld = true;
  const provinceName = getProvinceName(str);
  const provinceCode = getProvinceCode(str);
  parsed.provinceName = provinceName;
  parsed.provinceCode = provinceCode;
  parsed.counter = getCounter(str);
  parsed.number = getNumber(str);
  return parsed;
}

/**
 * Returns an object containing information about the plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.5
 * @example
 * parse("2345BCF"); // => { isSpecial: false, isOld: false, provinceCode: null, provinceName: null, number: 2345, counter: "BCF" }
 * parse("GI2345BC"); // => { isSpecial: false, isOld: true, provinceCode: "GI", provinceName: "Province of Girona", number: 2345, counter: "BC" }
 */
function parse(value) {
  const str = !value ? "" : value;
  const old = isOld(str);
  const parsed = {
    isSpecial: false // TODO: not implemented
  };

  if (old === true) {
    return {
      ...parsed,
      ..._parseOld(str)
    };
  } else if (isValid(str) === true) {
    return {
      ...parsed,
      ..._parseNew(str)
    };
  }

  return null;
}

export { parse };
