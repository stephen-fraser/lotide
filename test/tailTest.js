const tail = require("../tail.js");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
});
