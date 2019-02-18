const assert = require("assert");
const { isOld } = require("../dist/index");

describe("#isOld", () => {
  describe("invalid", () => {
    it("should not be valid without all chars required", () => {
      assert.equal(isOld("X"), false);
    });
  });

  describe("valid", () => {
    it("should be valid with one starting letter", () => {
      assert.equal(isOld("A 0849 CS"), true);
    });

    it("should be valid with two starting letters", () => {
      assert.equal(isOld("GI 1234 BL"), true);
    });

    it("should be valid with three starting letters", () => {
      // police car plates
      assert.equal(isOld("DGP 1234 BL"), true);
    });
  });
});
