const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};


module.exports = assertEqual;