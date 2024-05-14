/* 
* Author: Caitlin Papp
* Created: May 2, 2024
* License: Public Domain
*/


const numbers = [29, 54, 645, 28, 340];
// Named function to perform calculation
function performCalculation(number, operation) {
    let result;
    switch(operation) {
        case 'sqrt':
            result = Math.sqrt(number);
            break;
        case 'sqr':
            result = Math.pow(number, 2);
            break;
        case 'addition':
            result = numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        // Add more cases for other operations as needed
        default:
            result = 'Invalid operation';
    }
    return result;
}

// Use map with the named function as a callback to operate on all the numbers in the array
const mappedResults1 = numbers.map(number => performCalculation(number, 'sqrt'));

// Use map with an anonymous function as a callback to do some new operation on each of the numbers in the array
const mappedResults2 = numbers.map(number => number * 3); // Multiply each number by 3 using an anonymous function

// Set variables to the results of the map functions
const results1 = mappedResults1;
const results2 = mappedResults2;

// Print out the results
console.log("Mapped results using named function:", results1); // Output: [1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903, 3.1622776601683795]
console.log("Mapped results using anonymous function:", results2); // Output: [6, 12, 18, 24, 30]
