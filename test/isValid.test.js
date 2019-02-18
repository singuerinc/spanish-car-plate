const assert = require("assert");
const { isValid } = require("../dist/index");

describe("#isValid", () => {
  describe("invalid", () => {
    it("should not be valid with null", () => {
      assert.equal(isValid(null), false);
    });

    it("should not be valid with undefined", () => {
      assert.equal(isValid(undefined), false);
    });

    it("should not be valid with empty string", () => {
      assert.equal(isValid(""), false);
    });

    it("should not be valid with more than max chars", () => {
      assert.equal(isValid("1234ABCDEFG"), false);
    });

    it("should not be valid with empty", () => {
      assert.equal(isValid(""), false);
    });

    it("should not be valid with incomplete 1", () => {
      assert.equal(isValid("1234"), false);
    });

    it("should not be valid with incomplete 2", () => {
      assert.equal(isValid("BCD"), false);
    });

    it("should not be valid with null", () => {
      assert.equal(isValid(null), false);
    });

    it("should not be valid with undefined", () => {
      assert.equal(isValid(undefined), false);
    });

    it("should not be valid with 7 chars not valid", () => {
      assert.equal(isValid("ABCDEFG"), false);
    });

    it("should not be valid with 7 chars not valid", () => {
      assert.equal(isValid("1234ABC"), false);
    });
  });

  describe("valid", () => {
    it("should be valid 1234BCD", () => {
      assert.equal(isValid("1234BCD"), true);
    });

    it("should be valid with if starts with spaces", () => {
      assert.equal(isValid(" 1234BCD"), true);
    });

    it("should be valid with if ends with spaces", () => {
      assert.equal(isValid("1234BCD "), true);
    });

    it("should be valid with if contains spaces", () => {
      assert.equal(isValid("1234 BCD"), true);
    });

    it("should be valid with if contains extra spaces", () => {
      assert.equal(isValid("    1234  BCD           "), true);
    });

    it("should be valid with if contains dashes 1", () => {
      assert.equal(isValid("1234-BCD"), true);
    });

    it("should be valid with if contains dashes 2", () => {
      assert.equal(isValid("    1234--BCD           "), true);
    });
  });
});
