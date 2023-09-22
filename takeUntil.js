//
// functions to test output 
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

//
// takeUntil formula 
//
const takeUntil = (array, callback) => {

  let end = array.findIndex(callback);
  return array.slice(0, end)
}

//
// input data
//
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]