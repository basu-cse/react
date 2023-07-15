// import { additionTwoNumber } from "./third.js";
const additionTwoNumber = require('./third.js');
function additionThreeNumber(a,b,c) {
    
    
    const d = parseInt(a)+parseInt(b)+parseInt(c);
    console.log(`Answare will be ${d}`);
    return d;
    
}

function allAddition(a, b, c) {
    const two = additionTwoNumber(a, b);
    return additionThreeNumber(two, c);
}
module.exports = {
    additionThreeNumber,
    allAddition
};
 
//  export { additionThreeNumber };