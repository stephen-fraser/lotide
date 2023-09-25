const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");


// Tests
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3];
let array3 = [1, 2];
let array4 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(array1), [3]);
assertArraysEqual(middle(array2), [2]);
assertArraysEqual(middle(array3), []);
assertArraysEqual(middle(array4), [3, 4]);