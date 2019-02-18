/**
 * Returns the province for a valid car plate in the old system (1971-2000)
 */
declare function getProvinceName(value: string): string;

declare function getProvinceCode(value: string): string;

declare function getNumber(value: string): number;

declare function getCounter(value: string): string;
/**
 * Returns true if is a valid (old system 1971-2000) car plate
 */
declare function isOld(value: string): boolean;
/**
 * Returns true if is a valid (post year 2000) car plate
 */
declare function isValid(value: string): boolean;

declare const PROVINCES: object;

export {
  isValid,
  isOld,
  getCounter,
  getProvinceName,
  getProvinceCode,
  getNumber,
  PROVINCES
};
