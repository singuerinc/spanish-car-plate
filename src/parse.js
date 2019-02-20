import { isValid } from "./isValid";
import { isOld } from "./isOld";
import { isSpecial } from "./isSpecial";
import { getProvinceName } from "./getProvinceName";
import { getProvinceCode } from "./getProvinceCode";
import { getCounter } from "./getCounter";
import { getNumber } from "./getNumber";
import { getSpecialCode } from "./getSpecialCode";

function _parseNew(str) {
  const parsed = {};
  parsed.isOld = false;
  parsed.provinceName = null;
  parsed.provinceCode = null;
  parsed.specialCode = null;
  parsed.counter = getCounter(str);
  parsed.number = getNumber(str);
  return parsed;
}

function _parseOld(str) {
  const parsed = {};
  parsed.isOld = true;
  parsed.provinceName = getProvinceName(str);
  parsed.provinceCode = getProvinceCode(str);
  parsed.specialCode = null;
  parsed.counter = getCounter(str);
  parsed.number = getNumber(str);
  return parsed;
}

function _parseSpecial(str) {
  const parsed = {};
  parsed.isOld = false;
  parsed.provinceName = null;
  parsed.provinceCode = null;
  parsed.specialCode = getSpecialCode(str);
  parsed.counter = null;
  parsed.number = getNumber(str);
  parsed.isSpecial = true;
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
  const parsed = {
    isSpecial: false // TODO: not implemented
  };

  if (isOld(str) === true) {
    return {
      ...parsed,
      ..._parseOld(str)
    };
  } else if (isSpecial(str) === true) {
    return {
      ...parsed,
      ..._parseSpecial(str)
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
