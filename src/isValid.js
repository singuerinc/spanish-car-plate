/**
 * Returns true if the string is a valid car plate
 * @param {string} value
 * @returns {boolean}
 * @since 0.0.1
 * @example
 * isValid("2345BCF"); // => true
 */
const isValid = (value) => {
  const num = !value ? "" : value;
  const cleaned = num.replace(/^[\s]*([0-9]{4})[\s]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i, "$1$2");

  if (cleaned.length !== 7) {
    return false;
  }

  return true;
};

export { isValid };
