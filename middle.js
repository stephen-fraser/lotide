

const middle = function(someArray) {

  let middleArray = [];

  if (someArray.length < 3) {
    return middleArray;
  } else {
    if (someArray.length % 2 !== 0) {
      middleArray.push(someArray[Math.floor((someArray.length) / 2)]);
    } else {
      middleArray.push(someArray[Math.floor((someArray.length) / 2) - 1]);
      middleArray.push(someArray[Math.floor((someArray.length) / 2)]);
    }
  }
  return middleArray;
};

module.exports = middle;

