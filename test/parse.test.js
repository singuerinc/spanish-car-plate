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
    describe("old", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("GI 2345 BC"), {
          isSpecial: false,
          isOld: true,
          provinceCode: "GI",
          provinceName: "Province of Girona",
          number: 2345,
          counter: "BC"
        });
      });
    });

    describe("new", () => {
      it("parse", () => {
        assert.deepStrictEqual(parse("2345GBC"), {
          isSpecial: false,
          isOld: false,
          number: 2345,
          counter: "GBC"
        });
      });
    });
  });
});
