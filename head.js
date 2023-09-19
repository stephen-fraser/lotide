
// Assert Equal Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};


// Head Function to get index 0 in an array
const head = function(someArray) {
  return someArray[0];
};

// Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Test"]), "Test");
assertEqual(head([]), "Fail");c