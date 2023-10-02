const countLetters = require('../countLetters');
const expect = require('chai').expect;

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for the string lighthouse in the house", () => {
    expect(countLetters('lighthouse in the house')).to.deep.equal({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});