/**
 * Returns true if is a valid (post year 2000) car plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.1
 * @example
 * isValid("2345BCF"); // => true
 */
function isValid(value) {
  const str = !value ? "" : value;
  const cleaned = str.replace(
    /^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i,
    "$1$2"
  );

  if (cleaned.length !== 7) {
    return false;
  }

  return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
}

export { isValid };
