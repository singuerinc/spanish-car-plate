declare function getCounter(value: string): string;
declare function getNumber(value: string): number;
declare function getProvinceCode(value: string): string;
declare function getProvinceName(value: string): string;

/**
 * Returns true if is a valid (old system 1971-2000) car plate
 */
declare function isOld(value: string): boolean;
/**
 * Returns true if is a valid (post year 2000) car plate
 */
declare function isValid(value: string): boolean;

interface IPlate {
  isSpecial: boolean;
  isOld: boolean;
  provinceCode: string;
  provinceName: string;
  number: number;
  counter: string;
}

declare function parse(value: string): IPlate;

declare const PROVINCES: object;

export {
  IPlate,
  isValid,
  isOld,
  getCounter,
  getProvinceName,
  getProvinceCode,
  getNumber,
  PROVINCES
};
