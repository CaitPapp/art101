//Author: Caitlin Papp
// May 25 2024
// art101-01
function fizzBuzz() {
    // Initialize an empty string to store the output
    let outputString = '';

    // Loop through numbers 1 to 200
    for (let num = 1; num <= 200; num++) {
        // Initialize an empty string for each number
        let str = '';

        // Check if the number is a multiple of 3
        if (num % 3 === 0) {
            str += 'Fizz';
        }

        // Check if the number is a multiple of 5
        if (num % 5 === 0) {
            str += 'Buzz';
        }

        // Check if the number is a multiple of 7
        if (num % 7 === 0) {
            str += 'Boom';
        }

        // If the number is not a multiple of 3, 5, or 7, append the number itself
        if (str === '') {
            str += num;
        }

        // Append the string with the appropriate message to the outputString
        outputString += str + '<br>';
    }

    // Output the compiled string to the output div
    document.getElementById('output').innerHTML = outputString;
}

// Call the fizzBuzz function to generate the output
fizzBuzz();
