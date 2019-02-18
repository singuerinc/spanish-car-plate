/**
 * Returns true if the string is a valid car plate (only after year 2000)
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.1
 * @example
 * isValid("2345BCF"); // => true
 */
const isValid = (value) => {
  const num = !value ? "" : value;
  const cleaned = num.replace(
    /^[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[^A-Z0-9]*$/i,
    "$1$2"
  );

  if (cleaned.length !== 7) {
    return false;
  }

  return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
};

export { isValid };
