const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("asserts equal if the objects are equal", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });
  it("asserts equal if two objects are the same even with arrays of values ", () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { colors: ["red", "blue"], size: "medium" }), true);
  });
});
