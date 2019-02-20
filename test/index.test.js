const assert = require("assert");
const {
  isValid,
  parse,
  isOld,
  isSpecial,
  getCounter,
  getProvinceName,
  getProvinceCode,
  getSpecialCode,
  getSpecialName,
  PROVINCES
} = require("../dist/index");

describe("api", () => {
  it("should export isValid", () => {
    assert.ok(isValid);
  });

  it("should export parse", () => {
    assert.ok(parse);
  });

  it("should export isOld", () => {
    assert.ok(isOld);
  });

  it("should export isSpecial", () => {
    assert.ok(isSpecial);
  });

  it("should export getProvinceName", () => {
    assert.ok(getProvinceName);
  });

  it("should export getProvinceCode", () => {
    assert.ok(getProvinceCode);
  });

  it("should export getSpecialCode", () => {
    assert.ok(getSpecialCode);
  });

  it("should export getSpecialName", () => {
    assert.ok(getSpecialName);
  });

  it("should export getCounter", () => {
    assert.ok(getCounter);
  });

  it("should export PROVINCES", () => {
    assert.ok(PROVINCES);
  });
});
