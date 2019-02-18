/**
 * Returns the province for a valid car plate in the old system (1971-2000)
 */
declare function getProvince(value: string): string;
/**
 * Returns true if is a valid (old system 1971-2000) car plate
 */
declare function isOld(value: string): boolean;
/**
 * Returns true if is a valid (post year 2000) car plate
 */
declare function isValid(value: string): boolean;

export { isValid, isOld, getProvince };
