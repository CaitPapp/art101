// index.js - Lab 7 Functions
// Author: Caitlin Papp
// Date: April 28, 2024
// Art 101-01 Spring Quarter 2024
function sortUserName() {
    // Prompt the user to enter their name and store it in a variable
    var userName = prompt("Caitlin");
    
    // Convert the user's name to lowercase to ensure consistent sorting
    userName = userName.toLowerCase();
    
    // Convert the name string to an array of characters
    var nameArray = userName.split('');
    
    // Sort the array of characters
    nameArray.sort();
    
    // Join the sorted array of characters back into a string
    var sortedName = nameArray.join('');
    
    // Return the sorted name
    return sortedName;
}

// Example usage:
var sortedName = sortUserName();
console.log("Sorted name:", sortedName); 
