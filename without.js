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



const without = function(array1, array2) {
  let finalArray = [];
  
  for (const array of array1) {
    // this line checks if the current element (arr) from arr1 is not present in the arr2 array. It does this by using the includes method, which returns true if the element is found in the array and false if it's not. The ! in front of it negates the result, so the condition becomes true if the element is NOT found in arr2
    if (!array2.includes(array)) {
      finalArray.push(array);
    }
  }
  return finalArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(["1", "2", "3"], [1, 2, "3"]));