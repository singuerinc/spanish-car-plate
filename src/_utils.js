export function _partsSpecial(str) {
  const cleaned = str.replace(
    /^[\s]*([CMEDGPNATFSHMORW]{1,5})[^A-Z0-9]*([0-9]{4})[\s]*$/i,
    "$1,$2"
  );

  return cleaned.split(",");
}

export function _partsOld(str) {
  const cleaned = str.replace(
    /^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i,
    "$1,$2,$3"
  );

  return cleaned.split(",");
}

export function _partsNew(str) {
  const cleaned = str.replace(
    /^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i,
    "$1,$2"
  );

  return cleaned.split(",");
}
