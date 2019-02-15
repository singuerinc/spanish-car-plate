const assert = require("assert");
const { isValid } = require("../dist/index");

describe("api", () => {
  it("should export isValid", () => {
    assert.ok(isValid);
  });
});
