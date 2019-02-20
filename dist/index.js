//  Spanish Car Plate v0.0.7
//  https://github.com/singuerinc/spanish-car-plate
//  (c) 2019-2019 Nahuel Scotti
//  Spanish Car Plate may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.SpanishCarPlate = {})));
}(this, (function (exports) { 'use strict';

  function _partsSpecial(str) {
    var cleaned = str.replace(/^[\s]*([CMEDGPNATFSHMORW]{1,5})[^A-Z0-9]*([0-9]{4})[\s]*$/i, "$1,$2");
    return cleaned.split(",");
  }
  function _partsOld(str) {
    var cleaned = str.replace(/^[\s]*([A-Z]{1,3})[^A-Z0-9]*([0-9]{4})[^A-Z0-9]*([A-Z]{2})[\s]*$/i, "$1,$2,$3");
    return cleaned.split(",");
  }
  function _partsNew(str) {
    var cleaned = str.replace(/^[\s]*([0-9]{4})[^A-Z0-9]*([BCDFGHJKLMNPRSTVWXYZ]{3})[\s]*$/i, "$1,$2");
    return cleaned.split(",");
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
    var str = !value ? "" : value;

    var cleaned = _partsOld(str).join("");

    if (cleaned.length < 7 || cleaned.length > 9) {
      return false;
    }

    return /^[A-Z]{1,3}[0-9]{4}[A-Z]{2}$/i.test(cleaned);
  }

  /**
   * Returns true if is a valid (post year 2000) car plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.1
   * @example
   * isValid("2345BCF"); // => true
   */

  function isValid(value) {
    if (isOld(value)) {
      return true;
    }

    var str = !value ? "" : value;

    var cleaned = _partsNew(str).join("");

    if (cleaned.length !== 7) {
      return false;
    }

    return /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/i.test(cleaned);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var SPECIALS = {
    CME: "Corps of the Mossos d'Esquadra",
    DGP: "Spanish Police",
    CNP: "Spanish Police",
    E: "Autonomous police force of the Basque Country",
    EA: "Air Force",
    ET: "Spanish Army",
    FAE: "Allied Forces in Spain",
    FN: "Spanish Navy",
    GSH: "Colonial police on Sahara",
    PGC: "Spanish civil guard",
    MF: "Public Works Ministry",
    MMA: "Environment Ministry",
    MOP: "Public Works Ministry",
    PME: "State owned vehicles",
    PMM: "State owned vehicles, on a Ministry",
    Crown: "King's Car"
  };

  /**
   * Returns true if is a valid spacial car plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.7
   * @example
   * isSpecial("CME 2342"); // => true
   * isSpecial("E 1660"); // => true
   */

  function isSpecial(value) {
    var str = !value ? "" : value;

    var _partsSpecial2 = _partsSpecial(str),
        _partsSpecial3 = _slicedToArray(_partsSpecial2, 2),
        code = _partsSpecial3[0],
        num = _partsSpecial3[1];

    var cleaned = "".concat(code).concat(num);

    if (cleaned.length < 5 || cleaned.length > 9) {
      return false;
    }

    if (!SPECIALS[code]) {
      return false;
    }

    return /^[CMEDGPNATFSHMORW]{1,5}[0-9]{4}$/i.test(cleaned);
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   * @since 0.0.5
   * @example
   * getCounter("GI-1234-CS"); // => "CS"
   * getCounter("2345BCF"); // => "CS"
   */

  function getCounter(value) {
    var str = !value ? "" : value;

    if (isOld(str) === true) {
      var _partsOld2 = _partsOld(str),
          _partsOld3 = _slicedToArray(_partsOld2, 3),
          counter = _partsOld3[2];

      return counter;
    } else if (isValid(str)) {
      var _partsNew2 = _partsNew(str),
          _partsNew3 = _slicedToArray(_partsNew2, 2),
          _counter = _partsNew3[1];

      return _counter;
    }

    return null;
  }

  /**
   *
   * @param {string} value
   * @returns {number}
   * @since 0.0.5
   * @example
   * getNumber("2345BCF"); // => 2345
   * getNumber("GI-1234-CS"); // => 1234
   */

  function getNumber(value) {
    var str = !value ? "" : value;

    if (isOld(str) === true) {
      var _partsOld2 = _partsOld(str),
          _partsOld3 = _slicedToArray(_partsOld2, 2),
          num = _partsOld3[1];

      return parseInt(num, 10);
    } else if (isSpecial(str) === true) {
      var _partsSpecial2 = _partsSpecial(str),
          _partsSpecial3 = _slicedToArray(_partsSpecial2, 2),
          _num = _partsSpecial3[1];

      return parseInt(_num, 10);
    } else if (isValid(str)) {
      var _partsNew2 = _partsNew(str),
          _partsNew3 = _slicedToArray(_partsNew2, 1),
          _num2 = _partsNew3[0];

      return parseInt(_num2, 10);
    }

    return null;
  }

  /**
   * Returns the special code for a valid car plate
   * @param {string} value
   * @returns {string}
   * @since 0.0.7
   * @example
   * getSpecialCode("DGP-1234"); // => "DGP"
   */

  function getSpecialCode(value) {
    var str = !value ? "" : value;

    if (!isSpecial(str)) {
      return null;
    }

    var _partsSpecial2 = _partsSpecial(str),
        _partsSpecial3 = _slicedToArray(_partsSpecial2, 1),
        code = _partsSpecial3[0];

    return SPECIALS[code] ? code : null;
  }

  /**
   * Returns the special name for a valid car plate
   * @param {string} value
   * @returns {string}
   * @since 0.0.7
   * @example
   * getSpecialCode("CME1234"); // => "Corps of the Mossos d'Esquadra"
   */

  function getSpecialName(value) {
    var str = !value ? "" : value;
    var code = getSpecialCode(str);
    return SPECIALS[code] || null;
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
   * Returns the province code for a valid car plate in the old system (1971-2000)
   * @param {string} value
   * @returns {string}
   * @since 0.0.5
   * @example
   * getProvinceCode("GI-1234-CS"); // => "GI"
   */

  function getProvinceCode(value) {
    var str = !value ? "" : value;

    if (!isOld(str)) {
      return null;
    }

    var _partsOld2 = _partsOld(str),
        _partsOld3 = _slicedToArray(_partsOld2, 1),
        code = _partsOld3[0];

    return PROVINCES[code] ? code : null;
  }

  /**
   * Returns the province name for a valid car plate in the old system (1971-2000)
   * @param {string} value
   * @returns {string}
   * @since 0.0.5
   * @example
   * getProvinceName("GI-1234-CS"); // => "Province of Girona"
   */

  function getProvinceName(value) {
    var str = !value ? "" : value;
    var code = getProvinceCode(str);
    return PROVINCES[code] || null;
  }

  function _parseNew(str) {
    var parsed = {};
    parsed.isOld = false;
    parsed.provinceName = null;
    parsed.provinceCode = null;
    parsed.specialCode = null;
    parsed.counter = getCounter(str);
    parsed.number = getNumber(str);
    return parsed;
  }

  function _parseOld(str) {
    var parsed = {};
    parsed.isOld = true;
    parsed.provinceName = getProvinceName(str);
    parsed.provinceCode = getProvinceCode(str);
    parsed.specialCode = null;
    parsed.counter = getCounter(str);
    parsed.number = getNumber(str);
    return parsed;
  }

  function _parseSpecial(str) {
    var parsed = {};
    parsed.isOld = false;
    parsed.provinceName = null;
    parsed.provinceCode = null;
    parsed.specialCode = getSpecialCode(str);
    parsed.counter = null;
    parsed.number = getNumber(str);
    parsed.isSpecial = true;
    return parsed;
  }
  /**
   * Returns an object containing information about the plate
   * @param {string} value
   * @returns {boolean}
   * @since 0.0.5
   * @example
   * parse("2345BCF"); // => { isSpecial: false, isOld: false, provinceCode: null, provinceName: null, number: 2345, counter: "BCF" }
   * parse("GI2345BC"); // => { isSpecial: false, isOld: true, provinceCode: "GI", provinceName: "Province of Girona", number: 2345, counter: "BC" }
   */


  function parse(value) {
    var str = !value ? "" : value;
    var parsed = {
      isSpecial: false // TODO: not implemented

    };

    if (isOld(str) === true) {
      return _objectSpread({}, parsed, _parseOld(str));
    } else if (isSpecial(str) === true) {
      return _objectSpread({}, parsed, _parseSpecial(str));
    } else if (isValid(str) === true) {
      return _objectSpread({}, parsed, _parseNew(str));
    }

    return null;
  }

  exports.isValid = isValid;
  exports.isOld = isOld;
  exports.isSpecial = isSpecial;
  exports.getCounter = getCounter;
  exports.getNumber = getNumber;
  exports.getSpecialCode = getSpecialCode;
  exports.getSpecialName = getSpecialName;
  exports.getProvinceName = getProvinceName;
  exports.getProvinceCode = getProvinceCode;
  exports.parse = parse;
  exports.PROVINCES = PROVINCES;
  exports.SPECIALS = SPECIALS;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
