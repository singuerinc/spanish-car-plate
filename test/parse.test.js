const assert = require("assert");
const { parse } = require("../dist/index");

describe("#parse", () => {
  describe("invalid", () => {
    it("should not be valid without all chars required", () => {
      assert.equal(parse("X"), null);
    });

    it("should not be valid with null", () => {
      assert.equal(parse(null), null);
    });

    it("should not be valid with undefined", () => {
      assert.equal(parse(undefined), null);
    });

    it("should not be valid with empty string", () => {
      assert.equal(parse(""), null);
    });
  });

  describe("valid", () => {
    describe("special with zero", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("Crown 0001"), {
          isSpecial: true,
          isOld: false,
          specialCode: "CROWN",
          specialName: "King's Car",
          provinceCode: null,
          provinceName: null,
          number: "0001",
          counter: null
        });
      });
    });

    describe("special", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("DGP 1234"), {
          isSpecial: true,
          isOld: false,
          specialCode: "DGP",
          specialName: "Spanish Police",
          provinceCode: null,
          provinceName: null,
          number: "1234",
          counter: null
        });
      });
    });

    describe("old", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("GI 2345 BC"), {
          isSpecial: false,
          isOld: true,
          specialCode: null,
          specialName: null,
          provinceCode: "GI",
          provinceName: "Province of Girona",
          number: "2345",
          counter: "BC"
        });
      });
    });

    describe("old with zero", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("GI 0123 BC"), {
          isSpecial: false,
          isOld: true,
          specialCode: null,
          specialName: null,
          provinceCode: "GI",
          provinceName: "Province of Girona",
          number: "0123",
          counter: "BC"
        });
      });
    });

    describe("new", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("2345GBC"), {
          isSpecial: false,
          isOld: false,
          specialCode: null,
          specialName: null,
          provinceCode: null,
          provinceName: null,
          number: "2345",
          counter: "GBC"
        });
      });
    });

    describe("new with zero", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("0345GBC"), {
          isSpecial: false,
          isOld: false,
          specialCode: null,
          specialName: null,
          provinceCode: null,
          provinceName: null,
          number: "0345",
          counter: "GBC"
        });
      });
    });
  });
});
