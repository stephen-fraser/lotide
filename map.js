//
// ctrl v from assertArraysEqual (which depends up eqArrays)
//

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
      } 
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    return;
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];


//
// map function starts here
//

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


//
// testing map function
//
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const results2 = map(words, word => word.length)
console.log(results2)

assertArraysEqual(results2, [6, 7, 2, 5, 3])
