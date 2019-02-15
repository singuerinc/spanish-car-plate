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
   * Returns true if the string is a valid car plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.1
   * @example
   * isValid("2345BCF"); // => true
   */
  var isValid = function isValid(value) {
    var num = !value ? "" : value;
    var cleaned = num.replace(/^[\s]*([0-9]{4})[\s]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i, "$1$2");

    if (cleaned.length !== 7) {
      return false;
    }

    return true;
  };

  exports.isValid = isValid;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
