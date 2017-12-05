'use strict';

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turleSteps.filter(steps => steps[0] >= 0 && steps[1] >= 0);
/*function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i] >= 0)) {
      newArray = arr.map(i);
    }
  }
  console.log(newArray);
  return newArray;
} */

const value = filter(turtleSteps, function(steps)){
return steps;