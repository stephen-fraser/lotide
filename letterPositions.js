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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === " ") {
      continue;
    } else if (!results[sentence[x]]) {
      results[sentence[x]] = []; 
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]].push(x);
    }
  }
  return results;
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);