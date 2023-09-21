const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};

const findKeyByValue = function(object, value) {

  let objectKey = undefined;

  for (let x in object) {
    if (object[x] === value) {
      objectKey = x;
    }
  }
  return objectKey;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);