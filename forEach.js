'use strict';

let turtleSteps = [
    [0, 0],
    [0, 5],
    [-1, -3],
    [-3, 1],
    [2, -4],
    [3, 2]
];

//removes backward or right turtle steps from the array
function filterTurtleSteps(arr) {
    return arr.filter(steps => steps[0] >= 0 && steps[1] >= 0);
}

//adds up turtle steps and returns array of turtle steps
function howManyTurtleSteps(arr) {
    let stepArray = [];
    let i = 0;

    arr.map(steps => {
        stepArray[i] = steps[0] + steps[1];
        i++;
    });

    return stepArray;
}

//prints out the array of turtle steps
function printTurtleSteps(arr) {
    arr.forEach(steps => {
        console.log(`${steps} is the number of turtle steps taken`);
    });
}


turtleSteps = filterTurtleSteps(turtleSteps);
console.log(`Filtered array of Turtle Steps:  ${turtleSteps}`);
turtleSteps = howManyTurtleSteps(turtleSteps);
console.log(`How many turtle steps in the array: ${turtleSteps}`);
printTurtleSteps(turtleSteps);