const assert = require("assert");
const { getSpecialCode, SPECIALS } = require("../dist/index");

describe("#getSpecialCode", () => {
  describe("invalid", () => {
    describe("wrong input", () => {
      it("should return null with null", () => {
        assert.equal(getSpecialCode(null), null);
      });

      it("should return null with undefined", () => {
        assert.equal(getSpecialCode(undefined), null);
      });

      it("should return null with empty", () => {
        assert.equal(getSpecialCode(""), null);
      });
    });
  });

  describe("valid", () => {
    it("should get the special counter for Spanish Police", () => {
      assert.equal(getSpecialCode("DGP1234"), "DGP");
    });

    it("should get the special counter for Environment Ministry", () => {
      assert.equal(getSpecialCode("MMA1234"), "MMA");
    });
  });
});
