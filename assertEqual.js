// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😻 Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,"1");
assertEqual("LHL RULES!", "LHL RULES!");