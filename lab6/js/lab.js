// index.js - Lab 6 arrays and objects
// Author: Caitlin Papp
// Date: April 28, 2024
// Art 101-01 Spring Quarter 2024
// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
myTransport = { "Subaru Forrester", "electric bike", "Winnebago Solis"};

myMainRide = {
  make:"Subaru",
  model: "Forrester",
  color: "black",
  year: 2020,
  age: function() {
    return 2020 - this.year;
  }
}

document.writeIn (My Transportations", myTransport, "</br>");
document.writeIn("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Declare an array myTransport
var myTransport = ["car", "bicycle", "bus", "train"];

// Declare an object myMainRide
var myMainRide = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "silver"
};

// Reference elements of myTransport
console.log("First form of transportation: " + myTransport[0]);
console.log("Second form of transportation: " + myTransport[1]);

// Reference elements of myMainRide
console.log("Make of my main ride: " + myMainRide.make);
console.log("Model of my main ride: " + myMainRide.model);

// Use console.log() to neatly print both myTransport and myMainRide
console.log("My forms of transportation: " + myTransport);
console.log("Details of my main ride: " + JSON.stringify(myMainRide));

