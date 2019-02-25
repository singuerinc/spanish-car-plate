const assert = require("assert");
const { isSpecial } = require("../dist/index");

describe("#isSpecial", () => {
  describe("invalid", () => {
    it("should not be valid without all chars required", () => {
      assert.equal(isSpecial("X"), false);
    });

    it("should not be valid with null", () => {
      assert.equal(isSpecial(null), false);
    });

    it("should not be valid with undefined", () => {
      assert.equal(isSpecial(undefined), false);
    });

    it("should not be valid with empty string", () => {
      assert.equal(isSpecial(""), false);
    });
  });

  describe("valid", () => {
    it("should be valid with Crown", () => {
      assert.equal(isSpecial("Crown 0000"), true);
    });

    it("should be valid with crown", () => {
      assert.equal(isSpecial("crown0001"), true);
    });

    it("should be valid with crown", () => {
      assert.equal(isSpecial("crown-0001"), true);
    });

    it("should be valid with CME", () => {
      assert.equal(isSpecial("CME 0001"), true);
    });

    it("should be valid with DGP", () => {
      assert.equal(isSpecial("DGP 0001"), true);
    });

    it("should be valid with CNP", () => {
      assert.equal(isSpecial("CNP 0001"), true);
    });

    it("should be valid with E", () => {
      assert.equal(isSpecial("E 0001"), true);
    });

    it("should be valid with EA", () => {
      assert.equal(isSpecial("EA 0001"), true);
    });

    it("should be valid with ET", () => {
      assert.equal(isSpecial("ET 0001"), true);
    });

    it("should be valid with FAE", () => {
      assert.equal(isSpecial("FAE 0001"), true);
    });

    it("should be valid with FN", () => {
      assert.equal(isSpecial("FN 0001"), true);
    });

    it("should be valid with GSH", () => {
      assert.equal(isSpecial("GSH 0001"), true);
    });

    it("should be valid with PGC", () => {
      assert.equal(isSpecial("PGC 0001"), true);
    });

    it("should be valid with MF", () => {
      assert.equal(isSpecial("MF 0001"), true);
    });

    it("should be valid with MMA", () => {
      assert.equal(isSpecial("MMA 0001"), true);
    });

    it("should be valid with MOP", () => {
      assert.equal(isSpecial("MOP 0001"), true);
    });

    it("should be valid with PME", () => {
      assert.equal(isSpecial("PME 0001"), true);
    });

    it("should be valid with PMM", () => {
      assert.equal(isSpecial("PMM 0001"), true);
    });
  });
});
