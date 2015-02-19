// Daniel Davis, searchType, filters out what type of part you are looking for(parts dealing with sound or make them search sound) //

load('storage.js') // loads up storage
var inventory = JSON.parse(storage); // variable to hold info of storage

function filter(array, test) { // filters through an array
  var passed = []; // holds the passed elements of the test
  for (var i = 0; i < array.length; i++) { // goes through the length of the array
    if (test(array[i])) { // if the element passes the test
      passed.push(array[i]); // put it in the new array
    }// end of if 
  }// end of for loop
  return passed; // return the array with the passes elements
}// end of function

var input = prompt("What type of part are you looking for?"); // gets the users type of part that they are looking for

print(JSON.stringify(filter(inventory, function(input) { // filters out for the types of parts person is looking for and prints em
  return type == input; // if types match the input then return em
}))); // end of print
