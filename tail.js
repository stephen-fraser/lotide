// Assert Equal Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😻 Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};


// Tail Function

const tail = function (someArray) {
  return someArray.slice(1);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));