//
// ctrl v from assertArraysEqual
//
const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
    return;
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
