// script.js
function sortingHat(str) {
    // Count the letters in the input string
    const length = str.length;
    // Calculate the remainder with 4
    const mod = length % 4;
    // Return the corresponding house based on the remainder
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else {
        return "Hufflepuff";
    }
}