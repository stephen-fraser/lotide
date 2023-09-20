const eqArrays = function(array1, array2) {

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

// Tests
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);
// eqArrays(["1", "2", "3"], ["1", "2", "3"]);
// eqArrays(["1", "2", "3"], ["1", "2", 3]);