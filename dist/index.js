//  Spanish Car Plate v0.0.1
//  https://github.com/singuerinc/spanish-car-plate
//  (c) 2017-2019 Nahuel Scotti
//  Spanish Car Plate may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.SpanishCarPlate = {})));
}(this, (function (exports) { 'use strict';

  /**
   * Returns true if the string is a valid car plate (only after year 2000)
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.1
   * @example
   * isValid("2345BCF"); // => true
   */
  var isValid = function isValid(value) {
    var num = !value ? "" : value;
    var cleaned = num.replace(/^[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[^A-Z0-9]*$/i, "$1$2");

    if (cleaned.length !== 7) {
      return false;
    }

    return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
  };

  /**
   * Returns true if the string is a valid car plate old old system (1971-2000)
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.2
   * @example
   * isValid("GI-1234-CS"); // => true
   */
  var isOld = function isOld(value) {
    var num = !value ? "" : value;
    var cleaned = num.replace(/^[^A-Z0-9]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})$/i, "$1$2$3");

    if (cleaned.length < 7 || cleaned.length > 9) {
      return false;
    }

    return /^[A-Z]{1,3}[0-9]{4}[A-Z]{2}$/i.test(cleaned);
  };

  exports.isValid = isValid;
  exports.isOld = isOld;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
