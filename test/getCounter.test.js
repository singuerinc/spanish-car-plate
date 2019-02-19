const assert = require("assert");
const { getCounter } = require("../dist/index");

describe("#getCounter", () => {
  describe("invalid", () => {
    describe("wrong input", () => {
      it("should return null with null", () => {
        assert.equal(getCounter(null), null);
      });

      it("should return null with undefined", () => {
        assert.equal(getCounter(undefined), null);
      });

      it("should return null with empty", () => {
        assert.equal(getCounter(""), null);
      });
    });
  });

  describe("valid", () => {
    it("should get the counter from an old plate", () => {
      assert.equal(getCounter("A 1234 BL"), "BL");
    });

    it("should get the counter from an new plate", () => {
      assert.equal(getCounter("1234 BLG"), "BLG");
    });
  });
});
