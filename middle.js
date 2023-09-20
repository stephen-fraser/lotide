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

const middle = function(someArray) {

  let middleArray = [];

  if (someArray.length < 3) {
    return middleArray;
  } else {
    if (someArray.length % 2 !== 0) {
      middleArray.push(someArray[Math.floor((someArray.length) / 2)]);
    } else {
      middleArray.push(someArray[Math.floor((someArray.length) / 2)]);
      middleArray.push(someArray[Math.floor((someArray.length) / 2) + 1]);
    }
  }
  return middleArray;
};

// Tests
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4];
// let array3 = [1, 2];
// let array4 = [1, 2, 3, 4, 5, 6];
// console.log(middle(array1));
// console.log(middle(array2));
// console.log(middle(array3));
// console.log(middle(array4));