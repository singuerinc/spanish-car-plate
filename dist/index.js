//  Spanish Car Plate v0.0.3
//  https://github.com/singuerinc/spanish-car-plate
//  (c) 2019-2019 Nahuel Scotti
//  Spanish Car Plate may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.SpanishCarPlate = {})));
}(this, (function (exports) { 'use strict';

  /**
   * Returns true if is a valid (post year 2000) car plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.1
   * @example
   * isValid("2345BCF"); // => true
   */
  function isValid(value) {
    var num = !value ? "" : value;
    var cleaned = num.replace(/^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i, "$1$2");

    if (cleaned.length !== 7) {
      return false;
    }

    return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
  }

  /**
   * Returns true if is a valid (old system 1971-2000) car plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.2
   * @example
   * isOld("GI-1234-CS"); // => true
   */
  function isOld(value) {
    var num = !value ? "" : value;
    var cleaned = num.replace(/^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i, "$1$2$3");

    if (cleaned.length < 7 || cleaned.length > 9) {
      return false;
    }

    return /^[A-Z]{1,3}[0-9]{4}[A-Z]{2}$/i.test(cleaned);
  }

  var PROVINCES = {
    A: "Province of Alicante",
    AB: "Province of Albacete",
    AL: "Province of Almería",
    AV: "Province of Ávila",
    B: "Province of Barcelona",
    BA: "Province of Badajoz",
    BI: "Bilbao",
    BU: "Province of Burgos",
    C: "Province of A Coruña",
    CA: "Province of Cádiz",
    CC: "Province of Cáceres",
    CE: "Ceuta",
    CO: "Province of Córdoba",
    CR: "Province of Ciudad Real",
    CS: "Castelló",
    CU: "Province of Cuenca",
    FP: "Bioko",
    GC: "Province of Las Palmas",
    GE: "Gerona (Girona)",
    GI: "Province of Girona",
    GR: "Province of Granada",
    GU: "Province of Guadalajara",
    H: "Province of Huelva",
    HU: "Province of Huesca",
    IF: "Ifni",
    J: "Province of Jaén",
    L: "Province of Lleida",
    LE: "Province of León",
    LO: "Logroño",
    LR: "La Rioja",
    LU: "Province of Lugo",
    M: "Community of Madrid",
    MA: "Province of Málaga",
    ML: "Melilla",
    MU: "Region of Murcia",
    NA: "Navarre",
    O: "Oviedo",
    OU: "Province of Ourense",
    P: "Province of Palencia",
    PM: "Palma, Majorca",
    PO: "Province of Pontevedra",
    RM: "Rio Muni",
    S: "Santander",
    SA: "Province of Salamanca",
    SE: "Province of Seville",
    SG: "Province of Segovia",
    SO: "Province of Soria",
    SS: "Donostia",
    T: "Province of Tarragona",
    TE: "Province of Teruel",
    TF: "Province of Santa Cruz de Tenerife",
    TO: "Province of Toledo",
    V: "Province of Valencia",
    VA: "Province of Valladolid",
    VI: "Vitoria",
    Z: "Province of Zaragoza",
    ZA: "Province of Zamora"
  };

  /**
   * Returns the province for a valid car plate in the old system (1971-2000)
   * @param {string} value
   * @returns {string}
   * @since 0.0.3
   * @example
   * getProvince("GI-1234-CS"); // => "Province of Girona"
   */

  function getProvince(value) {
    if (!isOld(value)) {
      return null;
    }

    var num = !value ? "" : value;
    var code = num.replace(/^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i, "$1");
    return PROVINCES[code] || null;
  }

  exports.isValid = isValid;
  exports.isOld = isOld;
  exports.getProvince = getProvince;
  exports.PROVINCES = PROVINCES;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
