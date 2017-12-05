'use strict';

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rainWarning = hazardWarningCreator('Too much rain fall');
const animalWarning = hazardWarningCreator('Animal crossing');

rocksWarning('Main St and Pacific Ave');
rainWarning('State St and Garding Rd');
animalWarning('Second St and Main St');
rocksWarning('Centinela Ave and Olympic Blvd');