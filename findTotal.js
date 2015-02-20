// Daniel Davis, findTotal, goes through the array and finds the total number of parts that we have in storage//

load('storage.js'); // loads up the storage file including all of the data in it
var inventory = JSON.parse(storage); // new variable inventory is holding the info of storage here

var total = 0; // holds the value for the number of parts in total are in inventory(0 is deafult)

print(JSON.stringify(inventory.reduce(function(quantity) { // looks for a partName that matches the one given by the user
  for(var i=0, i<=array.length, ++i) { // goes through inventory
    total = total + quantity; // and adds the number of parts to the running total
  }// end of for loop
}))); // end of print


