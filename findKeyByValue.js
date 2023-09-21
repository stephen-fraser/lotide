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

  for (let x in object) {
    if (object[x] === value) {
      return x;
    }
  }
  return undefined;
};

// const findKeyByValue = function(object, value) {

//   let keys = Object.keys(object);
//   let results = undefined;

//   for (let x of keys) {
  
//     if (object[x] === value) {
//       results = x;
//       break;
//     }
//   }
//   return results;
// };

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);