const assert = require("assert");
const { isValid, isOld, getProvince, PROVINCES } = require("../dist/index");

describe("api", () => {
  it("should export isValid", () => {
    assert.ok(isValid);
  });

  it("should export isOld", () => {
    assert.ok(isOld);
  });

  it("should export getProvince", () => {
    assert.ok(getProvince);
  });

  it("should export PROVINCES", () => {
    assert.ok(PROVINCES);
  });
});
