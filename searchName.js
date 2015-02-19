// Daniel Davis, searchName, searches through storage for a part by its name(reduce basically)//

load('storage.js'); // loads up the storage file including all of the data in it
var inventory = JSON.parse(storage); // new variable inventory is holding the info of storage here

var name = prompt("What part are you looking for by name?"); // prompts the user to give me a name to search

print(JSON.stringify(inventory.reduce(function(name) { // looks for a partName that matches the one given by the user
  if(name == partName) { // if the name matches
    return name; // return that name
  } // end of if statement
  else { // otherwise
    alert('No part name that matches the name you have given. Please try again.') // oops no name
  }// end of else
}))); // end of print


