const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    console.log("---");
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.log("---");
  }
};


// const findKey = (object, callback) => {
//   for (const key in object) {     
//     if (callback(object[key])) {  
//       return key;                 
//     }
//   }
//   return undefined;               
// } 



const findKey = (obj, callback) => {

  for (const key in obj) {
    const value = obj[key];
    const result = callback(value);
    if (result) {
      return key;
    }
  }
};

//falsey: "". 0, null, undefined, Nan, false
// truthy: everything else 


const foundKey = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);



assertEqual(foundKey, "noma");