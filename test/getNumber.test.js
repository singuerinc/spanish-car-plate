const assert = require("assert");
const { getNumber } = require("../dist/index");

describe("#getNumber", () => {
  describe("invalid", () => {
    describe("wrong input", () => {
      it("should return null with null", () => {
        assert.equal(getNumber(null), null);
      });

      it("should return null with undefined", () => {
        assert.equal(getNumber(undefined), null);
      });

      it("should return null with empty", () => {
        assert.equal(getNumber(""), null);
      });
    });
  });

  describe("valid", () => {
    it("should get the counter from an old plate", () => {
      assert.equal(getNumber("A 1234 BL"), 1234);
    });

    it("should get the counter from an new plate", () => {
      assert.equal(getNumber("1234 BLG"), 1234);
    });
  });
});
