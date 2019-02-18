const assert = require("assert");
const { isValid, isOld, getProvince } = require("../dist/index");

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
});
