declare function getCounter(value: string): string;
declare function getNumber(value: string): number;
declare function getProvinceCode(value: string): string;
declare function getProvinceName(value: string): string;
declare function isSpecial(value: string): boolean;
declare function getSpecialName(value: string): string;
declare function getSpecialCode(value: string): string;
declare function isOld(value: string): boolean;
declare function isValid(value: string): boolean;

interface IPlate {
  isSpecial: boolean;
  isOld: boolean;
  specialCode: string;
  specialName: string;
  provinceCode: string;
  provinceName: string;
  number: number;
  counter: string;
}

declare function parse(value: string): IPlate;

declare const PROVINCES: object;
declare const SPECIALS: object;

export {
  IPlate,
  isValid,
  isOld,
  isSpecial,
  getCounter,
  getProvinceName,
  getProvinceCode,
  getSpecialName,
  getSpecialCode,
  getNumber,
  PROVINCES,
  SPECIALS,
  parse
};
