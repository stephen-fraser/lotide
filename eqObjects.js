const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let x of keys1) {
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) {
        if (!eqArrays(object1[x], object2[x])) {
          return false; 
        }
      } 
      else if (object1[x] !== object2[x]) {
        return false;
      }
    }
  } return true;
};   




module.exports = eqObjects;