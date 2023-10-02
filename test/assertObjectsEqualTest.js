const assertObjectsEqual = require('../assertObjectsEqual')

describe("#asserObjectsEqual", () => {
  it("asserts equal if two objects are the same ", () => {
    assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" } );
  });
  it("asserts equal if two objects are the same even with arrays of values ", () => {
    assertObjectsEqual({ colors: ["red", "blue"], size: "medium" }, { colors: ["red", "blue"], size: "medium" });
  });
});
